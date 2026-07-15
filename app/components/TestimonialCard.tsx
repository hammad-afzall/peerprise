import type { Review } from "../lib/testimonials";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  review: Review;
  variant?: SurfaceVariant;
  className?: string;
};

export default function TestimonialCard({
  review,
  variant = "dark",
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "h-full flex flex-col rounded-[var(--radius-card)] p-6 sm:p-8 transition-colors duration-[var(--duration-base)]",
        s.card,
        s.cardHover,
        className,
      ].join(" ")}
    >
      <svg
        className={`w-8 h-8 mb-5 shrink-0 ${isDark ? "text-accent/70" : "text-accent"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H6.1A3.17 3.17 0 0 1 9.17 8V6H7.17zm11 0A5.17 5.17 0 0 0 13 11.17V18a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H17.1A3.17 3.17 0 0 1 20.17 8V6h-2z" />
      </svg>
      <blockquote className={`type-body flex-1 ${isDark ? "text-on-dark-subtle" : "text-ink-secondary"}`}>
        <p>“{review.quote}”</p>
      </blockquote>
      <footer className={`mt-6 pt-5 border-t ${s.border}`}>
        <p className={`text-[15px] sm:text-[16px] font-bold ${s.heading}`}>{review.name}</p>
        {review.role && (
          <p className={`mt-1 type-small leading-snug ${s.muted}`}>{review.role}</p>
        )}
        <p className={`mt-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase ${s.muted}`}>
          {review.source}
        </p>
      </footer>
    </article>
  );
}
