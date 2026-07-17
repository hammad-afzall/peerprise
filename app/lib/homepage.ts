/**
 * Homepage section content — master spec Section 5.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";

export const homepagePageLabel = "Engineering-led digital support";

export const homepageHero = {
  eyebrow: homepagePageLabel,
  h1: "Your entire digital presence, managed by one reliable team.",
  supporting:
    "Peerprise looks after the websites, social channels, digital tools and ongoing technical work your business relies on. When you need to improve a process, connect systems or build something custom, experienced software engineers are already part of the team.",
  audienceLine: "For small businesses, growing companies and agency partners.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.exploreServices,
} as const;

export const homepageProblems = {
  eyebrow: "Clear ownership",
  headline: "One accountable team for the work that usually falls between providers.",
  intro:
    "Website changes, social publishing, forms, third-party tools and technical issues are often split across different freelancers and suppliers. That creates delays, duplicated effort and uncertainty about who is responsible.",
  cards: [
    {
      title: "Website work keeps waiting",
      description:
        "Small changes, broken forms and maintenance tasks remain open because no one owns them consistently.",
    },
    {
      title: "Social channels become inactive",
      description:
        "Content is prepared irregularly, approvals are unclear and publishing becomes another unfinished task.",
    },
    {
      title: "Digital tools stop working together",
      description:
        "Forms, inboxes, CRMs and external platforms are configured by different people with limited documentation.",
    },
    {
      title: "Technical work has no clear route",
      description:
        "Routine support and complex engineering needs are handled separately, forcing the business to find a new provider every time the work becomes more technical.",
    },
  ],
} as const;

export const homepageServicesSection = {
  eyebrow: "What Peerprise does",
  headline: "Support for what you run today. Engineering for what comes next.",
  intro:
    "Start with the support your business needs now. Add technical improvements, custom software or engineering capacity as your requirements grow.",
} as const;

export const homepageServiceModel = {
  eyebrow: "A practical service model",
  headline: "Run. Improve. Build. Scale.",
  stages: [
    {
      title: "Run",
      description:
        "We manage recurring website, social and technical support so everyday work stays organised and completed.",
    },
    {
      title: "Improve",
      description:
        "We fix weak processes, connect tools and automate repetitive work where practical.",
    },
    {
      title: "Build",
      description:
        "We design and develop custom systems when standard products no longer fit the requirement.",
    },
    {
      title: "Scale",
      description:
        "We provide engineering capacity for agencies and product teams that need additional delivery support.",
    },
  ],
} as const;

export const homepageAudienceSection = {
  eyebrow: "Who we support",
  headline: "Different needs. One dependable technical partner.",
} as const;

export const homepageEngineering = {
  eyebrow: "Engineering at the core",
  headline: "Everyday support backed by real software engineering experience.",
  copy: [
    "Peerprise is led by software engineers with seven years of professional experience across web applications, backend systems, mobile products, cloud infrastructure, integrations, payments, AI-enabled workflows and production support.",
    "That engineering depth matters even when the immediate requirement is simple. Website updates are handled carefully, access is controlled, integrations are documented and larger technical issues have a clear path to experienced engineers.",
  ],
  capabilities: [
    "Web, mobile and backend development",
    "APIs and third-party integrations",
    "Cloud-based systems and deployment",
    "Payments, subscriptions and access control",
    "Workflow automation and AI integrations",
    "Production support and platform improvements",
  ],
  supportingLine:
    "Experience includes work across SaaS, e-commerce, gaming, supply chain, healthcare, media and digital products for international teams.",
} as const;

export const homepageExperience = {
  eyebrow: "Selected team experience",
  headline: "Experience solving complex product and operational problems.",
  cases: [
    {
      title: "Real-time product backend",
      context:
        "A consumer gaming product required a backend capable of supporting live player actions, real-time updates and evolving game mechanics.",
      contribution:
        "Designed and developed an MVP backend with WebSocket-based player actions, live leaderboards, and reward, quest and game-mechanic features using PostgreSQL and DynamoDB.",
      capability:
        "Real-time systems, backend architecture, data modelling and production-focused product delivery.",
      tags: ["Go", "WebSockets", "PostgreSQL", "DynamoDB"],
    },
    {
      title: "AI calling and workflow automation",
      context:
        "A calling platform needed to automate AI-led conversations, classify outcomes and process batches reliably at production scale.",
      contribution:
        "Architected AI-assisted call workflows with automated outcomes, SQS and EventBridge retry handling, and production support workflows.",
      capability:
        "AI integration, event-driven architecture, operational resilience and cross-stack delivery.",
      tags: ["AI voice", "AWS SQS", "EventBridge", "React"],
    },
    {
      title: "Video platform and subscription systems",
      context:
        "A screen-recording product required backend improvements, media-processing features and more reliable subscription workflows.",
      contribution:
        "Contributed to core backend and streaming services, implemented FFmpeg editing features, and improved Stripe subscription and webhook handling.",
      capability:
        "Media systems, production debugging, payment integrations and product improvement.",
      outcome: "Helped reduce reported recording errors by 65%.",
      tags: ["Backend", "FFmpeg", "Stripe", "Streaming"],
    },
  ],
  cta: ctas.viewSelectedWork,
} as const;

export const homepageProcess = {
  eyebrow: "How it works",
  headline: "A clear process from first review to ongoing delivery.",
  steps: [
    {
      number: "01",
      title: "Review",
      description:
        "We understand your current setup, immediate concerns and the work that needs consistent ownership.",
    },
    {
      number: "02",
      title: "Agree",
      description:
        "We define responsibilities, priorities, access requirements, response expectations and commercial scope before work begins.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Your Peerprise team completes agreed recurring work, support requests and technical improvements through a shared workflow.",
    },
    {
      number: "04",
      title: "Improve",
      description:
        "We document completed work, identify sensible improvements and scope anything that falls outside the current engagement.",
    },
  ],
  cta: { label: "See How We Work", href: "/how-it-works" },
} as const;

export const homepagePlansTeaser = {
  eyebrow: "Managed plans",
  headline: "Clear monthly support, matched to the level of ownership you need.",
  copy: "Choose focused website care, combined website and social support, or broader digital operations coverage. Each engagement has a documented scope, defined capacity and clear boundaries for additional work.",
  cta: ctas.viewPlans,
} as const;

export const homepageTestimonials = {
  eyebrow: "Client experiences",
  headline: "Trusted for thoughtful engineering and dependable delivery.",
} as const;

export const homepagePartnership = {
  eyebrow: "For agencies and product teams",
  headline: "Need experienced engineers behind your next delivery?",
  copy: "Peerprise works with agencies and product teams that need additional capacity, specialist technical skills or a dependable white-label delivery partner. Engage us for a defined project, a dedicated monthly allocation or ongoing product support.",
  cta: {
    label: "Explore Engineering Partnerships",
    href: "/engineering-partnerships",
  },
} as const;

export const homepageFaqs: FAQ[] = [
  {
    id: "hp-what-managed",
    question: "What does Peerprise manage?",
    answer:
      "Peerprise can manage website care, content updates, social publishing, forms, account access, third-party tools, integrations and agreed technical support. The exact responsibilities are documented for each engagement.",
  },
  {
    id: "hp-marketing-agency",
    question: "Is Peerprise a marketing agency?",
    answer:
      "No. Peerprise does not sell advertising, traffic growth, lead-generation campaigns or performance marketing. Social presence support focuses on planning, preparing and publishing professional content supplied or approved by the client.",
  },
  {
    id: "hp-custom-software",
    question: "Can Peerprise build custom software?",
    answer:
      "Yes. Peerprise develops web applications, internal tools, portals, APIs, integrations, automation and other custom systems based on a defined business requirement.",
  },
  {
    id: "hp-existing-team",
    question: "Can you work with our existing agency or internal team?",
    answer:
      "Yes. Peerprise can work alongside existing providers, support an internal team or operate as a white-label engineering partner for another agency.",
  },
  {
    id: "hp-monthly-plan",
    question: "Do all clients need a monthly plan?",
    answer:
      "No. Managed support is normally provided through a monthly engagement, while software and engineering work may be delivered as a fixed project, dedicated capacity or ongoing technical partnership.",
  },
];

export const homepageFinalCta = {
  headline: "Bring your digital work under one reliable team.",
  copy: "Tell us what your business is currently managing, where work is being delayed and what kind of support you need. We will recommend a practical starting point.",
  primaryCta: ctas.startConversation,
  secondaryCta: ctas.requestDigitalReview,
} as const;
