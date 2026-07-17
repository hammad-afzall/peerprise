import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepageEngineering } from "../lib/homepage";
import { ctas } from "../lib/ctas";

/**
 * Engineering credibility — Studiova about/why-us mosaic with Peerprise copy.
 */
export default function TechnicalCredibility() {
  return (
    <section
      aria-labelledby="credibility-heading"
      className="section-padding bg-[#f4f8fa] text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="05" badge={homepageEngineering.eyebrow} />
            </Reveal>
            <Reveal delayMs={80} className="mt-8 flex flex-col gap-5 2xl:gap-7">
              <h2
                id="credibility-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageEngineering.headline}
              </h2>
              {homepageEngineering.copy.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="m-0 max-w-sm text-lg text-[#1f2a2e]/70 2xl:max-w-none"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <ArrowButton href={ctas.discussSoftware.href}>
                  {ctas.discussSoftware.label}
                </ArrowButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul
              className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 md:gap-7"
              role="list"
            >
              {homepageEngineering.capabilities.map((capability, index) => (
                <Reveal key={capability} as="li" delayMs={60 + index * 60}>
                  <article
                    className={[
                      "flex h-full min-h-[140px] flex-col justify-end gap-4 p-6",
                      index === 0 ? "bg-accent sm:col-span-2" : "bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/icons/right-check.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="mt-1 shrink-0"
                      />
                      <p className="m-0 text-lg font-semibold leading-snug text-[#1f2a2e]">
                        {capability}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
            <Reveal delayMs={200}>
              <p className="mt-6 m-0 text-base text-[#1f2a2e]/70">
                {homepageEngineering.supportingLine}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
