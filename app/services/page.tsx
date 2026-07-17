import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import ArrowButton from "../components/ArrowButton";
import Reveal from "../components/Reveal";
import ServiceModel from "../components/ServiceModel";
import CTASection from "../components/CTASection";
import {
  servicesOverviewEngineering,
  servicesOverviewFinalCta,
  servicesOverviewHero,
  servicesOverviewManaged,
  servicesOverviewProgression,
} from "../lib/services-overview";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Peerprise combines managed digital presence support with custom software and engineering partnerships — one partner for day-to-day operations and complex technical delivery.",
};

/**
 * Services — Studiova services list-row pattern with Peerprise content.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        supporting="Support for what you run today. Engineering for what comes next."
        highlight="Engineering"
        headline="Services"
        subtext={servicesOverviewHero.supporting}
        primaryCta={servicesOverviewHero.primaryCta}
        size="display"
      />

      <PageSection
        number="01"
        badge={servicesOverviewManaged.eyebrow}
        headline={servicesOverviewManaged.headline}
        id="managed-services-heading"
        tone="studio"
      >
        <div className="flex flex-col">
          {servicesOverviewManaged.services.map((service, index) => (
            <Reveal key={service.id} delayMs={60 + index * 70}>
              <Link
                href={service.href}
                className="group block border-t border-white/12 py-6 xl:py-10"
              >
                <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
                  <div className="max-w-2xl">
                    <h3 className="m-0 text-[28px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent md:text-4xl">
                      {service.approvedLabel}
                    </h3>
                    <p className="mt-3 m-0 max-w-xl text-base text-white/70 md:text-lg">
                      {service.description}
                    </p>
                  </div>
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-[#1f2a2e] transition-transform duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delayMs={200} className="border-t border-white/12 pt-10">
            <ArrowButton href={servicesOverviewManaged.cta.href}>
              {servicesOverviewManaged.cta.label}
            </ArrowButton>
          </Reveal>
        </div>
      </PageSection>

      <PageSection
        number="02"
        badge={servicesOverviewEngineering.eyebrow}
        headline={servicesOverviewEngineering.headline}
        id="engineering-services-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 lg:grid-cols-2 md:gap-7"
          role="list"
        >
          {servicesOverviewEngineering.services.map((service, index) => (
            <Reveal key={service.id} as="li" delayMs={80 + index * 90}>
              <Link href={service.href} className="group block h-full">
                <article
                  className={[
                    "flex h-full flex-col gap-6 p-6 lg:p-10 transition-transform duration-500 group-hover:-translate-y-1",
                    index === 0 ? "bg-accent text-[#1f2a2e]" : "bg-white text-[#1f2a2e]",
                  ].join(" ")}
                >
                  <h3 className="m-0 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.approvedLabel}
                  </h3>
                  <p
                    className={[
                      "m-0 flex-1 text-base leading-relaxed md:text-lg",
                      index === 0 ? "text-[#1f2a2e]/80" : "text-[#1f2a2e]/70",
                    ].join(" ")}
                  >
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[15px] font-bold">
                    {service.linkLabel}
                    <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </ul>
        <Reveal delayMs={160} className="mt-10">
          <ArrowButton href={servicesOverviewEngineering.cta.href}>
            {servicesOverviewEngineering.cta.label}
          </ArrowButton>
        </Reveal>
      </PageSection>

      <ServiceModel
        eyebrow={servicesOverviewProgression.eyebrow}
        headline={servicesOverviewProgression.headline}
        stages={servicesOverviewProgression.stages}
        id="services-fit-heading"
      />

      <CTASection
        headline={servicesOverviewFinalCta.headline}
        subtext={servicesOverviewFinalCta.copy}
        primaryCta={servicesOverviewFinalCta.primaryCta}
        variant="dark"
        id="services-final-cta-heading"
        number="04"
      />
    </>
  );
}
