import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ServiceOverviewCard from "./components/ServiceOverviewCard";
import TechnicalCredibility from "./components/TechnicalCredibility";
import HowItWorks from "./components/HowItWorks";
import PricingPreview from "./components/PricingPreview";
import DeliverablesExamples from "./components/DeliverablesExamples";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      
      <section aria-labelledby="services-heading" className="section-padding bg-[var(--color-dark-3)] relative overflow-hidden">
        <div className="hero-glow" style={{ top: 'auto', bottom: '-500px', opacity: 0.5 }} />
        <div className="site-container relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-gray-400 mb-2 sm:mb-3">Our Services</p>
            <h2 id="services-heading" className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Everything your digital presence needs. Under one roof.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceOverviewCard
              title="Social Presence Management"
              description="Keep your business active, consistent and professional across its social channels."
              href="/social-presence-management"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            />
            <ServiceOverviewCard
              title="Website Care and Support"
              description="Keep your website current, monitored and working properly with reliable technical support."
              href="/website-care"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            />
            <ServiceOverviewCard
              title="Digital Operations Support"
              description="Keep your forms, integrations, analytics and digital tools configured and operating correctly."
              href="/digital-operations"
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            />
          </div>
        </div>
      </section>

      <TechnicalCredibility />
      <HowItWorks />
      <PricingPreview />
      <DeliverablesExamples />
      
      <CTABanner
        dark
        headline="Find out what needs attention across your website and social presence."
        subtext="Receive a practical review of your website, social accounts and digital setup, with clear technical and operational recommendations."
        primaryCta={{ label: "Request Your Free Health Check", href: "/health-check" }}
        secondaryCta={{ label: "View Plans", href: "/plans" }}
      />
      
      <FAQ />
    </>
  );
}
