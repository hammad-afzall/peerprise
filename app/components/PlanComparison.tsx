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
        <svg
          className="w-5 h-5 mx-auto text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Included"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    return (
      <span className={`text-[14px] font-bold ${isDark ? "text-gray-600" : "text-muted"}`} aria-label="Not included">
        —
      </span>
    );
  }
  return <span className={`text-[14px] ${isDark ? "text-on-dark-muted" : "text-muted-strong"}`}>{value}</span>;
}

export default function PlanComparison({ variant = "dark", className = "" }: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <div className={className}>
      {/* Desktop / tablet table */}
      <div
        className={[
          "hidden md:block w-full overflow-x-auto rounded-[var(--radius-lg)] border",
          isDark ? "border-white/10 bg-white/5" : "border-border bg-surface",
        ].join(" ")}
      >
        <table className="w-full min-w-[700px] text-left border-collapse">
          <caption className="sr-only">Feature comparison across managed plans</caption>
          <thead>
            <tr>
              <th scope="col" className={`p-4 border-b w-1/4 ${s.border} ${isDark ? "bg-white/5" : "bg-canvas"}`}>
                <span className="sr-only">Feature</span>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`p-4 border-b border-l w-1/4 ${s.border} ${isDark ? "bg-white/5" : "bg-canvas"}`}
                >
                  <span className={`block text-[15px] font-bold ${s.heading}`}>{plan.name}</span>
                  <span className={`block text-[13px] mt-1 ${s.muted}`}>
                    {plan.price}
                    {plan.period}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={`${row.category}-${row.label}`} className={`border-b last:border-0 ${s.border}`}>
                <th scope="row" className={`p-4 text-[14px] font-medium text-left ${s.heading}`}>
                  {row.label}
                </th>
                {row.values.map((val, i) => (
                  <td key={i} className={`p-4 border-l text-center ${s.border}`}>
                    <CellValue value={val} isDark={isDark} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards — no forced horizontal scroll */}
      <div className="md:hidden space-y-5">
        {plans.map((plan, planIndex) => (
          <article key={plan.id} className={`rounded-[var(--radius-card)] p-5 ${s.card}`}>
            <header className={`mb-4 pb-4 border-b ${s.border}`}>
              <h3 className={`type-h4 ${s.heading}`}>{plan.name}</h3>
              <p className={`mt-1 text-[14px] ${s.muted}`}>
                {plan.price}
                {plan.period}
              </p>
            </header>
            <dl className="space-y-3 m-0">
              {comparisonRows.map((row) => (
                <div
                  key={`${plan.id}-${row.label}`}
                  className="flex items-start justify-between gap-4"
                >
                  <dt className={`type-small font-medium ${s.heading}`}>{row.label}</dt>
                  <dd className="m-0 shrink-0 text-right">
                    <CellValue value={row.values[planIndex]} isDark={isDark} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
