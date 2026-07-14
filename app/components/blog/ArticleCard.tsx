import Link from "next/link";
import { formatBlogDate, type BlogPostMeta } from "../../lib/blog-types";

type Props = {
  post: BlogPostMeta;
  featured?: boolean;
};

function AbstractThumb({ seed }: { seed: string }) {
  const hue = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 40;
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#111A2B]"
      style={{
        backgroundImage: `radial-gradient(circle at ${30 + (hue % 40)}% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255,88,213,0.18), transparent 50%)`,
      }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 320 180" fill="none">
        <path
          d="M40 90H100M100 50V130M100 50H160M100 130H160M160 90H220M220 40V140M220 90H280"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />
        <circle cx="40" cy="90" r="10" fill="rgba(99,102,241,0.35)" stroke="#6366F1" />
        <circle cx="160" cy="90" r="9" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" />
        <circle cx="280" cy="90" r="10" fill="rgba(255,88,213,0.2)" stroke="rgba(255,138,224,0.7)" />
      </svg>
    </div>
  );
}

export default function ArticleCard({ post, featured = false }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className={`h-full flex flex-col overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] transition-all duration-200 ease-out motion-reduce:transition-none hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
          featured ? "sm:flex-row" : ""
        }`}
      >
        <div
          className={`relative ${
            featured ? "sm:w-[42%] min-h-[180px] sm:min-h-full" : "min-h-[148px]"
          }`}
        >
          <AbstractThumb seed={post.slug} />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-flex rounded-full bg-black/40 border border-white/15 px-3 py-1 text-[12px] font-semibold text-white">
              {post.category}
            </span>
          </div>
        </div>
        <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? "sm:p-8" : ""}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-gray-300 mb-3.5">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h3
            className={`font-bold text-white tracking-tight transition-colors duration-200 group-hover:text-[#C7D2FE] ${
              featured
                ? "text-[24px] sm:text-[28px] mb-3"
                : "text-[20px] sm:text-[22px] leading-snug mb-3"
            }`}
          >
            {post.title}
          </h3>
          <p
            className={`text-gray-300 leading-relaxed flex-1 ${
              featured ? "text-[16px] sm:text-[17px]" : "text-[15px] sm:text-[16.5px]"
            }`}
          >
            {post.description}
          </p>
          <span className="mt-5 inline-flex items-center text-[14px] font-bold text-[#8BA3FF] group-hover:text-[#FF58D5] transition-colors duration-200">
            Read article
            <svg
              className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
