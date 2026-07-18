"use client";

import { useId, useState } from "react";
import type { FAQ } from "../lib/faqs";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  items: FAQ[];
  variant?: SurfaceVariant;
  /** Allow multiple panels open at once. Default: single. */
  allowMultiple?: boolean;
  className?: string;
};

export default function FAQAccordion({
  items,
  variant = "dark",
  allowMultiple = false,
  className = "",
}: Props) {
  const baseId = useId();
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";
  const [openIds, setOpenIds] = useState<string[]>([]);

  function isOpen(id: string) {
    return openIds.includes(id);
  }

  function toggle(id: string) {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  }

  return (
    <div
      className={[
        "divide-y",
        s.divide,
        isDark ? "" : "dark:divide-white/10",
        className || "max-w-[760px] mx-auto",
      ].join(" ")}
    >
      {items.map((faq) => {
        const open = isOpen(faq.id);
        const buttonId = `${baseId}-btn-${faq.id}`;
        const panelId = `${baseId}-panel-${faq.id}`;

        return (
          <div key={faq.id} className="py-1">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(faq.id)}
                className="w-full text-left flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 group min-h-[var(--target-min)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
              >
                <span
                  className={[
                    "text-[17px] sm:text-[18px] md:text-[20px] font-bold pr-2 leading-snug transition-colors duration-[var(--duration-base)]",
                    s.heading,
                    isDark
                      ? "group-hover:text-accent"
                      : "group-hover:text-[#1f2a2e] dark:text-white dark:group-hover:text-accent",
                  ].join(" ")}
                >
                  {faq.question}
                </span>
                <span
                  className={[
                    "faq-icon flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center mt-0.5",
                    open
                      ? "bg-accent border-accent text-[#1f2a2e] faq-icon-open"
                      : isDark
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-[#f4f8fa] border-black/10 text-[#1f2a2e] dark:bg-white/10 dark:border-white/20 dark:text-white",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 2v6M2 5h6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              className={["faq-panel", open ? "faq-panel-open" : ""].filter(Boolean).join(" ")}
            >
              <div className="faq-panel-inner">
                <p
                  className={`type-body leading-relaxed pr-2 sm:pr-12 pb-6 sm:pb-8 ${isDark ? "text-on-dark-subtle" : "text-ink-secondary dark:text-white/75"}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
