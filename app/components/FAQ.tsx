"use client";

import SectionLabel from "./SectionLabel";
import FAQAccordion from "./FAQAccordion";
import Reveal from "./Reveal";
import { faqs, type FAQ as FAQType } from "../lib/faqs";
import type { SurfaceVariant } from "../lib/surface";

interface Props {
  items?: FAQType[];
  showAll?: boolean;
  eyebrow?: string;
  headline?: string;
  variant?: SurfaceVariant;
  className?: string;
  number?: string;
}

/**
 * FAQ — Studiova numbered header + right-aligned accordion.
 */
export default function FAQ({
  items,
  showAll = false,
  eyebrow = "Common Questions",
  headline = "Frequently asked questions",
  variant = "light",
  className = "",
  number = "08",
}: Props) {
  const displayItems = items ?? (showAll ? faqs : faqs.slice(0, 6));
  const isDark = variant === "dark";

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={[
        "section-padding border-t",
        isDark
          ? "bg-[#1f2a2e] border-white/5"
          : "bg-white border-black/5 text-[#1f2a2e] dark:bg-[#273338] dark:border-white/5 dark:text-white",
        className,
      ].join(" ")}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel
              number={number}
              badge={eyebrow}
              tone={isDark ? "dark" : "light"}
            />
            <h2
              id="faq-heading"
              className={[
                "mt-8 m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl",
                isDark ? "text-white" : "text-[#1f2a2e] dark:text-white",
              ].join(" ")}
            >
              {headline}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delayMs={100}>
            <FAQAccordion
              items={displayItems}
              variant={isDark ? "dark" : "light"}
              className="max-w-none 2xl:max-w-5xl 2xl:ml-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
