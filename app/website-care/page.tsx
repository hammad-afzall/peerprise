import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { services } from "../lib/services";
import {
  websiteCareBenefits,
  websiteCareFinalCta,
  websiteCareFaqs,
  websiteCareHandle,
  websiteCareHero,
  websiteCarePlatforms,
  websiteCareProcess,
  websiteCareRelatedIds,
  websiteCareScope,
} from "../lib/website-care";

export const metadata: Metadata = {
  title: "Website Care and Support",
  description:
    "Keep your website maintained, current and working properly without relying on ad hoc freelancers or waiting weeks for routine updates.",
};

export default function WebsiteCarePage() {
  const relatedServices = websiteCareRelatedIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <>
      <PageHero
        supporting="Ongoing maintenance and support from a technical team, not an ad hoc freelancer."
        highlight="technical team"
        headline="Website Care"
        subtext={websiteCareHero.supporting}
        primaryCta={websiteCareHero.primaryCta}
        secondaryCta={websiteCareHero.secondaryCta}
        size="standard"
      />

      <PageSection
        number="01"
        badge={websiteCareHandle.eyebrow}
        headline={websiteCareHandle.headline}
        id="website-care-handle-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
          role="list"
        >
          {websiteCareHandle.items.map((item, index) => (
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
        badge={websiteCareBenefits.eyebrow}
        headline={websiteCareBenefits.headline}
        id="website-care-benefits-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {websiteCareBenefits.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 70}>
              <article
                className={[
                  "flex h-full flex-col gap-4 p-6 lg:p-8",
                  index % 2 === 0
                    ? "bg-accent text-[#1f2a2e]"
                    : "bg-[#f4f8fa] dark:bg-[#1f2a2e] dark:text-white",
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
        number="03"
        badge={websiteCarePlatforms.eyebrow}
        headline={websiteCarePlatforms.headline}
        id="website-care-platforms-heading"
        tone="gray"
      >
        <Reveal>
          <p className="m-0 max-w-[820px] text-xl leading-relaxed text-[#1f2a2e]/80 md:text-2xl dark:text-white/80">
            {websiteCarePlatforms.copy}
          </p>
        </Reveal>
      </PageSection>

      <PageSection
        number="04"
        badge={websiteCareScope.eyebrow}
        headline={websiteCareScope.headline}
        intro={websiteCareScope.intro}
        id="website-care-scope-heading"
        tone="white"
      >
        <Reveal delayMs={100}>
          <article className="bg-[#f4f8fa] p-6 lg:p-10 dark:bg-[#1f2a2e]">
            <h3 className="m-0 mb-5 text-xl font-bold tracking-tight md:text-2xl">
              {websiteCareScope.separatelyHeadline}
            </h3>
            <ul
              className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2"
              role="list"
            >
              {websiteCareScope.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#1f2a2e]/70 dark:text-white/70">
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
        number="05"
        badge={websiteCareProcess.eyebrow}
        headline={websiteCareProcess.headline}
        id="website-care-process-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 md:gap-7"
          role="list"
        >
          {websiteCareProcess.steps.map((step, index) => (
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
        number="06"
        badge="Related services"
        headline="Other Peerprise services that often sit alongside website care."
        id="website-care-related-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-7"
          role="list"
        >
          {relatedServices.map((service, index) => (
            <Reveal key={service.id} as="li" delayMs={60 + index * 70}>
              <Link href={service.href} className="group flex h-full flex-col justify-between gap-6 bg-white p-6 lg:p-8 dark:bg-[#273338]">
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
        items={websiteCareFaqs}
        eyebrow="Common questions"
        headline="Website care questions"
        variant="light"
        number="07"
      />

      <CTASection
        headline={websiteCareFinalCta.headline}
        subtext={websiteCareFinalCta.copy}
        primaryCta={websiteCareFinalCta.primaryCta}
        secondaryCta={websiteCareFinalCta.secondaryCta}
        variant="dark"
        id="website-care-final-cta"
        number="08"
      />
    </>
  );
}
