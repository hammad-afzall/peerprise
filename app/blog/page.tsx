import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import CTASection from "../components/CTASection";
import BlogIndexClient from "./BlogIndexClient";
import { getAllPosts, getFeaturedPost } from "../lib/blog";
import { insightsIndexCta, insightsPage } from "../lib/insights";

export const metadata: Metadata = {
  title: insightsPage.label,
  description: insightsPage.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Peerprise ${insightsPage.label}`,
    description: insightsPage.supporting,
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();

  return (
    <>
      <PageHero
        supporting="Practical guidance on websites, software and digital operations."
        highlight="Practical guidance"
        headline="Insights"
        subtext={insightsPage.supporting}
        size="display"
        backgroundImage="/blog.jpg"
      />

      <PageSection
        number="01"
        badge="Resources"
        headline={insightsPage.recentHeading}
        intro={insightsPage.headline}
        id="insights-index-heading"
        tone="white"
      >
        <BlogIndexClient posts={posts} featured={featured} />
      </PageSection>

      <CTASection
        headline={insightsIndexCta.headline}
        primaryCta={insightsIndexCta.primary}
        secondaryCta={insightsIndexCta.secondary}
        variant="dark"
        id="insights-final-cta"
        number="02"
      />
    </>
  );
}
