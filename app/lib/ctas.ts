/**
 * Approved global CTA labels and common destinations — master spec Section 3.
 * Use these labels consistently; do not invent variants per page.
 */

export const ctaLabels = {
  startConversation: "Start a Conversation",
  requestDigitalReview: "Request a Digital Review",
  exploreServices: "Explore Services",
  viewPlans: "View Plans",
  discussSoftware: "Discuss a Software Project",
  discussPartnership: "Discuss a Partnership",
  viewSelectedWork: "View Selected Work",
  viewManagedPlans: "View Managed Plans",
  exploreCustomSolutions: "Explore Custom Solutions",
  readArticle: "Read article",
} as const;

export type CtaLabelKey = keyof typeof ctaLabels;

export const ctas = {
  startConversation: {
    label: ctaLabels.startConversation,
    href: "/contact",
  },
  requestDigitalReview: {
    label: ctaLabels.requestDigitalReview,
    href: "/digital-review",
  },
  /** Legacy route kept until Prompt 15 redirect lands. */
  requestDigitalReviewLegacy: {
    label: ctaLabels.requestDigitalReview,
    href: "/health-check",
  },
  exploreServices: {
    label: ctaLabels.exploreServices,
    href: "/services",
  },
  viewPlans: {
    label: ctaLabels.viewPlans,
    href: "/plans",
  },
  discussSoftware: {
    label: ctaLabels.discussSoftware,
    href: "/contact?service=Custom%20Software",
  },
  discussPartnership: {
    label: ctaLabels.discussPartnership,
    href: "/contact?service=Engineering%20Partnerships",
  },
  viewSelectedWork: {
    label: ctaLabels.viewSelectedWork,
    href: "/work",
  },
  viewManagedPlans: {
    label: ctaLabels.viewManagedPlans,
    href: "/plans",
  },
  exploreCustomSolutions: {
    label: ctaLabels.exploreCustomSolutions,
    href: "/custom-software-solutions",
  },
} as const;

/** Blog article end CTA — preserved for existing Insights articles. */
export const blogArticleCta = {
  headline: "Need help improving your website or digital operations?",
  primary: { label: "Explore Our Services", href: "/#services" },
  secondary: { label: "Contact Peerprise", href: "/contact" },
} as const;

export const customSoftwareContactHref =
  "/contact?service=Custom%20Software%20Solutions";
