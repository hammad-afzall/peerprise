/**
 * Shared service catalogue.
 * Homepage card labels/descriptions stay unchanged in Stage 3 (Prompt 4 will align copy).
 * `approvedLabel` matches master-spec / nav naming for later pages.
 */

export type Service = {
  id: string;
  href: string;
  /** Current homepage / legacy display name */
  label: string;
  /** Master-spec approved name (nav + future pages) */
  approvedLabel: string;
  description: string;
  navDescription: string;
  homepageDescription: string;
  linkLabel: string;
  category: "managed" | "engineering";
};

export const services: Service[] = [
  {
    id: "social-presence",
    href: "/social-presence-management",
    label: "Social Presence Management",
    approvedLabel: "Social Presence Support",
    description: "Planned content and publishing",
    navDescription: "Planning, content and publishing",
    homepageDescription:
      "Keep your business active, consistent and professional across its social channels through planned content, branded graphics, scheduling and publishing.",
    linkLabel: "Learn more",
    category: "managed",
  },
  {
    id: "website-care",
    href: "/website-care",
    label: "Website Care and Support",
    approvedLabel: "Website Care and Support",
    description: "Maintenance and updates",
    navDescription: "Maintenance, updates and technical support",
    homepageDescription:
      "Keep your website current, monitored and working properly with ongoing maintenance and reliable technical support.",
    linkLabel: "Learn more",
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
      "Keep your forms, integrations, analytics and digital tools configured, connected and operating correctly.",
    linkLabel: "Learn more",
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
      "Design and develop websites, platforms, integrations and digital tools built around your business requirements.",
    linkLabel: "Explore Custom Solutions",
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
      "Dedicated, project-based or white-label engineering delivery for agencies, software companies and larger organisations.",
    linkLabel: "Discuss a Partnership",
    category: "engineering",
  },
];

/** Four cards currently shown on the homepage (Prompt 4 may add the fifth). */
export const homepageServices = services.filter(
  (service) => service.id !== "engineering-partnerships",
);

export const managedServices = services.filter((s) => s.category === "managed");
export const engineeringServices = services.filter((s) => s.category === "engineering");

export const serviceInterestOptions = [
  ...services.map((service) => service.label),
  "All services",
  "Not sure yet",
] as const;
