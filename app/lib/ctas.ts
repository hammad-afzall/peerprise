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
  discussEngineeringRequirement: "Discuss an Engineering Requirement",
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
    href: "/contact?service=Custom%20software",
  },
  discussPartnership: {
    label: ctaLabels.discussPartnership,
    href: "/contact?service=Engineering%20partnership",
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
  /** Services Overview — Engineering services section CTA (Section 6). */
  discussEngineeringRequirement: {
    label: ctaLabels.discussEngineeringRequirement,
    href: "/contact",
  },
} as const;

/** Insights article end CTA — approved labels and routes. */
export const blogArticleCta = {
  headline: "Need help improving your website or digital operations?",
  primary: ctas.exploreServices,
  secondary: ctas.startConversation,
} as const;

export const customSoftwareContactHref =
  "/contact?service=Custom%20software";
