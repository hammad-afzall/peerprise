/**
 * Contact page content — master spec Section 17.
 */

import { CONTACT_EMAIL } from "./nav";

export const contactHero = {
  eyebrow: "Contact",
  headline: "Tell us what you need help with.",
  supporting:
    "Whether you need ongoing digital support, a custom software solution or additional engineering capacity, share the current situation and the outcome you are trying to achieve.",
} as const;

/** Approved enquiry types — Section 17. */
export const contactEnquiryTypes = [
  "Managed digital presence",
  "Website care and support",
  "Social presence support",
  "Digital operations",
  "Custom software",
  "Engineering partnership",
  "Other",
] as const;

export type ContactEnquiryType = (typeof contactEnquiryTypes)[number];

export const contactStartPeriods = [
  "As soon as practical",
  "Within one month",
  "Within three months",
  "Planning for later",
] as const;

export type ContactStartPeriod = (typeof contactStartPeriods)[number];

export const contactBudgetRanges = [
  "Under $1,000 per month",
  "$1,000–$2,500 per month",
  "$2,500–$5,000 per month",
  "$5,000–$15,000 project or monthly budget",
  "Above $15,000",
  "Not defined yet",
] as const;

export type ContactBudgetRange = (typeof contactBudgetRanges)[number];

export const contactConsentText =
  "By submitting this form, you agree that Peerprise may use the information provided to review and respond to your enquiry. Please do not include passwords, private keys or other sensitive credentials.";

export const contactSuccessMessage =
  "Thank you. Your enquiry has been received. Peerprise will review the information and respond with the appropriate next step.";

export const contactNextSteps = {
  eyebrow: "What happens next",
  headline: "A practical first conversation, not a sales script.",
  steps: [
    {
      number: "01",
      title: "Review",
      description:
        "We assess the information provided and identify the most relevant service or questions.",
    },
    {
      number: "02",
      title: "Discuss",
      description:
        "Where there is a reasonable fit, we arrange a short call or continue by email to clarify the requirement.",
    },
    {
      number: "03",
      title: "Recommend",
      description:
        "We suggest a managed plan, discovery engagement, project scope or partnership model.",
    },
  ],
} as const;

export const contactGeneralEmail = CONTACT_EMAIL;

/**
 * Allowlisted query-parameter values → approved enquiry types.
 * Supports legacy `?service=` CTAs without inventing new routes.
 */
const enquiryQueryAliases: Record<string, ContactEnquiryType> = {
  "Managed digital presence": "Managed digital presence",
  "Website care and support": "Website care and support",
  "Website Care and Support": "Website care and support",
  "Social presence support": "Social presence support",
  "Social Presence Support": "Social presence support",
  "Digital operations": "Digital operations",
  "Digital Operations": "Digital operations",
  "Custom software": "Custom software",
  "Custom Software": "Custom software",
  "Custom Software Solutions": "Custom software",
  "Engineering partnership": "Engineering partnership",
  "Engineering Partnerships": "Engineering partnership",
  Other: "Other",
  // Managed plan enquiry CTAs
  "Presence Care": "Managed digital presence",
  "Managed Presence": "Managed digital presence",
  "Digital Operations Partner": "Digital operations",
};

export function resolveContactEnquiryType(
  raw: string | undefined | null,
): ContactEnquiryType | "" {
  if (!raw) return "";
  const trimmed = raw.trim();
  if (!trimmed) return "";
  return enquiryQueryAliases[trimmed] ?? "";
}

export function isContactEnquiryType(value: string): value is ContactEnquiryType {
  return (contactEnquiryTypes as readonly string[]).includes(value);
}

export function isContactStartPeriod(value: string): value is ContactStartPeriod {
  return (contactStartPeriods as readonly string[]).includes(value);
}

export function isContactBudgetRange(value: string): value is ContactBudgetRange {
  return (contactBudgetRanges as readonly string[]).includes(value);
}
