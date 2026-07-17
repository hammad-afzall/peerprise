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
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group bg-white p-5 transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
        >
          <p className="mb-2.5 text-[12px] uppercase tracking-[0.08em] text-[#1f2a2e]/50">
            Previous
          </p>
          <p className="text-[16px] font-semibold leading-snug text-[#1f2a2e] transition-colors duration-200 group-hover:text-accent-ink sm:text-[17px]">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group bg-white p-5 text-right transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
        >
          <p className="mb-2.5 text-[12px] uppercase tracking-[0.08em] text-[#1f2a2e]/50">Next</p>
          <p className="text-[16px] font-semibold leading-snug text-[#1f2a2e] transition-colors duration-200 group-hover:text-accent-ink sm:text-[17px]">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
