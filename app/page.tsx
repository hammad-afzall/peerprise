import Hero from "./components/Hero";
import StatsIntro from "./components/StatsIntro";
import WorkCarousel from "./components/WorkCarousel";
import HomepageServices from "./components/HomepageServices";
import TechnicalCredibility from "./components/TechnicalCredibility";
import ClientReviews from "./components/ClientReviews";
import HomepageTeam from "./components/HomepageTeam";
import PricingPreview from "./components/PricingPreview";
import CapabilityStrip from "./components/CapabilityStrip";
import FAQ from "./components/FAQ";
import HomepageInsights from "./components/HomepageInsights";
import HomepageContact from "./components/HomepageContact";
import { homepageFaqs } from "./lib/homepage";

/**
 * Homepage — full Studiova section flow with Peerprise content:
 * 01 Stats · 02 Featured work · 03 Services · 04 Why choose us · 05 Testimonials
 * 06 Team · 07 Pricing · 08 FAQ · 09 Insights · 10 Contact
 */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsIntro />
      <WorkCarousel />
      <HomepageServices />
      <TechnicalCredibility />
      <ClientReviews />
      <HomepageTeam />
      <PricingPreview />
      <CapabilityStrip />
      <FAQ
        items={homepageFaqs}
        eyebrow="Common questions"
        headline="Frequently asked questions"
        number="08"
        variant="light"
      />
      <HomepageInsights />
      <HomepageContact />
    </>
  );
}
