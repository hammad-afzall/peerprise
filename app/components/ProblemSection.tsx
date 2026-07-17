import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { homepageProblems } from "../lib/homepage";

/**
 * Problem section — Studiova numbered header + square mosaic cards.
 */
export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="section-padding bg-white text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="01" badge={homepageProblems.eyebrow} />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-5">
            <h2
              id="problem-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepageProblems.headline}
            </h2>
            <p className="m-0 max-w-2xl text-lg text-[#1f2a2e]/70">
              {homepageProblems.intro}
            </p>
          </Reveal>
        </div>

        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 md:gap-7"
          role="list"
        >
          {homepageProblems.cards.map((card, index) => (
            <Reveal key={card.title} as="li" delayMs={100 + index * 80}>
              <article
                className={[
                  "flex h-full flex-col gap-6 p-6 lg:p-8",
                  index % 2 === 0
                    ? "bg-accent text-[#1f2a2e]"
                    : "bg-[#1f2a2e] text-white",
                ].join(" ")}
              >
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl lg:text-[28px]">
                  {card.title}
                </h3>
                <p
                  className={[
                    "m-0 text-base leading-relaxed md:text-lg",
                    index % 2 === 0 ? "text-[#1f2a2e]/80" : "text-white/70",
                  ].join(" ")}
                >
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
