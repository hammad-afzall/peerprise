import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { faqs } from "../lib/faqs";

export const metadata: Metadata = {
  title: "Digital Operations Support",
  description: "Peerprise helps configure, connect and maintain the forms, integrations, analytics and workflows your business depends on.",
};

const coveredItems = [
  "Contact forms",
  "Email integrations",
  "CRM connections",
  "Analytics configuration",
  "Third-party tool setup",
  "API connections",
  "Workflow automation",
  "Technical account setup",
  "Troubleshooting",
  "Documentation",
  "Access and security management",
];

const excludedItems = [
  "Paid advertising setup",
  "SEO strategy",
  "Custom software development",
  "Data science or BI reporting",
];

const processSteps = [
  { number: "01", title: "Audit", description: "We review existing tools and connections to understand your setup." },
  { number: "02", title: "Configure", description: "We set up and connect systems correctly." },
  { number: "03", title: "Document", description: "We provide a clear record of all configurations." },
];

export default function DigitalOperationsPage() {
  const pageFaqs = faqs.filter(f => ["seo", "access", "turnaround", "contract"].includes(f.id));

  return (
    <>
      <PageHero
        eyebrow="Digital Operations Support"
        headline="Technical support for the tools behind your digital presence."
        subtext="Peerprise helps configure, connect and maintain the forms, integrations, analytics and workflows your business depends on."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="What's covered" headline="Technical configuration and support." />
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coveredItems.map(item => (
              <li key={item} className="flex items-center gap-3 glass-card p-4 rounded-[12px]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4E6EFF]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-[12px] p-6">
            <h3 className="text-[#3730A3] font-bold text-[16px] mb-3">A note on analytics</h3>
            <p className="text-[#4338CA] leading-relaxed text-[15px]">
              Analytics configuration means setting up tracking correctly. Peerprise does not provide marketing strategy, performance consulting or campaign management.
            </p>
          </div>
          <div className="bg-[var(--color-dark-bg)] border border-white/10 rounded-[12px] p-6">
            <h3 className="text-white font-bold text-[16px] mb-3">Outside our scope</h3>
            <ul className="space-y-2">
              {excludedItems.map(item => (
                <li key={item} className="text-gray-400 text-[15px]">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="How it works" headline="A structured approach." />
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map(step => (
              <li key={step.number} className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-3">{step.number}</span>
                <h3 className="text-white font-bold text-[18px] mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner
        dark
        headline="One team to keep your digital tools connected."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <FAQ items={pageFaqs} />
    </>
  );
}
