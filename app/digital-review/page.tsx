import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import DisclosureNote from "../components/DisclosureNote";
import DigitalReviewForm from "../components/DigitalReviewForm";
import Reveal from "../components/Reveal";
import {
  digitalReviewAreas,
  digitalReviewDeliverables,
  digitalReviewHero,
} from "../lib/digital-review";

export const metadata: Metadata = {
  title: "Digital Presence Review",
  description: digitalReviewHero.supporting,
};

/**
 * Digital Review — Studiova numbered sections ending in the request form.
 */
export default function DigitalReviewPage() {
  return (
    <>
      <PageHero
        supporting="A practical first look at the areas most likely to need attention before we recommend a plan or project."
        highlight="practical first look"
        headline="Digital Review"
        subtext={digitalReviewHero.supporting}
        primaryCta={{ label: digitalReviewHero.ctaLabel, href: digitalReviewHero.formAnchor }}
        size="standard"
      />

      <PageSection
        number="01"
        badge={digitalReviewAreas.eyebrow}
        headline={digitalReviewAreas.headline}
        id="review-areas-heading"
        tone="gray"
      >
        <ul
          className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 md:gap-5"
          role="list"
        >
          {digitalReviewAreas.items.map((item, index) => (
            <Reveal key={item} as="li" delayMs={40 + index * 40}>
              <div className="flex items-start gap-3 bg-white p-5 dark:bg-[#273338]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/right-check.svg" alt="" width={18} height={18} className="mt-1 shrink-0" />
                <span className="text-base font-medium text-[#1f2a2e] dark:text-white">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection
        number="02"
        badge={digitalReviewDeliverables.eyebrow}
        headline={digitalReviewDeliverables.headline}
        intro={digitalReviewDeliverables.intro}
        id="review-deliverables-heading"
        tone="white"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <ul className="m-0 flex list-none flex-col gap-3 p-0" role="list">
              {digitalReviewDeliverables.items.map((item, index) => (
                <Reveal key={item} as="li" delayMs={40 + index * 50}>
                  <div className="flex items-start gap-3 bg-[#f4f8fa] p-4 dark:bg-[#1f2a2e]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-base text-[#1f2a2e]/80 dark:text-white/80">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <Reveal delayMs={120}>
              <DisclosureNote label="Important limitation" variant="light">
                {digitalReviewDeliverables.limitation}
              </DisclosureNote>
            </Reveal>
          </div>
        </div>
      </PageSection>

      <div id="review-form">
        <PageSection
          number="03"
          badge="Request a review"
          headline="Request a Review"
          id="review-form-heading"
          tone="gray"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-8">
              <div className="bg-white p-6 sm:p-8 lg:p-12 dark:bg-[#273338]">
                <DigitalReviewForm />
              </div>
            </Reveal>
          </div>
        </PageSection>
      </div>
    </>
  );
}
