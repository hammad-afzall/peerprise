import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: ProcessStep[];
  variant?: SurfaceVariant;
  className?: string;
};

export default function ProcessSteps({
  steps,
  variant = "dark",
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <div className={`relative ${className}`}>
      {steps.length > 1 && (
        <div
          className={[
            "hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-px pointer-events-none",
            isDark ? "bg-white/10" : "bg-border",
          ].join(" ")}
          aria-hidden="true"
        />
      )}

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative list-none p-0 m-0">
        {steps.map((step) => (
          <li key={step.number} className="relative z-10 flex flex-col items-center text-center">
            <div
              className={[
                "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6",
                isDark ? "glass-card gradient-border bg-dark-surface" : "card-light",
              ].join(" ")}
            >
              <span
                className={`text-[22px] sm:text-[26px] lg:text-[28px] font-bold ${isDark ? "text-gradient" : "text-accent"}`}
              >
                <span className="sr-only">Step </span>
                {step.number}
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
