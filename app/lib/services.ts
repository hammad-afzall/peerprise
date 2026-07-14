export type Service = {
  href: string;
  label: string;
  description: string;
  navDescription: string;
  homepageDescription: string;
  linkLabel: string;
};

export const services: Service[] = [
  {
    href: "/social-presence-management",
    label: "Social Presence Management",
    description: "Planned content and publishing",
    navDescription: "Planned content and publishing",
    homepageDescription:
      "Keep your business active, consistent and professional across its social channels through planned content, branded graphics, scheduling and publishing.",
    linkLabel: "Learn more",
  },
  {
    href: "/website-care",
    label: "Website Care and Support",
    description: "Maintenance and updates",
    navDescription: "Maintenance and updates",
    homepageDescription:
      "Keep your website current, monitored and working properly with ongoing maintenance and reliable technical support.",
    linkLabel: "Learn more",
  },
  {
    href: "/digital-operations",
    label: "Digital Operations Support",
    description: "Forms, CRM and integrations",
    navDescription: "Forms, CRM and integrations",
    homepageDescription:
      "Keep your forms, integrations, analytics and digital tools configured, connected and operating correctly.",
    linkLabel: "Learn more",
  },
  {
    href: "/custom-software-solutions",
    label: "Custom Software Solutions",
    description: "Platforms, apps and tools",
    navDescription: "Platforms, apps and tools",
    homepageDescription:
      "Design and develop websites, platforms, integrations and digital tools built around your business requirements.",
    linkLabel: "Explore Custom Solutions",
  },
];

export const serviceInterestOptions = [
  ...services.map((service) => service.label),
  "All services",
  "Not sure yet",
] as const;
