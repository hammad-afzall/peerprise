import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A clear, structured process from initial review to ongoing monthly support.",
};

const steps = [
  { num: "01", title: "Review", desc: "We assess your website, social profiles, analytics setup and current digital tools. You receive initial observations before any work begins." },
  { num: "02", title: "Scope", desc: "We define responsibilities, platforms, monthly deliverables and support boundaries clearly. Everything is documented before the engagement starts." },
  { num: "03", title: "Onboarding", desc: "We request the minimum access needed to begin work. Credentials are handled via a shared password manager with 2FA where required." },
  { num: "04", title: "Monthly Planning", desc: "At the start of each month we confirm content direction, support priorities and any scope changes. Approval happens before publishing." },
  { num: "05", title: "Delivery", desc: "We execute agreed work: publishing, updates, maintenance, integrations and support requests. You are kept informed of progress." },
  { num: "06", title: "Reporting", desc: "At month end you receive a structured summary of completed work, pending items and anything that needs your attention." },
  { num: "07", title: "Ongoing Support", desc: "Support requests are submitted through an agreed channel (email, shared inbox or project tool). Routine requests receive a response within two business days. Time-sensitive issues receive a response within one business day. Critical website outages are acknowledged within four business hours during standard business hours. Emergency and 24/7 support require a separate support agreement." },
];

const policies = [
  { title: "Communication channels", desc: "Email and shared project management tool by default." },
  { title: "Access handling", desc: "Minimum required access, documented and formally recorded." },
  { title: "Approval process", desc: "Content reviewed before publishing, changes confirmed before deployment." },
  { title: "Offboarding", desc: "All access revoked, assets returned, final status report provided." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        headline="From review to reliable ongoing support."
        subtext="A structured process designed to give you clarity on what is being done, when and why."
      />

      <section className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
        <div className="site-container">
          <SectionHeading
            eyebrow="Process"
            headline="Seven steps from first review to ongoing delivery."
            subheadline="Each stage has a clear purpose, documented outcomes and no ambiguity about what happens next."
          />
          <div className="mt-10 sm:mt-14 max-w-[900px] relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10 z-0 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col gap-8 sm:gap-10">
              {steps.map((step) => (
                <div key={step.num} className="relative z-10 flex gap-4 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card gradient-border flex items-center justify-center font-bold text-[14px] sm:text-[16px] bg-[#111827]">
                    <span className="text-gradient">{step.num}</span>
                  </div>
                  <div className="pt-1 sm:pt-3 min-w-0">
                    <h2 className="text-[20px] sm:text-[22px] font-bold text-white mb-2 sm:mb-3">{step.title}</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5">
        <div className="site-container">
          <SectionHeading
            eyebrow="Working agreement"
            headline="How we communicate, access and hand off work."
            center
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <div key={policy.title} className="glass-card p-6 rounded-[16px] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">{policy.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        dark
        headline="Ready to get started?"
        subtext="Begin with a free digital presence health check."
        primaryCta={{ label: "Request a Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />
    </>
  );
}
