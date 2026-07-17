import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { featuredHomepageReviews } from "../lib/testimonials";
import { homepageTestimonials } from "../lib/homepage";

/**
 * Testimonials — Studiova asymmetric mosaic (lime / dark / light).
 */
export default function ClientReviews() {
  const [first, second, third] = featuredHomepageReviews;

  return (
    <section
      aria-labelledby="client-reviews-heading"
      className="section-padding bg-[#f4f8fa] text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="09" badge={homepageTestimonials.eyebrow} />
          </Reveal>
          <Reveal delayMs={80}>
            <h2
              id="client-reviews-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepageTestimonials.headline}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {first && (
            <Reveal className="xl:col-span-1">
              <figure className="m-0 flex h-full flex-col justify-between gap-10 bg-accent p-4 lg:gap-32 lg:p-7">
                <blockquote className="m-0">
                  <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]">
                    “{first.quote}”
                  </p>
                </blockquote>
                <figcaption>
                  <p className="m-0 text-base font-bold text-[#1f2a2e]">{first.name}</p>
                  {first.role && (
                    <p className="mt-1 m-0 text-sm text-[#1f2a2e]/70">{first.role}</p>
                  )}
                  <p className="mt-2 m-0 text-sm font-semibold text-[#1f2a2e]/60">
                    {first.source}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          )}

          {second && (
            <Reveal delayMs={80} className="md:col-span-2 xl:col-span-2">
              <figure className="relative m-0 flex h-full flex-col justify-between gap-10 overflow-hidden bg-[#1f2a2e] p-4 text-white lg:gap-16 lg:p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/comma_vector.svg"
                  alt=""
                  className="pointer-events-none absolute right-4 top-4 w-16 opacity-40 lg:w-24"
                />
                <div>
                  <p className="mb-4 text-sm font-medium text-accent">Hear from them</p>
                  <blockquote className="m-0">
                    <p className="m-0 text-xl leading-relaxed md:text-2xl">
                      “{second.quote}”
                    </p>
                  </blockquote>
                </div>
                <figcaption>
                  <p className="m-0 text-base font-bold">{second.name}</p>
                  {second.role && (
                    <p className="mt-1 m-0 text-sm text-white/70">{second.role}</p>
                  )}
                  <p className="mt-2 m-0 text-sm font-semibold text-white/50">
                    {second.source}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          )}

          {third && (
            <Reveal delayMs={120} className="xl:col-span-1">
              <figure className="m-0 flex h-full flex-col justify-between gap-10 bg-white p-4 lg:gap-32 lg:p-7">
                <blockquote className="m-0">
                  <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]">
                    “{third.quote}”
                  </p>
                </blockquote>
                <figcaption>
                  <p className="m-0 text-base font-bold text-[#1f2a2e]">{third.name}</p>
                  {third.role && (
                    <p className="mt-1 m-0 text-sm text-[#1f2a2e]/70">{third.role}</p>
                  )}
                  <p className="mt-2 m-0 text-sm font-semibold text-[#1f2a2e]/60">
                    {third.source}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
