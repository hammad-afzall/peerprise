import type { Review } from "../lib/testimonials";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="h-full flex flex-col glass-card rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 hover:bg-white/10 transition-colors duration-200">
      <svg
        className="w-8 h-8 text-[#4E6EFF]/70 mb-5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H6.1A3.17 3.17 0 0 1 9.17 8V6H7.17zm11 0A5.17 5.17 0 0 0 13 11.17V18a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H17.1A3.17 3.17 0 0 1 20.17 8V6h-2z" />
      </svg>
      <blockquote className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed flex-1">
        “{review.quote}”
      </blockquote>
      <footer className="mt-6 pt-5 border-t border-white/10">
        <p className="text-[15px] sm:text-[16px] font-bold text-white">{review.name}</p>
        {review.role && (
          <p className="mt-1 text-[13px] sm:text-[14px] text-gray-400 leading-snug">{review.role}</p>
        )}
        <p className="mt-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-gray-500">
          {review.source}
        </p>
      </footer>
    </article>
  );
}
