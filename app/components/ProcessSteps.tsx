import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

export type ProcessStep = {
  /** Optional step marker (e.g. "01"). Omit for unnumbered stages. */
  number?: string;
  title: string;
  description: string;
};

type Props = {
  steps: ProcessStep[];
  variant?: SurfaceVariant;
  /** Desktop column pattern for grid layout. */
  columns?: 3 | 4 | 5;
  /**
   * grid — connected stage cards (default)
   * timeline — vertical recurring / sequential process
   * rail — compact stage panels (partnership-style)
   */
  layout?: "grid" | "timeline" | "rail";
  className?: string;
};

export default function ProcessSteps({
  steps,
  variant = "dark",
  columns = 4,
  layout = "grid",
  className = "",
}: Props) {
  if (layout === "timeline") {
    return <TimelineSteps steps={steps} variant={variant} className={className} />;
  }
  if (layout === "rail") {
    return <RailSteps steps={steps} variant={variant} className={className} />;
  }
  return (
    <GridSteps steps={steps} variant={variant} columns={columns} className={className} />
  );
}

function GridSteps({
  steps,
  variant,
  columns,
  className,
}: {
  steps: ProcessStep[];
  variant: SurfaceVariant;
  columns: 3 | 4 | 5;
  className: string;
}) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";
  const gridCols =
    columns === 5
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  const showConnector = steps.length > 1 && columns === 4;

  return (
    <div className={`relative ${className}`}>
      {showConnector && (
        <div
          className={[
            "hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-px pointer-events-none",
            isDark ? "bg-white/10" : "bg-border",
          ].join(" ")}
          aria-hidden="true"
        />
      )}

      <ol className={`grid ${gridCols} gap-6 relative list-none p-0 m-0`}>
        {steps.map((step, index) => (
          <li
            key={step.number ?? `${step.title}-${index}`}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div
              className={[
                "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6",
                isDark ? "glass-card gradient-border bg-dark-surface" : "card-light",
              ].join(" ")}
            >
              <span
                className={`text-[22px] sm:text-[26px] lg:text-[28px] font-bold ${isDark ? "text-gradient" : "text-accent"}`}
              >
                {step.number ? (
                  <>
                    <span className="sr-only">Step </span>
                    {step.number}
                  </>
                ) : (
                  <>
                    <span className="sr-only">Stage </span>
                    {String(index + 1).padStart(2, "0")}
                  </>
                )}
              </span>
            </div>
            <h3 className={`type-h4 mb-3 ${s.heading}`}>{step.title}</h3>
            <p className={`type-body max-w-[280px] ${s.bodyStrong}`}>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function TimelineSteps({
  steps,
  variant,
  className,
}: {
  steps: ProcessStep[];
  variant: SurfaceVariant;
  className: string;
}) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <div className={`max-w-[880px] relative ${className}`}>
      <div
        className={[
          "absolute left-[23px] sm:left-[27px] top-3 bottom-3 w-px pointer-events-none",
          isDark ? "bg-white/10" : "bg-border",
        ].join(" ")}
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-8 sm:gap-10 list-none p-0 m-0 relative">
        {steps.map((step, index) => (
          <li
            key={step.number ?? `${step.title}-${index}`}
            className="relative z-10 flex gap-4 sm:gap-7"
          >
            <div
              className={[
                "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[14px] sm:text-[16px]",
                isDark
                  ? "glass-card gradient-border bg-dark-surface"
                  : "card-light",
              ].join(" ")}
            >
              <span className={isDark ? "text-gradient" : "text-accent"}>
                {step.number ? (
                  <>
                    <span className="sr-only">Step </span>
                    {step.number}
                  </>
                ) : (
                  <>
                    <span className="sr-only">Stage </span>
                    {String(index + 1).padStart(2, "0")}
                  </>
                )}
              </span>
            </div>
            <div className="pt-1 sm:pt-2.5 min-w-0">
              <h3 className={`type-h4 mb-2 ${s.heading}`}>{step.title}</h3>
              <p className={`type-body m-0 ${s.bodyStrong}`}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function RailSteps({
  steps,
  variant,
  className,
}: {
  steps: ProcessStep[];
  variant: SurfaceVariant;
  className: string;
}) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <ol
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-5 list-none p-0 m-0 ${className}`}
    >
      {steps.map((step, index) => (
        <li key={step.number ?? `${step.title}-${index}`}>
          <article
            className={[
              "h-full flex flex-col gap-3 p-5 sm:p-6 rounded-[var(--radius-card)]",
              isDark ? "card-dark-soft" : s.card,
            ].join(" ")}
          >
            <div className="flex items-center gap-3">
              <span
                className={[
                  "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full type-small font-bold",
                  isDark
                    ? "bg-white/10 text-accent border border-white/10"
                    : "bg-accent-soft text-accent",
                ].join(" ")}
              >
                {step.number ?? String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`type-h4 m-0 ${s.heading}`}>{step.title}</h3>
            </div>
            <p className={`type-body m-0 ${s.bodyStrong}`}>{step.description}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}
