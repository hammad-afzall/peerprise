/**
 * Selected Work / team experience case studies — master spec Section 13.
 * Attribution: selected team experience, not direct Peerprise client work.
 */

export type WorkCaseStudy = {
  id: string;
  title: string;
  context: string;
  contributions: string[];
  capability: string;
  tags: string[];
  /** Optional approved outcome with supporting evidence. */
  outcome?: string;
};

export const workPageHero = {
  eyebrow: "Selected Work",
  headline: "Experience across products, platforms and complex digital systems.",
  supporting:
    "Members of the Peerprise engineering team have contributed to international products across gaming, SaaS, media, commerce, supply chain, AI-enabled systems and secure digital platforms.",
} as const;

export const workCaseStudies: WorkCaseStudy[] = [
  {
    id: "realtime-gaming-backend",
    title: "Real-time gaming backend",
    context:
      "A consumer gaming product required a backend capable of supporting live player actions, real-time updates and evolving game mechanics.",
    contributions: [
      "Designed and developed an MVP backend",
      "Implemented WebSocket-based player actions",
      "Delivered live leaderboard updates",
      "Built reward, quest and game-mechanic features",
      "Used PostgreSQL for structured data and DynamoDB for player profiles",
    ],
    capability:
      "Real-time systems, backend architecture, data modelling and production-focused product delivery.",
    tags: ["Go", "WebSockets", "PostgreSQL", "DynamoDB"],
  },
  {
    id: "ai-calling-workflow",
    title: "AI-assisted calling and workflow platform",
    context:
      "A calling platform needed to automate AI-led conversations, classify outcomes and process batches reliably at production scale.",
    contributions: [
      "Architected AI-assisted call workflows",
      "Automated successful and declined outcomes based on defined rules",
      "Implemented SQS, dead-letter queues and EventBridge-based retry handling",
      "Supported production incidents and root-cause investigation",
      "Improved frontend state handling and interface reliability",
    ],
    capability:
      "AI integration, event-driven architecture, operational resilience and cross-stack delivery.",
    tags: ["AI Voice", "AWS SQS", "EventBridge", "React"],
  },
  {
    id: "screen-recording-platform",
    title: "Screen recording and video collaboration platform",
    context:
      "A screen-recording product required backend improvements, media-processing features and more reliable subscription workflows.",
    contributions: [
      "Contributed to core backend and streaming services",
      "Implemented blur and trim functionality with FFmpeg",
      "Resolved critical production recording issues",
      "Helped reduce reported recording errors by 65%",
      "Improved Stripe subscriptions and webhook handling",
    ],
    capability:
      "Media systems, production debugging, payment integrations and product improvement.",
    tags: ["Backend", "Streaming", "FFmpeg", "Stripe"],
  },
  {
    id: "artwork-verification",
    title: "Artwork authenticity and verification platform",
    context:
      "A digital platform needed to connect physical artwork tags with a secure verification workflow and mobile application.",
    contributions: [
      "Designed the PostgreSQL data model",
      "Developed backend APIs in Go",
      "Built a verification service using NTAG 424 DNA capabilities",
      "Created a React Native Android application for reading and writing supported tags",
    ],
    capability:
      "Secure product workflows, mobile development, backend services and physical-digital integration.",
    tags: ["Go", "PostgreSQL", "React Native", "NFC"],
  },
  {
    id: "commerce-integration",
    title: "Commerce integration platform",
    context:
      "A commerce product required scalable services connecting major e-commerce platforms with cloud-based processing and internal interfaces.",
    contributions: [
      "Developed TypeScript and Fastify microservices",
      "Integrated Magento and Salesforce Commerce Cloud APIs",
      "Used DynamoDB and AWS Lambda for backend workflows",
      "Contributed to React interfaces and API integration",
      "Configured CI/CD and supported AWS deployments",
    ],
    capability:
      "Commerce integrations, serverless architecture, full-stack delivery and deployment operations.",
    tags: ["TypeScript", "Fastify", "React", "AWS"],
  },
  {
    id: "supply-chain-platform",
    title: "Supply-chain web and mobile platform",
    context:
      "A supply-chain operation required coordinated web and mobile workflows with payments, testing and reliable application state management.",
    contributions: [
      "Developed web and mobile interfaces",
      "Used React, React Native and Redux",
      "Integrated Stripe payment flows",
      "Contributed to testing, debugging and refactoring",
      "Supported system design and quality improvements",
    ],
    capability:
      "Cross-platform product delivery, payments and operational software.",
    tags: ["React", "React Native", "Redux", "Stripe"],
  },
];

/** Featured case study — Real-time gaming backend (recommended). */
export const featuredWorkCaseStudy = workCaseStudies[0];

/** Two medium supporting panels. */
export const mediumWorkCaseStudies = workCaseStudies.slice(1, 3);

/** Three concise supporting case studies. */
export const conciseWorkCaseStudies = workCaseStudies.slice(3);

/**
 * Capability areas directly supported by the approved case studies.
 * Presented as restrained labels — not a technology-logo wall.
 */
export const workCapabilitySummary = [
  "Backend architecture",
  "Real-time systems",
  "Web and mobile applications",
  "Event-driven workflows",
  "AI integrations",
  "Payments and subscriptions",
  "Cloud services",
  "Third-party integrations",
  "Media processing",
  "Secure physical-digital workflows",
  "Production support",
  "CI/CD and deployments",
] as const;

export const workFinalCta = {
  headline: "Need similar technical experience applied to your requirement?",
} as const;
