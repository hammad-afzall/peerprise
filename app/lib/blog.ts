import "server-only";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { author } from "./author";
import type { BlogCategory } from "./blog-categories";
import type { BlogHeading, BlogPost, BlogPostMeta } from "./blog-types";
import {
  processEditorialDirectives,
  stripEditorialDirectives,
} from "./blog-directives";

export type { BlogHeading, BlogPost, BlogPostMeta } from "./blog-types";
export { formatBlogDate } from "./blog-types";

const postsDirectory = path.join(process.cwd(), "content/blog");

type FrontmatterValue = string | boolean;

function parseFrontmatter(raw: string): {
  data: Record<string, FrontmatterValue>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const data: Record<string, FrontmatterValue> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colon = trimmed.indexOf(":");
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value === "true" || value === "false") {
      data[key] = value === "true";
    } else {
      data[key] = value;
    }
  }

  return { data, content: match[2].trim() };
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(markdown: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const seen = new Map<string, number>();
  const cleaned = stripEditorialDirectives(markdown);

  for (const line of cleaned.split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length;
    const text = match[2].replace(/#+\s*$/, "").trim();
    let id = slugifyHeading(text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;
    headings.push({ id, text, level });
  }

  return headings;
}

function renderMarkdown(markdown: string, headings: BlogHeading[]): string {
  let headingIndex = 0;

  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }) => {
    const plain = text.replace(/<[^>]+>/g, "");
    const heading = headings[headingIndex];
    headingIndex += 1;
    const id = heading?.id ?? slugifyHeading(plain);
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };

  marked.setOptions({ gfm: true, breaks: false });
  return marked.parse(markdown, { renderer }) as string;
}

function toMeta(data: Record<string, FrontmatterValue>, slug: string): BlogPostMeta {
  const rawCategory = String(data.category ?? "");
  const readingRaw = data.readingTime ?? data.reading_time;
  const readingTime = readingRaw ? String(readingRaw) : undefined;

  return {
    slug: String(data.slug ?? slug),
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    publishedAt: String(data.publishedAt ?? data.published_date ?? ""),
    updatedAt: data.updatedAt || data.updated_date
      ? String(data.updatedAt ?? data.updated_date)
      : undefined,
    author: String(data.author ?? author.name),
    // Preserve frontmatter as written; index filters only expose approved categories.
    category: rawCategory as BlogCategory,
    readingTime,
    featuredImage: data.featuredImage || data.featured_image
      ? String(data.featuredImage ?? data.featured_image)
      : undefined,
    featured: Boolean(data.featured),
  };
}

function readPostFile(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
  const { data, content } = parseFrontmatter(raw);
  const { markdown, keyTakeaways } = processEditorialDirectives(content);
  const headings = extractHeadings(content);
  const html = renderMarkdown(markdown, headings);
  return {
    ...toMeta(data, slug),
    content,
    html,
    headings,
    keyTakeaways,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const post = readPostFile(file);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        author: post.author,
        category: post.category,
        readingTime: post.readingTime,
        featuredImage: post.featuredImage,
        featured: post.featured,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.md`;
  const fullPath = path.join(postsDirectory, filename);
  if (!fs.existsSync(fullPath)) return null;
  return readPostFile(filename);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getAdjacentPosts(slug: string): {
  previous: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === category ? 0 : 1;
      const bMatch = b.category === category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}

/** Only returns a post marked featured in frontmatter — no popularity fallback. */
export function getFeaturedPost(): BlogPostMeta | null {
  return getAllPosts().find((post) => post.featured) ?? null;
}
