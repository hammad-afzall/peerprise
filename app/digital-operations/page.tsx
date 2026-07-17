import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import ArrowButton from "../components/ArrowButton";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { services } from "../lib/services";
import {
  digitalOperationsBoundaries,
  digitalOperationsFaqs,
  digitalOperationsFinalCta,
  digitalOperationsHero,
  digitalOperationsProcess,
  digitalOperationsRelatedIds,
  digitalOperationsSituations,
  digitalOperationsSupport,
} from "../lib/digital-operations";

export const metadata: Metadata = {
  title: "Digital Operations",
  description:
    "Peerprise supports the practical technical work between your website, inboxes, forms, accounts and third-party platforms so everyday digital operations remain reliable.",
};

export default function DigitalOperationsPage() {
  const relatedServices = digitalOperationsRelatedIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <>
      <PageHero
        supporting="Keep the tools behind your business connected, documented and under control."
        highlight="connected, documented and under control"
        headline="Digital Operations"
        subtext={digitalOperationsHero.supporting}
        primaryCta={digitalOperationsHero.primaryCta}
        secondaryCta={digitalOperationsHero.secondaryCta}
        size="standard"
      />

      <PageSection
        number="01"
        badge={digitalOperationsSupport.eyebrow}
        headline={digitalOperationsSupport.headline}
        id="digital-ops-support-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
          role="list"
        >
          {digitalOperationsSupport.items.map((item, index) => (
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
      </PageSection>

      <PageSection
        number="02"
        badge={digitalOperationsSituations.eyebrow}
        headline={digitalOperationsSituations.headline}
        id="digital-ops-situations-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {digitalOperationsSituations.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "flex h-full flex-col gap-4 p-6 lg:p-8",
                  index % 2 === 0 ? "bg-accent" : "bg-[#f4f8fa]",
                ].join(" ")}
              >
                <h3 className="m-0 text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/80 md:text-lg">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="03"
        badge={digitalOperationsBoundaries.eyebrow}
        headline={digitalOperationsBoundaries.headline}
        intro={digitalOperationsBoundaries.copy}
        id="digital-ops-boundaries-heading"
        tone="gray"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col gap-3 bg-white p-6 lg:p-8">
              <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                Not included in Digital Operations
              </h3>
              <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/70 md:text-lg">
                {digitalOperationsBoundaries.exclusion}
              </p>
            </article>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="flex h-full flex-col justify-between gap-5 bg-[#1f2a2e] p-6 lg:p-8">
              <p className="m-0 text-base leading-relaxed text-white/70 md:text-lg">
                If an operational problem cannot be solved reliably through configuration or a
                contained integration, Peerprise can scope a custom software solution.
              </p>
              <ArrowButton href={digitalOperationsBoundaries.engineeringCta.href} variant="on-dark">
                {digitalOperationsBoundaries.engineeringCta.label}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection
        number="04"
        badge={digitalOperationsProcess.eyebrow}
        headline={digitalOperationsProcess.headline}
        id="digital-ops-process-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 md:gap-7"
          role="list"
        >
          {digitalOperationsProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={60 + index * 70}>
              <article className="flex h-full flex-col gap-4 border border-white/12 p-6 lg:p-8">
                <span className="text-3xl font-bold text-accent">{step.number}</span>
                <h3 className="m-0 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-white/70">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="05"
        badge="Related services"
        headline="Digital operations sits between managed support and custom engineering."
        id="digital-ops-related-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-7"
          role="list"
        >
          {relatedServices.map((service, index) => (
            <Reveal key={service.id} as="li" delayMs={60 + index * 70}>
              <Link href={service.href} className="group flex h-full flex-col justify-between gap-6 bg-[#f4f8fa] p-6 lg:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                    {service.approvedLabel}
                  </h3>
                  <p className="m-0 text-base text-[#1f2a2e]/70">{service.navDescription}</p>
                </div>
                <span className="inline-flex items-center text-[15px] font-bold text-[#1f2a2e]">
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
        items={digitalOperationsFaqs}
        eyebrow="Common questions"
        headline="Digital operations questions"
        variant="light"
        number="06"
      />

      <CTASection
        headline={digitalOperationsFinalCta.headline}
        primaryCta={digitalOperationsFinalCta.primaryCta}
        secondaryCta={digitalOperationsFinalCta.secondaryCta}
        variant="dark"
        id="digital-ops-final-cta"
        number="07"
      />
    </>
  );
}
