import Link from "next/link";
import { plans, comparisonRows, type ComparisonValue } from "../lib/plans";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  variant?: SurfaceVariant;
  className?: string;
};

function CellValue({ value, isDark }: { value: ComparisonValue; isDark: boolean }) {
  if (typeof value === "boolean") {
    if (value) {
      return (
        <span className="inline-flex items-center justify-center gap-1.5">
          <svg
            className="w-4 h-4 text-accent shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className={`text-[14px] ${isDark ? "text-on-dark-subtle" : "text-ink-secondary"}`}>
            Included
          </span>
        </span>
      );
    }
    return (
      <span className={`text-[14px] ${isDark ? "text-on-dark-muted" : "text-muted"}`}>
        Not included
      </span>
    );
  }
  return <span className={`text-[14px] ${isDark ? "text-on-dark-subtle" : "text-muted-strong"}`}>{value}</span>;
}

export default function PlanComparison({ variant = "dark", className = "" }: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <div className={className}>
      {/* Desktop / large tablet table — no forced horizontal scroll on mobile */}
      <div
        className={[
          "hidden lg:block w-full rounded-[var(--radius-lg)] border",
          isDark ? "border-white/10 bg-white/5" : "border-border bg-surface",
        ].join(" ")}
      >
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">Feature comparison across managed plans</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className={`p-4 border-b w-[28%] ${s.border} ${isDark ? "bg-white/5" : "bg-canvas"}`}
              >
                <span className={`text-[13px] font-bold uppercase tracking-wider ${s.muted}`}>
                  Feature
                </span>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`p-4 border-b border-l ${s.border} ${isDark ? "bg-white/5" : "bg-canvas"}`}
                >
                  <span className={`block text-[15px] font-bold ${s.heading}`}>{plan.name}</span>
                  <span className={`block text-[13px] mt-1 ${s.muted}`}>
                    {plan.price} {plan.period}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className={`border-b last:border-0 ${s.border}`}>
                <th scope="row" className={`p-4 text-[14px] font-medium text-left ${s.heading}`}>
                  {row.label}
                </th>
                {row.values.map((val, i) => (
                  <td key={`${row.label}-${plans[i].id}`} className={`p-4 border-l ${s.border}`}>
                    <CellValue value={val} isDark={isDark} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet stacked comparison cards */}
      <div className="lg:hidden space-y-5">
        {plans.map((plan, planIndex) => (
          <article key={plan.id} className={`rounded-[var(--radius-card)] p-5 sm:p-6 ${s.card}`}>
            <header className={`mb-4 pb-4 border-b ${s.border}`}>
              {plan.badge && (
                <p className="type-eyebrow text-accent mb-2">{plan.badge}</p>
              )}
              <h3 className={`type-h4 m-0 ${s.heading}`}>{plan.name}</h3>
              <p className={`mt-1 text-[15px] font-bold ${s.heading}`}>
                {plan.price}{" "}
                <span className={`font-medium ${s.muted}`}>{plan.period}</span>
              </p>
              <p className={`mt-3 type-small m-0 ${s.body}`}>{plan.description}</p>
            </header>
            <dl className="space-y-3 m-0 mb-5">
              {comparisonRows.map((row) => (
                <div
                  key={`${plan.id}-${row.label}`}
                  className="flex items-start justify-between gap-4"
                >
                  <dt className={`type-small font-medium ${s.heading}`}>{row.label}</dt>
                  <dd className="m-0 shrink-0 text-right max-w-[55%]">
                    <CellValue value={row.values[planIndex]} isDark={isDark} />
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={plan.ctaHref}
              className={
                plan.highlight
                  ? "btn-primary w-full"
                  : isDark
                    ? "inline-flex items-center justify-center w-full min-h-[var(--target-min)] h-12 rounded-full text-[15px] font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                    : "btn-secondary-light w-full"
              }
            >
              {plan.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
