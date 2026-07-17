import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { audienceItems } from "../lib/audience";
import { homepageAudienceSection } from "../lib/homepage";

export default function AudienceSection() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="section-padding bg-white text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="04" badge={homepageAudienceSection.eyebrow} />
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id="audience-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepageAudienceSection.headline}
            </h2>
          </Reveal>
        </div>

        <ul
          className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-7"
          role="list"
        >
          {audienceItems.map((item, index) => (
            <Reveal key={item.id} as="li" delayMs={80 + index * 90}>
              <article
                className={[
                  "flex h-full flex-col gap-6 p-6 lg:p-8",
                  index === 1 ? "bg-accent text-[#1f2a2e]" : "bg-[#f4f8fa] text-[#1f2a2e]",
                ].join(" ")}
              >
                <h3 className="m-0 text-xl font-bold tracking-tight md:text-2xl lg:text-[28px]">
                  {item.title}
                </h3>
                <p
                  className={[
                    "m-0 flex-1 text-base leading-relaxed md:text-lg",
                    index === 1 ? "text-[#1f2a2e]/80" : "text-[#1f2a2e]/70",
                  ].join(" ")}
                >
                  {item.description}
                </p>
                <ArrowButton href={item.cta.href}>{item.cta.label}</ArrowButton>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
