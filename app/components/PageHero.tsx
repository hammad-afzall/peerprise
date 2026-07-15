import Link from "next/link";
import { surfaceClasses, type LinkCTA, type SurfaceVariant } from "../lib/surface";

type Props = {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  primaryCta?: LinkCTA;
  secondaryCta?: LinkCTA;
  /** Dark matches approved hero / page-hero treatment. */
  variant?: SurfaceVariant;
  className?: string;
};

export default function PageHero({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  variant = "dark",
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <section
      aria-label="Page hero"
      className={[
        "relative pt-[120px] pb-12 sm:pt-[140px] sm:pb-20 lg:pb-[96px] overflow-hidden border-b",
        isDark ? "bg-dark-bg border-white/5" : "bg-canvas border-border",
        className,
      ].join(" ")}
    >
      {isDark && <div className="hero-glow-pink" style={{ top: "-400px", opacity: 0.5 }} />}
      <div className="site-container relative z-10">
        <div className="max-w-[800px]">
          {eyebrow && (
            <p className={`type-eyebrow mb-4 sm:mb-6 ${s.eyebrow}`}>{eyebrow}</p>
          )}
          <h1 className={`type-h1 mb-4 sm:mb-6 ${s.heading}`}>{headline}</h1>
          {subtext && (
            <p className={`type-body-lg max-w-[640px] mb-6 sm:mb-8 ${s.body}`}>{subtext}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={s.secondaryBtn}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
