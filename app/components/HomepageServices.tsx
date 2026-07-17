import Link from "next/link";
import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepageServices } from "../lib/services";
import { homepageServicesSection } from "../lib/homepage";
import { audienceItems } from "../lib/audience";
import { ctas } from "../lib/ctas";

const managed = homepageServices.filter((s) => s.category === "managed");
const customSoftware = homepageServices.find((s) => s.id === "custom-software");
const smallBusiness = audienceItems.find((a) => a.id === "small-businesses");
const growing = audienceItems.find((a) => a.id === "growing-companies");

/**
 * Services — Studiova dark list-row pattern with Peerprise service content.
 */
export default function HomepageServices() {
  const rows = [
    ...managed.map((s) => ({
      title: s.approvedLabel,
      description: s.homepageDescription,
      href: s.href,
    })),
    customSoftware
      ? {
          title: customSoftware.approvedLabel,
          description: customSoftware.homepageDescription,
          href: customSoftware.href,
        }
      : null,
  ].filter(Boolean) as { title: string; description: string; href: string }[];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[#1f2a2e]"
    >
      <div className="site-container flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-start gap-8 xl:flex-row">
          <Reveal>
            <SectionLabel
              number="02"
              badge={homepageServicesSection.eyebrow}
              tone="dark"
            />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-5">
            <h2
              id="services-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            >
              {homepageServicesSection.headline}
            </h2>
            <p className="m-0 max-w-2xl text-lg text-white/70">
              {homepageServicesSection.intro}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 md:flex-row 2xl:gap-56">
          <Reveal className="relative w-full md:max-w-sm">
            <div className="relative h-80 overflow-hidden bg-black/30 md:sticky md:top-32">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(193,255,114,0.35), transparent 55%), linear-gradient(160deg, #273338, #0a0a0a)",
                }}
                aria-hidden="true"
              />
              <p className="absolute bottom-6 left-6 right-6 m-0 text-2xl font-bold text-white">
                Managed support + engineering delivery
              </p>
            </div>
          </Reveal>

          <div className="flex w-full flex-col gap-0">
            {rows.map((row, index) => (
              <Reveal key={row.href} delayMs={60 + index * 70}>
                <Link
                  href={row.href}
                  className="group block border-t border-white/12 py-6 xl:py-10"
                >
                  <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
                    <div className="max-w-2xl">
                      <h3 className="m-0 text-[28px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-accent md:text-4xl">
                        {row.title}
                      </h3>
                      <p className="mt-3 m-0 max-w-xl text-base text-white/70 md:text-lg">
                        {row.description}
                      </p>
                    </div>
                    <span
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-[#1f2a2e] transition-transform duration-500 group-hover:rotate-45"
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delayMs={200} className="border-t border-white/12 pt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <ArrowButton href={ctas.exploreServices.href}>
                  {ctas.exploreServices.label}
                </ArrowButton>
                {growing && (
                  <p className="m-0 max-w-md text-base text-white/60">{growing.description}</p>
                )}
              </div>
              {smallBusiness && (
                <p className="mt-6 m-0 text-base text-white/70">
                  <span className="font-semibold text-white">{smallBusiness.title}. </span>
                  {smallBusiness.description}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
