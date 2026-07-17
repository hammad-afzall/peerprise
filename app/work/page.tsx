import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import DisclosureNote from "../components/DisclosureNote";
import Reveal from "../components/Reveal";
import TagList from "../components/TagList";
import CTASection from "../components/CTASection";
import { ctas } from "../lib/ctas";
import { workPageExperienceDisclosure } from "../lib/disclosure";
import {
  conciseWorkCaseStudies,
  featuredWorkCaseStudy,
  mediumWorkCaseStudies,
  workCapabilitySummary,
  workFinalCta,
  workPageHero,
} from "../lib/work";

export const metadata: Metadata = {
  title: "Selected Work",
  description: workPageHero.supporting,
};

const allStudies = [featuredWorkCaseStudy, ...mediumWorkCaseStudies, ...conciseWorkCaseStudies];

/**
 * Work — Studiova projects layout: display hero + square project cards.
 */
export default function SelectedWorkPage() {
  return (
    <>
      <PageHero
        supporting="A showcase of engineering depth, delivery discipline, and results across complex digital systems."
        highlight="engineering depth"
        headline="Work"
        subtext={workPageHero.supporting}
        primaryCta={ctas.discussSoftware}
        secondaryCta={ctas.discussPartnership}
        size="display"
      />

      <section className="bg-[#f4f8fa] py-10 md:py-14" aria-labelledby="work-disclosure-heading">
        <div className="site-container max-w-[880px]">
          <h2 id="work-disclosure-heading" className="sr-only">
            Selected team experience disclosure
          </h2>
          <DisclosureNote variant="light">{workPageExperienceDisclosure}</DisclosureNote>
        </div>
      </section>

      <PageSection
        number="01"
        badge="Portfolio"
        headline="Selected team experience"
        intro="Case studies from members of the Peerprise engineering team across products, platforms and operational systems."
        id="work-projects-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-3 md:gap-7"
          role="list"
        >
          {allStudies.map((study, index) => (
            <Reveal key={study.id} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "group flex h-full flex-col overflow-hidden",
                  index === 0 ? "bg-[#1f2a2e] text-white sm:col-span-2 xl:col-span-2" : "bg-[#f4f8fa] text-[#1f2a2e]",
                ].join(" ")}
              >
                <div
                  className={[
                    "relative flex min-h-[180px] items-end overflow-hidden p-6 lg:min-h-[220px] lg:p-8",
                    index === 0
                      ? "bg-gradient-to-br from-accent/30 via-[#1f2a2e] to-black"
                      : "bg-gradient-to-br from-accent/40 via-[#f4f8fa] to-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "text-5xl font-bold opacity-30 md:text-6xl",
                      index === 0 ? "text-white" : "text-[#1f2a2e]",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
                  <h3 className="m-0 text-2xl font-bold tracking-tight md:text-3xl">
                    {study.title}
                  </h3>
                  <p
                    className={[
                      "m-0 text-base leading-relaxed md:text-lg",
                      index === 0 ? "text-white/70" : "text-[#1f2a2e]/70",
                    ].join(" ")}
                  >
                    {study.context}
                  </p>
                  <TagList
                    tags={[...study.tags]}
                    variant={index === 0 ? "dark" : "light"}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="02"
        badge="Capabilities"
        headline="Capabilities demonstrated across this experience."
        id="work-capabilities-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:grid-cols-3"
          role="list"
        >
          {workCapabilitySummary.map((item, index) => (
            <Reveal key={item} as="li" delayMs={40 + index * 40}>
              <div className="flex items-start gap-3 bg-white p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/right-check.svg" alt="" width={18} height={18} className="mt-1 shrink-0" />
                <span className="text-base font-medium text-[#1f2a2e]">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <CTASection
        headline={workFinalCta.headline}
        primaryCta={ctas.discussSoftware}
        secondaryCta={ctas.discussPartnership}
        variant="dark"
        id="work-final-cta"
        number="03"
      />
    </>
  );
}
