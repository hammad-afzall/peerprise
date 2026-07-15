import Link from "next/link";
import type { Plan } from "../lib/plans";
import { ctas } from "../lib/ctas";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  plan: Plan;
  variant?: SurfaceVariant;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function PricingCard({
  plan,
  variant = "dark",
  ctaLabel,
  ctaHref,
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";
  const label = ctaLabel ?? plan.ctaLabel ?? ctas.requestDigitalReviewLegacy.label;
  const href = ctaHref ?? plan.ctaHref ?? ctas.requestDigitalReviewLegacy.href;

  return (
    <article
      className={[
        "rounded-[var(--radius-xl)] p-6 sm:p-8 flex flex-col gap-5 relative transition-colors",
        s.card,
        plan.highlight
          ? isDark
            ? "border-accent ring-1 ring-accent/50 shadow-[0_0_30px_rgba(78,110,255,0.15)]"
            : "border-accent ring-1 ring-accent/30"
          : "",
        !plan.highlight ? s.cardHover : "",
        className,
      ].join(" ")}
    >
      {plan.highlight && plan.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-flex min-h-8 items-center bg-gradient-to-r from-accent-secondary to-accent text-white text-[12px] font-bold uppercase tracking-wider py-1 px-4 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div className={plan.highlight ? "mt-2" : undefined}>
        <h3 className={`type-h4 mb-2 ${s.heading}`}>{plan.name}</h3>
        <div className="flex items-baseline gap-1 flex-wrap">
          <span className={`text-[36px] sm:text-[40px] font-bold leading-none tracking-tight ${s.heading}`}>
            {plan.price}
          </span>
          <span className={`text-[15px] font-medium ${s.muted}`}>{plan.period}</span>
        </div>
        <p className={`mt-4 type-small leading-relaxed ${s.body}`}>{plan.description}</p>
      </div>

      <div className={`border-t my-1 ${s.border}`} aria-hidden="true" />

      <ul className="space-y-3.5 flex-1 mb-2 list-none p-0 m-0">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={[
                "flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center",
                isDark ? "bg-white/10 text-accent" : "bg-accent-soft text-accent",
              ].join(" ")}
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1.5 5.5l2.5 2.5 4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={`type-small ${isDark ? "text-on-dark-subtle" : "text-ink-secondary"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={
          plan.highlight
            ? "btn-primary w-full"
            : isDark
              ? "inline-flex items-center justify-center w-full min-h-[var(--target-min)] h-12 rounded-full text-[15px] font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
              : "btn-secondary-light w-full"
        }
      >
        {label}
      </Link>
    </article>
  );
}
