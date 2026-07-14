"use client";

import { useMemo, useState } from "react";
import ArticleCard from "../components/blog/ArticleCard";
import { blogCategories } from "../lib/blog-categories";
import type { BlogPostMeta } from "../lib/blog-types";

type Props = {
  posts: BlogPostMeta[];
  featured: BlogPostMeta | null;
};

export default function BlogIndexClient({ posts, featured }: Props) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (featured && post.slug === featured.slug && category === "All" && !q) {
        return false;
      }
      const categoryMatch = category === "All" || post.category === category;
      const queryMatch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return categoryMatch && queryMatch;
    });
  }, [posts, featured, category, query]);

  const showFeatured = Boolean(featured && category === "All" && !query.trim());

  return (
    <div>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {["All", ...blogCategories].map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`h-9 px-4 rounded-full text-[13px] font-semibold transition-colors duration-200 ${
                  active
                    ? "bg-white text-[#0B1220]"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
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
            className="w-full h-11 rounded-[10px] border border-white/10 bg-white/5 px-4 text-white placeholder:text-gray-500 focus:border-[#4E6EFF] focus:ring-1 focus:ring-[#4E6EFF] outline-none transition-colors"
          />
        </label>
      </div>

      {showFeatured && featured && (
        <div className="mb-10">
          <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-4">
            Featured
          </p>
          <ArticleCard post={featured} featured />
        </div>
      )}

      <div>
        <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-4">
          {category === "All" && !query.trim() ? "Recent articles" : "Articles"}
        </p>
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-[16px]">No articles match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
