import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import ArrowButton from "../components/ArrowButton";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { ctas } from "../lib/ctas";
import {
  engineeringPartnershipsAudience,
  engineeringPartnershipsCapabilities,
  engineeringPartnershipsCapabilityGroups,
  engineeringPartnershipsFaqs,
  engineeringPartnershipsFinalCta,
  engineeringPartnershipsHero,
  engineeringPartnershipsModels,
  engineeringPartnershipsPrinciples,
  engineeringPartnershipsProcess,
} from "../lib/engineering-partnerships";

export const metadata: Metadata = {
  title: "Engineering Partnerships",
  description:
    "Peerprise helps agencies, software companies and internal product teams deliver more work without lowering engineering standards or committing to permanent hiring before the need is clear.",
};

export default function EngineeringPartnershipsPage() {
  return (
    <>
      <PageHero
        supporting="Reliable engineering capacity for agencies and product teams, without a permanent hire."
        highlight="Reliable engineering capacity"
        headline="Engineering Partnerships"
        subtext={engineeringPartnershipsHero.supporting}
        primaryCta={engineeringPartnershipsHero.primaryCta}
        secondaryCta={engineeringPartnershipsHero.secondaryCta}
        size="standard"
      />

      <PageSection
        number="01"
        badge={engineeringPartnershipsAudience.eyebrow}
        headline={engineeringPartnershipsAudience.headline}
        id="ep-audience-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {engineeringPartnershipsAudience.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "flex h-full flex-col gap-4 p-6 lg:p-8",
                  index % 2 === 0
                    ? "bg-accent text-[#1f2a2e]"
                    : "bg-white dark:bg-[#273338] dark:text-white",
                ].join(" ")}
              >
                <h3 className="m-0 text-xl font-bold md:text-2xl">{item.title}</h3>
                <p
                  className={[
                    "m-0 text-base leading-relaxed md:text-lg",
                    index % 2 === 0
                      ? "text-[#1f2a2e]/80"
                      : "text-[#1f2a2e]/80 dark:text-white/80",
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
        number="02"
        badge={engineeringPartnershipsModels.eyebrow}
        headline={engineeringPartnershipsModels.headline}
        id="ep-models-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {engineeringPartnershipsModels.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article className="flex h-full flex-col gap-4 border border-white/12 p-6 lg:p-8">
                <h3 className="m-0 text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                <p className="m-0 text-base leading-relaxed text-white/70 md:text-lg">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="03"
        badge={engineeringPartnershipsCapabilities.eyebrow}
        headline={engineeringPartnershipsCapabilities.headline}
        id="ep-capabilities-heading"
        tone="white"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {engineeringPartnershipsCapabilityGroups.map((group, groupIndex) => (
            <Reveal key={group[0]} delayMs={60 + groupIndex * 80}>
              <ul className="m-0 flex h-full list-none flex-col gap-3 bg-[#f4f8fa] p-6 lg:p-8 dark:bg-[#1f2a2e]" role="list">
                {group.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1f2a2e]/80 dark:text-white/80">
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
        <Reveal delayMs={200} className="mt-8">
          <ArrowButton href={ctas.viewSelectedWork.href}>{ctas.viewSelectedWork.label}</ArrowButton>
        </Reveal>
      </PageSection>

      <PageSection
        number="04"
        badge={engineeringPartnershipsProcess.eyebrow}
        headline={engineeringPartnershipsProcess.headline}
        id="ep-process-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-5"
          role="list"
        >
          {engineeringPartnershipsProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={50 + index * 60}>
              <article className="flex h-full flex-col gap-3 border border-white/12 p-5 lg:p-6">
                <span className="text-2xl font-bold text-accent">{step.number}</span>
                <h3 className="m-0 text-lg font-bold text-white">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-white/70">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="05"
        badge={engineeringPartnershipsPrinciples.eyebrow}
        headline={engineeringPartnershipsPrinciples.headline}
        id="ep-principles-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:gap-5"
          role="list"
        >
          {engineeringPartnershipsPrinciples.items.map((item, index) => (
            <Reveal key={item} as="li" delayMs={30 + index * 30}>
              <div className="flex items-start gap-3 bg-white p-5 dark:bg-[#273338]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/right-check.svg" alt="" width={18} height={18} className="mt-1 shrink-0" />
                <span className="text-base font-medium text-[#1f2a2e] dark:text-white">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <FAQ
        items={engineeringPartnershipsFaqs}
        eyebrow="Common questions"
        headline="Partnership questions"
        variant="light"
        number="06"
      />

      <CTASection
        headline={engineeringPartnershipsFinalCta.headline}
        subtext={engineeringPartnershipsFinalCta.copy}
        primaryCta={engineeringPartnershipsFinalCta.primaryCta}
        secondaryCta={engineeringPartnershipsFinalCta.secondaryCta}
        variant="dark"
        id="partnerships-final-cta"
        number="07"
      />
    </>
  );
}
