import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepageProcess } from "../lib/homepage";

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="section-padding bg-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex flex-col items-start gap-8 xl:flex-row">
            <Reveal>
              <SectionLabel number="07" badge={homepageProcess.eyebrow} tone="dark" />
            </Reveal>
            <Reveal delayMs={80}>
              <h2
                id="how-it-works-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
              >
                {homepageProcess.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <ArrowButton href={homepageProcess.cta.href}>
              {homepageProcess.cta.label}
            </ArrowButton>
          </Reveal>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 xl:grid-cols-4 md:gap-7">
          {homepageProcess.steps.map((step, index) => (
            <Reveal key={step.number} as="li" delayMs={80 + index * 80}>
              <article className="flex h-full flex-col gap-5 border border-white/12 p-6 lg:p-8">
                <span className="text-4xl font-bold text-accent">{step.number}</span>
                <h3 className="m-0 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-white/70 md:text-lg">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
