import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ArrowButton from "./ArrowButton";
import ArticleCard from "./blog/ArticleCard";
import { getAllPosts } from "../lib/blog";
import { homepageInsights } from "../lib/homepage";

/**
 * Recent insights — Studiova section 09 news grid with Peerprise blog posts.
 */
export default function HomepageInsights() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="insights-heading"
      className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
    >
      <div className="site-container">
        <div className="mb-12 grid grid-cols-1 gap-8 xl:mb-16 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="09" badge={homepageInsights.eyebrow} />
            </Reveal>
          </div>
          <div className="xl:col-span-8">
            <Reveal delayMs={80} className="flex flex-col gap-5">
              <h2
                id="insights-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageInsights.headline}
              </h2>
              <p className="m-0 max-w-2xl text-base text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                {homepageInsights.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <ul
          className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 xl:grid-cols-3"
          role="list"
        >
          {posts.map((post, index) => (
            <Reveal key={post.slug} as="li" delayMs={60 + index * 80}>
              <ArticleCard post={post} index={index} />
            </Reveal>
          ))}
        </ul>

        <Reveal delayMs={160} className="mt-10">
          <ArrowButton href="/blog">View all insights</ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
