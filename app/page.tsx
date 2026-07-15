import type { ReactNode } from "react";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ServiceOverviewCard from "./components/ServiceOverviewCard";
import TechnicalCredibility from "./components/TechnicalCredibility";
import HowItWorks from "./components/HowItWorks";
import PricingPreview from "./components/PricingPreview";
import DeliverablesExamples from "./components/DeliverablesExamples";
import ClientReviews from "./components/ClientReviews";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import { homepageServices } from "./lib/services";

const serviceIcons: Record<string, ReactNode> = {
  "/social-presence-management": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 12h8M12 8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "/website-care": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2v4M16 2v4M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "/digital-operations": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "/custom-software-solutions": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />

      <section
        id="services"
        aria-labelledby="services-heading"
        className="section-padding bg-[var(--color-dark-3)] relative overflow-hidden"
      >
        <div className="hero-glow" style={{ top: "auto", bottom: "-500px", opacity: 0.5 }} />
        <div className="site-container relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-gray-400 mb-2 sm:mb-3">
              Our Services
            </p>
            <h2
              id="services-heading"
              className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-white leading-[1.2]"
            >
              Everything your digital presence needs. Under one roof.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
              Peerprise provides social presence management, website care, digital operations
              support and custom software solutions for companies, brands and professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {homepageServices.map((service) => (
              <ServiceOverviewCard
                key={service.href}
                title={service.label}
                description={service.homepageDescription}
                href={service.href}
                linkLabel={service.linkLabel}
                icon={serviceIcons[service.href]}
              />
            ))}
          </div>
        </div>
      </section>

      <TechnicalCredibility />
      <HowItWorks />
      <PricingPreview />
      <DeliverablesExamples />
      <ClientReviews />

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
