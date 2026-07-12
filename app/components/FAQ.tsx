"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { faqs, type FAQ as FAQType } from "../lib/faqs";

interface Props {
  items?: FAQType[];
  showAll?: boolean;
  eyebrow?: string;
  headline?: string;
}

export default function FAQ({
  items,
  showAll = false,
  eyebrow = "Common Questions",
  headline = "Frequently asked questions",
}: Props) {
  const displayItems = items ?? (showAll ? faqs : faqs.slice(0, 6));
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5">
      <div className="site-container">
        <SectionHeading eyebrow={eyebrow} headline={headline} center />
        <div className="mt-8 sm:mt-12 max-w-[760px] mx-auto divide-y divide-white/10">
          {displayItems.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-1">
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                  className="w-full text-left flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded"
                >
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white group-hover:text-[#4E6EFF] transition-colors pr-2">{faq.question}</span>
                  <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${isOpen ? "bg-[#4E6EFF] border-[#4E6EFF] rotate-45" : "bg-white/10 border-white/20"}`} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6 sm:pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-300 leading-relaxed pr-2 sm:pr-12">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
