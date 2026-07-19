/**
 * Selected Work / team experience case studies — master spec Section 13.
 * Attribution: selected team experience, not direct Peerprise client work.
 */

export type CaseStudyImageSlot = {
  /** Visible label on the placeholder panel, e.g. "Live leaderboard view". */
  label: string;
  /** Alt text applied once a real image is supplied. */
  alt: string;
  /**
   * Set this to a path under /public (e.g. "/media/work/realtime-gaming-backend/hero.jpg")
   * to replace the placeholder with a real image.
   */
  src?: string;
};

export type CaseStudyPhase = {
  phase: string;
  focus: string;
};

export type CaseStudyDomain = {
  domain: string;
  capabilities: string;
};

export type CaseStudyHighlight = {
  title: string;
  body: string;
};

export type CaseStudyService = {
  name: string;
  responsibility: string;
  stack: string;
};

export type WorkCaseStudyDetail = {
  /** The problem the product was facing, expanded from the context line. */
  challenge: string;
  /** Optional bullet points under the challenge lead. */
  challengePoints?: string[];
  /** How the work was approached, summarising the contributions. */
  approach: string;
  /** Evolution / delivery phases. */
  evolution?: CaseStudyPhase[];
  /** Architecture lines shown as a monospace diagram. */
  architecture?: string[];
  /** Optional supporting note under the architecture diagram. */
  architectureNote?: string;
  /** Product surface domains. */
  productSurface?: CaseStudyDomain[];
  /** Deeper technical callouts. */
  technicalHighlights?: CaseStudyHighlight[];
  /** Named third-party integrations and their responsibilities. */
  integrations?: CaseStudyHighlight[];
  /** Anonymized repos / services. */
  services?: CaseStudyService[];
  /** Public-safe implementation caveats that bound portfolio claims. */
  caveats?: string[];
  /** Result statements grounded in the approved contributions — no invented metrics. */
  results: string[];
  /** Optional scale note under outcomes. */
  scaleNote?: string;
  heroImage: CaseStudyImageSlot;
  gallery: CaseStudyImageSlot[];
};

export type WorkCaseStudy = {
  id: string;
  title: string;
  context: string;
  contributions: string[];
  capability: string;
  tags: string[];
  /** Optional role shown in the case study hero. */
  role?: string;
  /** Optional engagement / product type line. */
  engagementType?: string;
  /** Optional approved outcome with supporting evidence. */
  outcome?: string;
  detail: WorkCaseStudyDetail;
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
    title: "Virtual World Platform — Backend & Live Operations",
    context:
      "Backend platform for a flagship social virtual world — Go realtime game server, NestJS Alpha API, versioned content releases, Kafka telemetry contracts, and an internal support console for live operations.",
    role: "Backend / platform engineer",
    engagementType:
      "Social virtual world for a leading digital-collectibles IP brand",
    contributions: [
      "Evolved an Alpha NestJS game API into a production Go realtime server",
      "Built 100+ WebSocket action handlers with login/reconnect lifecycle",
      "Designed hybrid persistence across PostgreSQL, DynamoDB and Redis",
      "Shipped versioned content releases without redeploying game logic",
      "Established Protobuf + Kafka telemetry contracts for analytics",
      "Delivered Go support API and SvelteKit console for live operations",
    ],
    capability:
      "Realtime multiplayer backends, hybrid data modelling, content-release tooling, schema-first analytics and safe live-ops platforms.",
    tags: [
      "Go",
      "NestJS",
      "SvelteKit",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "NATS",
      "Kafka",
      "WebSocket",
      "Kubernetes",
    ],
    outcome:
      "Migrated a broad game domain toward a purpose-built Go realtime server while preserving progression, economy and social systems.",
    detail: {
      challenge:
        "The product needed an authoritative multiplayer backend that could carry persistent player profiles, rich world systems, realtime session state, commerce and frequent live content releases — without redeploying game logic or exposing support teams to the player hot path.",
      challengePoints: [
        "Persistent player profiles, progression and economy",
        "Rich world systems — quests, NPCs, neighborhoods, collectible traits",
        "Realtime session state across multiple server instances",
        "Paid commerce and on-chain asset flows",
        "Frequent live content releases without redeploying game logic",
        "Safe operational tooling for support and content teams",
      ],
      approach:
        "An existing TypeScript monorepo covered early Alpha domains. The live product required a purpose-built realtime architecture without losing coverage of progression, social and commerce systems. Work spanned nine related services: application backends, database tooling, event contracts, a Kafka data-platform library, and customer-support UI/API.",
      evolution: [
        {
          phase: "Alpha API",
          focus:
            "NestJS monorepo — REST + WebSocket modules for players, quests, rewards, traits, eggs, minigames, leaderboards and analytics",
        },
        {
          phase: "Realtime server",
          focus:
            "Go authoritative game server — 100+ WebSocket action handlers, login/reconnect lifecycle, cross-instance messaging",
        },
        {
          phase: "Content pipeline",
          focus:
            "Versioned PostgreSQL migrations (schema + seed content) with selective release apply tooling",
        },
        {
          phase: "Telemetry",
          focus:
            "Shared Protobuf contracts + Kafka / Schema Registry transporter",
        },
        {
          phase: "Live ops",
          focus:
            "Go support API + SvelteKit console for profile repair, reward grants and dialogue CMS",
        },
      ],
      architecture: [
        "Game clients ──WebSocket/HTTP──► Go game server",
        "Support agents ──HTTP──────────► Support API + SvelteKit UI",
        "                     │",
        "                     ├─ Ory / JWKS auth",
        "                     ├─ PostgreSQL (config, narrative, balance data)",
        "                     ├─ DynamoDB (profiles, purchases, inbox)",
        "                     ├─ Redis (cache, leaderboards)",
        "                     ├─ NATS (cross-instance player actions)",
        "                     ├─ Kafka + Schema Registry (analytics events)",
        "                     └─ Open Match / Agones (multiplayer allocation)",
      ],
      architectureNote:
        "Hybrid persistence matched access patterns: relational config and content in Postgres; high-churn player documents in DynamoDB; hot cache and rankings in Redis.",
      productSurface: [
        {
          domain: "Progression",
          capabilities: "XP, levels, badges, quests, story arcs, daily streaks",
        },
        {
          domain: "Avatar & traits",
          capabilities:
            "Customizable characters, trait boxes, collectible traits",
        },
        {
          domain: "World systems",
          capabilities: "Neighborhoods, NPCs, dialogue, secrets, tutorials",
        },
        {
          domain: "Gameplay",
          capabilities:
            "Fishing, eggs, minigames, obstacle courses, leaderboards",
        },
        {
          domain: "Social",
          capabilities: "Friends, chat/voice, referrals, appear-offline",
        },
        {
          domain: "Commerce",
          capabilities:
            "Storefront, Stripe, battle pass, redeemable campaigns",
        },
        {
          domain: "Realtime infra",
          capabilities: "Stateful WS server, NATS bus, matchmaking",
        },
        {
          domain: "Live ops",
          capabilities:
            "Versioned content DB, support grants, dialogue → GitHub PRs",
        },
      ],
      technicalHighlights: [
        {
          title: "Realtime authority",
          body: "Stateful WebSocket dispatcher with reconnection, login hooks (inbox, referrals, quests), and a NATS server-action bus so commands reach players connected to other instances. Multiplayer allocation via Open Match, Kubernetes and Agones.",
        },
        {
          title: "Content as releases",
          body: "PostgreSQL migrations double as a content platform. Quests, NPC dialogue, fishing populations, storefront SKUs and battle-pass data ship in ordered version folders; a Python release tool applies selected feature sets to named environments.",
        },
        {
          title: "Schema-first analytics",
          body: "Shared Protobuf event families (UserConnect, UserTransaction, GameLog, FrontendError) with Confluent wire framing. 80+ transaction types cover acquisition, gameplay funnels, economy, social and purchases.",
        },
        {
          title: "Support outside the hot path",
          body: "Internal console for searching/editing player profiles, granting compensatory inbox rewards, reviewing purchases and editing NPC/quest dialogue. Dialogue edits integrate with GitHub PRs so narrative changes are reviewable, not silent production writes.",
        },
      ],
      services: [
        {
          name: "Legacy Game API",
          responsibility:
            "Alpha REST/WS API, shared packages, contracts",
          stack: "TypeScript, NestJS, TypeORM",
        },
        {
          name: "Realtime Game Server",
          responsibility:
            "Authoritative gameplay, commerce, social",
          stack: "Go, Chi, WebSocket, NATS, Kafka",
        },
        {
          name: "DB Migrations",
          responsibility: "Versioned schema + game content",
          stack: "PostgreSQL SQL",
        },
        {
          name: "DB Push Tooling",
          responsibility: "Selective release apply to environments",
          stack: "Python, psql",
        },
        {
          name: "Event Contracts",
          responsibility: "Shared Protobuf schemas",
          stack: "Protobuf, Go codegen",
        },
        {
          name: "Data Platform Lib",
          responsibility: "Kafka + Schema Registry adapter",
          stack: "Go, Kafka",
        },
        {
          name: "Support Backend",
          responsibility: "CS / live-ops API",
          stack: "Go, Chi, DynamoDB, Postgres",
        },
        {
          name: "Support Frontend",
          responsibility: "Operator console",
          stack: "SvelteKit, Vite",
        },
      ],
      results: [
        "Migrated a broad game domain from NestJS toward a purpose-built Go realtime server while preserving progression, economy and social systems",
        "Designed hybrid persistence suited to mixed config vs. high-churn player data",
        "Established a versioned content-release pipeline and an event-contract layer for analytics-ready telemetry",
        "Shipped internal live-ops tooling so support and content teams operate safely outside the player-facing game path",
      ],
      scaleNote:
        "Rough scale across the service family: ~1,500 source files and 3,000+ commits over an 18+ month evolution window.",
      heroImage: {
        label: "Realtime game ops",
        alt: "Virtual world platform — backend and live operations workstation",
        src: "/media/work/realtime-gaming-backend/hero.png",
      },
      gallery: [
        {
          label: "Platform architecture",
          alt: "Architecture overview of the virtual world backend platform",
          src: "/media/work/realtime-gaming-backend/architecture.png",
        },
        {
          label: "Live operations console",
          alt: "Internal support console for live operations",
          src: "/media/work/realtime-gaming-backend/leaderboard.png",
        },
      ],
    },
  },
  {
    id: "ai-calling-workflow",
    title: "AI Outreach Stack — Voice Campaigns, Call Intelligence & CRM Automation",
    context:
      "Built and evolved an AI outreach stack connecting campaign operations, real-time voice agents and CRM orchestration so leads could be called, scored and followed up without manual glue work between tools.",
    engagementType:
      "Anonymized multi-service AI outreach platform for sales and operations teams",
    contributions: [
      "Contributed across campaign operations, voice calling and CRM orchestration",
      "Implemented and refined call initiation, lead/campaign workflows and post-call processing",
      "Coordinated async execution with queues, retries and shared capacity controls",
      "Handled out-of-order provider events and idempotent completion processing",
      "Built structured outcome evaluation against campaign and stage requirements",
      "Supported containerized AWS delivery with infrastructure-as-code and CI/CD",
    ],
    capability:
      "AI voice workflows, asynchronous processing, webhook reliability, CRM reconciliation, cross-stack delivery and cloud infrastructure.",
    tags: [
      "Vapi",
      "Pipedrive",
      "Twilio",
      "ElevenLabs",
      "Angular",
      "FastAPI",
      "AWS SQS",
      "Terraform",
      "AWS ECS",
    ],
    detail: {
      challenge:
        "Sales and operations teams needed to run multi-stage outreach, capture call intelligence, evaluate stage success and synchronize follow-up actions without relying on fragile handoffs between disconnected tools.",
      challengePoints: [
        "Run multi-stage outreach campaigns without manually dialing every lead",
        "Capture transcripts, recordings and structured answers from each call",
        "Decide whether a campaign stage succeeded and what should happen next",
        "Write outcomes back to the CRM without overwriting unrelated data",
        "Schedule calendar invites and reminders when a lead qualified",
      ],
      approach:
        "The team developed three related services: a full-stack voice outreach product, a campaign operations console and an API-only CRM orchestration layer. Together they transformed inbound leads into AI phone conversations, structured outcomes and coordinated follow-through across CRM, calendar and email systems.",
      evolution: [
        {
          phase: "Voice outreach platform",
          focus:
            "Operators configured Vapi assistants, prompts, ElevenLabs voices, knowledge bases, Twilio/Vonage phone numbers and staged campaigns; launched calls; and reviewed transcripts, recordings, costs and progress.",
        },
        {
          phase: "Campaign operations console",
          focus:
            "Lead management, activity timelines, requirement evaluation, outcome classification, timezone-aware retries, calling windows and configurable inbound webhooks.",
        },
        {
          phase: "CRM orchestration service",
          focus:
            "Pipedrive lead/person ingestion, label-based outreach gating, AI call triggering, disposition writeback, rich activity notes, Google Calendar/Meet events and follow-up email.",
        },
      ],
      architecture: [
        "Pipedrive webhook (lead / person / label)",
        "    └─► CRM Orchestration Service",
        "          └─► AI Caller API (async / sync / scheduled)",
        "                └─► Vapi call",
        "                     (Twilio/Vonage number + ElevenLabs voice)",
        "                      └─► Vapi webhooks",
        "                           (status / end-of-call-report)",
        "                            └─► Voice platform processor",
        "                                 ├─ outcome classification",
        "                                 ├─ stage progression",
        "                                 ├─ private S3 recording persistence",
        "                                 └─ CRM callback(s)",
        "                                      └─► CRM orchestration callback",
        "                                           ├─ Pipedrive labels",
        "                                           ├─ Pipedrive activity note",
        "                                           └─ Calendar / Meet / email",
      ],
      architectureNote:
        "PostgreSQL stored domain data. Redis/RQ and TaskIQ supported legacy and service-specific paths; SQS, DLQs and EventBridge handled the more mature voice workflow. Terraform provisioned ECS/Fargate, ECR, RDS, S3, ALB/ACM, KMS, secrets and logging; GitHub Actions OIDC drove rolling deployments.",
      productSurface: [
        {
          domain: "Lead enters",
          capabilities:
            "Pipedrive lead/person webhook, inbound webhook or operator creation; fetch Pipedrive contact arrays, persist locally and gate outreach using designated labels",
        },
        {
          domain: "Call is prepared",
          capabilities:
            "Campaign stage, Vapi assistant, prompt, knowledge base, ElevenLabs voice and Twilio/Vonage number produce lead-aware caller configuration",
        },
        {
          domain: "Call executes",
          capabilities:
            "Immediate, queued or scheduled worker paths protected by concurrency controls and leases",
        },
        {
          domain: "Result arrives",
          capabilities:
            "Vapi status, tool results and end-of-call reports drive classification, stage progression, voicemail detection and private S3 recording storage",
        },
        {
          domain: "Systems update",
          capabilities:
            "Pipedrive labels and HTML activity notes, CRM callbacks, Google Calendar/Meet and email remain aligned without blocking the call path",
        },
      ],
      technicalHighlights: [
        {
          title: "Event-order ambiguity",
          body: "Vapi webhooks could arrive out of order. Preliminary call-ended events were deferred until richer end-of-call reports arrived, while completion activity was upserted to avoid duplicate processing.",
        },
        {
          title: "Capacity and reliability",
          body: "Async workers used local concurrency limits, shared leases tied to Vapi call IDs, retries, EventBridge-delayed requeues and SQS dead-letter paths so provider failures did not silently exhaust capacity.",
        },
        {
          title: "Structured conversation progress",
          body: "Tool and function results updated lead-stage data, validated required fields and determined whether a campaign stage could advance.",
        },
        {
          title: "Cross-system CRM reconciliation",
          body: "Pipedrive updates preserved unrelated labels, enforced mutually exclusive AI status groups, avoided no-op writes and best-effort synchronized local state after external patches.",
        },
        {
          title: "Durable call media",
          body: "Temporary Vapi recording URLs were copied into private S3 storage and exposed through time-limited playback access.",
        },
      ],
      integrations: [
        {
          title: "Vapi",
          body: "Primary AI voice orchestration across both voice products. Assistants and calls were created through api.vapi.ai; IDs, statuses, transcripts, analysis, recordings, costs and tool results were persisted and processed asynchronously.",
        },
        {
          title: "Pipedrive",
          body: "Inbound lead/person webhooks and label synchronization powered outreach gating. Call completion updated labels without overwriting unrelated state and created rich HTML activities containing summaries, transcripts, qualification data and follow-up details.",
        },
        {
          title: "Twilio & Vonage",
          body: "Telephony providers supplied and managed outbound phone numbers associated with Vapi phone-number IDs. Vonage was supported as an alternate configured transport.",
        },
        {
          title: "ElevenLabs",
          body: "Configurable voice synthesis option used when building assistant and Vapi call configuration.",
        },
        {
          title: "Google Calendar & Meet",
          body: "Qualified leads could trigger calendar events, Meet links and attendee invitations, with local event records and background reminder scheduling.",
        },
        {
          title: "Email & CRM callbacks",
          body: "Transactional email with an SMTP/SES-style fallback handled confirmations and reminders. Voice products emitted independent callback POSTs for call state, completion outcomes and retry metadata.",
        },
        {
          title: "AWS delivery",
          body: "ECS/Fargate, ECR, RDS PostgreSQL, S3, Secrets Manager, CloudWatch, KMS and ALB/ACM were provisioned with Terraform; GitHub Actions OIDC pushed images to ECR and deployed ECS services.",
        },
      ],
      services: [
        {
          name: "Voice Outreach Platform",
          responsibility:
            "Staged campaigns, Vapi calling, Twilio/Vonage numbers, operator review and CRM callbacks",
          stack: "Angular 19, FastAPI, PostgreSQL, Redis/SQS, AWS ECS, Terraform",
        },
        {
          name: "Campaign Operations Console",
          responsibility:
            "Lead operations, stage evaluation, retries, calling windows and dashboards",
          stack: "Angular 19, FastAPI, PostgreSQL, Redis/RQ, Terraform",
        },
        {
          name: "CRM Orchestration Service",
          responsibility:
            "Pipedrive events, label gating, AI call triggers, dispositions, Calendar/Meet and email",
          stack: "FastAPI, Tortoise ORM, PostgreSQL, Redis/TaskIQ, AWS ECS",
        },
      ],
      caveats: [
        "Vapi webhook signature verification was largely unimplemented despite secret settings.",
        "Visible Pipedrive and CRM inbound webhook paths did not consistently enforce strong signature authentication.",
        "CRM callbacks were unsigned HTTP POSTs by documented design.",
        "Some CRM-to-Pipedrive update paths included testing-mode comments and defensive compatibility code.",
        "Automated test coverage was thin or had drifted in parts of the service family.",
      ],
      results: [
        "Connected campaign operations, AI voice execution and CRM follow-through in one coordinated stack",
        "Integrated Vapi for assistant configuration, call execution and webhook-driven post-call processing",
        "Integrated Pipedrive for lead/person ingestion, label gating, disposition writeback and activity notes",
        "Supported Twilio and Vonage telephony with ElevenLabs voice configuration",
        "Persisted Vapi call recordings into private S3 and orchestrated follow-up through Google Calendar/Meet and email",
        "Deployed containerized services on AWS ECS using Terraform and GitHub Actions OIDC",
      ],
      heroImage: {
        label: "AI outreach operations",
        alt: "AI outreach stack campaign and call operations dashboard",
      },
      gallery: [
        {
          label: "Campaign workflow",
          alt: "Multi-stage voice campaign workflow and call intelligence",
        },
        {
          label: "CRM orchestration",
          alt: "CRM disposition, calendar and email orchestration flow",
        },
      ],
    },
  },
  {
    id: "screen-recording-platform",
    title: "Resilient Browser Video Platform",
    context:
      "A browser-first platform for recording, correcting, processing, organizing and sharing video—with a defining pause, rewind and overwrite workflow that let users fix mistakes without starting again.",
    engagementType:
      "Anonymized SaaS platform for asynchronous video communication and screen recording",
    contributions: [
      "Contributed across the browser recording experience, backend APIs and media workflows",
      "Worked on core backend, streaming and cloud-processing services",
      "Implemented FFmpeg-powered blur and trim functionality",
      "Supported reversible editing, transcription and playback-compatible output",
      "Improved Stripe subscriptions and webhook handling",
      "Helped reduce reported recording errors by 65%",
    ],
    capability:
      "Browser media capture, resilient uploads, video processing, reversible editing, cloud storage, billing and collaborative SaaS delivery.",
    tags: [
      "MediaRecorder",
      "MediaStream",
      "FFmpeg",
      "HLS",
      "Chrome Extension",
      "Cloud Functions",
      "Stripe",
      "PostgreSQL",
    ],
    outcome: "Reported recording errors reduced by 65%.",
    detail: {
      challenge:
        "A dependable screen recorder must coordinate browser permissions, multiple media streams, long-running sessions, unstable networks, real-time uploads, transcoding, reversible edits, transcription, storage costs, sharing, teams and billing. The central user problem was simpler: one mistake near the end of a recording should not force a complete restart.",
      challengePoints: [
        "Coordinate screen, camera, microphone and supported system-audio streams",
        "Protect long-running recordings during network or device interruptions",
        "Produce playback-compatible video, audio, thumbnails and subtitles",
        "Make edits reversible while preserving original media",
        "Control processing, transcription and long-term storage costs",
        "Serve anonymous, free, paid and team users with different limits",
      ],
      approach:
        "The product treated a recording more like an editable document than a one-shot video production. Browser capture and incremental upload protected the source media; a cloud-processing pipeline generated streaming and editing assets; and the application layered lightweight correction, publishing, organization, collaboration and billing workflows around that resilient core.",
      evolution: [
        {
          phase: "Discover & start",
          focus:
            "Users began from the web application or Chrome extension, with compatibility, permission, device, limit and browser-specific checks before capture.",
        },
        {
          phase: "Configure capture",
          focus:
            "Screen-only, camera-only or combined capture with microphone, camera, supported system audio, resolution, countdown and camera-placement controls.",
        },
        {
          phase: "Record",
          focus:
            "MediaStream and MediaRecorder powered capture with pause/resume, duration, draggable controls, camera picture-in-picture, extension events and navigation safeguards.",
        },
        {
          phase: "Correct mistakes",
          focus:
            "Users could pause, rewind, replace a section, resume from a selected point, trim unwanted media and restore the original when an edit was rejected.",
        },
        {
          phase: "Edit & enrich",
          focus:
            "Blur regions, editable transcripts, captions, VTT subtitles, chapters, annotations, calls to action and transcript-synchronized playback.",
        },
        {
          phase: "Process & publish",
          focus:
            "The pipeline generated HLS playlists and segments, extracted audio, thumbnails, subtitle files and separate original and edited versions.",
        },
        {
          phase: "Share & engage",
          focus:
            "Hosted public links, password protection, embeds, downloads, shared folders, view counts, first-view alerts, chapters and calls to action.",
        },
        {
          phase: "Organize content",
          focus:
            "Recording and folder grids, search, inline rename, uploads, bulk move/archive/delete, shared folders and recovery/reprocessing states.",
        },
        {
          phase: "Collaborate",
          focus:
            "Team creation, invitations, administrator and recorder roles, membership states, seat billing, removal and content transfer.",
        },
        {
          phase: "Convert & monetize",
          focus:
            "Anonymous, free, monthly, yearly, lifetime and team states with differentiated recording, resolution, editing and download limits.",
        },
      ],
      architecture: [
        "Browser app / Chrome extension",
        "    ├─► MediaStream + MediaRecorder",
        "    ├─► screen / camera / microphone / system audio",
        "    └─► incremental media upload",
        "              │",
        "              ▼",
        "Backend API + recording session state",
        "              │",
        "              ▼",
        "Media workers / cloud functions",
        "    ├─► FFmpeg processing",
        "    ├─► HLS playlists + segments",
        "    ├─► audio + thumbnails",
        "    ├─► captions + VTT",
        "    └─► original + edited versions",
        "              │",
        "              ▼",
        "Hosted playback / sharing / embeds / downloads",
      ],
      architectureNote:
        "The represented platform spanned a browser application, Chrome extension, backend API, media workers and cloud services. Recorded assets moved through recovery, processing, publication and lifecycle-management states rather than one synchronous upload.",
      productSurface: [
        {
          domain: "Capture modes",
          capabilities:
            "Screen-only, camera-only and combined capture with microphone, camera and supported tab/system audio",
        },
        {
          domain: "Recoverability",
          capabilities:
            "Network and device feedback, incremental transport, recovery states and reprocessing paths",
        },
        {
          domain: "Correction",
          capabilities:
            "Pause, rewind, overwrite, resume, trim and restore-original workflows",
        },
        {
          domain: "Editing",
          capabilities:
            "Blur, transcription, captions, VTT, chapters, annotations, calls to action and rich descriptions",
        },
        {
          domain: "Publishing",
          capabilities:
            "Hosted pages, public or password-protected links, embeds, supported downloads and first-view notifications",
        },
        {
          domain: "Library",
          capabilities:
            "Folders, search, rename, external uploads, move, archive, delete, shared folders and bulk operations",
        },
        {
          domain: "Teams",
          capabilities:
            "Invitations, role-based membership, seat billing, revocation and content transfer",
        },
        {
          domain: "Plans",
          capabilities:
            "Anonymous, free, subscription, lifetime and team access with differentiated product limits",
        },
      ],
      technicalHighlights: [
        {
          title: "Browser-native media capture",
          body: "MediaStream and MediaRecorder coordinated screen, camera, microphone and supported browser audio while the interface managed permissions, previews, device feedback and extension controls.",
        },
        {
          title: "Reversible correction",
          body: "Pause, rewind and overwrite turned a long recording into an editable timeline. Original media remained recoverable when a replacement or trim was rejected.",
        },
        {
          title: "Resilient media transport",
          body: "Long-running sessions and incremental uploads were designed around unstable connections, interrupted devices and explicit recovery or reprocessing states.",
        },
        {
          title: "Playback pipeline",
          body: "Media workers produced HLS playlists and segments, extracted audio, thumbnails, subtitle files and separate original/edited assets for reliable browser playback.",
        },
        {
          title: "Lightweight enrichment",
          body: "FFmpeg-backed blur and trim joined editable transcription, synchronized words, captions, chapters, annotations and calls to action without requiring professional editing software.",
        },
        {
          title: "Lifecycle-aware SaaS",
          body: "Authentication, sharing, teams, Stripe billing, plan limits, analytics, archive policies and storage lifecycle controls surrounded the media core.",
        },
      ],
      services: [
        {
          name: "Browser Application",
          responsibility:
            "Capture setup, recording controls, correction, editing, library, playback and sharing",
          stack: "Browser media APIs, MediaStream, MediaRecorder",
        },
        {
          name: "Chrome Extension",
          responsibility:
            "Extension-led capture, browser events and recording controls",
          stack: "Chrome extension APIs, browser media APIs",
        },
        {
          name: "Backend API",
          responsibility:
            "Recordings, folders, users, teams, sharing, billing and processing orchestration",
          stack: "API services, PostgreSQL, authentication, Stripe",
        },
        {
          name: "Media Pipeline",
          responsibility:
            "Transcoding, HLS, audio extraction, thumbnails, blur, trim and version handling",
          stack: "FFmpeg, media workers, cloud functions",
        },
        {
          name: "Cloud Operations",
          responsibility:
            "Object storage, lifecycle management, analytics and operational tooling",
          stack: "Cloud storage, 17 cloud-function packages",
        },
      ],
      results: [
        "Reported recording errors reduced by 65%",
        "Users could pause, rewind and replace mistakes instead of restarting an entire recording",
        "Blur and trim editing shipped through an FFmpeg-backed media pipeline",
        "Recordings were processed into HLS, audio, thumbnails and subtitle assets for browser playback",
        "The product supported hosted sharing, organization, teams and multiple billing states",
        "More reliable Stripe subscriptions and webhook handling",
      ],
      scaleNote:
        "Repository evidence spans 2022–2025: 830 tracked files, 1,368 commits, 28 application routes, approximately 100 API paths, 51 database migrations and 17 cloud-function packages.",
      heroImage: {
        label: "Browser recording experience",
        alt: "Resilient browser video platform recording interface",
      },
      gallery: [
        {
          label: "Rewind & overwrite",
          alt: "Browser video correction workflow for rewinding and replacing a section",
        },
        {
          label: "Media processing pipeline",
          alt: "Video processing workflow producing HLS, thumbnails, audio and captions",
        },
      ],
    },
  },
  {
    id: "artwork-verification",
    title: "NFC-Enabled Artwork Platform",
    context:
      "A multi-application platform connecting physical artworks to secure digital records through NFC, enabling authenticity checks, provenance, ownership, subscriptions, auctions and scan analytics.",
    engagementType:
      "NFC artwork authentication, provenance, ownership and commerce platform",
    contributions: [
      "Designed the PostgreSQL data model",
      "Developed the Go business API and domain workflows",
      "Built a dedicated Go verification gateway using NTAG 424 DNA capabilities",
      "Created a React Native Android app for trusted NFC tag provisioning",
      "Connected public and administrative Nuxt/Vue experiences to the platform",
      "Supported ownership, auctions, subscriptions, payments and scan analytics",
    ],
    capability:
      "Secure physical-digital identity, NFC provisioning, cryptographic verification, provenance workflows, mobile development and commerce platforms.",
    tags: [
      "Go",
      "PostgreSQL",
      "Nuxt",
      "Vue",
      "React Native",
      "NTAG 424",
      "AES/CMAC",
      "Stripe",
      "AWS S3",
    ],
    detail: {
      challenge:
        "Physical artwork carries identity, ownership, exhibition and sale history, but that context is often disconnected from the object. A trustworthy platform needed more than a static tag URL: it had to bind secure NFC hardware to the correct record, verify dynamic scan data and preserve the artwork lifecycle around it.",
      challengePoints: [
        "Bind each physical tag to the correct artwork or user record",
        "Distinguish public, private, modifier and VIP interactions",
        "Verify dynamic tag data instead of trusting a static identifier",
        "Detect stale or replayed scan counters through backend state",
        "Support tamper-capable tag variants and encrypted redirects",
        "Give operators a practical, trusted provisioning workflow",
        "Preserve artwork, collector, exhibition, scan and sale history",
        "Keep payment credentials and media outside the application database",
      ],
      approach:
        "The system separated trusted physical provisioning, focused cryptographic validation, business logic and presentation across four applications. An Android-focused reader/writer programmed tags; a stateless Go gateway verified scan data; the main Go backend owned users, artwork, scan state and commerce; and a Nuxt/Vue web app delivered public discovery and role-aware administration.",
      evolution: [
        {
          phase: "Create the record",
          focus:
            "An artwork and its ownership record are established in the backend before physical provisioning begins.",
        },
        {
          phase: "Provision tags",
          focus:
            "An authorized operator uses the React Native app to program public/private NDEF data, Secure Dynamic Messaging configuration and key material.",
        },
        {
          phase: "Bind identity",
          focus:
            "Per-tag keys and the physical UID are associated with the artwork or eligible VIP user record.",
        },
        {
          phase: "Tap artwork",
          focus:
            "A collector or visitor taps the public tag, which emits dynamic PICC data, scan counter, CMAC and optional tamper state.",
        },
        {
          phase: "Verify scan",
          focus:
            "The verification gateway fetches tag keys and backend scan state, validates cryptographic data and rejects stale or replayed counters.",
        },
        {
          phase: "Record activity",
          focus:
            "The backend stores the validated scan with geographic and artwork context for history, dashboards and analytics.",
        },
        {
          phase: "Route visitor",
          focus:
            "An encrypted redirect sends the visitor to the appropriate mobile artwork, artist or scan-result experience.",
        },
        {
          phase: "Manage lifecycle",
          focus:
            "Authorized users manage ownership, exhibitions, auctions, subscriptions, tag requests, referrals and operational analytics.",
        },
      ],
      architecture: [
        "Authorized operator ──► React Native Reader/Writer",
        "                           ├─ artwork + user APIs ──► Go Backend",
        "                           └─ NDEF / SDM / keys ──► NXP NTAG 424",
        "",
        "Collector / visitor ──tap──► NXP NTAG 424",
        "                           └─ UID / PICC / counter / CMAC / tamper",
        "                                └─► Go Verification Gateway",
        "                                      ├─ tag keys + scan state ──► Backend",
        "                                      └─ encrypted redirect ──► Web App",
        "",
        "Nuxt/Vue Web App ──cookie-authenticated REST──► Go Backend",
        "Go Backend ──► PostgreSQL / S3 / Stripe / SendGrid",
        "           └─► Instagram Graph API / HubSpot",
      ],
      architectureNote:
        "The split keeps Android NFC transport and low-level cryptography out of the public web UI and broader business API. The verification gateway remains focused and stateless while the backend owns authorization, scan counters, commerce and persistence.",
      productSurface: [
        {
          domain: "Public visitor",
          capabilities:
            "Discover artists and artworks, tap a public tag, see scan validity and view artwork, artist, collector, location and medium details",
        },
        {
          domain: "Artist or keyholder",
          capabilities:
            "Manage profiles, artwork, collectors, modifiers and tags; review scans and control visibility under subscription permissions",
        },
        {
          domain: "Collector",
          capabilities:
            "Receive ownership transfers before account creation, reconnect records by email and participate in auction/payment workflows",
        },
        {
          domain: "Administrator",
          capabilities:
            "Manage users, roles, artworks, collectors, tags, subscriptions, permissions, auctions and audit logs",
        },
        {
          domain: "Provisioning operator",
          capabilities:
            "Select environments, find artworks or VIP users, write public/private/VIP tags and inspect UID, NDEF, host and tamper state",
        },
        {
          domain: "Bidder",
          capabilities:
            "Place and confirm bids by time-limited email, attach a Stripe payment method and pay only after a winning auction concludes",
        },
      ],
      technicalHighlights: [
        {
          title: "Dynamic NFC verification",
          body: "The Go gateway validated NTAG 424 Secure Dynamic Messaging data using tag-specific keys, UID, dynamic PICC data, counters and CMAC rather than treating a static NFC URL as proof.",
        },
        {
          title: "Replay-aware scan state",
          body: "Backend state tracked counters and public/private tag relationships so stale, duplicated or replayed scans could be identified alongside tamper-capable variants.",
        },
        {
          title: "Trusted tag provisioning",
          body: "The Android React Native application gave authorized operators a practical interface for programming NDEF records, SDM settings and key material across public, private and VIP tag types.",
        },
        {
          title: "Ownership & provenance",
          body: "Artwork, collectors, modifiers, exhibitions, transfers, scan history, sale history and audit logs formed a durable record around the physical object.",
        },
        {
          title: "Commerce lifecycle",
          body: "Auctions, bid confirmation, payment authorization, settlement, royalties and sale history were integrated with Stripe and Stripe Connect workflows.",
        },
        {
          title: "Role-aware platform",
          body: "Cookie-authenticated APIs and role handling supported superadmin, admin, keyholder and VIP experiences across public discovery and administration.",
        },
      ],
      integrations: [
        {
          title: "NXP NTAG 424",
          body: "Physical NFC identity with Secure Dynamic Messaging, per-tag key material, dynamic scan counters, CMAC validation and supported tamper state.",
        },
        {
          title: "Stripe & Stripe Connect",
          body: "Hosted subscription checkout, signed webhooks, bidder payment methods, auction settlement, artist onboarding, balances, transfers and withdrawals.",
        },
        {
          title: "AWS S3",
          body: "Artwork/profile media and database-backup storage remained outside the relational application database.",
        },
        {
          title: "SendGrid",
          body: "Transactional email supported verification, ownership transfer, bid confirmation and other platform notifications.",
        },
        {
          title: "Instagram Graph API",
          body: "OAuth, token refresh, media retrieval and profile information extended artist discovery and public profiles.",
        },
        {
          title: "HubSpot",
          body: "Support contact and ticket integration connected platform users to operational support workflows.",
        },
      ],
      services: [
        {
          name: "Core Platform API",
          responsibility:
            "Users, artwork, ownership, authorization, scan state, auctions, subscriptions, payments and persistence",
          stack: "Go, Gin, GORM, PostgreSQL",
        },
        {
          name: "Public & Admin Web App",
          responsibility:
            "Public discovery, scan results and role-aware administrative experiences",
          stack: "Nuxt, Vue, REST APIs",
        },
        {
          name: "Tag Provisioning App",
          responsibility:
            "Trusted public/private/VIP tag provisioning and Android NFC communication",
          stack: "React Native, Android NFC, NXP NTAG 424",
        },
        {
          name: "Verification Gateway",
          responsibility:
            "Stateless cryptographic scan verification and encrypted visitor redirects",
          stack: "Go, AES/CMAC, backend API integration",
        },
      ],
      caveats: [
        "A separate nearby NFC application repository was reviewed but excluded because the checked-out code did not provide enough evidence that it belonged to this product.",
        "The checked-in Swagger document covered only a subset of active API routes and should not be presented as a complete contract.",
        "The suggested Full-stack and NFC systems engineer title was not applied because exact role ownership still needs confirmation.",
      ],
      results: [
        "Connected physical artwork tags to cryptographically checked digital records",
        "Delivered a complete flow from trusted provisioning through validation, scan history and mobile artwork experiences",
        "Supported provenance, ownership transfer, exhibitions, auctions, subscriptions and payout workflows around each artwork",
        "Equipped operators with Android NFC tooling and administrators with role-aware operational controls",
        "Established scan analytics, dashboards, geographic context and most-scanned reporting",
      ],
      scaleNote:
        "Audited local history spans June 2023–July 2026. Backend inspection found 99 active API routes, 17 router domains, 20 controllers, 24 migrated GORM models, 95 Go source files and 214 commits.",
      heroImage: {
        label: "Artwork authentication",
        alt: "NFC-enabled artwork platform showing a verified physical artwork scan",
      },
      gallery: [
        {
          label: "Provisioning & verification",
          alt: "NFC tag provisioning and cryptographic verification workflow",
        },
        {
          label: "Provenance & ownership",
          alt: "Artwork provenance, ownership and scan-history experience",
        },
      ],
    },
  },
  {
    id: "global-coffee-marketplace",
    title: "Global Coffee Trading Marketplace",
    context:
      "A domain-rich digital marketplace connecting coffee sellers, buyers, traders and supply-chain participants through structured listings, discovery, subscriptions and market reporting.",
    engagementType:
      "Anonymized advanced prototype / early MVP for global commodity trading",
    contributions: [
      "Built a multi-step, resumable onboarding and subscription workflow",
      "Developed a coffee-specific listing model with commercial, quality and logistics data",
      "Implemented marketplace discovery with filters derived from live inventory",
      "Integrated Zoho CRM and Zoho Billing with email and SMS verification",
      "Created reusable reporting tables, charts and data-export foundations",
      "Structured the Next.js application around modular forms, route handlers and Mongoose models",
    ],
    capability:
      "Domain-led marketplace design, complex product forms, dynamic search, onboarding workflows, CRM/billing integrations and serverless application architecture.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Zoho CRM",
      "Zoho Billing",
      "Tailwind CSS",
      "Chart.js",
    ],
    detail: {
      challenge:
        "Coffee trading often runs through spreadsheets, email, phone calls and private relationships. Inconsistent descriptions make lots difficult to compare, pricing intelligence is fragmented, certificates are scattered and supply-chain participants lack one operational source of truth.",
      challengePoints: [
        "Standardize complex coffee descriptions without flattening domain detail",
        "Give sellers access to a broader buyer network and clearer listing workflows",
        "Make quality, origin, warehouse and pricing data searchable and comparable",
        "Organize certifications, quality records and shipment documents",
        "Coordinate onboarding, subscriptions, CRM, payments and reporting",
        "Create a foundation for escrow, bidding, disputes and market intelligence",
      ],
      approach:
        "The product modeled coffee as a first-class commodity domain rather than generic e-commerce inventory. A Next.js application combined resumable onboarding, subscription activation, detailed seller listings, live-data marketplace filters and reusable reporting, with MongoDB persistence and a Zoho operations layer.",
      evolution: [
        {
          phase: "Account registration",
          focus:
            "A new participant creates an account and begins a multi-step onboarding workflow that can be resumed.",
        },
        {
          phase: "Contact verification",
          focus:
            "Email and SMS verification establish reachable contact channels before commercial activation.",
        },
        {
          phase: "Profile completion",
          focus:
            "Company and stakeholder information is captured and synchronized with Zoho CRM.",
        },
        {
          phase: "Subscription selection",
          focus:
            "The participant chooses a plan, enters the billing flow and activates marketplace access.",
        },
        {
          phase: "Coffee listing",
          focus:
            "A guided, section-based form captures origin, quality, pricing, logistics and supporting documents.",
        },
        {
          phase: "Marketplace publication",
          focus:
            "Approved inventory becomes discoverable through structured commercial and quality filters.",
        },
        {
          phase: "Market analysis",
          focus:
            "Pricing history, summary tables, charts and exports provide a foundation for commodity intelligence.",
        },
      ],
      architecture: [
        "Buyer / seller / operator portals",
        "             │",
        "             ▼",
        "Next.js 15 + React 19 application",
        "             │",
        "             ▼",
        "Next.js route handlers",
        "    ├─ authentication + verification",
        "    ├─ onboarding + profiles",
        "    ├─ marketplace listings + filters",
        "    ├─ subscriptions + payments",
        "    └─ reporting + exports",
        "             │",
        "             ├─► MongoDB / Mongoose",
        "             ├─► Zoho CRM + Zoho Billing",
        "             ├─► Resend email + AWS SMS",
        "             └─► payment libraries / future escrow path",
      ],
      architectureNote:
        "Database connection caching supported serverless execution. External Zoho operations were separated into a dedicated service layer, while reusable form and reporting components kept domain-heavy interfaces maintainable.",
      productSurface: [
        {
          domain: "Marketplace discovery",
          capabilities:
            "Search inventory by warehouse, origin, species, variety, quality, screen size, organic status, SCA grade and harvest year",
        },
        {
          domain: "Coffee details",
          capabilities:
            "Origin, region, species, variety, process, harvest, organic status, SCA grade and elevation",
        },
        {
          domain: "Size & pricing",
          capabilities:
            "Units, unit type and size, asking price, reserve price and minimum quantity",
        },
        {
          domain: "Logistics",
          capabilities:
            "Warehouse, address, availability date, container ID and shipping responsibility",
        },
        {
          domain: "Documentation",
          capabilities:
            "Certifications, quality records and shipment documents supported by a guided listing assistant",
        },
        {
          domain: "Commercial operations",
          capabilities:
            "Onboarding, subscriptions, payment-page creation, CRM synchronization and reporting",
        },
      ],
      technicalHighlights: [
        {
          title: "Authentic domain model",
          body: "Listings represented more than 20 coffee-specific attributes across origin, quality, commercial terms, logistics and documentation instead of reusing a generic product schema.",
        },
        {
          title: "Live-data filtering",
          body: "Filter options were aggregated from current marketplace inventory, so newly listed origins and varieties became searchable without manual configuration. Numeric aggregation supported SCA-grade and harvest-year ranges.",
        },
        {
          title: "Modular listing workflow",
          body: "A section-based form architecture with Formik, Yup and reusable controls made complex listing requirements easier to validate, maintain and guide.",
        },
        {
          title: "Resumable onboarding",
          body: "Onboarding was modeled as an explicit multi-stage business workflow rather than a single completion flag.",
        },
        {
          title: "Serverless data access",
          body: "Cached MongoDB connections and focused Next.js route handlers supported authentication, marketplace data, subscriptions, payments and webhooks.",
        },
        {
          title: "Reporting foundation",
          body: "Reusable Chart.js and TanStack Table components established pricing-history, summary, visualization and export capabilities for future market intelligence.",
        },
      ],
      integrations: [
        {
          title: "Zoho CRM",
          body: "Company and stakeholder profiles synchronized into the commercial operations layer during onboarding.",
        },
        {
          title: "Zoho Billing",
          body: "Plan selection, payment-page creation, subscription activation and billing webhooks connected access to commercial status.",
        },
        {
          title: "Resend & AWS SMS",
          body: "Email and SMS channels supported contact verification and onboarding communication.",
        },
        {
          title: "Payment foundation",
          body: "Stripe libraries represented an early or future payment path alongside the active billing integration and longer-term escrow vision.",
        },
      ],
      services: [
        {
          name: "Marketplace Web Application",
          responsibility:
            "Onboarding, account access, inventory discovery, listing management and reporting",
          stack: "Next.js 15, React 19, TypeScript, Tailwind CSS",
        },
        {
          name: "Domain API Layer",
          responsibility:
            "Authentication, verification, marketplace data, filters, subscriptions and webhooks",
          stack: "Next.js route handlers, Mongoose",
        },
        {
          name: "Commodity Data Store",
          responsibility:
            "Users, onboarding, verification, subscriptions, transactions and coffee inventory",
          stack: "MongoDB",
        },
        {
          name: "Commercial Operations Layer",
          responsibility:
            "CRM synchronization, billing activation, verification messaging and payment foundations",
          stack: "Zoho CRM, Zoho Billing, Resend, AWS SMS",
        },
      ],
      caveats: [
        "The product is best described as an advanced prototype or early MVP, not a fully hardened production marketplace.",
        "Identity verification, session security, route authorization and payment-webhook integrity remained hardening priorities.",
        "Dedicated listing persistence, file storage, lifecycle enforcement and automated testing required further investment.",
        "Business-impact figures in the source brief were a measurement framework, not verified outcome metrics.",
      ],
      results: [
        "Combined onboarding, subscriptions, listings, marketplace discovery and reporting in one domain-specific application",
        "Represented coffee lots with structured quality, commercial, logistics and document data",
        "Made marketplace filters respond automatically to live inventory",
        "Established CRM and billing workflows for commercial activation",
        "Created a credible foundation for bidding, escrow, disputes, notifications and deeper market analytics",
      ],
      heroImage: {
        label: "Coffee marketplace",
        alt: "Global coffee trading marketplace with structured specialty lot listings",
      },
      gallery: [
        {
          label: "Specialty lot listing",
          alt: "Coffee listing workflow capturing origin, quality, pricing and logistics",
        },
        {
          label: "Market discovery",
          alt: "Coffee marketplace search, filters and pricing intelligence",
        },
      ],
    },
  },
  {
    id: "education-lending-marketplace",
    title: "Multi-Sided Education Lending Marketplace",
    context:
      "A digital marketplace connecting borrowers, school partners, lenders, vendors and administrators through guided applications, automated matching and a shared operational system of record.",
    engagementType:
      "Anonymized education and career-training finance platform",
    contributions: [
      "Contributed to five role-specific portals sharing one application record",
      "Developed guided borrower prequalification and application workflows",
      "Supported automated lender matching against configurable eligibility criteria",
      "Built partner and lender API paths that replaced manual application handoffs",
      "Integrated Zoho One, Auth0, Equifax, S3 and SendGrid",
      "Supported AWS delivery and automated GitHub CI/CD",
    ],
    capability:
      "Multi-sided marketplace architecture, role-aware portals, lending workflows, partner APIs, CRM synchronization and cloud integrations.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Zoho One",
      "Auth0",
      "AWS",
    ],
    detail: {
      challenge:
        "Education financing is a chain of handoffs between borrowers, schools, lenders, vendors and operators. The platform had to hide application complexity, enforce organization-specific access and keep credit, identity, documents, CRM records and referral data synchronized without exposing the seams to borrowers.",
      challengePoints: [
        "Collect detailed personal, education, employment, banking and credit information without making the journey feel like paperwork",
        "Give each partner visibility only into the applications and activity belonging to its organization",
        "Keep CRM, identity, credit, documents and marketing systems aligned in near real time",
        "Match one borrower application against multiple lender eligibility models",
        "Preserve partner and referral attribution throughout the lending funnel",
        "Remove manual re-keying between application and lender systems",
      ],
      approach:
        "Five purpose-built portals read from and write to the same underlying application model, with Zoho CRM acting as the operational system of record. Guided borrower workflows, lender-rule matching, referral routing and a dedicated API layer automated the handoffs between applicants, schools, lenders and internal teams.",
      evolution: [
        {
          phase: "Discovery",
          focus:
            "A borrower arrived directly or through a school or affiliate short-code link into a consistently branded financing funnel.",
        },
        {
          phase: "Prequalification",
          focus:
            "A guided form captured personal, education and income details and supported a soft credit check without affecting the borrower’s score.",
        },
        {
          phase: "Application",
          focus:
            "The borrower submitted one application rather than repeating the same information for each potential lender.",
        },
        {
          phase: "Matching",
          focus:
            "Configurable lender eligibility rules ranked suitable financing paths against the borrower and chosen program.",
        },
        {
          phase: "Referral attribution",
          focus:
            "School, vendor and affiliate context stayed attached to the application and synchronized into Zoho CRM.",
        },
        {
          phase: "Lender handoff",
          focus:
            "The selected lender received a structured application containing prequalification, program and partner context through a shared API contract.",
        },
      ],
      architecture: [
        "Borrower app   Partner portal   Lender portal   Admin / vendor",
        "      \\              |                |                /",
        "       └──────────────┴────────────────┴───────────────┘",
        "                              │",
        "                              ▼",
        "                    Next.js / React portals",
        "                              │",
        "                              ▼",
        "              Node.js / Express partner & lender APIs",
        "                              │",
        "          ┌───────────────────┼───────────────────┐",
        "          ▼                   ▼                   ▼",
        "       MongoDB            AWS / S3           Auth0",
        "                              │",
        "                              ▼",
        "          Zoho One / Equifax / SendGrid / partner APIs",
      ],
      architectureNote:
        "Every role used the same application record while portal and API authorization limited what each organization could see or change. Zoho CRM anchored business records and referral attribution across product surfaces.",
      productSurface: [
        {
          domain: "Borrower",
          capabilities:
            "Guided prequalification, lender discovery and one application distributed to matched lenders",
        },
        {
          domain: "School partner",
          capabilities:
            "Institution-scoped applications, students, billing and enrollment-linked referral leads",
        },
        {
          domain: "Lender",
          capabilities:
            "Eligibility rules, approved partners, application documents, reporting and direct submission APIs",
        },
        {
          domain: "Vendor",
          capabilities:
            "Structured onboarding through the operations pipeline and access to referral workflows",
        },
        {
          domain: "Administrator",
          capabilities:
            "Network-wide applications, partners, lenders, vendors, reporting and exception handling",
        },
      ],
      technicalHighlights: [
        {
          title: "Shared system of record",
          body: "Portal activity traced back to a consistent application and CRM record, so referral changes, eligibility updates and manual overrides propagated across the network.",
        },
        {
          title: "Role-aware product surfaces",
          body: "Borrower, school, lender, vendor and administrator portals exposed focused workflows and organization-specific visibility over shared data.",
        },
        {
          title: "Automated lender matching",
          body: "A single application was evaluated against configurable lender criteria, enabling borrowers to compare suitable financing options without duplicate entry.",
        },
        {
          title: "Standardized lender handoff",
          body: "A dedicated API contract delivered complete application, program, prequalification and attribution context to approved lenders.",
        },
        {
          title: "Referral integrity",
          body: "Dynamic partner links and CRM synchronization preserved school and affiliate attribution throughout the borrower funnel.",
        },
        {
          title: "Operational delivery",
          body: "Reusable hooks, validation utilities, shared UI components and GitHub CI/CD supported a broad, integration-heavy platform.",
        },
      ],
      integrations: [
        {
          title: "Zoho CRM",
          body: "System of record for contacts, accounts, programs, submissions, applications and partner/referral attribution.",
        },
        {
          title: "Zoho Bigin",
          body: "Managed the vendor onboarding pipeline from first contact through approved network participation.",
        },
        {
          title: "Zoho Analytics & Marketing Automation",
          body: "Provided operational dashboards, reporting and lifecycle campaigns across borrower and partner journeys.",
        },
        {
          title: "Auth0",
          body: "Identity, authentication and route-level access control across the role-specific portals.",
        },
        {
          title: "Equifax",
          body: "Soft credit checks supported prequalification without impacting a borrower’s credit score.",
        },
        {
          title: "AWS S3 & SendGrid",
          body: "S3 stored borrower and partner documents; SendGrid delivered transactional application and referral email.",
        },
      ],
      services: [
        {
          name: "Borrower Experience",
          responsibility:
            "Discovery, prequalification, application, matching and lender selection",
          stack: "Next.js, React, Tailwind CSS",
        },
        {
          name: "Partner Operations Portal",
          responsibility:
            "Institution-scoped students, applications, billing and enrollment leads",
          stack: "Next.js, React, Zoho CRM",
        },
        {
          name: "Lender Operations Portal",
          responsibility:
            "Eligibility configuration, partner access, documents, submissions and reporting",
          stack: "Next.js, React, Node.js APIs",
        },
        {
          name: "Network Operations Console",
          responsibility:
            "Vendor onboarding, administration, oversight, reporting and exception handling",
          stack: "React, Zoho One integrations",
        },
        {
          name: "Partner Integration API",
          responsibility:
            "Standardized lender submission, application handoff and referral synchronization",
          stack: "Node.js, Express, MongoDB",
        },
      ],
      caveats: [
        "Backend test coverage, shared frontend/API types and schema-driven decomposition remained ongoing investment areas.",
        "API-layer access control required continued hardening as the partner network and portal surface expanded.",
        "Claims describe a team-built platform and should not imply sole ownership of all portals or integrations.",
      ],
      results: [
        "Centralized borrower, school, lender, vendor and administrator workflows around one application record",
        "Replaced manual lender data re-entry with a standardized application handoff",
        "Made lender onboarding primarily a configuration exercise rather than a bespoke integration project",
        "Kept partner and referral reporting synchronized in Zoho CRM",
        "Provided one consistent borrower journey across direct and partner-referred entry points",
      ],
      scaleNote:
        "The represented platform included five production portals and more than ten external integrations, delivered through AWS infrastructure and GitHub CI/CD.",
      heroImage: {
        label: "Education finance marketplace",
        alt: "Multi-sided education lending marketplace borrower and partner experience",
      },
      gallery: [
        {
          label: "Borrower matching",
          alt: "Guided education-finance application and automated lender matching",
        },
        {
          label: "Partner network",
          alt: "School, lender, vendor and administrator portal architecture",
        },
      ],
    },
  },
  {
    id: "ai-commerce-merchandising-platform",
    title: "Multi-Tenant AI Commerce Merchandising Platform",
    context:
      "A distributed enterprise SaaS platform that gives retail teams one account-scoped workspace for product assortment, category sequencing, automation, analytics and AI-assisted merchandising across heterogeneous commerce engines.",
    role: "Full-Stack / Platform Engineer",
    engagementType:
      "Multi-repository SaaS product spanning frontend applications, microservices, adapters, identity and infrastructure",
    contributions: [
      "Helped design and deliver a multi-tenant merchandising SPA and embeddable widget",
      "Built platform capabilities across frontend, domain services and AWS infrastructure",
      "Supported normalized integrations across SFCC, Magento, HCL and Shopify",
      "Implemented asynchronous orchestration for long-running category and catalog operations",
      "Contributed to analytics, AI clustering, product alerts and cache-prewarming workflows",
      "Established account-scoped authentication, roles, entitlements and multi-environment delivery",
    ],
    capability:
      "Enterprise merchandising, multi-tenant SaaS architecture, commerce adapters, asynchronous workflows, AI product intelligence, identity and serverless cloud delivery.",
    tags: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "Auth0",
      "DynamoDB",
      "SQS",
      "Step Functions",
      "OpenAI",
      "Terraform",
      "CloudFront",
    ],
    detail: {
      challenge:
        "Retail merchandising teams operated across platform-specific admin tools, separate analytics vendors and manual category-ranking processes. The product needed to unify stores, locales, catalogs, behavioral signals and inventory while keeping large, long-running operations responsive and enforcing account-level roles and entitlements.",
      challengePoints: [
        "Present one merchandising experience across multiple commerce platforms",
        "Support multiple accounts, stores, locales and catalog contexts",
        "Combine product, behavioral, social and inventory signals",
        "Automate category sorting and scheduled merchandising changes",
        "Move long-running and high-volume operations off the interactive request path",
        "Enforce authentication, account roles, feature flags and entitlements",
        "Deploy safely across development, QA, UAT and production",
      ],
      approach:
        "The product was delivered as a distributed platform rather than a monolith: two React applications, centralized identity, an API edge, normalized commerce adapters and focused domain services running primarily on AWS Lambda. Shared auth utilities, asynchronous request orchestration, caching and environment-specific infrastructure connected the system behind account-scoped permissions.",
      evolution: [
        {
          phase: "Authenticate & select account",
          focus:
            "Auth0 login and entitled-account selection established the user’s account-scoped roles, stores and feature access.",
        },
        {
          phase: "Choose commerce context",
          focus:
            "Merchandisers selected store, locale, catalog and category before loading normalized product data.",
        },
        {
          phase: "Browse large catalogs",
          focus:
            "Virtualized grids and progress-aware pagination kept category exploration responsive at enterprise catalog scale.",
        },
        {
          phase: "Sequence products",
          focus:
            "Drag-and-drop, bulk moves, clipboard actions, pinning, locking and explicit positioning controlled category presentation.",
        },
        {
          phase: "Configure automation",
          focus:
            "Business rules, linked categories and recurring schedules coordinated automated ranking and synchronization jobs.",
        },
        {
          phase: "Analyze performance",
          focus:
            "Traffic, conversion, revenue, geography, KPIs and executive summaries combined analytics from multiple providers.",
        },
        {
          phase: "Apply AI intelligence",
          focus:
            "Similarity clustering, substitutions, bestsellers, trending products, frequently-bought-together suggestions and narrative KPI reports supported decisions.",
        },
        {
          phase: "Prewarm delivery",
          focus:
            "Scheduled and manual crawler jobs populated caches before high-demand browsing and merchandising sessions.",
        },
      ],
      architecture: [
        "Merchandising SPA / widget     Admin onboarding SPA",
        "             │                         │",
        "             ├──────────┬──────────────┤",
        "             ▼          ▼              ▼",
        "        Auth0 identity     API Gateway + JWT authorizers",
        "             │                         │",
        "             ▼                         ▼",
        "      Shared auth library       Lambda domain services",
        "                                ├─ config + entitlements",
        "                                ├─ rules + linked categories",
        "                                ├─ analytics + AI pipelines",
        "                                ├─ alerts + async requests",
        "                                └─ cache-prewarming control",
        "                                             │",
        "                                             ▼",
        "        Commerce adapters: SFCC / Magento / HCL / Shopify",
        "                                             │",
        "           ┌─────────────────┬───────────────┴──────────────┐",
        "           ▼                 ▼                              ▼",
        "    Commerce APIs     Analytics providers           AWS data plane",
        "                                              DynamoDB / S3 / SQS",
        "                                              Redis / Step Functions",
        "                                              EventBridge / Fargate",
      ],
      architectureNote:
        "API Gateway authorizers protected the edge; application hooks enforced account-scoped roles. Human users authenticated through Auth0 with retained OIDC options, while machine-to-machine credentials supported service calls. Terraform reproduced the platform across development, QA, UAT and production.",
      productSurface: [
        {
          domain: "Catalog merchandising",
          capabilities:
            "Virtualized grids, progress pagination, drag-and-drop ordering, bulk moves, pinning, locking and explicit placement",
        },
        {
          domain: "Product presentation",
          capabilities:
            "Variants, colors, leading images, badges, product groups, attributes, facets and content slots",
        },
        {
          domain: "Catalog operations",
          capabilities:
            "Add, copy, replace, remove, publish/unpublish, refresh products and synchronize linked categories",
        },
        {
          domain: "Rules & automation",
          capabilities:
            "Sorting rules, recurring schedules, category jobs and Step Functions orchestration",
        },
        {
          domain: "Analytics",
          capabilities:
            "Traffic, conversion, revenue, geographic, KPI and executive-summary dashboards with CSV export",
        },
        {
          domain: "AI merchandising",
          capabilities:
            "Embeddings, hierarchical clustering, similar products, substitutions, bestsellers, trends and frequently bought together",
        },
        {
          domain: "Inventory alerts",
          capabilities:
            "Product watchlists and low-stock, out-of-stock and back-in-stock transitions",
        },
        {
          domain: "Platform operations",
          capabilities:
            "Feature flags, account entitlements, multilingual UI, cache warming and embedded documentation assistant",
        },
      ],
      technicalHighlights: [
        {
          title: "Cross-platform normalization",
          body: "A shared adapter layer translated SFCC OCAPI/SCAPI, Magento REST, HCL SOAP/BOD and Shopify GraphQL into consistent product and category operations.",
        },
        {
          title: "Responsive enterprise catalogs",
          body: "React Window virtualization, progressive pagination, Redis-backed caching and prewarming workflows kept large category operations usable.",
        },
        {
          title: "Asynchronous command model",
          body: "A 202-and-polling façade, SQS, Step Functions and EventBridge moved long-running updates and scheduled automation away from synchronous UI requests.",
        },
        {
          title: "Account-scoped tenancy",
          body: "Store configuration, Auth0 role claims, application hooks, feature flags and entitlements controlled both UI surfaces and API capabilities.",
        },
        {
          title: "AI product intelligence",
          body: "Embedding and hierarchical-clustering services generated similarity groups and substitutions, while asynchronous OpenAI analysis produced narrative KPI reports.",
        },
        {
          title: "Embeddable delivery",
          body: "The primary React product could run as a standalone SPA or custom-element widget using Shadow DOM isolation and extracted styles.",
        },
      ],
      integrations: [
        {
          title: "Commerce engines",
          body: "Adapters supported Salesforce Commerce Cloud, Magento, HCL Commerce and Shopify through their respective REST, SOAP/BOD and GraphQL interfaces.",
        },
        {
          title: "Analytics providers",
          body: "A gateway normalized Google Analytics 4, Adobe/Omniture and retained legacy analytics sources behind one cached application contract.",
        },
        {
          title: "Auth0 & OIDC",
          body: "Auth0 SPAs, APIs, M2M clients, roles, claims, enterprise SSO and attack protection formed the primary identity layer, with Keycloak and generic OIDC compatibility retained in the UI.",
        },
        {
          title: "OpenAI",
          body: "Asynchronous KPI analysis produced narrative summaries from normalized performance data.",
        },
        {
          title: "AWS data plane",
          body: "DynamoDB, S3, SQS, Redis, Step Functions, EventBridge and ECS Fargate supported storage, queues, caching, orchestration and crawler workloads.",
        },
        {
          title: "Delivery platform",
          body: "Bitbucket Pipelines used AWS OIDC and Terraform to deploy private S3/CloudFront applications, Lambda services and environment-specific infrastructure.",
        },
      ],
      services: [
        {
          name: "Merchandising Experience",
          responsibility:
            "Primary catalog, category, analytics and AI workflows as a SPA or embedded widget",
          stack: "React 17, TypeScript, Redux Saga, Material UI",
        },
        {
          name: "Operator Onboarding",
          responsibility:
            "Internal account selection and Auth0-backed merchandiser registration",
          stack: "React, Auth0",
        },
        {
          name: "Identity Foundation",
          responsibility:
            "Tenants, applications, APIs, SSO, roles, claims, M2M tokens and shared auth helpers",
          stack: "Auth0, OIDC, Terraform",
        },
        {
          name: "Commerce Integration Layer",
          responsibility:
            "Normalized product, category and badge operations across commerce engines",
          stack: "SFCC, Magento, HCL, Shopify adapters",
        },
        {
          name: "Configuration & Rules",
          responsibility:
            "Account/store settings, entitlements, sorting, automation and linked categories",
          stack: "AWS Lambda, DynamoDB, Step Functions",
        },
        {
          name: "Analytics & Intelligence",
          responsibility:
            "Provider normalization, caching, KPI narratives, social signals and AI clustering",
          stack: "Lambda, Redis, OpenAI, embeddings",
        },
        {
          name: "Async Operations",
          responsibility:
            "Long-running request façade, jobs, queues, alerts and stock-transition processing",
          stack: "SQS, EventBridge, Step Functions",
        },
        {
          name: "Cache Prewarming",
          responsibility:
            "Scheduled/manual crawling and operational monitoring for warm catalog caches",
          stack: "ECS Fargate, EventBridge",
        },
      ],
      caveats: [
        "This was a team-built platform across 14 repositories; the role should not imply sole ownership of every subsystem.",
        "The social-analytics path included a demonstration provider and should not be described as a complete production integration.",
        "Some retained libraries and identity adapters reflected compatibility requirements across an evolving platform.",
        "No conversion, revenue or merchandising-lift metrics were supplied, so outcomes are limited to delivered platform capabilities.",
      ],
      results: [
        "Unified advanced merchandising workflows across four heterogeneous commerce engines",
        "Supported multi-account, multi-store and multi-locale operation behind role and entitlement boundaries",
        "Moved long-running catalog updates and automation into asynchronous, observable workflows",
        "Combined product, inventory, behavioral and AI-derived signals in one merchandising workspace",
        "Delivered repeatable development, QA, UAT and production environments through infrastructure-as-code and CI/CD",
      ],
      scaleNote:
        "The represented product spanned 14 repositories across applications, domain services, identity, adapters and AI pipelines on a multi-environment AWS serverless platform.",
      heroImage: {
        label: "AI merchandising workspace",
        alt: "Enterprise commerce merchandising workspace with catalog sequencing and analytics",
      },
      gallery: [
        {
          label: "Distributed platform",
          alt: "Architecture connecting merchandising applications, domain services and commerce adapters",
        },
        {
          label: "Catalog intelligence",
          alt: "AI clustering, product performance and inventory signals for retail merchandising",
        },
      ],
    },
  },
  {
    id: "eos-leadership-workspace",
    title: "Connected EOS Leadership Workspace",
    context:
      "A centralized operating workspace that turns Entrepreneurial Operating System practices—vision, accountability, Rocks, scorecards, issues and Level 10 meetings—into one connected execution rhythm.",
    engagementType:
      "Anonymized full-stack product for leadership accountability and weekly operating cadence",
    contributions: [
      "Built a role-aware Next.js workspace around EOS operating modules",
      "Connected Vision/Traction Organizer, Accountability Chart, Rocks, scorecards and issues",
      "Implemented live Level 10 meeting sessions with agenda structure and timers",
      "Added executive dashboards with shortcuts from signals to ownership",
      "Integrated Google Calendar, Zoom and AWS S3 for meetings, files and exports",
      "Modeled organizations, seats, permissions and modular MongoDB domain data",
    ],
    capability:
      "Leadership operating systems, role-aware SaaS, meeting workflows, accountability models, structured execution and full-stack product delivery.",
    tags: [
      "Next.js 15",
      "React 19",
      "MongoDB",
      "Tailwind CSS",
      "React Flow",
      "Zod",
      "Google Calendar",
      "Zoom",
      "AWS S3",
    ],
    detail: {
      challenge:
        "Teams implementing EOS often spread the method across spreadsheets, documents, chat threads and calendar invites. Vision, Rocks, scorecards, issues and meeting follow-up lose continuity between planning sessions, so ownership and progress have to be rebuilt manually every week.",
      challengePoints: [
        "Keep strategic plans in one shared source of truth",
        "Monitor quarterly Rocks before they become quarter-end surprises",
        "Preserve ownership of issues across meetings and follow-up",
        "Reduce manual preparation for Level 10 meeting cycles",
        "Unify scorecard measurables across owners and formats",
        "Clarify seats, responsibilities and reporting relationships",
        "Give leadership real-time visibility from vision to weekly execution",
      ],
      approach:
        "The product treated EOS as a closed-loop operating rhythm rather than a set of isolated templates. Vision, accountability, Rocks, scorecards, issues, meetings and To-Dos share context so a missed measurable can become an issue, an issue can become a To-Do, and a stalled Rock can surface automatically in the next Level 10 session.",
      evolution: [
        {
          phase: "Define vision",
          focus:
            "Vision/Traction Organizer captures long-term direction and near-term traction priorities with visibility and editing controls.",
        },
        {
          phase: "Map accountability",
          focus:
            "An interactive Accountability Chart clarifies seats, reporting lines and ownership, with PDF export for leadership reviews.",
        },
        {
          phase: "Set Rocks",
          focus:
            "Quarterly priorities receive owners, deadlines and progress status so off-track work is visible early.",
        },
        {
          phase: "Track scorecards",
          focus:
            "Weekly measurables, date-range trends and organization or meeting-specific views keep performance measurable.",
        },
        {
          phase: "Capture issues",
          focus:
            "Centralized issues attach ownership and meeting context, supporting Identify, Discuss, Solve workflows.",
        },
        {
          phase: "Run Level 10",
          focus:
            "Live meetings follow the structured agenda with timers, polling, ratings and calendar/Zoom support.",
        },
        {
          phase: "Assign To-Dos",
          focus:
            "Follow-up actions carry owners and due dates so resolution continues after the meeting ends.",
        },
      ],
      architecture: [
        "Leadership UI (dashboard, modules, live meetings)",
        "             │",
        "             ▼",
        "Next.js 15 application + API routes",
        "             │",
        "             ▼",
        "Business modules",
        "  ├─ V/TO + Accountability Chart",
        "  ├─ Rocks + Scorecards + Issues",
        "  ├─ Level 10 meetings + To-Dos",
        "  └─ Users, departments, permissions",
        "             │",
        "             ├─► MongoDB / Mongoose",
        "             ├─► Google Calendar + Zoom",
        "             └─► AWS S3 / PDF / CSV exports",
      ],
      architectureNote:
        "JWT authentication and seat-based permissions keep sensitive administration role-aware. Modular MongoDB models cover organizations, meetings, Rocks, issues, To-Dos, scorecards, seats, V/TOs and revisions.",
      productSurface: [
        {
          domain: "Executive dashboard",
          capabilities:
            "Upcoming meetings, assigned To-Dos, Rock status, scorecard performance, open issues and one-click conversion into ownership",
        },
        {
          domain: "Vision & accountability",
          capabilities:
            "Vision/Traction Organizer folders, Accountability Chart seats, role clarity and PDF export",
        },
        {
          domain: "Rocks",
          capabilities:
            "Quarterly priorities with owners, deadlines, progress status and early off-track visibility",
        },
        {
          domain: "Scorecards",
          capabilities:
            "Weekly measurables, date-range navigation, organization and meeting views, CSV export",
        },
        {
          domain: "Issues & IDS",
          capabilities:
            "Centralized capture, prioritization, meeting context and direct follow-up To-Dos",
        },
        {
          domain: "Level 10 meetings",
          capabilities:
            "Segue through conclude agenda, live status, timers, polling, ratings and Zoom/calendar support",
        },
        {
          domain: "Administration",
          capabilities:
            "Users, departments, permissions, headlines and organizational insights",
        },
      ],
      technicalHighlights: [
        {
          title: "Closed-loop operating rhythm",
          body: "Signals move from vision and Rocks into scorecards, issues, meetings and To-Dos without re-entering context between workflows.",
        },
        {
          title: "Live Level 10 workspace",
          body: "Meetings are structured as interactive sessions with agenda navigation, section timers, real-time polling and follow-up actions instead of static calendar events.",
        },
        {
          title: "Accountability visualization",
          body: "React Flow and drag-and-drop interactions support an interactive Accountability Chart that clarifies ownership of seats and reporting relationships.",
        },
        {
          title: "Role-aware product surfaces",
          body: "Seat-based permissions and consistent dashboard patterns keep planning and execution connected while protecting administrative controls.",
        },
        {
          title: "Modern full-stack delivery",
          body: "Next.js 15, React 19, React Hook Form with Zod, Lexical editing and Tailwind CSS power modular forms, rich content and responsive layouts.",
        },
        {
          title: "Meeting & export integrations",
          body: "Google Calendar, Zoom and AWS S3 connect scheduling, online meetings and file/PDF/CSV exports to the operating cadence.",
        },
      ],
      integrations: [
        {
          title: "Google Calendar",
          body: "Supports scheduling and calendar-linked meeting workflows for Level 10 sessions.",
        },
        {
          title: "Zoom",
          body: "Online-meeting support keeps remote Level 10 sessions attached to the same agenda and data context.",
        },
        {
          title: "AWS S3",
          body: "File storage for platform assets and exportable operational records.",
        },
        {
          title: "PDF & CSV exports",
          body: "Accountability charts, scorecards and reporting views can leave the application without losing structure.",
        },
      ],
      services: [
        {
          name: "Leadership Workspace",
          responsibility:
            "Dashboards, module navigation, live meetings and day-to-day execution UI",
          stack: "Next.js 15, React 19, Tailwind CSS",
        },
        {
          name: "Operating Modules API",
          responsibility:
            "V/TO, seats, Rocks, scorecards, issues, meetings, To-Dos and permissions",
          stack: "Next.js API routes, JWT auth",
        },
        {
          name: "Organization Data Store",
          responsibility:
            "Organizations, meetings, measurables, revisions and ownership records",
          stack: "MongoDB, Mongoose",
        },
        {
          name: "Meeting & Export Services",
          responsibility:
            "Calendar/Zoom connectivity, file storage and PDF/CSV/image exports",
          stack: "Google Calendar, Zoom, AWS S3",
        },
      ],
      caveats: [
        "The platform supports teams implementing the Entrepreneurial Operating System methodology; it does not claim ownership of the EOS method itself.",
        "Impact is framed as expected operating outcomes rather than verified conversion or productivity metrics.",
        "Suggested KPIs such as Rock completion and meeting ratings are measurement recommendations, not reported results.",
        "Claims should match actual ownership of modules rather than imply sole authorship of the full product.",
      ],
      results: [
        "Replaced fragmented EOS documents and spreadsheets with one connected operating workspace",
        "Linked vision, accountability, Rocks, scorecards, issues and Level 10 meetings into a continuous execution loop",
        "Shortened the path from noticing an off-track signal to assigning ownership",
        "Digitized Level 10 agendas so meetings stay tied to live company data",
        "Established a foundation for analytics, reminders, mobile workflows and executive reporting",
      ],
      heroImage: {
        label: "Leadership operating dashboard",
        alt: "Connected EOS leadership workspace showing Rocks, scorecards and meetings",
      },
      gallery: [
        {
          label: "Level 10 meeting",
          alt: "Live Level 10 meeting agenda with scorecards, Rocks and IDS workflow",
        },
        {
          label: "Accountability chart",
          alt: "Interactive organizational accountability chart with seats and ownership",
        },
      ],
    },
  },
];

/** Look up a case study by its URL slug (the id doubles as the slug). */
export function getCaseStudyById(id: string): WorkCaseStudy | undefined {
  return workCaseStudies.find((study) => study.id === id);
}

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
