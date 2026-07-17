/**
 * Shared service catalogue — master spec Sections 2 & 5.
 */

export type Service = {
  id: string;
  href: string;
  /** Current / legacy display name used on unfinished service pages */
  label: string;
  /** Master-spec approved name (nav + homepage) */
  approvedLabel: string;
  description: string;
  navDescription: string;
  homepageDescription: string;
  /** Services Overview page — master spec Section 6 */
  overviewDescription: string;
  linkLabel: string;
  category: "managed" | "engineering";
};

export const services: Service[] = [
  {
    id: "website-care",
    href: "/website-care",
    label: "Website Care and Support",
    approvedLabel: "Website Care and Support",
    description: "Maintenance and updates",
    navDescription: "Maintenance, updates and technical support",
    homepageDescription:
      "Keep your website maintained, current and working properly through ongoing updates, monitoring, troubleshooting and technical support.",
    overviewDescription:
      "Maintenance, updates, troubleshooting, monitoring, content changes and practical technical support for existing websites.",
    linkLabel: "Explore Website Care",
    category: "managed",
  },
  {
    id: "social-presence",
    href: "/social-presence-management",
    label: "Social Presence Management",
    approvedLabel: "Social Presence Support",
    description: "Planned content and publishing",
    navDescription: "Planning, content and publishing",
    homepageDescription:
      "Maintain a consistent and professional presence through planned content, branded graphics, approvals, scheduling and publishing.",
    overviewDescription:
      "Content planning, captions, branded post graphics, approvals, scheduling, publishing and profile upkeep.",
    linkLabel: "Explore Social Support",
    category: "managed",
  },
  {
    id: "digital-operations",
    href: "/digital-operations",
    label: "Digital Operations Support",
    approvedLabel: "Digital Operations",
    description: "Forms, CRM and integrations",
    navDescription: "Forms, tools and integrations",
    homepageDescription:
      "Keep forms, accounts, integrations, email routing and third-party tools connected, documented and under control.",
    overviewDescription:
      "Support for forms, email routing, third-party platforms, integrations, account access, workflow automation and technical documentation.",
    linkLabel: "Explore Digital Operations",
    category: "managed",
  },
  {
    id: "custom-software",
    href: "/custom-software-solutions",
    label: "Custom Software Solutions",
    approvedLabel: "Custom Software",
    description: "Platforms, apps and tools",
    navDescription: "Applications, portals and automation",
    homepageDescription:
      "Build portals, internal tools, web applications, integrations and automation around the way your business actually works.",
    overviewDescription:
      "Web applications, customer portals, internal tools, automation, APIs, payments, subscriptions and platform modernisation.",
    linkLabel: "Explore Custom Software",
    category: "engineering",
  },
  {
    id: "engineering-partnerships",
    href: "/engineering-partnerships",
    label: "Engineering Partnerships",
    approvedLabel: "Engineering Partnerships",
    description: "Dedicated or white-label delivery",
    navDescription: "Dedicated or white-label delivery",
    homepageDescription:
      "Add dependable development capacity to your agency or product team through project delivery, dedicated engineers or white-label support.",
    overviewDescription:
      "Project delivery, dedicated capacity and white-label development for agencies, product teams and larger organisations.",
    linkLabel: "Explore Engineering Partnerships",
    category: "engineering",
  },
];

/**
 * Primary homepage service cards.
 * Engineering Partnerships is presented in a dedicated homepage section
 * rather than as an ordinary service card.
 */
export const homepageServices = services.filter(
  (service) => service.id !== "engineering-partnerships",
);

export const managedServices = services.filter((s) => s.category === "managed");
export const engineeringServices = services.filter((s) => s.category === "engineering");

import { planEnquiryOptions } from "./plans";

export const serviceInterestOptions = [
  ...services.map((service) => service.label),
  ...planEnquiryOptions,
  "All services",
  "Not sure yet",
] as const;
