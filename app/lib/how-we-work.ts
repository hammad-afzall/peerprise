/**
 * How We Work page content — master spec Section 14.
 */

import type { ProcessStep } from "../components/ProcessSteps";

export const howWeWorkHero = {
  eyebrow: "How We Work",
  headline: "Clear scope, controlled access and visible delivery.",
  supporting:
    "Peerprise adapts the delivery process to the type of engagement, while keeping responsibilities, communication, approvals and technical decisions explicit.",
} as const;

export const howWeWorkEngagementRoutes = [
  {
    id: "managed-support",
    href: "#managed-support",
    title: "Managed support",
    description:
      "For ongoing website, social presence and digital operations support.",
  },
  {
    id: "software-projects",
    href: "#software-projects",
    title: "Software projects",
    description:
      "For custom systems, integrations, automation and defined technical builds.",
  },
  {
    id: "engineering-partnerships",
    href: "#engineering-partnerships-process",
    title: "Engineering partnerships",
    description:
      "For agencies and product teams requiring additional delivery capacity.",
  },
] as const;

export const howWeWorkManagedProcess = {
  id: "managed-support",
  eyebrow: "Managed support",
  headline: "For website, social and digital operations support.",
  steps: [
    {
      number: "01",
      title: "Review",
      description:
        "Understand the current setup, immediate concerns, ownership and access.",
    },
    {
      number: "02",
      title: "Scope",
      description:
        "Document platforms, responsibilities, monthly capacity, exclusions and response expectations.",
    },
    {
      number: "03",
      title: "Onboard",
      description:
        "Set up secure access, communication channels, approvals and the shared work queue.",
    },
    {
      number: "04",
      title: "Plan",
      description:
        "Agree monthly priorities, content requirements and scheduled work.",
    },
    {
      number: "05",
      title: "Deliver",
      description:
        "Complete approved work and respond to support requests through the agreed process.",
    },
    {
      number: "06",
      title: "Summarise",
      description:
        "Provide a clear record of completed work, open items and required client decisions.",
    },
    {
      number: "07",
      title: "Improve",
      description:
        "Recommend contained improvements and separately scope work outside the current plan.",
    },
  ] satisfies ProcessStep[],
} as const;

export const howWeWorkSoftwareProcess = {
  id: "software-projects",
  eyebrow: "Software projects",
  headline: "For custom systems and defined technical projects.",
  note: "Project details are confirmed in the written project agreement.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Clarify business goals, users, workflows, constraints and integrations.",
    },
    {
      number: "02",
      title: "Solution design",
      description:
        "Define architecture, scope, assumptions, risks and milestones.",
    },
    {
      number: "03",
      title: "Delivery planning",
      description:
        "Translate the solution into clear work items, responsibilities and acceptance criteria.",
    },
    {
      number: "04",
      title: "Build and review",
      description:
        "Develop in stages with regular demonstrations and technical review.",
    },
    {
      number: "05",
      title: "Test and launch",
      description:
        "Verify critical workflows, deployment readiness and operational handover.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "Continue through maintenance, enhancements or a defined warranty period according to the agreement.",
    },
  ] satisfies ProcessStep[],
} as const;

export const howWeWorkPartnershipProcess = {
  id: "engineering-partnerships-process",
  eyebrow: "Engineering partnerships",
  headline: "For agencies and product teams adding delivery capacity.",
  steps: [
    {
      title: "Fit",
      description:
        "Confirm skills, capacity, commercial model, time-zone overlap and delivery ownership.",
    },
    {
      title: "Onboarding",
      description:
        "Establish repositories, environments, access, working agreements and communication routines.",
    },
    {
      title: "Delivery",
      description:
        "Work through the partner’s process or an agreed Peerprise workflow with visible progress and technical evidence.",
    },
    {
      title: "Review",
      description:
        "Review delivery quality, priorities, risks and future capacity regularly.",
    },
    {
      title: "Handover",
      description:
        "Document decisions and transfer knowledge so the work does not depend on one person.",
    },
  ] satisfies ProcessStep[],
} as const;

export const howWeWorkStandards = {
  eyebrow: "Working standards",
  headline: "Professional habits across every engagement.",
  items: [
    {
      title: "Communication",
      description:
        "A named contact, agreed channels and clear escalation routes.",
    },
    {
      title: "Access",
      description:
        "Minimum necessary access, controlled sharing and two-factor authentication where available.",
    },
    {
      title: "Approvals",
      description:
        "Content, production changes and material scope decisions are approved through an agreed process.",
    },
    {
      title: "Documentation",
      description:
        "Important configurations, technical decisions and completed work are recorded.",
    },
    {
      title: "Change control",
      description:
        "Work outside the approved scope is identified and agreed before it begins.",
    },
    {
      title: "Offboarding",
      description:
        "Access is reviewed, client assets are returned and a final status or handover record is provided.",
    },
  ],
} as const;

export const howWeWorkFinalCta = {
  headline: "Start with a clear understanding of the work and the right delivery model.",
} as const;
