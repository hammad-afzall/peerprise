import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BlogIndexClient from "./BlogIndexClient";
import { getAllPosts, getFeaturedPost } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on websites, software and digital operations from the Peerprise team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Peerprise Blog",
    description:
      "Guides and lessons from building, maintaining and improving the digital systems businesses rely on.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        headline="Practical insights on websites, software and digital operations."
        subtext="Guides and lessons from building, maintaining and improving the digital systems businesses rely on."
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <BlogIndexClient posts={posts} featured={featured} />
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
        <div className="site-container max-w-[720px]">
          <div className="glass-card rounded-[16px] p-6 sm:p-8 text-center">
            <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-3">
              Newsletter
            </p>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-3">
              New articles in your inbox
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              Email updates will be available once a mailing service is connected. This is a
              placeholder for now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                disabled
                placeholder="you@company.com"
                aria-label="Email address (coming soon)"
                className="flex-1 h-12 rounded-full border border-white/10 bg-white/5 px-5 text-gray-500 cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="h-12 px-6 rounded-full bg-white/10 border border-white/15 text-gray-400 font-semibold cursor-not-allowed"
              >
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
