import Link from "next/link";
import { formatBlogDate, type BlogPostMeta } from "../../lib/blog-types";
import { ctaLabels } from "../../lib/ctas";

type Props = {
  post: BlogPostMeta;
  featured?: boolean;
};

/**
 * Studiova "recent news" card — square surface, gradient header block, arrow link.
 */
export default function ArticleCard({ post, featured = false }: Props) {
  const href = `/blog/${post.slug}`;
  const readLabel = `${ctaLabels.readArticle}: ${post.title}`;

  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden",
        featured ? "bg-[#1f2a2e] text-white sm:col-span-2" : "bg-[#f4f8fa] text-[#1f2a2e]",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex min-h-[120px] items-end overflow-hidden p-6 lg:p-8",
          featured
            ? "bg-gradient-to-br from-accent/30 via-[#1f2a2e] to-black"
            : "bg-gradient-to-br from-accent/40 via-[#f4f8fa] to-white",
        ].join(" ")}
      >
        <span
          className={[
            "text-sm font-bold uppercase tracking-wide",
            featured ? "text-white/70" : "text-[#1f2a2e]/60",
          ].join(" ")}
        >
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
        <h3
          className={[
            "m-0 font-bold tracking-tight",
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
          ].join(" ")}
        >
          <Link href={href} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </h3>

        {post.description ? (
          <p
            className={[
              "m-0 flex-1 text-base leading-relaxed",
              featured ? "text-white/70" : "text-[#1f2a2e]/70",
            ].join(" ")}
          >
            {post.description}
          </p>
        ) : null}

        <div
          className={[
            "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
            featured ? "text-white/50" : "text-[#1f2a2e]/50",
          ].join(" ")}
        >
          {post.publishedAt ? <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time> : null}
          {post.readingTime ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </>
          ) : null}
        </div>

        <Link
          href={href}
          aria-label={readLabel}
          className={[
            "mt-1 inline-flex items-center text-[15px] font-bold",
            featured ? "text-white" : "text-[#1f2a2e]",
          ].join(" ")}
        >
          {ctaLabels.readArticle}
          <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
