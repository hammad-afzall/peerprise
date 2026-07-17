/**
 * Social Presence Support page content — master spec Section 8.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";
import type { ProcessStep } from "../components/ProcessSteps";

export const socialPresenceHero = {
  eyebrow: "Social Presence Support",
  headline: "A consistent professional presence, without adding another daily task to your team.",
  supporting:
    "Peerprise helps businesses organise, prepare, approve and publish regular social content while keeping profiles current and on-brand.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.viewPlans,
} as const;

export const socialPresenceIncluded = {
  eyebrow: "What is included",
  headline: "A structured publishing process from brief to live post.",
  items: [
    "Monthly content planning",
    "Content calendar preparation",
    "Caption drafting",
    "Branded static post graphics",
    "Client review and approval",
    "Scheduling and publishing",
    "Profile information updates",
    "Repurposing approved business content",
    "Basic monitoring for obvious comments or messages requiring client attention",
    "Monthly record of published content",
  ],
  platformsNote:
    "Supported platforms are confirmed in the proposal. Typical platforms include LinkedIn, Instagram, Facebook and X.",
} as const;

export const socialPresenceBoundaries = {
  eyebrow: "What this service is—and is not",
  headline: "Professional presence support, not performance marketing.",
  intro:
    "Peerprise helps a business remain active, accurate and professionally presented across agreed social channels.",
  exclusionsIntro: "This service does not include the following unless separately agreed:",
  exclusions: [
    "Paid advertising",
    "Media buying",
    "Lead-generation campaigns",
    "Follower-growth guarantees",
    "Influencer outreach",
    "Daily community management",
    "Sales outreach",
    "Photography",
    "On-location filming",
    "Advanced video production",
    "Public-relations activity",
    "Marketing attribution or traffic reporting",
  ],
} as const;

export const socialPresenceClientResponsibilities = {
  eyebrow: "Client responsibilities",
  headline: "Good content depends on timely business input.",
  copy: "The client provides or approves company updates, subject-matter input, brand assets and factual claims. Peerprise organises this material into a consistent publishing workflow but does not invent announcements, client results or technical claims.",
} as const;

export const socialPresenceProcess = {
  eyebrow: "How it works",
  headline: "Planned, reviewed and approved before publishing.",
  steps: [
    {
      number: "01",
      title: "Brief",
      description:
        "We collect business updates, themes, source material and any important dates.",
    },
    {
      number: "02",
      title: "Plan",
      description: "A monthly content calendar is prepared for review.",
    },
    {
      number: "03",
      title: "Create",
      description:
        "Captions and agreed graphics are produced using the approved direction and brand assets.",
    },
    {
      number: "04",
      title: "Approve",
      description: "The client reviews content and confirms any required changes.",
    },
    {
      number: "05",
      title: "Publish",
      description: "Approved posts are scheduled and published on the agreed channels.",
    },
  ] satisfies ProcessStep[],
} as const;

export const socialPresenceFaqs: FAQ[] = [
  {
    id: "sp-guarantees",
    question: "Will you guarantee followers, leads or sales?",
    answer:
      "No. Peerprise does not sell social growth guarantees or performance marketing. The service is designed to maintain a consistent, professional and organised presence.",
  },
  {
    id: "sp-visuals",
    question: "Do you create all visual content?",
    answer:
      "Plans can include branded static graphics based on supplied brand assets. Photography, complex illustration, animation and advanced video production are separate services.",
  },
  {
    id: "sp-approvals",
    question: "Who approves the posts?",
    answer:
      "A nominated client contact approves the monthly calendar and final content before publication unless a different written approval process is agreed.",
  },
  {
    id: "sp-comments",
    question: "Can you reply to comments and messages?",
    answer:
      "Basic monitoring can be included. Ongoing community management or customer-service handling requires a separate scope and response playbook.",
  },
  {
    id: "sp-standalone",
    question: "Can social support be purchased without website care?",
    answer:
      "Yes, where the required scope is suitable. Combined plans are normally more effective when Peerprise is responsible for both the website and social publishing workflow.",
  },
];

export const socialPresenceFinalCta = {
  headline: "Create a reliable publishing rhythm for your business.",
  primaryCta: ctas.startConversation,
  secondaryCta: ctas.viewPlans,
} as const;

/** Related managed routes — catalogue labels only; no invented claims. */
export const socialPresenceRelatedIds = [
  "website-care",
  "digital-operations",
] as const;
