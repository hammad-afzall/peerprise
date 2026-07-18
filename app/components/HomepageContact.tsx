import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { homepageContact } from "../lib/homepage";
import { contactGeneralEmail } from "../lib/contact";

/**
 * Get in touch — Studiova section 10: left intro + checklist + email,
 * right contact form.
 */
export default function HomepageContact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
    >
      <div className="site-container">
        <div className="mb-12 grid grid-cols-1 gap-8 xl:mb-16 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="10" badge={homepageContact.eyebrow} />
            </Reveal>
          </div>
          <div className="xl:col-span-8">
            <Reveal delayMs={80}>
              <h2
                id="contact-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageContact.headline}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="flex flex-col gap-8 lg:sticky lg:top-32">
              <p className="m-0 text-base text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                {homepageContact.intro}
              </p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {homepageContact.points.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base text-[#1f2a2e]/85 dark:text-white/85"
                  >
                    <span className="flex shrink-0 rounded-full bg-accent p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/icons/right-check.svg"
                        alt=""
                        width={14}
                        height={14}
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <article className="bg-accent p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#1f2a2e]/55">
                  General enquiries
                </p>
                <a
                  href={`mailto:${contactGeneralEmail}`}
                  className="break-all text-lg font-bold text-[#1f2a2e] hover:opacity-70"
                >
                  {contactGeneralEmail}
                </a>
              </article>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="lg:col-span-8">
            <div className="bg-white p-6 sm:p-8 lg:p-10 dark:bg-[#1f2a2e]">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
