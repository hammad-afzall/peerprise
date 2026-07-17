/**
 * About Peerprise page content — master spec Section 15.
 */

export const aboutHero = {
  eyebrow: "About Peerprise",
  headline: "A reliable digital partner with engineering at its core.",
  supporting:
    "Peerprise brings managed digital support and experienced software engineering together so businesses do not need a different provider every time a routine request becomes a technical problem.",
} as const;

export const aboutWhyExists = {
  eyebrow: "Why Peerprise exists",
  headline: "Digital work is often fragmented long before it becomes complex.",
  problem:
    "Websites are maintained by one provider, social channels by another, business tools by internal staff and software projects by a separate development company. The result is unclear ownership, repeated onboarding and work that remains incomplete between suppliers.",
  response:
    "Peerprise provides one accountable route for day-to-day digital operations, technical improvements and custom engineering.",
} as const;

export const aboutTeamStructure = {
  eyebrow: "Team structure",
  headline: "Support specialists for recurring work. Engineers for technical depth.",
  intro:
    "The Peerprise team combines software engineers with support and content operations specialists.",
  support: {
    title: "Support specialists",
    description:
      "Support specialists coordinate recurring requests, website content, publishing workflows, documentation and client communication.",
  },
  engineers: {
    title: "Engineers",
    description:
      "Engineers handle integrations, custom development, architecture, production issues and technical escalation.",
  },
  closing:
    "This structure keeps routine work organised while ensuring complex work is handled by people with appropriate engineering experience.",
} as const;

export const aboutTechnicalLeadership = {
  eyebrow: "Technical leadership",
  headline: "Seven years of professional software engineering experience.",
  leadership:
    "Peerprise is led by a senior software engineer with experience across full-stack product development, backend systems, cloud services, mobile applications, AI integrations, payments, real-time systems and production support.",
  network:
    "The wider engineering network brings complementary experience across modern web technologies, APIs, infrastructure, databases, integrations and application delivery.",
  /** Categories taken directly from the approved leadership and network copy. */
  leadershipAreas: [
    "Full-stack product development",
    "Backend systems",
    "Cloud services",
    "Mobile applications",
    "AI integrations",
    "Payments",
    "Real-time systems",
    "Production support",
  ] as const,
  networkAreas: [
    "Modern web technologies",
    "APIs",
    "Infrastructure",
    "Databases",
    "Integrations",
    "Application delivery",
  ] as const,
} as const;

export const aboutPrinciples = {
  eyebrow: "Operating principles",
  headline: "How Peerprise approaches responsibility.",
  items: [
    {
      title: "Ownership",
      description:
        "Every engagement has clear responsibilities and an agreed route for requests and decisions.",
    },
    {
      title: "Practicality",
      description:
        "We recommend the simplest responsible solution that meets the requirement.",
    },
    {
      title: "Transparency",
      description:
        "Scope, capacity, risks, progress and additional work are communicated directly.",
    },
    {
      title: "Security-minded delivery",
      description:
        "Access is limited, shared carefully and reviewed when responsibilities change.",
    },
    {
      title: "Maintainability",
      description:
        "Technical work is designed to remain understandable and supportable after delivery.",
    },
    {
      title: "Long-term relationships",
      description:
        "The aim is dependable ongoing value, not creating avoidable dependency or unnecessary work.",
    },
  ],
} as const;

export const aboutWhereWeWork = {
  eyebrow: "Where Peerprise works",
  headline: "A remote team supporting international clients.",
  copy: "Peerprise works remotely with businesses, agencies and product teams across regions. Communication windows, meeting expectations and delivery routines are agreed for each engagement.",
  points: [
    "Agreed communication windows",
    "Clear meeting expectations",
    "Defined delivery routines",
    "Support for businesses, agencies and product teams",
  ] as const,
} as const;

export const aboutFinalCta = {
  headline:
    "Looking for a partner that can handle both routine digital work and serious engineering?",
} as const;
