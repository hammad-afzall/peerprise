"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { BlogHeading } from "../../lib/blog-types";

type Props = {
  headings: BlogHeading[];
  tone?: "light" | "dark";
  variant?: "inline" | "sidebar";
};

export default function TableOfContents({
  headings,
  tone = "light",
  variant = "inline",
}: Props) {
  const items = useMemo(
    () => headings.filter((heading) => heading.level <= 3),
    [headings],
  );
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const isDark = tone === "dark";

  useEffect(() => {
    if (items.length === 0) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const progress = items.length <= 1 ? 0 : ((activeIndex + 1) / items.length) * 100;

  const list = (
    <ol
      className={`relative flex flex-col gap-0.5 border-l pl-0 ${
        isDark ? "border-white/15" : "border-[#E5E7EB]"
      }`}
    >
      <span
        className="absolute left-0 top-0 w-[2px] bg-[#6366F1] transition-[height] duration-200 ease-out motion-reduce:transition-none"
        style={{ height: `${Math.max(12, progress)}%` }}
        aria-hidden="true"
      />
      {items.map((heading) => {
        const active = heading.id === activeId;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={() => setOpen(false)}
              className={`block border-l-2 -ml-px rounded-r-md py-2 text-[15px] leading-snug outline-none transition-colors duration-200 motion-reduce:transition-none focus-visible:bg-[#6366F1]/15 focus-visible:text-[#6366F1] ${
                heading.level === 3 ? "pl-7" : "pl-4"
              } ${
                active
                  ? "border-[#6366F1] font-semibold " +
                    (isDark
                      ? "bg-white/10 text-white"
                      : "bg-[#EEF2FF] text-[#0B1220]")
                  : "border-transparent " +
                    (isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-[#4B5563] hover:text-[#0B1220] hover:bg-[#F3F4F6]")
              }`}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "sidebar") {
    return (
      <nav
        aria-label="Table of contents"
        className="hidden lg:block rounded-[14px] border border-white/10 bg-[#111A2B]/80 p-5"
      >
        <p
          className={`text-[12px] font-semibold uppercase tracking-[0.1em] mb-4 ${
            isDark ? "text-gray-400" : "text-[#5B6472]"
          }`}
        >
          On this page
        </p>
        {list}
      </nav>
    );
  }

  return (
    <div className="lg:hidden mb-8">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 text-left text-[15px] font-semibold text-[#0B1220] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#6366F1]/40"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>On this page</span>
        <svg
          className={`h-4 w-4 text-[#5B6472] transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="mt-3 rounded-[12px] border border-[#E5E7EB] bg-white p-4"
      >
        <nav aria-label="Table of contents">{list}</nav>
      </div>
    </div>
  );
}
