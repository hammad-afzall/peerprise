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
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
    >
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group rounded-[14px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 transition-all duration-200 ease-out hover:bg-white/[0.08] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="text-[12px] uppercase tracking-[0.08em] text-gray-400 mb-2.5">Previous</p>
          <p className="text-white font-semibold text-[16px] sm:text-[17px] leading-snug group-hover:text-[#C7D2FE] transition-colors duration-200">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-[14px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 transition-all duration-200 ease-out hover:bg-white/[0.08] hover:-translate-y-0.5 sm:text-right motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="text-[12px] uppercase tracking-[0.08em] text-gray-400 mb-2.5">Next</p>
          <p className="text-white font-semibold text-[16px] sm:text-[17px] leading-snug group-hover:text-[#C7D2FE] transition-colors duration-200">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
