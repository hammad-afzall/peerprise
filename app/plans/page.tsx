import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import PlanComparison from "../components/PlanComparison";
import PricingCard from "../components/PricingCard";
import { plans } from "../lib/plans";

export const metadata: Metadata = {
  title: "Plans",
  description:
    "Straightforward monthly plans for social presence management, website care and digital operations support.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans"
        headline="Straightforward monthly support. No hidden fees."
        subtext="Choose the level of support that fits your company, brand or professional presence. All plans include a monthly activity summary and direct access to your Peerprise team."
      />

      <section className="section-padding bg-dark-surface">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                variant="dark"
                ctaLabel="Request a Health Check"
                ctaHref="/health-check"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="site-container">
          <SectionHeading headline="Compare Features" center />
          <div className="mt-12">
            <PlanComparison variant="dark" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-dark-bg">
        <div className="site-container max-w-[760px]">
          <SectionHeading headline="Plan details" center className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Website-support allowance</h4>
              <p className="text-gray-400 text-[14px]">
                A small website change is a content, image or layout update that usually takes no more than 30 minutes and does not require new custom functionality. Work beyond your monthly allowance is scoped separately.
              </p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Setup</h4>
              <p className="text-gray-400 text-[14px]">A one-time onboarding scope is discussed before work begins.</p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">Support response</h4>
              <p className="text-gray-400 text-[14px]">
                Routine request: response within two business days. Time-sensitive issue: response within one business day. Critical website outage: acknowledgement within four business hours during standard business hours. Emergency and 24/7 support require a separate support agreement.
              </p>
            </div>
            <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-white mb-2">What your plan covers</h4>
              <p className="text-gray-400 text-[14px]">
                Your monthly plan covers the services and deliverables listed in the selected package. Additional work, including larger website projects and custom software, is scoped separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        dark
        eyebrow="Get Started"
        headline="Not sure which plan fits? Start with a health check."
        note="No long-term contract required."
        primaryCta={{ label: "Request Your Free Health Check", href: "/health-check" }}
        secondaryCta={{ label: "Contact Peerprise", href: "/contact" }}
      />
    </>
  );
}
