import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

type Props = {
  number: string;
  badge: string;
  headline: string;
  id: string;
  intro?: string;
  tone?: "light" | "gray" | "studio" | "white";
  children: ReactNode;
  className?: string;
};

const toneClass = {
  white: "bg-white text-[#1f2a2e]",
  light: "bg-white text-[#1f2a2e]",
  gray: "bg-[#f4f8fa] text-[#1f2a2e]",
  studio: "bg-[#1f2a2e] text-white",
} as const;

/**
 * Shared Studiova numbered section shell for interior pages.
 */
export default function PageSection({
  number,
  badge,
  headline,
  id,
  intro,
  tone = "white",
  children,
  className = "",
}: Props) {
  const isDark = tone === "studio";

  return (
    <section
      aria-labelledby={id}
      className={`section-padding ${toneClass[tone]} ${className}`}
    >
      <div className="site-container">
        <div className="mb-12 flex flex-col items-start gap-8 xl:mb-20 xl:flex-row">
          <Reveal>
            <SectionLabel
              number={number}
              badge={badge}
              tone={isDark ? "dark" : "light"}
            />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-4">
            <h2
              id={id}
              className={[
                "m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl",
                isDark ? "text-white" : "text-[#1f2a2e]",
              ].join(" ")}
            >
              {headline}
            </h2>
            {intro && (
              <p
                className={[
                  "m-0 max-w-2xl text-lg",
                  isDark ? "text-white/70" : "text-[#1f2a2e]/70",
                ].join(" ")}
              >
                {intro}
              </p>
            )}
          </Reveal>
        </div>
        {children}
      </div>
    </section>
  );
}
