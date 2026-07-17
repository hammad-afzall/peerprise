/**
 * Insights index content — master spec Section 18.
 * Canonical public route remains `/blog`; visible label is Insights.
 */

import { ctaLabels } from "./ctas";

export const insightsPage = {
  label: "Insights",
  headline: "Practical guidance on websites, software and digital operations.",
  supporting:
    "Clear explanations drawn from maintaining, building and improving the digital systems businesses rely on.",
  description:
    "Practical guidance on websites, software and digital operations from the Peerprise team.",
  emptyCategory: "No articles are currently available in this category.",
  emptyFilters: "No articles match your filters.",
  recentHeading: "Recent articles",
  articlesHeading: "Articles",
  featuredHeading: "Featured",
} as const;

export const insightsIndexCta = {
  headline: "Need help with your website or digital systems?",
  primary: { label: ctaLabels.exploreServices, href: "/services" },
  secondary: { label: ctaLabels.startConversation, href: "/contact" },
} as const;
