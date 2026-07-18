import Link from "next/link";
import type { BlogPostMeta } from "../../lib/blog-types";

type Props = {
  previous: BlogPostMeta | null;
  next: BlogPostMeta | null;
};

export default function ArticleAdjacentNav({ previous, next }: Props) {
  return (
    <nav
      aria-label="Adjacent articles"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group flex flex-col justify-between gap-6 bg-[#f4f8fa] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 dark:bg-white/5"
        >
          <p className="m-0 text-sm font-medium uppercase tracking-[0.08em] text-[#1f2a2e]/50 dark:text-white/50">
            ← Previous
          </p>
          <p className="m-0 text-lg font-bold leading-snug text-[#1f2a2e] transition-colors group-hover:text-[#1f2a2e]/70 sm:text-xl dark:text-white dark:group-hover:text-accent">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col justify-between gap-6 bg-[#1f2a2e] p-5 text-right transition-transform duration-300 hover:-translate-y-1 sm:p-7 dark:bg-black/30"
        >
          <p className="m-0 text-sm font-medium uppercase tracking-[0.08em] text-white/50">
            Next →
          </p>
          <p className="m-0 text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent sm:text-xl">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
