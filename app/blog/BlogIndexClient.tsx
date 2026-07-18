"use client";

import { useMemo, useState } from "react";
import ArticleCard from "../components/blog/ArticleCard";
import Reveal from "../components/Reveal";
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
      <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex max-w-full gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {["All", ...blogCategories].map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={[
                  "h-10 shrink-0 rounded-full px-4 text-[13px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                  active
                    ? "bg-accent text-[#1f2a2e]"
                    : "border border-black/10 bg-white text-[#1f2a2e]/70 hover:border-[#1f2a2e]/30 hover:text-[#1f2a2e] dark:border-white/15 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>

        <label className="relative block w-full max-w-sm shrink-0">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="h-11 w-full rounded-full border border-black/10 bg-white px-5 text-[#1f2a2e] placeholder:text-[#1f2a2e]/40 outline-none transition-colors focus:border-accent dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="text-base text-[#1f2a2e]/60 dark:text-white/60">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-7">
          {filtered.map((post, index) => (
            <Reveal
              key={post.slug}
              className={index === 0 ? "sm:col-span-2 xl:col-span-2" : ""}
              delayMs={40 + index * 60}
            >
              <ArticleCard post={post} featured={index === 0} index={index} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
