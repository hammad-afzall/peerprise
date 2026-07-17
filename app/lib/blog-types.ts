import type { BlogCategory } from "./blog-categories";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: BlogCategory;
  /** Present only when frontmatter provides a reliable value — never invent. */
  readingTime?: string;
  featuredImage?: string;
  featured?: boolean;
};

export type BlogHeading = {
  id: string;
  text: string;
  level: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  html: string;
  headings: BlogHeading[];
  keyTakeaways: string[];
};

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
