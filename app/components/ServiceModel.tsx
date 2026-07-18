import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { homepageServiceModel } from "../lib/homepage";

export type ServiceModelStage = {
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  headline?: string;
  stages?: readonly ServiceModelStage[];
  id?: string;
  className?: string;
};

/**
 * Run → Improve → Build → Scale — Studiova numbered header + square stage cards.
 */
export default function ServiceModel({
  eyebrow = homepageServiceModel.eyebrow,
  headline = homepageServiceModel.headline,
  stages = homepageServiceModel.stages,
  id = "service-model-heading",
  className = "",
}: Props) {
  return (
    <section
      aria-labelledby={id}
      className={`section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white ${className}`}
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="03" badge={eyebrow} />
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id={id}
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {headline}
            </h2>
          </Reveal>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 xl:grid-cols-4 md:gap-7">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} as="li" delayMs={80 + index * 80}>
              <article className="flex h-full flex-col gap-6 bg-white p-6 lg:p-8 dark:bg-[#273338]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#1f2a2e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl">
                  {stage.title}
                </h3>
                <p className="m-0 flex-1 text-base leading-relaxed text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                  {stage.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
