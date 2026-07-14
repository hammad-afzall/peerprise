import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Peerprise team.",
  alternates: {
    canonical: "/contact",
  },
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Contact Peerprise"
        subtext="Peerprise provides social presence management, website care, digital operations support and custom software solutions for companies, brands and professionals."
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[28px] font-bold text-white mb-6">Send us a message</h2>
              <ContactForm defaultService={params.service} />
            </div>
            <div>
              <h2 className="text-[28px] font-bold text-white mb-6">Other ways to reach us</h2>
              <div className="flex flex-col gap-6">
                <div className="bg-[var(--color-dark-bg)] p-6 rounded-[12px] border border-white/10">
                  <h3 className="font-bold text-white mb-2">General Enquiries</h3>
                  <p className="text-gray-400 mb-4 text-[15px]">
                    For questions about our services or general information.
                  </p>
                  <a
                    href="mailto:hello@peerprise.com"
                    className="text-[#4338CA] font-semibold hover:underline"
                  >
                    hello@peerprise.com
                  </a>
                </div>
                <div className="bg-[var(--color-dark-bg)] p-6 rounded-[12px] border border-white/10">
                  <h3 className="font-bold text-white mb-2">Book a call</h3>
                  <p className="text-gray-400 mb-4 text-[15px]">
                    Schedule a brief introductory call with our team to discuss your requirements.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#4338CA] font-semibold hover:underline"
                  >
                    Schedule a time
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7h8M7 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
