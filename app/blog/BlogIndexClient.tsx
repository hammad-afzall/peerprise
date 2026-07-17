"use client";

import { useMemo, useState } from "react";
import ArticleCard from "../components/blog/ArticleCard";
import { blogCategories } from "../lib/blog-categories";
import type { BlogPostMeta } from "../lib/blog-types";
import { insightsPage } from "../lib/insights";

type Props = {
  posts: BlogPostMeta[];
  featured: BlogPostMeta | null;
};

export default function BlogIndexClient({ posts, featured }: Props) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const ordered = useMemo(() => {
    if (!featured) return posts;
    const rest = posts.filter((post) => post.slug !== featured.slug);
    return posts.some((post) => post.slug === featured.slug) ? [featured, ...rest] : posts;
  }, [posts, featured]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ordered.filter((post) => {
      const categoryMatch = category === "All" || post.category === category;
      const queryMatch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return categoryMatch && queryMatch;
    });
  }, [ordered, category, query]);

  const emptyMessage =
    category !== "All" && !query.trim() ? insightsPage.emptyCategory : insightsPage.emptyFilters;

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4">
        <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
          {["All", ...blogCategories].map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={[
                  "h-10 min-h-10 px-4 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                  active
                    ? "bg-[#1f2a2e] text-white"
                    : "border border-black/10 bg-white text-[#1f2a2e]/70 hover:border-black/30",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>
        <label className="relative block max-w-md">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="h-11 w-full border border-black/10 bg-white px-4 text-[#1f2a2e] placeholder:text-[#1f2a2e]/40 outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="text-base text-[#1f2a2e]/60">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 md:gap-7">
          {filtered.map((post, index) => (
            <ArticleCard key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>
      )}
    </div>
  );
}
