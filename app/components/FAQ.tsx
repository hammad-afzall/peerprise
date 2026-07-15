"use client";

import SectionHeading from "./SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { faqs, type FAQ as FAQType } from "../lib/faqs";
import type { SurfaceVariant } from "../lib/surface";

interface Props {
  items?: FAQType[];
  showAll?: boolean;
  eyebrow?: string;
  headline?: string;
  variant?: SurfaceVariant;
  className?: string;
}

/**
 * Homepage/section FAQ block. Prefer FAQAccordion when composing custom layouts.
 */
export default function FAQ({
  items,
  showAll = false,
  eyebrow = "Common Questions",
  headline = "Frequently asked questions",
  variant = "dark",
  className = "",
}: Props) {
  const displayItems = items ?? (showAll ? faqs : faqs.slice(0, 6));
  const isDark = variant === "dark";

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={[
        "section-padding border-t",
        isDark ? "bg-dark-bg border-white/5" : "bg-canvas border-border",
        className,
      ].join(" ")}
    >
      <div className="site-container">
        <SectionHeading
          eyebrow={eyebrow}
          headline={headline}
          center
          variant={variant}
          id="faq-heading"
        />
        <div className="mt-8 sm:mt-12">
          <FAQAccordion items={displayItems} variant={variant} />
        </div>
      </div>
    </section>
  );
}
