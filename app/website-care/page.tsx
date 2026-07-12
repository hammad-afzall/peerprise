import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { faqs } from "../lib/faqs";

export const metadata: Metadata = {
  title: "Website Care and Support",
  description: "Reliable website care from a technical team.",
};

const includedFeatures = [
  "Software and plugin updates",
  "Backups",
  "Uptime monitoring",
  "Security checks",
  "Bug fixes",
  "Text and image changes",
  "New pages and sections (higher plans)",
  "Form testing",
  "Performance checks",
  "Mobile compatibility",
  "Technical troubleshooting",
];

export default function WebsiteCarePage() {
  const pageFaqs = faqs.filter(f => ["existing-website", "small-change", "turnaround", "access"].includes(f.id));

  return (
    <>
      <PageHero
        eyebrow="Website Care"
        headline="Reliable website care from a technical team."
        subtext="Keep your website current, monitored and working properly with ongoing maintenance, content updates and technical support."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="What's included" headline="Comprehensive technical maintenance." />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedFeatures.map(feat => (
              <li key={feat} className="flex items-center gap-3 glass-card p-4 rounded-[12px]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4E6EFF]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="text-white font-medium">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading eyebrow="Platforms" headline="Supported platforms." />
          <p className="mt-6 text-gray-400 text-[18px]">
            We support WordPress, Webflow, Squarespace, Wix, Shopify, and custom-built sites.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-[12px] p-8">
            <h3 className="text-[#3730A3] font-bold text-[18px] mb-4">What counts as a small website change?</h3>
            <p className="text-[#4338CA] leading-relaxed">
              A small website change is typically a text update, image swap, button edit or minor layout adjustment that takes under one hour. Larger scope work is quoted separately.
            </p>
          </div>
          <div className="bg-[var(--color-dark-bg)] border border-white/10 rounded-[12px] p-8">
            <h3 className="text-white font-bold text-[18px] mb-4">Quoted Separately (Not Included)</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Major redesigns</li>
              <li>Complete website builds</li>
              <li>Custom software development</li>
              <li>Large content migrations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading eyebrow="Process" headline="How updates happen." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-2">01</span>
              <h3 className="text-white font-bold text-[18px] mb-2">Submit</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">Send a support request through our shared channel.</p>
            </div>
            <div className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-2">02</span>
              <h3 className="text-white font-bold text-[18px] mb-2">Review</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">We assess the scope, timeline, and impact of the change.</p>
            </div>
            <div className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-2">03</span>
              <h3 className="text-white font-bold text-[18px] mb-2">Deliver</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">Changes are safely made, tested, and confirmed with you.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        dark
        headline="Your website, maintained and up to date."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <FAQ items={pageFaqs} />
    </>
  );
}
