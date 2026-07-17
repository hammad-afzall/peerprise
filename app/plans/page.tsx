import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import ArrowButton from "../components/ArrowButton";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import PlanComparison from "../components/PlanComparison";
import { ctas } from "../lib/ctas";
import {
  plans,
  plansFaqs,
  plansImportantDetails,
  plansNotIncluded,
  plansPageHero,
} from "../lib/plans";

export const metadata: Metadata = {
  title: "Managed Plans",
  description:
    "Clear monthly support for website care, social publishing and digital operations, with defined capacity and responsibilities.",
};

/**
 * Plans — Studiova pricing cards with Peerprise plan content.
 */
export default function PlansPage() {
  return (
    <>
      <PageHero
        supporting="Clear monthly support, matched to the level of ownership you need."
        highlight="monthly support"
        headline="Plans"
        subtext={plansPageHero.supporting}
        primaryCta={ctas.requestDigitalReview}
        size="display"
      />

      <PageSection
        number="01"
        badge="Pricing"
        headline="Managed plan options"
        intro="Each engagement has a documented scope, defined capacity and clear boundaries for additional work."
        id="plans-cards-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-7 p-0 md:grid-cols-2 xl:grid-cols-3"
          role="list"
        >
          {plans.map((plan, index) => (
            <Reveal key={plan.id} as="li" delayMs={80 + index * 90}>
              <article className="flex h-full flex-col gap-10 bg-white p-5 sm:p-8 xl:p-12">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="m-0 text-xl font-bold md:text-2xl">{plan.name}</h3>
                    {plan.badge && (
                      <span className="rounded-full bg-[#1f2a2e] px-3 py-1 text-sm font-medium text-white">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="m-0 text-3xl font-bold tracking-tight md:text-4xl">
                    {plan.price}
                    <span className="ml-2 text-base font-medium text-[#1f2a2e]/60">
                      {plan.period}
                    </span>
                  </p>
                  <p className="m-0 text-base text-[#1f2a2e]/70 md:text-lg">
                    {plan.description}
                  </p>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <p className="mb-4 text-base font-bold">What&apos;s included</p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex shrink-0 rounded-full bg-accent p-1.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/icons/right-check.svg" alt="" width={14} height={14} />
                        </span>
                        <span className="text-base text-[#1f2a2e]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowButton href={plan.ctaHref} fullWidth>
                  {plan.ctaLabel}
                </ArrowButton>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="02"
        badge="Compare"
        headline="Compare managed plan coverage."
        id="plans-compare-heading"
        tone="white"
      >
        <div className="overflow-hidden bg-[#f4f8fa]">
          <PlanComparison variant="light" />
        </div>
      </PageSection>

      <PageSection
        number="03"
        badge={plansImportantDetails.eyebrow}
        headline={plansImportantDetails.headline}
        id="plans-details-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {plansImportantDetails.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "flex h-full flex-col gap-4 p-6 lg:p-8",
                  index % 2 === 0 ? "bg-accent" : "bg-white",
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
        number="04"
        badge={plansNotIncluded.eyebrow}
        headline={plansNotIncluded.headline}
        id="plans-excluded-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2"
          role="list"
        >
          {plansNotIncluded.items.map((item, index) => (
            <Reveal key={item} as="li" delayMs={40 + index * 40}>
              <div className="flex items-start gap-3 border border-white/12 p-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-base text-white/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <FAQ
        items={[...plansFaqs]}
        eyebrow="FAQs"
        headline="Plans questions"
        variant="light"
        number="05"
      />

      <CTASection
        headline="Start with the level of ownership your business needs now."
        primaryCta={ctas.requestDigitalReview}
        secondaryCta={ctas.startConversation}
        variant="dark"
        id="plans-final-cta"
        number="06"
      />
    </>
  );
}
