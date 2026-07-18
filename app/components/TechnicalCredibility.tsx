import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { homepageEngineering, homepageStats } from "../lib/homepage";
import { featuredHomepageReviews } from "../lib/testimonials";
import { ctas } from "../lib/ctas";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

/**
 * Why choose us — exact Studiova section 04 mosaic:
 * left intro column + three-column card collage (lime quote/stat,
 * media + dark stat, outlined stat/brand card).
 */
export default function TechnicalCredibility() {
  const review = featuredHomepageReviews[1];
  const [yearsStat, serviceStat, industriesStat] = homepageStats.stats;

  return (
    <section
      aria-labelledby="credibility-heading"
      className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="04" badge={homepageEngineering.eyebrow} />
            </Reveal>
            <Reveal delayMs={80} className="mt-8 flex flex-col gap-5">
              <h2
                id="credibility-heading"
                className="m-0 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageEngineering.headline}
              </h2>
              <p className="m-0 max-w-sm text-base text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                {homepageEngineering.copy[1]}
              </p>
              <div className="mt-2">
                <ArrowButton href={ctas.discussSoftware.href}>
                  {ctas.discussSoftware.label}
                </ArrowButton>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:col-span-8 xl:grid-cols-3">
            {/* Column 1 — lime quote + counted stat */}
            <Reveal delayMs={60}>
              <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden bg-accent p-6 text-[#1f2a2e]">
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/25"
                  aria-hidden="true"
                />
                <p className="relative m-0 text-base font-semibold leading-relaxed">
                  {review.quote.split(".")[0]}.
                </p>
                <div className="relative">
                  <p className="m-0 text-5xl font-bold tracking-tight">
                    <CountUp value={yearsStat.value} />
                  </p>
                  <p className="mt-2 m-0 text-sm text-[#1f2a2e]/75">
                    {yearsStat.label}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#1f2a2e]/15 pt-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f2a2e] text-sm font-bold text-accent"
                      aria-hidden="true"
                    >
                      {initials(review.name)}
                    </span>
                    <div>
                      <p className="m-0 text-sm font-bold">{review.name}</p>
                      <p className="m-0 text-xs text-[#1f2a2e]/70">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Column 2 — media plane + dark stat card */}
            <Reveal delayMs={140} className="flex h-full flex-col gap-5">
              <div className="relative min-h-[180px] flex-1 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 75% 20%, rgba(193,255,114,0.5), transparent 45%), linear-gradient(160deg, #e9ffcb, #86c14e)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.15) 0 1px, transparent 2px)",
                    backgroundSize: "48px 48px, 32px 32px",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="bg-[#1f2a2e] p-6 text-white">
                <p className="m-0 text-4xl font-bold tracking-tight">
                  <CountUp value={serviceStat.value} />
                </p>
                <p className="mt-2 m-0 text-sm text-white/70">{serviceStat.label}</p>
                <div className="mt-5 flex" aria-hidden="true">
                  {["W", "S", "D", "C"].map((letter, index) => (
                    <span
                      key={letter}
                      className={[
                        "flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1f2a2e] bg-accent text-xs font-bold text-[#1f2a2e]",
                        index > 0 ? "-ml-2" : "",
                      ].join(" ")}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Column 3 — outlined stat + brand card */}
            <Reveal delayMs={220} className="sm:col-span-2 xl:col-span-1">
              <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden border border-[#1f2a2e]/12 bg-white p-6 dark:border-white/15 dark:bg-[#1f2a2e]">
                <div
                  className="pointer-events-none absolute -right-14 top-10 h-48 w-48 rounded-full border border-[#1f2a2e]/10 dark:border-white/10"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-4 top-24 h-28 w-28 rounded-full border border-[#1f2a2e]/10 dark:border-white/10"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="m-0 text-5xl font-bold tracking-tight">
                    <CountUp value={industriesStat.value} />
                  </p>
                  <p className="mt-2 m-0 text-sm text-[#1f2a2e]/70 dark:text-white/70">
                    {industriesStat.label}
                  </p>
                </div>
                <div className="relative">
                  <p className="m-0 text-2xl font-bold tracking-tight">
                    Peerprise<span className="text-accent">.</span>
                  </p>
                  <p className="mt-3 m-0 text-sm leading-relaxed text-[#1f2a2e]/70 dark:text-white/70">
                    {homepageEngineering.supportingLine}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
