/**
 * Website Care and Support page content — master spec Section 7.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";
import type { ProcessStep } from "../components/ProcessSteps";
import type { CapabilityItem } from "../components/CapabilityGrid";

export const websiteCareHero = {
  eyebrow: "Website Care and Support",
  headline: "Reliable website care from a technical team.",
  supporting:
    "Keep your website maintained, current and working properly without relying on ad hoc freelancers or waiting weeks for routine updates.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.viewPlans,
} as const;

export const websiteCareHandle = {
  eyebrow: "What we handle",
  headline: "Ongoing care for the website your business already relies on.",
  items: [
    "Software, theme and plugin updates where applicable",
    "Backups and restore checks",
    "Uptime and availability monitoring",
    "Security-focused maintenance checks",
    "Text, image and content updates",
    "Small layout and page changes",
    "Form and contact-path testing",
    "Bug investigation and fixes",
    "Mobile and browser checks",
    "Hosting, domain and technical coordination",
    "Technical documentation",
    "Support for custom-built websites by agreement",
  ],
} as const;

export const websiteCareBenefits = {
  eyebrow: "Why it matters",
  headline: "Less delay, clearer ownership and fewer unresolved issues.",
  items: [
    {
      title: "A known support route",
      description:
        "Your team knows where to submit requests and who is responsible for reviewing them.",
    },
    {
      title: "Safer routine changes",
      description:
        "Updates are made carefully, checked and documented rather than applied without a clear process.",
    },
    {
      title: "Current content",
      description:
        "Pages, team information, services, forms and business details can be kept accurate as the company changes.",
    },
    {
      title: "A route for complex work",
      description:
        "When a request requires custom development, it can be assessed by experienced software engineers rather than passed to another provider.",
    },
  ] satisfies CapabilityItem[],
} as const;

export const websiteCarePlatforms = {
  eyebrow: "Supported platforms",
  headline: "Support for established platforms and custom websites.",
  copy: "Peerprise can support WordPress, Webflow, Shopify, Squarespace, Wix and custom-built websites. Support is confirmed after an initial technical review because older, unsupported or heavily customised sites may require a stabilisation project before entering a monthly plan.",
} as const;

export const websiteCareScope = {
  eyebrow: "Scope boundaries",
  headline: "Clear boundaries protect both delivery quality and monthly capacity.",
  intro:
    "A routine website request is normally a contained content, image, configuration or layout change that can be completed without redesigning a major part of the site or introducing substantial new functionality.",
  separatelyHeadline: "The following are normally scoped separately:",
  exclusions: [
    "Full website redesigns",
    "New website builds",
    "Large migrations",
    "New e-commerce functionality",
    "Complex integrations",
    "Custom applications",
    "Large content-entry projects",
    "Emergency or 24/7 support",
  ],
} as const;

export const websiteCareProcess = {
  eyebrow: "How requests work",
  headline: "A simple workflow for every request.",
  steps: [
    {
      number: "01",
      title: "Submit",
      description:
        "Send the request through the agreed support channel with the required content or context.",
    },
    {
      number: "02",
      title: "Review",
      description:
        "Peerprise confirms whether it fits the monthly scope, identifies any risks and communicates the expected delivery window.",
    },
    {
      number: "03",
      title: "Deliver",
      description: "The change is completed, checked and recorded.",
    },
    {
      number: "04",
      title: "Confirm",
      description: "You receive a clear update and any follow-up information needed.",
    },
  ] satisfies ProcessStep[],
} as const;

export const websiteCareFaqs: FAQ[] = [
  {
    id: "wc-takeover",
    question: "Can you take over an existing website?",
    answer:
      "Yes. Peerprise first reviews the platform, hosting, access, update status and any existing technical risks. A stabilisation scope may be recommended before regular support begins.",
  },
  {
    id: "wc-speed",
    question: "How quickly are requests completed?",
    answer:
      "Response and delivery expectations depend on the selected plan and the size of the request. Routine, time-sensitive and critical issues are treated differently and are defined in the service agreement.",
  },
  {
    id: "wc-rollover",
    question: "Do unused support hours roll over?",
    answer:
      "No unless the written proposal states otherwise. Monthly capacity is reserved for the selected period and is not automatically carried forward.",
  },
  {
    id: "wc-redesign",
    question: "Can you redesign or rebuild our website?",
    answer:
      "Yes, but redesigns and full builds are separate projects rather than routine monthly support tasks.",
  },
  {
    id: "wc-emergency",
    question: "Do you provide emergency support?",
    answer:
      "Emergency and out-of-hours support is available only through a separate agreement with defined coverage and response expectations.",
  },
];

export const websiteCareFinalCta = {
  headline: "Give your website a dependable support route.",
  copy: "Start with a practical review of the current site, access, maintenance status and immediate support needs.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.viewPlans,
} as const;

/**
 * Concise related-service links (Prompt 6 brief). Labels and short
 * descriptions reuse the shared service catalogue — no invented claims.
 */
export const websiteCareRelatedIds = [
  "social-presence",
  "digital-operations",
  "custom-software",
] as const;
