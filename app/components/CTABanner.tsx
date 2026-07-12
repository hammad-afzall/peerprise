import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface CTAProps {
  label: string;
  href: string;
}

interface Props {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  primaryCta?: CTAProps;
  secondaryCta?: CTAProps;
  note?: string;
  dark?: boolean;
}

export default function CTABanner({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  note,
  dark = true,
}: Props) {
  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5 relative overflow-hidden">
      <div className="hero-glow-pink" style={{ top: '-400px', opacity: 0.7 }} />
      <div className="site-container max-w-[800px] text-center relative z-10">
        <SectionHeading eyebrow={eyebrow} headline={headline} subheadline={subtext} center id="cta-heading" />
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {note && <p className={`mt-6 text-[14px] ${dark ? "text-[#9CA3AF]" : "text-[#5B6472]"}`}>{note}</p>}
      </div>
    </section>
  );
}
