import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ArrowButton from "./ArrowButton";
import CountUp from "./CountUp";
import { homepageStats } from "../lib/homepage";

/**
 * Stats & facts — exact Studiova section 01: label + line-art watermark left,
 * headline + counted stats over thin top rules right, lime pill CTA.
 */
export default function StatsIntro() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="section-padding bg-white text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:gap-14">
          <div className="relative xl:col-span-4">
            <Reveal>
              <SectionLabel number="01" badge={homepageStats.eyebrow} />
            </Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/primary-leaf.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none mt-10 hidden w-[360px] max-w-full opacity-[0.07] grayscale xl:block dark:opacity-20 dark:grayscale-0"
            />
          </div>

          <div className="xl:col-span-8">
            <Reveal delayMs={80} className="flex flex-col gap-5">
              <h2
                id="stats-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageStats.headline}
              </h2>
              <p className="m-0 max-w-2xl text-base text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                {homepageStats.intro}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
              {homepageStats.stats.map((stat, index) => (
                <Reveal key={stat.label} delayMs={60 + index * 90}>
                  <div className="border-t border-[#1f2a2e]/15 pt-6 dark:border-white/15">
                    <p className="m-0 text-5xl font-bold tracking-tight md:text-6xl">
                      <CountUp value={stat.value} />
                    </p>
                    <p className="mt-3 m-0 max-w-[26ch] text-sm text-[#1f2a2e]/70 md:text-base dark:text-white/70">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delayMs={200} className="mt-12">
              <ArrowButton href="/about">More About Peerprise</ArrowButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
