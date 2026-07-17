import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HomepageServices from "./components/HomepageServices";
import ServiceModel from "./components/ServiceModel";
import AudienceSection from "./components/AudienceSection";
import TechnicalCredibility from "./components/TechnicalCredibility";
import ExperiencePreview from "./components/ExperiencePreview";
import HowItWorks from "./components/HowItWorks";
import PricingPreview from "./components/PricingPreview";
import ClientReviews from "./components/ClientReviews";
import PartnershipCallout from "./components/PartnershipCallout";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import { homepageFaqs, homepageFinalCta } from "./lib/homepage";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HomepageServices />
      <ServiceModel />
      <AudienceSection />
      <TechnicalCredibility />
      <ExperiencePreview />
      <HowItWorks />
      <PricingPreview />
      <ClientReviews />
      <PartnershipCallout />
      <FAQ
        items={homepageFaqs}
        eyebrow="FAQs"
        headline="Frequently asked questions"
        variant="light"
        number="11"
      />
      <CTASection
        headline={homepageFinalCta.headline}
        subtext={homepageFinalCta.copy}
        primaryCta={homepageFinalCta.primaryCta}
        secondaryCta={homepageFinalCta.secondaryCta}
        variant="dark"
        id="final-cta-heading"
        number="12"
      />
    </>
  );
}
