/**
 * Digital Presence Review page content — master spec Section 16.
 */

export const digitalReviewHero = {
  eyebrow: "Digital Presence Review",
  headline: "Find the operational issues that need attention first.",
  supporting:
    "Peerprise provides a practical initial review of your website, social profiles and connected digital setup. The goal is to identify obvious maintenance gaps, ownership problems and technical issues before recommending a managed plan or separate project.",
  ctaLabel: "Request a Review",
  formAnchor: "#review-form",
} as const;

export const digitalReviewAreas = {
  eyebrow: "What we review",
  headline: "A high-level review of the areas your business relies on.",
  items: [
    "Website availability and visible errors",
    "Mobile layout and basic usability",
    "Broken links and contact paths",
    "Outdated or incomplete business information",
    "Form and enquiry routing",
    "Social profile completeness and consistency",
    "Recent publishing activity",
    "Obvious account and ownership gaps",
    "Third-party tool connections described by the client",
    "Basic maintenance and security concerns visible without intrusive testing",
  ],
} as const;

export const digitalReviewDeliverables = {
  eyebrow: "What you receive",
  headline: "A concise summary with practical priorities.",
  intro: "The review may include:",
  items: [
    "Immediate issues that should be corrected",
    "Areas requiring clearer ownership or access",
    "Suitable work for a monthly managed plan",
    "Improvements that require a separate technical project",
    "Questions that need further discovery",
  ],
  limitation:
    "The review is intentionally high level. It is not a formal security audit, penetration test, legal review, accessibility certification, marketing audit or full technical due-diligence exercise.",
} as const;

/** Approved need options — Section 16. Submitted as the `service` field. */
export const digitalReviewNeedOptions = [
  "Website care",
  "Social presence support",
  "Digital operations",
  "Custom software",
  "Engineering partnership",
  "Not sure",
] as const;

export type DigitalReviewNeed = (typeof digitalReviewNeedOptions)[number];

export const digitalReviewSuccessMessage =
  "Thank you. Peerprise will review the information and respond with the appropriate next step.";

export const digitalReviewConsentText =
  "By submitting this form, you agree that Peerprise may use the information provided to review and respond to your enquiry. Please do not include passwords, private keys or other sensitive credentials.";

export const digitalReviewCredentialNote =
  "Do not submit passwords, API keys, private keys, access tokens or other credentials with this form.";
