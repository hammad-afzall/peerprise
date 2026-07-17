import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import TagList from "./TagList";
import DisclosureNote from "./DisclosureNote";
import { homepageExperience } from "../lib/homepage";
import { homepageExperienceDisclosure } from "../lib/disclosure";

/**
 * Experience — Studiova project-card pattern (square, hover lift) with Peerprise cases.
 */
export default function ExperiencePreview() {
  const [featured, ...supporting] = homepageExperience.cases;

  return (
    <section
      aria-labelledby="experience-heading"
      className="section-padding bg-white text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="06" badge={homepageExperience.eyebrow} />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-5">
            <h2
              id="experience-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepageExperience.headline}
            </h2>
            <DisclosureNote variant="light">{homepageExperienceDisclosure}</DisclosureNote>
          </Reveal>
        </div>

        {featured && (
          <Reveal delayMs={60}>
            <article className="group relative mb-5 overflow-hidden bg-[#1f2a2e] p-6 text-white sm:mb-7 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <p className="type-eyebrow mb-3 text-accent">Featured experience</p>
                  <h3 className="m-0 mb-5 max-w-[20ch] text-3xl font-bold tracking-tight md:text-4xl">
                    {featured.title}
                  </h3>
                  <TagList tags={[...featured.tags]} variant="dark" />
                </div>
                <div className="space-y-6 lg:col-span-7">
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-white/50">
                      Context
                    </p>
                    <p className="m-0 text-lg text-white/80">{featured.context}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-white/50">
                      Contribution
                    </p>
                    <p className="m-0 text-base text-white/90">{featured.contribution}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-white/50">
                      Capability demonstrated
                    </p>
                    <p className="m-0 text-base text-white/70">{featured.capability}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-7"
          role="list"
        >
          {supporting.map((item, index) => (
            <Reveal key={item.title} as="li" delayMs={80 + index * 80}>
              <article className="flex h-full flex-col gap-5 bg-[#f4f8fa] p-6 transition-transform duration-500 hover:-translate-y-1 lg:p-8">
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl lg:text-[28px]">
                  {item.title}
                </h3>
                <p className="m-0 text-base text-[#1f2a2e]/70 md:text-lg">{item.context}</p>
                <p className="m-0 text-base text-[#1f2a2e]/90">{item.contribution}</p>
                {"outcome" in item && item.outcome && (
                  <p className="m-0 text-base font-semibold text-[#1f2a2e]">{item.outcome}</p>
                )}
                <TagList tags={[...item.tags]} variant="light" />
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delayMs={100} className="mt-10">
          <ArrowButton href={homepageExperience.cta.href}>
            {homepageExperience.cta.label}
          </ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
