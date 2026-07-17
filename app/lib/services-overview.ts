/**
 * Services Overview page content — master spec Section 6.
 */

import { ctas } from "./ctas";
import { engineeringServices, managedServices } from "./services";

export const servicesOverviewHero = {
  eyebrow: "Services",
  headline: "One partner for day-to-day digital operations and complex technical delivery.",
  supporting:
    "Peerprise combines managed support with experienced software engineering. Start with website care, social publishing or digital operations, then add integrations, custom development or dedicated engineering capacity when the requirement grows.",
  primaryCta: ctas.startConversation,
} as const;

export const servicesOverviewManaged = {
  eyebrow: "Managed services",
  headline: "Keep your digital presence current, reliable and organised.",
  cta: ctas.viewManagedPlans,
  services: managedServices.map((service) => ({
    id: service.id,
    approvedLabel: service.approvedLabel,
    href: service.href,
    linkLabel: service.linkLabel,
    description: service.overviewDescription,
  })),
};

export const servicesOverviewEngineering = {
  eyebrow: "Engineering services",
  headline: "Improve or build the systems your business depends on.",
  cta: ctas.discussEngineeringRequirement,
  services: engineeringServices.map((service) => ({
    id: service.id,
    approvedLabel: service.approvedLabel,
    href: service.href,
    linkLabel: service.linkLabel,
    description: service.overviewDescription,
  })),
};

export const servicesOverviewProgression = {
  eyebrow: "How the services fit together",
  headline: "A service model designed to grow with the requirement.",
  stages: [
    {
      title: "Run",
      description: "Run existing digital operations consistently.",
    },
    {
      title: "Improve",
      description: "Improve disconnected tools and inefficient workflows.",
    },
    {
      title: "Build",
      description: "Build custom systems when generic products no longer fit.",
    },
    {
      title: "Scale",
      description: "Scale delivery through additional engineering capacity.",
    },
  ],
} as const;

export const servicesOverviewFinalCta = {
  headline: "Not sure where your requirement fits?",
  copy: "Describe the work, the current problem and the result you need. Peerprise will recommend the appropriate service and engagement model.",
  primaryCta: ctas.startConversation,
} as const;
