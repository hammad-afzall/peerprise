import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import { homepagePlansTeaser } from "../lib/homepage";
import { plans } from "../lib/plans";

/**
 * Pricing — Studiova square plan cards with lime check rows + arrow CTAs.
 */
export default function PricingPreview() {
  return (
    <section
      aria-labelledby="plans-teaser-heading"
      className="section-padding bg-[#f4f8fa] text-[#1f2a2e]"
    >
      <div className="site-container">
        <div className="mb-14 flex flex-col items-start gap-8 xl:mb-24 xl:flex-row">
          <Reveal>
            <SectionLabel number="08" badge={homepagePlansTeaser.eyebrow} />
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-5">
            <h2
              id="plans-teaser-heading"
              className="m-0 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              {homepagePlansTeaser.headline}
            </h2>
            <p className="m-0 max-w-2xl text-lg text-[#1f2a2e]/70">
              {homepagePlansTeaser.copy}
            </p>
          </Reveal>
        </div>

        <ul
          className="m-0 grid list-none grid-cols-1 gap-7 p-0 md:grid-cols-2 xl:grid-cols-3"
          role="list"
        >
          {plans.map((plan, index) => (
            <Reveal key={plan.id} as="li" delayMs={80 + index * 90}>
              <article className="flex h-full flex-col gap-10 bg-white p-5 sm:p-8 xl:p-12">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="m-0 text-xl font-bold md:text-2xl">{plan.name}</h3>
                    {plan.badge && (
                      <span className="rounded-full bg-[#1f2a2e] px-3 py-1 text-sm font-medium text-white">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="m-0 text-3xl font-bold tracking-tight md:text-4xl">
                    {plan.price}
                    <span className="ml-2 text-base font-medium text-[#1f2a2e]/60">
                      {plan.period}
                    </span>
                  </p>
                  <p className="m-0 text-base text-[#1f2a2e]/70 md:text-lg">
                    {plan.description}
                  </p>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <p className="mb-4 text-base font-bold">What&apos;s included</p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {plan.features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex shrink-0 rounded-full bg-accent p-1.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/icons/right-check.svg"
                            alt=""
                            width={14}
                            height={14}
                          />
                        </span>
                        <span className="text-base text-[#1f2a2e]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowButton href={plan.ctaHref} fullWidth>
                  {plan.ctaLabel}
                </ArrowButton>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delayMs={120} className="mt-10">
          <ArrowButton href={homepagePlansTeaser.cta.href}>
            {homepagePlansTeaser.cta.label}
          </ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
