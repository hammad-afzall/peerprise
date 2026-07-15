import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { surfaceClasses, type LinkCTA, type SurfaceVariant } from "../lib/surface";

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
};

export default function CTASection({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  note,
  variant,
  dark = true,
  className = "",
  id = "cta-heading",
}: Props) {
  const resolved: SurfaceVariant = variant ?? (dark ? "dark" : "light");
  const s = surfaceClasses(resolved);
  const isDark = resolved === "dark";

  return (
    <section
      aria-labelledby={id}
      className={[
        "section-padding border-t relative overflow-hidden",
        isDark ? "bg-dark-bg border-white/5" : "bg-canvas border-border",
        className,
      ].join(" ")}
    >
      {isDark && <div className="hero-glow-pink" style={{ top: "-400px", opacity: 0.7 }} />}
      <div className="site-container max-w-[800px] text-center relative z-10">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subtext}
          center
          variant={resolved}
          id={id}
        />
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
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
        {note && <p className={`mt-6 type-small ${s.muted}`}>{note}</p>}
      </div>
    </section>
  );
}
