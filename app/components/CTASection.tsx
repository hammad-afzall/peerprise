import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import type { LinkCTA, SurfaceVariant } from "../lib/surface";

type Props = {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  primaryCta?: LinkCTA;
  secondaryCta?: LinkCTA;
  note?: string;
  variant?: SurfaceVariant;
  /** @deprecated Use variant instead. */
  dark?: boolean;
  className?: string;
  id?: string;
  number?: string;
};

export default function CTASection({
  eyebrow = "Next step",
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  note,
  variant,
  dark = true,
  className = "",
  id = "cta-heading",
  number = "12",
}: Props) {
  const resolved: SurfaceVariant = variant ?? (dark ? "dark" : "light");
  const isDark = resolved === "dark";

  return (
    <section
      aria-labelledby={id}
      className={[
        "section-padding relative overflow-hidden",
        isDark ? "bg-[#1f2a2e]" : "bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white",
        className,
      ].join(" ")}
    >
      <div className="site-container relative z-10 max-w-[880px] text-center">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <SectionLabel
              number={number}
              badge={eyebrow}
              tone={isDark ? "dark" : "light"}
            />
          </div>
          <h2
            id={id}
            className={[
              "m-0 text-4xl font-bold leading-tight tracking-tight md:text-5xl",
              isDark ? "text-white" : "text-[#1f2a2e] dark:text-white",
            ].join(" ")}
          >
            {headline}
          </h2>
          {subtext && (
            <p
              className={[
                "mx-auto mt-5 max-w-2xl text-lg",
                isDark ? "text-white/70" : "text-[#1f2a2e]/70 dark:text-white/70",
              ].join(" ")}
            >
              {subtext}
            </p>
          )}
        </Reveal>
        {(primaryCta || secondaryCta) && (
          <Reveal delayMs={100}>
            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <ArrowButton href={primaryCta.href}>{primaryCta.label}</ArrowButton>
              )}
              {secondaryCta && (
                <ArrowButton
                  href={secondaryCta.href}
                  variant={isDark ? "on-dark" : "lime"}
                >
                  {secondaryCta.label}
                </ArrowButton>
              )}
            </div>
          </Reveal>
        )}
        {note && (
          <Reveal delayMs={160}>
            <p
              className={[
                "mt-6 text-sm",
                isDark ? "text-white/50" : "text-[#1f2a2e]/60 dark:text-white/60",
              ].join(" ")}
            >
              {note}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
