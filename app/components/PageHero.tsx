import Link from "next/link";

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
}

export default function PageHero({
  eyebrow,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section aria-label="Page Hero" className="relative pt-[120px] pb-12 sm:pt-[140px] sm:pb-20 lg:pb-[96px] bg-[var(--color-dark-bg)] border-b border-white/5 overflow-hidden">
      <div className="hero-glow-pink" style={{ top: "-400px", opacity: 0.5 }} />
      <div className="site-container relative z-10">
        <div className="max-w-[800px]">
          {eyebrow && (
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-gray-400 mb-4 sm:mb-6">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1] tracking-tight text-white mb-4 sm:mb-6">
            {headline}
          </h1>
          {subtext && (
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-400 max-w-[640px] mb-6 sm:mb-8">
              {subtext}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
        </div>
      </div>
    </section>
  );
}
