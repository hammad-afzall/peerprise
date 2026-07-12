import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { faqs } from "../lib/faqs";

export const metadata: Metadata = {
  title: "Social Presence Management",
  description: "Consistent, professional social presence without the daily workload.",
};

const includedFeatures = [
  "Monthly content calendar",
  "Caption preparation",
  "Branded post graphics",
  "Scheduling and publishing",
  "Profile information updates",
  "Content repurposing (Managed Presence and above)",
  "Basic comments and message monitoring",
  "Monthly activity summary",
];

const processSteps = [
  { step: "01", title: "Brief", desc: "We gather key themes, company updates, and insights for the upcoming month." },
  { step: "02", title: "Plan", desc: "A structured content calendar is prepared and submitted for your review." },
  { step: "03", title: "Create", desc: "We draft captions and create on-brand graphics aligned with the approved calendar." },
  { step: "04", title: "Publish", desc: "Content is scheduled, published, and monitored across your active platforms." },
];

export default function SocialPresenceManagement() {
  const pageFaqs = faqs.filter(f => ["platforms", "content-type", "seo", "contract"].includes(f.id));

  return (
    <>
      <PageHero
        eyebrow="Social Presence Management"
        headline="Consistent, professional social presence without the daily workload."
        subtext="Peerprise helps companies, brands and professionals plan, prepare and publish social content consistently—without promising follower growth, leads or sales."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="Who this is for" headline="Built for professionals." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Professional Services", "E-commerce", "Consultants", "Creators"].map(audience => (
              <div key={audience} className="glass-card rounded-[14px] p-6 text-center font-bold text-white hover:bg-white/10 transition-colors">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading eyebrow="What's included" headline="Everything needed for consistency." />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="Process" headline="How we work together." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map(step => (
              <div key={step.step} className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-2">{step.step}</span>
                <h3 className="text-white font-bold text-[18px] mb-2">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--color-dark-surface)]">
        <div className="site-container max-w-[800px]">
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-[12px] p-5 sm:p-6">
            <h3 className="text-amber-200 font-semibold mb-2">Important Notice</h3>
            <p className="text-amber-100/80 leading-relaxed text-[14px] sm:text-[15px]">
              Peerprise does not currently provide paid social advertising, influencer campaigns, follower-growth guarantees or lead-generation services.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        dark
        headline="Ready to maintain a consistent social presence?"
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />

      <FAQ items={pageFaqs} />
    </>
  );
}
