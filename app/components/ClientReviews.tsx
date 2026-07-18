import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { featuredHomepageReviews, type Review } from "../lib/testimonials";
import { homepageTestimonials } from "../lib/homepage";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function PersonRow({ review, dark }: { review: Review; dark?: boolean }) {
  return (
    <figcaption className="flex items-center gap-3">
      <span
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
          dark ? "bg-accent text-[#1f2a2e]" : "bg-[#1f2a2e] text-accent",
        ].join(" ")}
        aria-hidden="true"
      >
        {initials(review.name)}
      </span>
      <div>
        <p className={["m-0 text-sm font-bold", dark ? "text-white" : "text-[#1f2a2e]"].join(" ")}>
          {review.name}
        </p>
        <p className={["m-0 text-xs", dark ? "text-white/60" : "text-[#1f2a2e]/60"].join(" ")}>
          {review.role} · {review.source}
        </p>
      </div>
    </figcaption>
  );
}

/**
 * Stories from clients — exact Studiova section 05: lime / dark(wide) / light
 * cards, "Hear from them" mini label, avatar row, quote glyph on the dark card.
 */
export default function ClientReviews() {
  const [first, second, third] = featuredHomepageReviews;

  return (
    <section
      aria-labelledby="client-reviews-heading"
      className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
    >
      <div className="site-container">
        <div className="mb-14 grid grid-cols-1 gap-8 xl:mb-20 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="05" badge={homepageTestimonials.eyebrow} />
            </Reveal>
          </div>
          <div className="xl:col-span-8">
            <Reveal delayMs={80}>
              <h2
                id="client-reviews-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageTestimonials.headline}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {first && (
            <Reveal className="xl:col-span-1">
              <figure className="m-0 flex h-full flex-col justify-between gap-10 bg-accent p-6 text-[#1f2a2e]">
                <div>
                  <p className="mb-5 m-0 text-xs font-semibold uppercase tracking-wide text-[#1f2a2e]/60">
                    Hear from them
                  </p>
                  <blockquote className="m-0">
                    <p className="m-0 text-lg font-semibold leading-relaxed">
                      {first.quote}
                    </p>
                  </blockquote>
                </div>
                <PersonRow review={first} />
              </figure>
            </Reveal>
          )}

          {second && (
            <Reveal delayMs={80} className="md:col-span-2 xl:col-span-2">
              <figure className="relative m-0 flex h-full flex-col justify-between gap-12 overflow-hidden bg-[#1f2a2e] p-6 text-white lg:p-8 dark:bg-[#273338]">
                <div>
                  <p className="mb-5 m-0 text-xs font-semibold uppercase tracking-wide text-white/50">
                    Hear from them
                  </p>
                  <blockquote className="m-0">
                    <p className="m-0 text-xl font-semibold leading-relaxed md:text-2xl">
                      {second.quote}
                    </p>
                  </blockquote>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <PersonRow review={second} dark />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/comma_vector.svg"
                    alt=""
                    className="w-12 shrink-0 opacity-40 lg:w-16"
                  />
                </div>
              </figure>
            </Reveal>
          )}

          {third && (
            <Reveal delayMs={120} className="xl:col-span-1">
              <figure className="m-0 flex h-full flex-col justify-between gap-10 bg-white p-6 text-[#1f2a2e]">
                <div>
                  <p className="mb-5 m-0 text-xs font-semibold uppercase tracking-wide text-[#1f2a2e]/50">
                    Hear from them
                  </p>
                  <blockquote className="m-0">
                    <p className="m-0 text-lg font-semibold leading-relaxed">
                      {third.quote}
                    </p>
                  </blockquote>
                </div>
                <PersonRow review={third} />
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
