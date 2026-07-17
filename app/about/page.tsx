import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import ArrowButton from "../components/ArrowButton";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import CTASection from "../components/CTASection";
import { ctas } from "../lib/ctas";
import {
  aboutFinalCta,
  aboutHero,
  aboutPrinciples,
  aboutTeamStructure,
  aboutTechnicalLeadership,
  aboutWhereWeWork,
  aboutWhyExists,
} from "../lib/about";

export const metadata: Metadata = {
  title: "About Peerprise",
  description: aboutHero.supporting,
};

const marqueeItems = [
  "Website care",
  "Social presence",
  "Digital operations",
  "Custom software",
  "Engineering partnerships",
  "Integrations",
  "Production support",
] as const;

/**
 * About — Studiova about-page structure with Peerprise content.
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        supporting="We craft reliable digital systems that keep websites, channels and operations working."
        highlight="reliable digital systems"
        headline="About"
        subtext={aboutHero.supporting}
        primaryCta={ctas.startConversation}
        secondaryCta={ctas.exploreServices}
        size="display"
      />

      {/* Intro — Studiova “Studiova.” block → Peerprise. */}
      <section className="section-padding bg-white text-[#1f2a2e]" aria-labelledby="about-intro">
        <div className="site-container">
          <Reveal>
            <h2
              id="about-intro"
              className="m-0 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Peerprise.
            </h2>
          </Reveal>
          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-10">
            <Reveal delayMs={80}>
              <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]/80">
                {aboutWhyExists.problem}
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]/80">
                {aboutWhyExists.response}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats-style strip from where we work */}
      <section
        aria-labelledby="about-where-heading"
        className="section-padding bg-[#f4f8fa] text-[#1f2a2e]"
      >
        <div className="site-container">
          <div className="mb-14 flex flex-col items-start gap-8 xl:mb-20 xl:flex-row">
            <Reveal>
              <SectionLabel number="01" badge={aboutWhereWeWork.eyebrow} />
            </Reveal>
            <Reveal delayMs={80} className="flex flex-col gap-4">
              <h2
                id="about-where-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {aboutWhereWeWork.headline}
              </h2>
              <p className="m-0 max-w-2xl text-lg text-[#1f2a2e]/70">{aboutWhereWeWork.copy}</p>
            </Reveal>
          </div>
          <ul
            className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 xl:grid-cols-4 md:gap-7"
            role="list"
          >
            {aboutWhereWeWork.points.map((point, index) => (
              <Reveal key={point} as="li" delayMs={60 + index * 70}>
                <article
                  className={[
                    "flex h-full min-h-[160px] flex-col justify-end gap-4 p-6 lg:p-8",
                    index === 0 ? "bg-accent" : "bg-white",
                  ].join(" ")}
                >
                  <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">{point}</h3>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Team structure */}
      <section
        aria-labelledby="about-team-heading"
        className="section-padding bg-white text-[#1f2a2e]"
      >
        <div className="site-container">
          <div className="mb-14 flex flex-col items-start gap-8 xl:mb-20 xl:flex-row">
            <Reveal>
              <SectionLabel number="02" badge={aboutTeamStructure.eyebrow} />
            </Reveal>
            <Reveal delayMs={80} className="flex flex-col gap-4">
              <h2
                id="about-team-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {aboutTeamStructure.headline}
              </h2>
              <p className="m-0 max-w-2xl text-lg text-[#1f2a2e]/70">
                {aboutTeamStructure.intro}
              </p>
            </Reveal>
          </div>

          <ul
            className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
            role="list"
          >
            <Reveal as="li" delayMs={80}>
              <article className="flex h-full flex-col gap-6 bg-[#f4f8fa] p-6 lg:p-10">
                <p className="m-0 text-sm font-semibold uppercase tracking-wide text-[#1f2a2e]/50">
                  Recurring work
                </p>
                <h3 className="m-0 text-2xl font-bold md:text-3xl">
                  {aboutTeamStructure.support.title}
                </h3>
                <p className="m-0 text-lg text-[#1f2a2e]/70">
                  {aboutTeamStructure.support.description}
                </p>
              </article>
            </Reveal>
            <Reveal as="li" delayMs={140}>
              <article className="flex h-full flex-col gap-6 bg-[#1f2a2e] p-6 text-white lg:p-10">
                <p className="m-0 text-sm font-semibold uppercase tracking-wide text-accent">
                  Technical depth
                </p>
                <h3 className="m-0 text-2xl font-bold md:text-3xl">
                  {aboutTeamStructure.engineers.title}
                </h3>
                <p className="m-0 text-lg text-white/70">
                  {aboutTeamStructure.engineers.description}
                </p>
              </article>
            </Reveal>
          </ul>
          <Reveal delayMs={160}>
            <p className="mt-8 m-0 max-w-2xl text-lg text-[#1f2a2e]/70">
              {aboutTeamStructure.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Technical leadership */}
      <section
        aria-labelledby="about-leadership-heading"
        className="section-padding bg-[#f4f8fa] text-[#1f2a2e]"
      >
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel number="03" badge={aboutTechnicalLeadership.eyebrow} />
              </Reveal>
              <Reveal delayMs={80} className="mt-8 flex flex-col gap-5">
                <h2
                  id="about-leadership-heading"
                  className="m-0 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                >
                  {aboutTechnicalLeadership.headline}
                </h2>
                <p className="m-0 text-lg text-[#1f2a2e]/70">
                  {aboutTechnicalLeadership.leadership}
                </p>
                <p className="m-0 text-lg text-[#1f2a2e]/70">
                  {aboutTechnicalLeadership.network}
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <ArrowButton href={ctas.viewSelectedWork.href}>
                    {ctas.viewSelectedWork.label}
                  </ArrowButton>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
                <Reveal delayMs={100}>
                  <article className="bg-accent p-6 lg:p-8">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#1f2a2e]/60">
                      Leadership experience
                    </p>
                    <ul className="m-0 flex list-none flex-col gap-3 p-0">
                      {aboutTechnicalLeadership.leadershipAreas.map((area) => (
                        <li key={area} className="flex items-start gap-3 text-base font-medium">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/icons/right-check.svg" alt="" width={18} height={18} className="mt-0.5" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
                <Reveal delayMs={160}>
                  <article className="bg-white p-6 lg:p-8">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#1f2a2e]/50">
                      Engineering network
                    </p>
                    <ul className="m-0 flex list-none flex-col gap-3 p-0">
                      {aboutTechnicalLeadership.networkAreas.map((area) => (
                        <li key={area} className="flex items-start gap-3 text-base font-medium">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/icons/right-check.svg" alt="" width={18} height={18} className="mt-0.5" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — bordered rows like Studiova services */}
      <section
        aria-labelledby="about-principles-heading"
        className="section-padding bg-[#1f2a2e]"
      >
        <div className="site-container">
          <div className="mb-14 flex flex-col items-start gap-8 xl:mb-20 xl:flex-row">
            <Reveal>
              <SectionLabel number="04" badge={aboutPrinciples.eyebrow} tone="dark" />
            </Reveal>
            <Reveal delayMs={80}>
              <h2
                id="about-principles-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
              >
                {aboutPrinciples.headline}
              </h2>
            </Reveal>
          </div>
          <ul className="m-0 list-none p-0" role="list">
            {aboutPrinciples.items.map((item, index) => (
              <Reveal key={item.title} as="li" delayMs={40 + index * 50}>
                <div className="group border-t border-white/12 py-6 xl:py-8">
                  <div className="flex flex-col justify-between gap-3 xl:flex-row xl:items-end">
                    <h3 className="m-0 text-2xl font-bold text-white transition-colors group-hover:text-accent md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="m-0 max-w-xl text-base text-white/70 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline={aboutFinalCta.headline}
        primaryCta={ctas.startConversation}
        secondaryCta={ctas.exploreServices}
        variant="dark"
        id="about-final-cta"
        number="05"
        eyebrow="Next step"
      />
    </>
  );
}
