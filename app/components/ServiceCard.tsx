import Link from "next/link";
import type { ReactNode } from "react";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  /** Optional; do not invent decorative icons when none are approved. */
  icon?: ReactNode;
  variant?: SurfaceVariant;
  className?: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  linkLabel = "Learn more",
  icon,
  variant = "dark",
  className = "",
}: ServiceCardProps) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <Link href={href} className={`group block h-full focus-visible:rounded-[var(--radius-card)] ${className}`}>
      <article
        className={[
          "card-motion h-full flex flex-col rounded-[var(--radius-card)] p-6 sm:p-8",
          s.card,
          s.cardHover,
        ].join(" ")}
      >
        {icon && (
          <div
            className={[
              "w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[20px] sm:text-[24px] mb-5 sm:mb-6 border",
              isDark
                ? "bg-white/10 border-white/5 text-white"
                : "bg-accent-soft border-border text-accent",
            ].join(" ")}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        <h3 className={`type-h3 tracking-tight mb-3 ${s.heading}`}>{title}</h3>
        <p className={`type-body flex-1 mb-8 ${s.body}`}>{description}</p>

        <div className="mt-auto">
          <span className={`inline-flex items-center text-[14px] font-bold ${s.link}`}>
            {linkLabel}
            <svg
              className="w-4 h-4 ml-1.5 transition-transform duration-[var(--duration-base)] group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
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
