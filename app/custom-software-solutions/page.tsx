import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import ArrowButton from "../components/ArrowButton";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import {
  customSoftwareBuild,
  customSoftwareBuildGroups,
  customSoftwareCapabilities,
  customSoftwareEngagement,
  customSoftwareEstimate,
  customSoftwareFaqs,
  customSoftwareFinalCta,
  customSoftwareFit,
  customSoftwareHero,
  customSoftwareProcess,
} from "../lib/custom-software";

export const metadata: Metadata = {
  title: "Custom Software",
  description:
    "Peerprise designs and develops practical web applications, internal tools, integrations and automation for organisations that have outgrown generic products or need technology built around a specific process.",
  alternates: {
    canonical: "/custom-software-solutions",
  },
};

export default function CustomSoftwareSolutionsPage() {
  return (
    <>
      <PageHero
        supporting="Practical systems built around the way your business actually works."
        highlight="way your business actually works"
        headline="Custom Software"
        subtext={customSoftwareHero.supporting}
        primaryCta={customSoftwareHero.primaryCta}
        secondaryCta={customSoftwareHero.secondaryCta}
        size="standard"
      />

      <PageSection
        number="01"
        badge={customSoftwareBuild.eyebrow}
        headline={customSoftwareBuild.headline}
        id="custom-build-heading"
        tone="gray"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {customSoftwareBuildGroups.map((group, groupIndex) => (
            <Reveal key={group[0]} delayMs={60 + groupIndex * 80}>
              <ul className="m-0 flex h-full list-none flex-col gap-3 bg-white p-6 lg:p-8" role="list">
                {group.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1f2a2e]/80">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection
        number="02"
        badge={customSoftwareFit.eyebrow}
        headline={customSoftwareFit.headline}
        intro={customSoftwareFit.intro}
        id="custom-fit-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:gap-5"
          role="list"
        >
          {customSoftwareFit.items.map((item, index) => (
            <Reveal key={item} as="li" delayMs={30 + index * 30}>
              <div className="flex items-start gap-3 border border-white/12 p-5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-base text-white/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delayMs={220} className="mt-8">
          <p className="m-0 max-w-[820px] bg-accent p-6 text-xl font-bold leading-snug tracking-tight text-[#1f2a2e] lg:p-8 md:text-2xl">
            {customSoftwareFit.credibility}
          </p>
        </Reveal>
      </PageSection>

      <PageSection
        number="03"
        badge={customSoftwareCapabilities.eyebrow}
        headline={customSoftwareCapabilities.headline}
        id="custom-capabilities-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 md:gap-7"
          role="list"
        >
          {customSoftwareCapabilities.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={50 + index * 50}>
              <article className="flex h-full flex-col gap-3 bg-[#f4f8fa] p-6">
                <h3 className="m-0 text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[#1f2a2e]/70">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="04"
        badge={customSoftwareProcess.eyebrow}
        headline={customSoftwareProcess.headline}
        id="custom-process-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-7"
          role="list"
        >
          {customSoftwareProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={60 + index * 60}>
              <article className="flex h-full flex-col gap-4 bg-white p-6 lg:p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#1f2a2e]">
                  {step.number}
                </span>
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/70">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="05"
        badge={customSoftwareEngagement.eyebrow}
        headline={customSoftwareEngagement.headline}
        id="custom-engagement-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {customSoftwareEngagement.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "flex h-full flex-col gap-3 p-6 lg:p-8",
                  index % 2 === 0 ? "bg-accent text-[#1f2a2e]" : "border border-white/12 text-white",
                ].join(" ")}
              >
                <h3 className="m-0 text-xl font-bold md:text-2xl">{item.title}</h3>
                <p
                  className={[
                    "m-0 text-base leading-relaxed md:text-lg",
                    index % 2 === 0 ? "text-[#1f2a2e]/80" : "text-white/70",
                  ].join(" ")}
                >
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="06"
        badge={customSoftwareEstimate.eyebrow}
        headline={customSoftwareEstimate.headline}
        intro={customSoftwareEstimate.intro}
        id="custom-estimate-heading"
        tone="white"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ul
              className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2"
              role="list"
            >
              {customSoftwareEstimate.items.map((item, index) => (
                <Reveal key={item} as="li" delayMs={30 + index * 30}>
                  <div className="flex items-start gap-3 bg-[#f4f8fa] p-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-base text-[#1f2a2e]/80">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="lg:col-span-5" delayMs={100}>
            <div className="flex h-full flex-col justify-end">
              <ArrowButton href={customSoftwareEstimate.cta.href}>
                {customSoftwareEstimate.cta.label}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <FAQ
        items={customSoftwareFaqs}
        eyebrow="Common questions"
        headline="Custom software questions"
        variant="light"
        number="07"
      />

      <CTASection
        headline={customSoftwareFinalCta.headline}
        subtext={customSoftwareFinalCta.copy}
        primaryCta={customSoftwareFinalCta.primaryCta}
        secondaryCta={customSoftwareFinalCta.secondaryCta}
        variant="dark"
        id="custom-software-final-cta"
        number="08"
      />
    </>
  );
}
