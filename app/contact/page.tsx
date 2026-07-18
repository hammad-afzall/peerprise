import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import ProcessSteps from "../components/ProcessSteps";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import {
  contactGeneralEmail,
  contactHero,
  contactNextSteps,
} from "../lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactHero.supporting,
  alternates: {
    canonical: "/contact",
  },
};

type Props = {
  searchParams: Promise<{ service?: string; enquiry?: string }>;
};

/**
 * Contact — Studiova two-column contact pattern with Peerprise form.
 */
export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const defaultEnquiry = params.enquiry ?? params.service;

  return (
    <>
      <PageHero
        supporting="Whether you need ongoing support, custom software or engineering capacity — tell us what you need."
        highlight="tell us what you need"
        headline="Contact"
        subtext={contactHero.supporting}
        size="display"
      />

      <PageSection
        number="01"
        badge="Enquiry"
        headline="Start a conversation"
        intro="Share the current situation and the outcome you are trying to achieve. We will recommend a practical starting point."
        id="contact-form-heading"
        tone="gray"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32">
              <article className="bg-accent p-6 lg:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1f2a2e]/60">
                  General enquiries
                </p>
                <a
                  href={`mailto:${contactGeneralEmail}`}
                  className="break-all text-xl font-bold text-[#1f2a2e] hover:opacity-70"
                >
                  {contactGeneralEmail}
                </a>
              </article>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {[
                  "Managed digital presence",
                  "Custom software",
                  "Engineering partnerships",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-[#1f2a2e]/80 dark:text-white/80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/right-check.svg" alt="" width={18} height={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-8" delayMs={100}>
            <div className="bg-white p-6 sm:p-8 lg:p-12 dark:bg-[#273338]">
              <ContactForm defaultEnquiry={defaultEnquiry} />
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection
        number="02"
        badge={contactNextSteps.eyebrow}
        headline={contactNextSteps.headline}
        id="contact-next-heading"
        tone="white"
      >
        <ProcessSteps
          steps={[...contactNextSteps.steps]}
          variant="light"
          columns={3}
        />
      </PageSection>
    </>
  );
}
