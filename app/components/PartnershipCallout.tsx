import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepagePartnership } from "../lib/homepage";
import { audienceItems } from "../lib/audience";
import { ctas } from "../lib/ctas";

const agencies = audienceItems.find((a) => a.id === "agencies");

export default function PartnershipCallout() {
  return (
    <section
      aria-labelledby="partnership-heading"
      className="section-padding bg-white text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel number="10" badge={homepagePartnership.eyebrow} />
            </Reveal>
            <Reveal delayMs={80} className="mt-8 flex flex-col gap-5">
              <h2
                id="partnership-heading"
                className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepagePartnership.headline}
              </h2>
              <p className="m-0 max-w-2xl text-lg text-[#1f2a2e]/70">
                {homepagePartnership.copy}
              </p>
              {agencies && (
                <p className="m-0 max-w-2xl text-base text-[#1f2a2e]/70">
                  {agencies.description}
                </p>
              )}
            </Reveal>
          </div>
          <Reveal
            delayMs={120}
            className="flex flex-col gap-4 lg:col-span-5 lg:pt-16"
          >
            <ArrowButton href={homepagePartnership.cta.href}>
              {homepagePartnership.cta.label}
            </ArrowButton>
            <ArrowButton href={ctas.discussPartnership.href} variant="on-dark">
              {ctas.discussPartnership.label}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
