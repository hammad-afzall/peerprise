import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { services } from "../lib/services";
import {
  socialPresenceBoundaries,
  socialPresenceClientResponsibilities,
  socialPresenceFinalCta,
  socialPresenceFaqs,
  socialPresenceHero,
  socialPresenceIncluded,
  socialPresenceProcess,
  socialPresenceRelatedIds,
} from "../lib/social-presence";

export const metadata: Metadata = {
  title: "Social Presence Support",
  description:
    "Peerprise helps businesses organise, prepare, approve and publish regular social content while keeping profiles current and on-brand.",
};

export default function SocialPresenceSupportPage() {
  const relatedServices = socialPresenceRelatedIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <>
      <PageHero
        supporting="A structured publishing workflow so your channels stay current without adding another daily task."
        highlight="structured publishing workflow"
        headline="Social Presence"
        subtext={socialPresenceHero.supporting}
        primaryCta={socialPresenceHero.primaryCta}
        secondaryCta={socialPresenceHero.secondaryCta}
        size="standard"
      />

      <PageSection
        number="01"
        badge={socialPresenceIncluded.eyebrow}
        headline={socialPresenceIncluded.headline}
        intro={socialPresenceIncluded.platformsNote}
        id="social-included-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:gap-5"
          role="list"
        >
          {socialPresenceIncluded.items.map((item, index) => (
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

      <PageSection
        number="02"
        badge={socialPresenceBoundaries.eyebrow}
        headline={socialPresenceBoundaries.headline}
        intro={socialPresenceBoundaries.intro}
        id="social-boundaries-heading"
        tone="studio"
      >
        <Reveal>
          <article className="border border-white/12 p-6 lg:p-10">
            <h3 className="m-0 mb-5 text-xl font-bold tracking-tight text-white md:text-2xl">
              {socialPresenceBoundaries.exclusionsIntro}
            </h3>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2" role="list">
              {socialPresenceBoundaries.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white/70">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </PageSection>

      <PageSection
        number="03"
        badge={socialPresenceClientResponsibilities.eyebrow}
        headline={socialPresenceClientResponsibilities.headline}
        id="social-client-heading"
        tone="white"
      >
        <Reveal>
          <p className="m-0 max-w-[820px] text-xl leading-relaxed text-[#1f2a2e]/80 md:text-2xl dark:text-white/80">
            {socialPresenceClientResponsibilities.copy}
          </p>
        </Reveal>
      </PageSection>

      <PageSection
        number="04"
        badge={socialPresenceProcess.eyebrow}
        headline={socialPresenceProcess.headline}
        id="social-process-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-5 md:gap-6"
          role="list"
        >
          {socialPresenceProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={50 + index * 60}>
              <article className="flex h-full flex-col gap-3 bg-white p-5 lg:p-6 dark:bg-[#273338]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#1f2a2e]">
                  {step.number}
                </span>
                <h3 className="m-0 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-[#1f2a2e]/70 dark:text-white/70">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="05"
        badge="Related services"
        headline="Often combined with website care and digital operations."
        id="social-related-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {relatedServices.map((service, index) => (
            <Reveal key={service.id} as="li" delayMs={60 + index * 70}>
              <Link href={service.href} className="group flex h-full flex-col justify-between gap-6 bg-[#f4f8fa] p-6 lg:p-8 dark:bg-[#1f2a2e]">
                <div className="flex flex-col gap-3">
                  <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                    {service.approvedLabel}
                  </h3>
                  <p className="m-0 text-base text-[#1f2a2e]/70 dark:text-white/70">{service.navDescription}</p>
                </div>
                <span className="inline-flex items-center text-[15px] font-bold text-[#1f2a2e] dark:text-white">
                  {service.linkLabel}
                  <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <FAQ
        items={socialPresenceFaqs}
        eyebrow="Common questions"
        headline="Social presence questions"
        variant="light"
        number="06"
      />

      <CTASection
        headline={socialPresenceFinalCta.headline}
        primaryCta={socialPresenceFinalCta.primaryCta}
        secondaryCta={socialPresenceFinalCta.secondaryCta}
        variant="dark"
        id="social-presence-final-cta"
        number="07"
      />
    </>
  );
}
