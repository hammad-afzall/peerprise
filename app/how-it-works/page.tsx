import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { ctas } from "../lib/ctas";
import {
  howWeWorkEngagementRoutes,
  howWeWorkFinalCta,
  howWeWorkHero,
  howWeWorkManagedProcess,
  howWeWorkPartnershipProcess,
  howWeWorkSoftwareProcess,
  howWeWorkStandards,
} from "../lib/how-we-work";

export const metadata: Metadata = {
  title: "How We Work",
  description: howWeWorkHero.supporting,
};

/**
 * How We Work — Studiova numbered process sections with Peerprise content.
 */
export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        supporting="A delivery process that adapts to the engagement, while keeping scope, access and decisions explicit."
        highlight="scope, access and decisions"
        headline="How We Work"
        subtext={howWeWorkHero.supporting}
        primaryCta={ctas.startConversation}
        size="standard"
        backgroundImage="/how-it-works.jpg"
      />

      <PageSection
        number="01"
        badge="Engagement types"
        headline="Choose the process relevant to your engagement."
        id="engagement-overview-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-7"
          role="list"
        >
          {howWeWorkEngagementRoutes.map((route, index) => (
            <Reveal key={route.id} as="li" delayMs={60 + index * 70}>
              <a
                href={route.href}
                className="group flex h-full flex-col justify-between gap-6 bg-white p-6 lg:p-8 dark:bg-[#1f2a2e]"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="m-0 text-2xl font-bold tracking-tight md:text-3xl">
                    {route.title}
                  </h3>
                  <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                    {route.description}
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
              </a>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="02"
        badge={howWeWorkManagedProcess.eyebrow}
        headline={howWeWorkManagedProcess.headline}
        id="managed-process-heading"
        tone="studio"
      >
        <ul className="m-0 list-none p-0" role="list">
          {howWeWorkManagedProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={40 + index * 40}>
              <div className="flex flex-col gap-3 border-t border-white/12 py-6 sm:flex-row sm:items-baseline sm:gap-8 xl:py-7">
                <span className="shrink-0 text-2xl font-bold text-accent sm:w-16">
                  {step.number}
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="m-0 shrink-0 text-xl font-bold text-white sm:w-56 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="m-0 max-w-xl text-base text-white/70 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="03"
        badge={howWeWorkSoftwareProcess.eyebrow}
        headline={howWeWorkSoftwareProcess.headline}
        intro={howWeWorkSoftwareProcess.note}
        id="software-process-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-7"
          role="list"
        >
          {howWeWorkSoftwareProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={60 + index * 60}>
              <article className="flex h-full flex-col gap-4 bg-white p-6 lg:p-8 dark:bg-[#273338]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#1f2a2e]">
                  {step.number}
                </span>
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="04"
        badge={howWeWorkPartnershipProcess.eyebrow}
        headline={howWeWorkPartnershipProcess.headline}
        id="partnership-process-heading"
        tone="studio"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-5"
          role="list"
        >
          {howWeWorkPartnershipProcess.steps.map((step, index) => (
            <Reveal key={step.title} as="li" delayMs={40 + index * 50}>
              <div className="flex h-full flex-col gap-3 border border-white/12 p-5 lg:p-6">
                <span className="text-2xl font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 text-lg font-bold text-white">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-white/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="05"
        badge={howWeWorkStandards.eyebrow}
        headline={howWeWorkStandards.headline}
        id="working-standards-heading"
        tone="white"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {howWeWorkStandards.items.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={60 + index * 60}>
              <article
                className={[
                  "flex h-full flex-col gap-3 p-6 lg:p-8",
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

      <CTASection
        headline={howWeWorkFinalCta.headline}
        primaryCta={ctas.startConversation}
        variant="dark"
        id="how-we-work-final-cta"
        number="06"
      />
    </>
  );
}
