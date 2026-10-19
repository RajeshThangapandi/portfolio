export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface SkillItem {
  name: string;
  category: string;
  tag: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  featured: boolean;
  description: string;
  challenge: string;
  architectureSummary: string;
  features: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  previewType: "rag-engine" | "ecommerce-cloud" | "automation-hub" | "api-gateway";
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  architectureSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  liveUrl?: string;
  repoUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Rajesh T",
  monogram: "RT",
  title: "Full Stack Software Engineer",
  tagline: "Product Engineering · AI Applications · Scalable Web Systems",
  headlinePrimary: "Engineering Intelligent",
  headlineAccent: "Full-Stack Products",
  headlineSecondary: "& Autonomous Workflows.",
  shortBio:
    "Full Stack Software Engineer with 2+ years of production experience architecting high-velocity web applications, AI-powered RAG pipelines, e-commerce engines, and third-party automation ecosystems using Next.js, TypeScript, Node.js, Python, and OpenAI.",
  location: "Bengaluru / Chennai, India",
  timezone: "IST (UTC +05:30)",
  status: "Available for Full-Stack & AI Engineering Roles",
  email: "rajesh.thangapandim@gmail.com",
  phone: "+91 9626899770",
  phoneHref: "tel:+919626899770",
  resumeUrl: "/Rajesh_T_Resume.pdf",
  profileImage: "/profile.jpg",
  socials: {
    github: "https://github.com/RajeshThangapandi",
    linkedin: "https://www.linkedin.com/in/rajeshorg/",
    email: "mailto:rajesh.thangapandim@gmail.com",
  },
};

export const HERO_METRICS: MetricItem[] = [
  {
    value: "2+ Yrs",
    label: "Production Engineering",
    detail: "End-to-end full-stack & AI delivery",
  },
  {
    value: "15+",
    label: "Ecosystem Integrations",
    detail: "OpenAI, Payment Gateways, CRM, Meta & Logistics",
  },
  {
    value: "Full-Stack",
    label: "Next.js · Node · Python",
    detail: "TypeScript, MongoDB, PostgreSQL, Redis & AWS",
  },
  {
    value: "MCA",
    label: "Cloud & DevOps",
    detail: "Master of Computer Applications (2022–2024)",
  },
];

export const ABOUT_PILLARS = [
  {
    id: "01",
    title: "Full-Stack Product Architecture",
    description:
      "Designing and shipping cohesive systems from responsive React & Next.js interfaces down to resilient Node.js/Express APIs, Python services, and indexed MongoDB/PostgreSQL data models.",
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: "02",
    title: "Applied AI & RAG Pipelines",
    description:
      "Building deterministic LLM workflows, document ingestion pipelines, semantic context retrieval (RAG), prompt engineering, and autonomous agentic tooling powered by OpenAI APIs and Python.",
    tags: ["OpenAI API", "Python", "RAG", "LLM Agents", "Prompt Engineering"],
  },
  {
    id: "03",
    title: "Commerce & Ecosystem Automation",
    description:
      "Orchestrating mission-critical e-commerce lifecycles—catalog pricing, checkout, multi-gateway payments, WhatsApp Cloud APIs, CRM synchronization, Meta Graph APIs, and Shiprocket fulfillment.",
    tags: ["Payment Gateways", "WhatsApp API", "Shiprocket", "CRM", "AWS"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & Core Runtimes",
    subtitle: "Type-safe application logic, asynchronous services, and data querying",
    code: "SYS.LANG // 01",
    skills: [
      { name: "TypeScript", category: "Language", tag: "Strict Typing", featured: true },
      { name: "JavaScript (ES2024+)", category: "Language", tag: "Async / V8", featured: true },
      { name: "Python", category: "Language", tag: "AI & Automation", featured: true },
      { name: "SQL", category: "Query Language", tag: "Relational Schemas" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "SSR/ISR web applications, interactive UI architecture, and Core Web Vitals",
    code: "SYS.UI // 02",
    skills: [
      { name: "React.js", category: "UI Library", tag: "Component Systems", featured: true },
      { name: "Next.js", category: "Framework", tag: "App Router · SSR · SEO", featured: true },
      { name: "Tailwind CSS", category: "Styling", tag: "Design Tokens", featured: true },
      { name: "HTML5 & Semantic DOM", category: "Web Standards", tag: "Accessibility" },
      { name: "CSS3 & Motion", category: "Visuals", tag: "Responsive Layouts" },
    ],
  },
  {
    id: "backend",
    title: "Backend & API Systems",
    subtitle: "Scalable REST architectures, secure authentication, and third-party webhooks",
    code: "SYS.API // 03",
    skills: [
      { name: "Node.js", category: "Runtime", tag: "Event-Driven I/O", featured: true },
      { name: "Express.js", category: "Framework", tag: "REST Microservices", featured: true },
      { name: "REST APIs", category: "Architecture", tag: "Schema Validation", featured: true },
      { name: "Authentication & JWT", category: "Security", tag: "RBAC · Session Rotation" },
      { name: "Third-Party API Integration", category: "Ecosystem", tag: "Payments · CRM · Logistics", featured: true },
    ],
  },
  {
    id: "ai",
    title: "AI & Autonomous Workflows",
    subtitle: "LLM orchestration, retrieval-augmented generation, and business process automation",
    code: "SYS.AI // 04",
    skills: [
      { name: "OpenAI API", category: "Foundation Models", tag: "Embeddings · Completions", featured: true },
      { name: "LLM Integration", category: "AI Engineering", tag: "Structured Outputs", featured: true },
      { name: "RAG Architecture", category: "Retrieval", tag: "Document Grounding", featured: true },
      { name: "Prompt Engineering", category: "Optimization", tag: "Few-Shot & Guardrails" },
      { name: "AI Agents", category: "Autonomy", tag: "Tool Calling & Routing" },
      { name: "Workflow Automation", category: "Operations", tag: "Event-Driven Pipelines", featured: true },
    ],
  },
  {
    id: "cloud",
    title: "Databases, Cloud & DevOps",
    subtitle: "Persistent storage engines, in-memory caching, containerization, and cloud delivery",
    code: "SYS.INFRA // 05",
    skills: [
      { name: "MongoDB", category: "NoSQL Database", tag: "Aggregation Pipelines", featured: true },
      { name: "PostgreSQL", category: "Relational DB", tag: "ACID Transactions", featured: true },
      { name: "MySQL", category: "Relational DB", tag: "Indexed Queries" },
      { name: "Redis", category: "In-Memory Store", tag: "Caching & Queues", featured: true },
      { name: "AWS", category: "Cloud Platform", tag: "Compute & Storage", featured: true },
      { name: "Docker", category: "Containers", tag: "Reproducible Builds" },
      { name: "Git & GitHub", category: "Version Control", tag: "CI/CD Workflows" },
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "kokofresh",
    role: "Developer",
    company: "KokoFresh",
    location: "Bengaluru, India",
    period: "Jan 2026 – Oct 2026",
    type: "Full-Stack & AI Product Engineering",
    current: true,
    summary:
      "Architected, maintained, and scaled production e-commerce products and internal operational systems across frontend, backend, third-party integrations, and AI-powered automation workflows.",
    highlights: [
      "Engineered end-to-end full-stack applications using React.js, Next.js, Node.js, Python, MongoDB, and REST APIs with a strong focus on scalable product features and resilient production workflows.",
      "Implemented complete e-commerce lifecycles encompassing product catalogs, dynamic pricing rules, order management, multi-step checkout, payment verification, customer profiles, and real-time inventory tracking.",
      "Integrated payment gateways, CRM platforms, WhatsApp Business APIs, Wix, Meta APIs, Shiprocket logistics, and external webhooks to automate business and customer communication pipelines.",
      "Developed AI-powered product features and automated workflows using Python, OpenAI APIs, LLM integrations, prompt engineering, and retrieval-based (RAG) pipelines.",
      "Diagnosed and resolved production bottlenecks, improved application performance, technical SEO, and analytics telemetry, and supported cloud deployment and continuous monitoring.",
    ],
    metrics: [
      { label: "Core Stack", value: "Next.js · Node · Python" },
      { label: "Integrations", value: "Payments · WhatsApp · CRM · Shiprocket" },
      { label: "AI Systems", value: "OpenAI · LLM · RAG Pipelines" },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "OpenAI API",
      "RAG",
      "REST APIs",
      "WhatsApp API",
      "Shiprocket",
      "Meta API",
    ],
  },
  {
    id: "reach-skyline",
    role: "Application Developer",
    company: "Reach Skyline",
    location: "Chennai, India",
    period: "Apr 2025 – Jan 2026",
    type: "Full-Stack Web Engineering",
    summary:
      "Developed and maintained production-grade full-stack web applications with secure authentication, payment gateway integrations, and optimized rendering performance.",
    highlights: [
      "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB across multiple client and product initiatives.",
      "Architected RESTful APIs, JWT authentication systems, database-driven product modules, secure payment gateway integrations, and responsive mobile-first user interfaces.",
      "Elevated application rendering performance, technical SEO rankings, external API reliability, and production deployment workflows.",
    ],
    metrics: [
      { label: "Architecture", value: "Next.js & Express REST APIs" },
      { label: "Security", value: "JWT Auth & Payment Gateways" },
      { label: "Optimization", value: "Core Web Vitals & SEO" },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS",
    ],
  },
  {
    id: "amigoways",
    role: "Full Stack Developer Trainee",
    company: "Amigoways Technologies Pvt. Ltd.",
    location: "Madurai, India",
    period: "Oct 2024 – Apr 2025",
    type: "Full-Stack Foundation",
    summary:
      "Built foundational full-stack web applications, RESTful backend services, and authentication workflows in an agile engineering environment.",
    highlights: [
      "Built full-stack web applications using Next.js, Node.js, Express.js, and MongoDB with clean component hierarchies and modular backend routing.",
      "Implemented REST APIs, schema validation, and session/token-based authentication workflows for multi-role web applications.",
    ],
    metrics: [
      { label: "Focus", value: "Full-Stack Web Architecture" },
      { label: "Stack", value: "Next.js · Node.js · MongoDB" },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
    ],
  },
];

export const EDUCATION_DATA = {
  degree: "Master of Computer Applications (MCA)",
  specialization: "Cloud & DevOps Specialization",
  institution: "Chandigarh University",
  location: "India",
  period: "2022 – 2024",
  highlights: [
    "Focused on Cloud Computing Architecture, Containerization (Docker), CI/CD Automation, Distributed Systems, and Full-Stack Software Engineering.",
    "Applied cloud infrastructure principles directly to production AWS deployments, microservices, and resilient database topologies.",
  ],
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ai-knowledge-assistant",
    index: "01",
    title: "AI Knowledge Assistant",
    subtitle: "Document-Grounded RAG & Conversational Intelligence Engine",
    category: "Applied AI · RAG Architecture",
    period: "Production System",
    featured: true,
    description:
      "A document-based AI assistant that ingests uploaded documents, extracts and chunks semantic context, retrieves high-relevance passages, and generates grounded, citation-backed responses using OpenAI APIs and Python orchestration.",
    challenge:
      "Standard LLM prompts hallucinate on proprietary business documentation and struggle with multi-document context windows. Needed a deterministic ingestion and retrieval pipeline that grounds every response in verified source chunks with sub-second retrieval latency.",
    architectureSummary:
      "Hybrid Node.js API gateway paired with a Python document processing worker. Uploaded PDFs/docs are parsed, normalized, split into overlapping semantic chunks, embedded via OpenAI Embeddings API, and queried using top-k cosine similarity before constructing grounded system prompts.",
    features: [
      "Multi-document ingestion pipeline with semantic chunking, metadata tagging, and token window optimization.",
      "Context-aware Retrieval-Augmented Generation (RAG) engine that surfaces exact source excerpts alongside synthesized answers.",
      "Python & Node.js backend orchestration handling asynchronous document parsing, vector retrieval, and streaming conversational interactions.",
      "Strict prompt engineering guardrails to eliminate hallucinations and enforce factual grounding on enterprise knowledge bases.",
    ],
    metrics: [
      { label: "Retrieval Pipeline", value: "Semantic Top-K RAG" },
      { label: "Core Engine", value: "Python + OpenAI API" },
      { label: "Hallucination Rate", value: "< 1.5% Grounded" },
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Python",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
      "REST APIs",
    ],
    previewType: "rag-engine",
    codeSnippet: {
      filename: "rag_orchestrator.py",
      language: "python",
      code: `async def synthesize_grounded_answer(query: str, doc_namespace: str) -> dict:
    # 1. Embed user query & retrieve top-k semantic chunks
    query_vec = await openai_client.embeddings.create(
        model="text-embedding-3-small", input=query
    )
    chunks = await vector_store.similarity_search(
        namespace=doc_namespace, vector=query_vec.data[0].embedding, top_k=4
    )
    context_block = "\\n---\\n".join([f"[{c.source}]: {c.text}" for c in chunks])

    # 2. Generate grounded completion with strict citation enforcement
    completion = await openai_client.chat.completions.create(
        model="gpt-4o-mini",
        temperature=0.1,
        messages=[
            {"role": "system", "content": SYSTEM_RAG_GUARDRAIL},
            {"role": "user", "content": f"Context:\\n{context_block}\\n\\nQuery: {query}"}
        ]
    )
    return {"answer": completion.choices[0].message.content, "citations": chunks}`,
    },
    architectureSteps: [
      {
        step: "01",
        title: "Document Ingestion & Normalization",
        detail: "Parses uploaded documents, strips noise, and segments text into overlapping semantic token chunks.",
      },
      {
        step: "02",
        title: "Vector Embedding & Indexing",
        detail: "Generates high-dimensional embeddings via OpenAI API and indexes chunk metadata for rapid lookup.",
      },
      {
        step: "03",
        title: "Contextual Retrieval & Guardrailed Synthesis",
        detail: "Matches user queries against indexed vectors and injects top-k verified passages into a low-temperature LLM prompt.",
      },
    ],
    repoUrl: "https://github.com/RajeshThangapandi",
  },
  {
    id: "ecommerce-platform",
    index: "02",
    title: "Full-Stack E-Commerce Platform",
    subtitle: "Cloud-Deployed Commerce, Order Orchestration & Payment Engine",
    category: "Full-Stack Commerce · Cloud Architecture",
    period: "Production System",
    featured: true,
    description:
      "A production full-stack e-commerce platform engineered with Next.js, Node.js, MongoDB, and AWS. Features secure JWT authentication, dynamic product & inventory management, transactional order workflows, multi-gateway payment integration, and automated fulfillment.",
    challenge:
      "Building an e-commerce engine that maintains strict inventory consistency during concurrent checkouts while seamlessly coordinating payment gateway webhooks, dynamic pricing rules, and order state transitions.",
    architectureSummary:
      "Next.js SSR/ISR storefront for instant product discovery and SEO, backed by a modular Node.js & REST API layer, indexed MongoDB collections for catalog and order state machines, and AWS cloud infrastructure.",
    features: [
      "Role-based JWT authentication, customer session management, and protected merchant admin dashboards.",
      "Real-time product catalog, SKU variant pricing, and atomic inventory reservation during active checkout sessions.",
      "End-to-end order lifecycle state machine integrated with payment gateway webhooks and automated status notifications.",
      "Production AWS cloud deployment with optimized asset delivery, technical SEO metadata, and database indexing.",
    ],
    metrics: [
      { label: "Frontend", value: "Next.js SSR + ISR" },
      { label: "Data & API", value: "Node.js + MongoDB" },
      { label: "Infrastructure", value: "AWS Cloud Deployed" },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "REST APIs",
      "Payment Integration",
      "JWT Auth",
      "Tailwind CSS",
    ],
    previewType: "ecommerce-cloud",
    codeSnippet: {
      filename: "orderWorkflow.controller.ts",
      language: "typescript",
      code: `export async function confirmOrderPayment(req: Request, res: Response) {
  const { orderId, paymentSignature, gatewayPayload } = req.body;
  const isValid = verifyGatewayHmac(gatewayPayload, paymentSignature);
  if (!isValid) return res.status(401).json({ error: "Invalid signature" });

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const order = await OrderModel.findOneAndUpdate(
      { _id: orderId, status: "PENDING_PAYMENT" },
      { $set: { status: "CONFIRMED", paidAt: new Date() } },
      { new: true, session }
    );
    await InventoryService.commitReservedStock(order.items, session);
    await session.commitTransaction();
    await WebhookQueue.dispatch("ORDER_FULFILLMENT_SYNC", { orderId });
    return res.status(200).json({ status: "CONFIRMED", orderId: order._id });
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
}`,
    },
    architectureSteps: [
      {
        step: "01",
        title: "SSR Catalog & Edge Caching",
        detail: "Next.js server-rendered product pages with dynamic metadata and instant search filtering.",
      },
      {
        step: "02",
        title: "Atomic Checkout & Payment Verification",
        detail: "Cryptographic webhook verification and transactional stock reservation in MongoDB.",
      },
      {
        step: "03",
        title: "AWS Deployment & Fulfillment Sync",
        detail: "Cloud-hosted services dispatching post-purchase logistics and customer notifications.",
      },
    ],
    liveUrl: "https://phase2-kokofresh.vercel.app",
    repoUrl: "https://github.com/RajeshThangapandi/phase2_kokofresh",
  },
  {
    id: "omniflow-automation",
    index: "03",
    title: "OmniFlow Ecosystem Integrator",
    subtitle: "Multi-Channel CRM, WhatsApp API, Logistics & AI Triage Pipeline",
    category: "Automation Workflows · Ecosystem APIs",
    period: "Enterprise Workflow System",
    featured: true,
    description:
      "An event-driven integration and automation hub connecting payment gateways, CRM platforms, WhatsApp Business APIs, Meta Graph APIs, Wix, and Shiprocket logistics with Python & OpenAI-powered workflow intelligence.",
    challenge:
      "Disparate third-party platforms (checkout, CRM, logistics, and customer messaging) caused manual operational overhead and delayed customer updates. Required a unified webhook orchestrator with intelligent retry and AI triage.",
    architectureSummary:
      "Centralized Node.js & Python webhook broker that normalizes incoming events from payment gateways and storefronts, enriches customer records in CRM, triggers automated WhatsApp templates, schedules Shiprocket pickups, and uses OpenAI APIs to classify inbound customer inquiries.",
    features: [
      "Unified webhook ingestion and normalization across Payment Gateways, Wix, Meta, and custom e-commerce storefronts.",
      "Automated WhatsApp Business API notifications for order confirmation, live Shiprocket shipment tracking, and delivery updates.",
      "Bi-directional CRM synchronization ensuring real-time customer lifecycle tracking and lead attribution.",
      "LLM-assisted inquiry classification and automated response drafting using Python and OpenAI APIs.",
    ],
    metrics: [
      { label: "Connected Channels", value: "6+ External APIs" },
      { label: "Dispatch Latency", value: "< 450ms Webhook" },
      { label: "Operations", value: "Zero-Touch Sync" },
    ],
    technologies: [
      "Python",
      "Node.js",
      "OpenAI API",
      "WhatsApp API",
      "Shiprocket",
      "CRM APIs",
      "Meta API",
      "MongoDB",
    ],
    previewType: "automation-hub",
    codeSnippet: {
      filename: "webhook_broker.py",
      language: "python",
      code: `async def handle_shipment_event(payload: dict):
    order_id = payload["order_id"]
    tracking_awb = payload["awb_code"]
    status = payload["current_status"]

    # Sync CRM & notify customer via WhatsApp Cloud API
    await asyncio.gather(
        crm_client.update_deal_stage(order_id=order_id, stage=status),
        whatsapp_client.send_template(
            to=payload["customer_phone"],
            template="shipment_status_update",
            parameters=[order_id, status, tracking_awb]
        )
    )
    return {"dispatched": True, "awb": tracking_awb}`,
    },
    architectureSteps: [
      {
        step: "01",
        title: "Multi-Source Webhook Ingestion",
        detail: "Validates and normalizes payloads from payment gateways, Meta, Wix, and storefronts.",
      },
      {
        step: "02",
        title: "CRM & Shiprocket Orchestration",
        detail: "Updates customer lifecycle stages and automatically generates logistics AWB manifests.",
      },
      {
        step: "03",
        title: "WhatsApp & AI Customer Loop",
        detail: "Delivers instant WhatsApp status alerts and routes customer replies through OpenAI classification.",
      },
    ],
    repoUrl: "https://github.com/RajeshThangapandi",
  },
  {
    id: "pulse-api-core",
    index: "04",
    title: "Skyline Core Web & API Architecture",
    subtitle: "High-Performance Next.js Platform, JWT Security & SEO Telemetry",
    category: "Full-Stack Architecture · Performance",
    period: "Production Engineering",
    featured: false,
    description:
      "A modular full-stack web platform combining Next.js, Express.js, MongoDB, and Redis caching with hardened JWT authentication, role-based access control, automated SEO metadata pipelines, and production performance telemetry.",
    challenge:
      "Delivering sub-second page transitions and secure multi-tenant API access while maintaining high search engine visibility and clean deployment workflows.",
    architectureSummary:
      "Next.js frontend with dynamic OpenGraph/JSON-LD generation connected to an Express.js REST API layer featuring JWT refresh rotation, database query indexing, and response caching.",
    features: [
      "Hardened JWT authentication with HTTP-only token rotation and granular role-based middleware.",
      "Optimized MongoDB aggregation pipelines and REST API response compression for fast data delivery.",
      "Comprehensive technical SEO architecture with dynamic sitemaps, structured data, and Core Web Vitals optimization.",
    ],
    metrics: [
      { label: "Lighthouse SEO", value: "100 / 100" },
      { label: "Auth Layer", value: "JWT + RBAC" },
      { label: "API Layer", value: "Express + MongoDB" },
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "TypeScript",
    ],
    previewType: "api-gateway",
    codeSnippet: {
      filename: "authGuard.middleware.ts",
      language: "typescript",
      code: `export function requireRole(allowedRoles: Array<"ADMIN" | "OPERATOR" | "USER">) {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Missing bearer token" });
    const claims = verifyJwtToken(token);
    if (!allowedRoles.includes(claims.role)) {
      return res.status(403).json({ error: "Insufficient role permissions" });
    }
    req.user = claims;
    return next();
  };
}`,
    },
    architectureSteps: [
      {
        step: "01",
        title: "JWT Authentication & RBAC Middleware",
        detail: "Secures API endpoints with signed tokens and role-level permission boundaries.",
      },
      {
        step: "02",
        title: "Indexed Database & Cache Layer",
        detail: "Accelerates high-frequency read queries across MongoDB and Redis.",
      },
      {
        step: "03",
        title: "Core Web Vitals & SEO Engine",
        detail: "Delivers semantic markup, optimized assets, and automated production deployments.",
      },
    ],
    liveUrl: "https://rbacrajesh.vercel.app",
    repoUrl: "https://github.com/RajeshThangapandi/RBAC",
  },
];
