import Image from "next/image";
import ArrowButton from "./ArrowButton";
import type { LinkCTA } from "../lib/surface";
import type { ReactNode } from "react";

type Props = {
  /** Small label above the display title (legacy / section eyebrow). */
  eyebrow?: string;
  /** Supporting line — may include a lime-highlighted phrase. */
  supporting?: string;
  /** Words inside supporting to wrap with lime accent. */
  highlight?: string;
  /** Large display heading (Studiova interior hero pattern). */
  headline: string;
  /** Optional body under the display title. */
  subtext?: string;
  primaryCta?: LinkCTA;
  secondaryCta?: LinkCTA;
  children?: ReactNode;
  className?: string;
  /** Full-bleed background image behind the hero content (dimmed like the homepage video). */
  backgroundImage?: string;
  tone?: "black" | "studio";
  /**
   * display — huge brand-scale title (Studiova interior)
   * standard — large but readable H1 for longer headlines
   */
  size?: "display" | "standard";
};

/**
 * Studiova interior page hero — supporting line + large title + arrow CTAs.
 */
export default function PageHero({
  eyebrow,
  supporting,
  highlight,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  children,
  className = "",
  backgroundImage,
  tone = "black",
  size = "display",
}: Props) {
  const bg = tone === "studio" ? "bg-[#1f2a2e]" : "bg-black";
  const lead = supporting ?? eyebrow;

  let leadNode: ReactNode = lead;
  if (lead && highlight && lead.includes(highlight)) {
    const [before, ...rest] = lead.split(highlight);
    const after = rest.join(highlight);
    leadNode = (
      <>
        {before}
        <span className="font-semibold text-accent">{highlight}</span>
        {after}
      </>
    );
  }

  return (
    <section
      aria-label="Page hero"
      className={[
        "relative overflow-hidden pt-[140px] pb-16 sm:pt-[160px] sm:pb-24 lg:pb-32",
        bg,
        className,
      ].join(" ")}
    >
      {backgroundImage && (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <div className="site-container relative z-10">
        <div className="max-w-[1100px]">
          {lead && (
            <div className="mb-6 flex items-start gap-3 sm:mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/primary-leaf.svg"
                alt=""
                width={24}
                height={24}
                className="mt-1 shrink-0 animate-spin [animation-duration:6s]"
              />
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                {leadNode}
              </p>
            </div>
          )}

          <h1
            className={[
              "mb-6 text-white sm:mb-8",
              size === "display"
                ? "type-brand-display"
                : "text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
            ].join(" ")}
          >
            {headline}
          </h1>

          {subtext && (
            <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-white/70 sm:mb-10">
              {subtext}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta && (
                <ArrowButton href={primaryCta.href}>{primaryCta.label}</ArrowButton>
              )}
              {secondaryCta && (
                <ArrowButton href={secondaryCta.href} variant="on-dark">
                  {secondaryCta.label}
                </ArrowButton>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
