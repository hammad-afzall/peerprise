import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import Comparison from "../components/Comparison";
import { plans } from "../lib/plans";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plans",
  description: "Straightforward monthly plans for social presence management, website care and digital operations support.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans"
        headline="Straightforward monthly support. No hidden fees."
        subtext="Choose the level of support that fits your business. All plans include a monthly activity summary and direct access to your Peerprise team."
      />

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map(plan => (
              <article key={plan.id} className={`rounded-[24px] p-8 flex flex-col gap-5 relative glass-card transition-all ${plan.highlight ? "border-[#4E6EFF] shadow-[0_0_30px_rgba(78,110,255,0.15)] ring-1 ring-[#4E6EFF]/50" : "border-white/10 hover:bg-white/10"}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[12px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mt-2">
                  <h3 className="text-[20px] font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[40px] font-bold leading-none text-white tracking-tight">{plan.price}</span>
                    <span className="text-[15px] mb-1.5 text-gray-400 font-medium">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-gray-400">{plan.description}</p>
                </div>
                <div className="border-t border-white/10 my-2" />
                <ul className="space-y-4 flex-1 mb-4">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-white/10 text-[#4E6EFF]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-[14px] text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/health-check" className={`w-full h-12 flex items-center justify-center rounded-full text-[15px] font-bold transition-all ${plan.highlight ? 'bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white hover:opacity-90 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Request Health Check
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading headline="Compare Features" center />
          <div className="mt-12">
            <Comparison />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--color-dark-bg)]">
        <div className="site-container max-w-[760px]">
          <SectionHeading headline="Important Policies" center className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Small website changes</h4>
              <p className="text-gray-400 text-[14px]">Defined as text, image or button edits under one hour.</p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Setup</h4>
              <p className="text-gray-400 text-[14px]">A one-time onboarding scope is discussed before work begins.</p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Support response</h4>
              <p className="text-gray-400 text-[14px]">Standard 2-3 business days, priority on top plan.</p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">What is not included</h4>
              <p className="text-gray-400 text-[14px]">Website builds, custom development, paid ads, SEO strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        dark
        eyebrow="Get Started"
        headline="Not sure which plan fits? Start with a health check."
        note="No long-term contract required."
        primaryCta={{ label: "Request a Free Health Check", href: "/health-check" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
