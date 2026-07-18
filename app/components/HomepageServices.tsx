"use client";

import { useRef, useState, type MouseEvent, type FocusEvent } from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepageServices } from "../lib/services";
import { homepageServicesSection } from "../lib/homepage";
import { ctas } from "../lib/ctas";

const managed = homepageServices.filter((s) => s.category === "managed");
const customSoftware = homepageServices.find((s) => s.id === "custom-software");

const rows = [
  ...managed.map((s) => ({
    title: s.approvedLabel,
    description: s.homepageDescription,
    href: s.href,
  })),
  customSoftware
    ? {
        title: customSoftware.approvedLabel,
        description: customSoftware.homepageDescription,
        href: customSoftware.href,
      }
    : null,
].filter(Boolean) as { title: string; description: string; href: string }[];

/** Media wash per active row — swaps like Studiova's service image. */
const ROW_MEDIA = [
  "radial-gradient(circle at 30% 20%, rgba(193,255,114,0.45), transparent 55%), linear-gradient(160deg, #273338, #0a0a0a)",
  "radial-gradient(circle at 70% 30%, rgba(193,255,114,0.35), transparent 50%), linear-gradient(200deg, #365564, #10171a)",
  "radial-gradient(circle at 40% 80%, rgba(193,255,114,0.4), transparent 55%), linear-gradient(140deg, #1f2a2e, #000)",
  "radial-gradient(circle at 80% 70%, rgba(193,255,114,0.5), transparent 60%), linear-gradient(180deg, #273338, #1f2a2e)",
];

/**
 * What Peerprise does — exact Studiova section 03: teal-charcoal surface,
 * absolute left media that slides to the hovered row (translateY -40%),
 * and divider rows where only the active row renders its description.
 */
export default function HomepageServices() {
  const [active, setActive] = useState(0);
  const [mediaTop, setMediaTop] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  function activateRow(
    index: number,
    event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
  ) {
    setActive(index);
    const wrap = contentRef.current;
    if (!wrap) return;
    const rowTop =
      event.currentTarget.getBoundingClientRect().top -
      wrap.getBoundingClientRect().top;
    setMediaTop(Math.max(0, Math.round(rowTop)));
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[#1f2a2e] text-white"
    >
      <div className="site-container flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-start gap-8 xl:flex-row">
          <Reveal>
            <SectionLabel
              number="03"
              badge={homepageServicesSection.eyebrow}
              tone="dark"
            />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-5">
            <h2
              id="services-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepageServicesSection.headline}
            </h2>
            <p className="m-0 max-w-2xl text-base text-white/70 md:text-lg">
              {homepageServicesSection.intro}
            </p>
          </Reveal>
        </div>

        <div
          ref={contentRef}
          className="relative flex flex-col gap-10 md:flex-row 2xl:gap-56"
        >
          <div className="relative w-full md:max-w-sm md:shrink-0">
            <div
              className="relative z-10 h-72 w-full transition-all duration-300 md:absolute md:h-80 md:-translate-y-[40%]"
              style={{ top: mediaTop }}
            >
              <div className="relative h-full overflow-hidden">
                {rows.map((row, index) => (
                  <div
                    key={row.href}
                    className={[
                      "absolute inset-0 transition-opacity duration-500",
                      index === active ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: ROW_MEDIA[index % ROW_MEDIA.length] }}
                    />
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.14) 0 1px, transparent 2px)",
                        backgroundSize: "48px 48px, 32px 32px",
                      }}
                    />
                    <p className="absolute bottom-6 left-6 right-6 m-0 text-xl font-bold text-white">
                      {row.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-16">
            <div className="flex flex-col">
              {rows.map((row, index) => {
                const isActive = index === active;
                return (
                  <Link
                    key={row.href}
                    href={row.href}
                    onMouseEnter={(event) => activateRow(index, event)}
                    onFocus={(event) => activateRow(index, event)}
                    className="group flex flex-col items-start justify-between gap-3 border-t border-white/12 py-6 last:border-b xl:flex-row xl:items-center xl:gap-10 xl:py-10"
                  >
                    <h3 className="m-0 text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {row.title}
                    </h3>
                    {isActive && (
                      <p className="m-0 max-w-md flex-1 text-sm text-white/70 transition-all duration-300 md:text-base xl:text-right">
                        {row.description}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>

            <Reveal delayMs={120}>
              <ArrowButton href={ctas.exploreServices.href}>
                {ctas.exploreServices.label}
              </ArrowButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
