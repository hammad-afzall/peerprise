import Link from "next/link";
import { formatBlogDate, type BlogPostMeta } from "../../lib/blog-types";
import { ctaLabels } from "../../lib/ctas";

type Props = {
  post: BlogPostMeta;
  featured?: boolean;
  index?: number;
};

/** Deterministic lime/studio media wash from slug — visual variety without stock photos. */
function mediaTone(slug: string, featured: boolean) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = (hash + slug.charCodeAt(i) * (i + 1)) % 5;
  if (featured) {
    return {
      shell: "bg-[#1f2a2e] text-white",
      media: "from-accent via-accent/70 to-[#1f2a2e]",
      pattern: "opacity-30",
    };
  }
  const tones = [
    { shell: "bg-[#f4f8fa] text-[#1f2a2e]", media: "from-accent to-[#d4ff8f]", pattern: "opacity-25" },
    { shell: "bg-[#f4f8fa] text-[#1f2a2e]", media: "from-[#1f2a2e] to-[#365564]", pattern: "opacity-20" },
    { shell: "bg-[#f4f8fa] text-[#1f2a2e]", media: "from-accent/90 via-[#f4f8fa] to-white", pattern: "opacity-30" },
    { shell: "bg-white text-[#1f2a2e]", media: "from-[#273338] via-[#1f2a2e] to-black", pattern: "opacity-25" },
    { shell: "bg-[#f4f8fa] text-[#1f2a2e]", media: "from-accent/60 to-[#1f2a2e]/20", pattern: "opacity-35" },
  ];
  return tones[hash];
}

/**
 * Studiova-style news card — tall media plane, date, title, hover zoom.
 */
export default function ArticleCard({ post, featured = false, index = 0 }: Props) {
  const href = `/blog/${post.slug}`;
  const tone = mediaTone(post.slug, featured);
  const darkMedia = featured || tone.media.includes("#1f2a2e") || tone.media.includes("black");

  return (
    <article
      className={[
        "group/card flex h-full flex-col overflow-hidden",
        featured ? "sm:col-span-2 xl:col-span-2" : "",
        tone.shell,
      ].join(" ")}
    >
      <Link href={href} className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
        <div
          className={[
            "media-zoom relative overflow-hidden",
            featured ? "h-[240px] sm:h-[320px] lg:h-[380px]" : "h-[200px] sm:h-[240px]",
          ].join(" ")}
        >
          <div
            className={[
              "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover/card:scale-110",
              tone.media,
            ].join(" ")}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-0 ${tone.pattern}`}
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.12) 0 1px, transparent 2px)",
              backgroundSize: "48px 48px, 32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-end justify-between gap-4 p-5 sm:p-6 lg:p-8">
            <span
              className={[
                "inline-flex rounded-full px-3 py-1 text-sm font-medium",
                darkMedia || featured
                  ? "bg-white/15 text-white backdrop-blur-sm"
                  : "bg-[#1f2a2e] text-white",
              ].join(" ")}
            >
              {post.category}
            </span>
            {featured && (
              <span className="text-6xl font-bold text-white/20 sm:text-7xl" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
        </div>

        <div className={["flex flex-1 flex-col gap-3 p-5 sm:p-6 lg:p-8", featured ? "lg:gap-4" : ""].join(" ")}>
          {post.publishedAt ? (
            <time
              dateTime={post.publishedAt}
              className={[
                "text-base",
                featured ? "text-white/60" : "text-[#1f2a2e]/55",
              ].join(" ")}
            >
              {formatBlogDate(post.publishedAt)}
              {post.readingTime ? ` · ${post.readingTime}` : ""}
            </time>
          ) : null}

          <h3
            className={[
              "m-0 font-bold tracking-tight transition-colors",
              featured
                ? "text-2xl sm:text-3xl lg:text-4xl group-hover/card:text-accent"
                : "text-xl sm:text-2xl group-hover/card:text-[#1f2a2e]",
            ].join(" ")}
          >
            {post.title}
          </h3>

          {post.description ? (
            <p
              className={[
                "m-0 flex-1 text-base leading-relaxed",
                featured ? "text-white/70 sm:text-lg" : "text-[#1f2a2e]/70",
              ].join(" ")}
            >
              {post.description}
            </p>
          ) : null}

          <span
            className={[
              "mt-2 inline-flex items-center text-[15px] font-bold",
              featured ? "text-accent" : "text-[#1f2a2e]",
            ].join(" ")}
          >
            {ctaLabels.readArticle}
            <span
              className="ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
