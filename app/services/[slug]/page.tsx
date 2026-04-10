



// ---------STATIC DATA SERVICES-------------------


"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  Bot, Zap, BarChart2, Link2, ShieldCheck, Cloud,
  Rocket, Lock, TrendingUp, Users, RefreshCw,
  ArrowRight, Sparkles, CheckCircle2, Globe, Code2,
  Smartphone, ShoppingCart, Megaphone, Database,
  Search, Mail, PenTool, Target, DollarSign,
  Star, MessageSquare, Cpu, Layers, GitBranch,
  Shield, Settings, Package, Monitor, Palette,
  FileCode, Server, Workflow, BrainCircuit, Boxes,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/ScrollReveal";

// ─────────────────────────────────────────────
// TYPE
// ─────────────────────────────────────────────
type ServiceData = {
  slug: string;
  title: string;
  badge: string;
  headline: string[];
  headlineColors: string[];
  description: string;
  stats: { value: string; label: string }[];
  features: { icon: LucideIcon; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
};

// ─────────────────────────────────────────────
// ALL SERVICES
// ─────────────────────────────────────────────
const allServices: ServiceData[] = [
  // ── 1. AI ENGINEERING ──────────────────────
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    badge: "Next-Gen AI Solutions",
    headline: ["Intelligent AI", "Engineering for", "Modern Business"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "As a trusted <strong>artificial intelligence engineering company</strong>, we build custom AI systems that automate complex workflows, unlock predictive insights, and scale your business. Our <strong>AI engineering services</strong> are trusted by startups and Fortune 500 companies across USA, UK, UAE, Singapore, Australia, and India.",
    stats: [
      { value: "75+", label: "AI Solutions Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "50+", label: "AI Models Deployed" },
      { value: "20+", label: "Industries Served" },
    ],
    features: [
      { icon: Bot, title: "Custom AI Model Development", desc: "We design, train, and deploy custom ML/DL models tailored to your business needs — from NLP pipelines to computer vision systems." },
      { icon: Zap, title: "AI Automation & Workflows", desc: "Eliminate manual bottlenecks with intelligent automation. Our AI agents handle data extraction, classification, decision-making, and more." },
      { icon: BarChart2, title: "Predictive Analytics", desc: "Turn raw data into actionable intelligence. We build forecasting models that help you stay ahead of trends and customer behavior." },
      { icon: Link2, title: "LLM Integration & Fine-Tuning", desc: "Integrate GPT-4, Claude, Gemini or fine-tune open-source LLMs on your proprietary data for enterprise-grade AI assistants." },
      { icon: ShieldCheck, title: "Responsible AI & Compliance", desc: "We build transparent, auditable AI systems that comply with GDPR, HIPAA, and emerging AI governance frameworks." },
      { icon: Cloud, title: "AI Cloud Infrastructure", desc: "Deploy at scale with optimized MLOps pipelines on AWS, GCP, or Azure — with monitoring, versioning, and CI/CD built in." },
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "We audit your data, workflows, and business goals to define the right AI strategy." },
      { step: "02", title: "Data Preparation", desc: "Clean, label, and structure your datasets for high-quality model training." },
      { step: "03", title: "Model Development", desc: "Build and train custom models or fine-tune foundation models on your data." },
      { step: "04", title: "Testing & Validation", desc: "Rigorous evaluation for accuracy, fairness, and performance benchmarks." },
      { step: "05", title: "Deployment & Integration", desc: "Seamless integration into your product via APIs, SDKs, or embedded systems." },
      { step: "06", title: "Monitoring & Iteration", desc: "Continuous performance monitoring and model improvement over time." },
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "OpenAI", "AWS SageMaker", "FastAPI", "Docker", "Kubernetes"],
    faqs: [
      { q: "How long does an AI project typically take?", a: "Depending on complexity, most AI engineering projects take 6–16 weeks from discovery to deployment." },
      { q: "Do we need a large dataset to get started?", a: "Not always. We assess your data maturity and may recommend data augmentation, synthetic data, or pre-trained models as a starting point." },
      { q: "Can you integrate AI into our existing software?", a: "Absolutely. We specialize in integrating AI capabilities into existing platforms via REST APIs, microservices, and SDKs." },
      { q: "What industries do you serve?", a: "We work across fintech, healthcare, e-commerce, logistics, legal tech, edtech, and more." },
    ],
  },

  // ── 2. BLOCKCHAIN DEVELOPMENT ─────────────
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    badge: "Web3 & DeFi Experts",
    headline: ["Decentralized", "Blockchain Solutions", "Built to Last"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "As a leading <strong>blockchain development company</strong>, we engineer smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain networks. Our <strong>Web3 engineers</strong> have shipped production-ready decentralized applications trusted by clients across USA, UK, UAE, and Europe.",
    stats: [
      { value: "40+", label: "Blockchain Projects" },
      { value: "$2B+", label: "TVL Secured" },
      { value: "15+", label: "Chains Supported" },
      { value: "99.9%", label: "Smart Contract Uptime" },
    ],
    features: [
      { icon: FileCode, title: "Smart Contract Development", desc: "Audited, gas-optimised Solidity & Rust smart contracts for EVM chains and Solana." },
      { icon: Layers, title: "DeFi Protocol Engineering", desc: "AMMs, lending protocols, yield optimisers, and staking infrastructure built from the ground up." },
      { icon: Package, title: "NFT & Digital Assets", desc: "End-to-end NFT marketplace development including minting, royalty logic, and metadata management." },
      { icon: Shield, title: "Security Audits", desc: "Comprehensive smart contract audits identifying reentrancy, overflow, and access-control vulnerabilities." },
      { icon: Globe, title: "Cross-Chain Bridges", desc: "Trustless bridge infrastructure connecting EVM chains, Cosmos, and Layer-2 ecosystems." },
      { icon: Server, title: "Enterprise Blockchain", desc: "Hyperledger Fabric and private Ethereum networks for supply chain, KYC, and document provenance." },
    ],
    process: [
      { step: "01", title: "Architecture Design", desc: "Define tokenomics, consensus mechanism, and on-chain vs off-chain data split." },
      { step: "02", title: "Smart Contract Development", desc: "Write modular, upgradeable contracts following EIP standards." },
      { step: "03", title: "Internal Audit", desc: "Static analysis with Slither/Mythril and manual review of critical paths." },
      { step: "04", title: "Testnet Deployment", desc: "Full end-to-end testing on public testnets with realistic load scenarios." },
      { step: "05", title: "Third-Party Audit", desc: "Independent security audit by a reputable firm before mainnet launch." },
      { step: "06", title: "Mainnet Launch & Monitoring", desc: "Controlled rollout with on-chain analytics and incident-response runbook." },
    ],
    techStack: ["Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js", "IPFS", "The Graph", "Chainlink", "OpenZeppelin", "Polygon"],
    faqs: [
      { q: "Which blockchains do you develop for?", a: "We support Ethereum, Polygon, BNB Chain, Avalanche, Solana, Base, and Arbitrum, among others." },
      { q: "Do you conduct security audits?", a: "Yes — every smart contract we deliver goes through internal static analysis and we can arrange third-party audits." },
      { q: "Can you build a token or NFT collection?", a: "Absolutely. We handle everything from tokenomics design to ERC-20/ERC-721/ERC-1155 deployment." },
      { q: "What is your experience with enterprise blockchain?", a: "We have delivered private Hyperledger and Quorum networks for supply-chain and compliance use cases." },
    ],
  },

  // ── 3. MOBILE APP DEVELOPMENT ─────────────
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    badge: "iOS & Android Experts",
    headline: ["Mobile Apps That", "Users Love,", "Businesses Trust"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "From concept to App Store, we build high-performance <strong>iOS and Android applications</strong> using React Native and Flutter. Our <strong>mobile app development team</strong> delivers pixel-perfect UIs, offline-first architecture, and seamless integrations — for startups and enterprise clients worldwide.",
    stats: [
      { value: "120+", label: "Apps Shipped" },
      { value: "4.8★", label: "Avg App Store Rating" },
      { value: "10M+", label: "End Users Served" },
      { value: "40+", label: "Countries Deployed" },
    ],
    features: [
      { icon: Smartphone, title: "Cross-Platform Development", desc: "Single codebase, native performance — React Native and Flutter apps for iOS and Android." },
      { icon: Zap, title: "Native iOS & Android", desc: "Swift and Kotlin for performance-critical apps demanding full platform API access." },
      { icon: Palette, title: "UI/UX Design", desc: "Motion-rich, accessible interfaces built to HIG and Material Design guidelines." },
      { icon: Cloud, title: "Backend & API Integration", desc: "REST, GraphQL, WebSockets — integrated with Firebase, Supabase, or your custom backend." },
      { icon: ShieldCheck, title: "App Security", desc: "Certificate pinning, biometric auth, encrypted storage, and OWASP Mobile compliance." },
      { icon: BarChart2, title: "Analytics & Crash Reporting", desc: "Firebase Analytics, Mixpanel, and Sentry wired in for data-driven iteration." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understand user journeys, platform targets, and offline/online requirements." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity flows validated with stakeholders before visual design begins." },
      { step: "03", title: "UI Design", desc: "High-fidelity Figma screens with interactive prototypes." },
      { step: "04", title: "Development Sprints", desc: "Two-week sprints with working builds delivered to TestFlight/Play Console." },
      { step: "05", title: "QA & Device Testing", desc: "Real-device matrix testing across iOS versions and Android OEMs." },
      { step: "06", title: "Store Submission & Launch", desc: "App Store and Play Store submission, ASO, and launch monitoring." },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Redux Toolkit", "Zustand", "Notifee", "Fastlane"],
    faqs: [
      { q: "React Native or Flutter — which is right for us?", a: "Both are excellent. We recommend React Native if you have a web React codebase and Flutter for richer animations and consistent UI." },
      { q: "How do you handle App Store rejections?", a: "We pre-screen every submission against Apple and Google policies, maintaining a near-zero rejection rate." },
      { q: "Can you add features to our existing app?", a: "Yes — we regularly take over legacy codebases, refactor, and ship new features." },
      { q: "Do you support in-app purchases and subscriptions?", a: "Absolutely. We integrate RevenueCat or native StoreKit/Billing APIs for monetisation." },
    ],
  },

  // ── 4. CUSTOM WEB DEVELOPMENT ─────────────
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    badge: "Bespoke Web Engineering",
    headline: ["Web Experiences", "Engineered for", "Performance"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We design and build <strong>custom web applications</strong> that go beyond templates — scalable architectures, blazing-fast load times, and intuitive interfaces. Our <strong>web development team</strong> partners with businesses across USA, UK, UAE, Australia, and India to ship products that convert.",
    stats: [
      { value: "200+", label: "Websites Launched" },
      { value: "99", label: "Avg PageSpeed Score" },
      { value: "3×", label: "Avg Conversion Lift" },
      { value: "48h", label: "Avg First Prototype" },
    ],
    features: [
      { icon: Monitor, title: "Frontend Engineering", desc: "React, Next.js, and Vue applications with SSR, ISR, and edge rendering for maximum performance." },
      { icon: Server, title: "Backend & APIs", desc: "Node.js, Laravel, and Python backends with RESTful and GraphQL APIs built for scale." },
      { icon: Database, title: "Database Architecture", desc: "PostgreSQL, MySQL, MongoDB, and Redis — schema design, indexing, and query optimisation." },
      { icon: ShieldCheck, title: "Security & Compliance", desc: "OWASP Top 10 hardening, GDPR compliance, SSL/TLS, and role-based access control." },
      { icon: Zap, title: "Performance Optimisation", desc: "Core Web Vitals tuning, lazy loading, CDN configuration, and server-side caching strategies." },
      { icon: RefreshCw, title: "CMS Integration", desc: "Headless CMS (Sanity, Contentful, Strapi) or WordPress for content-heavy sites." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Requirements gathering, competitor analysis, and technical scoping." },
      { step: "02", title: "Architecture", desc: "System design, database schema, and API contract definition." },
      { step: "03", title: "UI/UX Design", desc: "Figma wireframes and high-fidelity mockups, responsive across all breakpoints." },
      { step: "04", title: "Development", desc: "Agile sprints with continuous integration and demo environments." },
      { step: "05", title: "QA & Performance", desc: "Cross-browser testing, Lighthouse audits, and load testing." },
      { step: "06", title: "Launch & Maintenance", desc: "Zero-downtime deployment and ongoing support retainer." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Laravel", "PostgreSQL", "Redis", "AWS", "Vercel"],
    faqs: [
      { q: "How is custom development different from using a template?", a: "Custom development gives you full control over performance, scalability, and UX — no bloat, no licensing limits." },
      { q: "Do you handle hosting and DevOps?", a: "Yes. We configure CI/CD pipelines, containerised deployments, and cloud infrastructure on your preferred provider." },
      { q: "Can you rebuild our existing website without downtime?", a: "Absolutely. We use staged rollouts and feature-flag strategies to migrate live traffic seamlessly." },
      { q: "What CMS options do you recommend?", a: "Sanity or Contentful for headless, WordPress for traditional — we advise based on your editors' workflow." },
    ],
  },

  // ── 5. SOFTWARE DEVELOPMENT ───────────────
  {
    slug: "software-development",
    title: "Software Development",
    badge: "Full-Cycle Engineering",
    headline: ["Software That", "Scales With", "Your Ambition"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "From SaaS platforms to internal tools, we deliver <strong>end-to-end software development</strong> with clean architecture, robust testing, and seamless DevOps. Our <strong>software engineering teams</strong> embed with your organisation to build products that last.",
    stats: [
      { value: "300+", label: "Software Projects" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "60+", label: "Engineers Available" },
      { value: "8yr", label: "Average Team Experience" },
    ],
    features: [
      { icon: Layers, title: "SaaS Product Development", desc: "Multi-tenant architectures with billing, RBAC, and white-labelling — built to scale from day one." },
      { icon: GitBranch, title: "DevOps & CI/CD", desc: "GitHub Actions, GitLab CI, ArgoCD — automated pipelines from commit to production." },
      { icon: Shield, title: "Quality Engineering", desc: "Unit, integration, and E2E test suites with >80% coverage enforced on every PR." },
      { icon: Workflow, title: "Microservices Architecture", desc: "Event-driven systems with Kafka/RabbitMQ, API gateways, and service meshes." },
      { icon: Database, title: "Data Engineering", desc: "ETL pipelines, data warehouses, and real-time streaming with Kafka and Flink." },
      { icon: Users, title: "Team Augmentation", desc: "Embed senior engineers into your team on a flexible sprint-based retainer." },
    ],
    process: [
      { step: "01", title: "Scoping", desc: "Technical requirements, architecture decisions, and sprint planning." },
      { step: "02", title: "Design", desc: "System design documents, ERDs, and API contracts reviewed by your team." },
      { step: "03", title: "Sprint Development", desc: "Two-week agile sprints with daily standups and end-of-sprint demos." },
      { step: "04", title: "Code Review", desc: "Every PR reviewed by a senior engineer with automated linting and security scans." },
      { step: "05", title: "QA", desc: "Manual and automated testing including regression suites." },
      { step: "06", title: "Deployment", desc: "Blue-green or canary deployments with rollback capability." },
    ],
    techStack: ["TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "Terraform"],
    faqs: [
      { q: "Do you build MVPs or only large-scale products?", a: "Both. We have a dedicated MVP track that ships a working product in 4–6 weeks." },
      { q: "How do you ensure code quality?", a: "Mandatory PR reviews, automated linting, unit tests, and quarterly architecture reviews." },
      { q: "Can we scale the team up or down?", a: "Yes — our team augmentation model lets you ramp engineers in or out within a week." },
      { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs before any discovery call and handle IP assignment in every contract." },
    ],
  },

  // ── 6. DIGITAL TRANSFORMATION ─────────────
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    badge: "Enterprise Modernisation",
    headline: ["Transform Your", "Business for the", "Digital Era"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We guide organisations through <strong>end-to-end digital transformation</strong> — from legacy modernisation and cloud migration to process automation and data strategy. Our consultants and engineers work side-by-side with your leadership to deliver measurable ROI.",
    stats: [
      { value: "50+", label: "Enterprises Transformed" },
      { value: "40%", label: "Avg Cost Reduction" },
      { value: "3×", label: "Operational Efficiency Gain" },
      { value: "12mo", label: "Avg Time to ROI" },
    ],
    features: [
      { icon: Cloud, title: "Cloud Migration", desc: "Lift-and-shift, re-platforming, or full re-architecture to AWS, Azure, or GCP." },
      { icon: Workflow, title: "Process Automation", desc: "RPA and AI-driven workflows that eliminate repetitive tasks and reduce error rates." },
      { icon: BarChart2, title: "Data & Analytics Strategy", desc: "Unified data platforms, BI dashboards, and self-serve analytics for every department." },
      { icon: Layers, title: "Legacy Modernisation", desc: "Incremental migration from monoliths and on-premise systems to modern cloud-native stacks." },
      { icon: Users, title: "Change Management", desc: "Training programmes, adoption frameworks, and executive coaching to drive cultural change." },
      { icon: ShieldCheck, title: "Governance & Security", desc: "Zero-trust security models, IAM policies, and compliance frameworks (ISO 27001, SOC 2)." },
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Audit current technology landscape, pain points, and strategic goals." },
      { step: "02", title: "Roadmap", desc: "Prioritised transformation roadmap with quick wins and long-term milestones." },
      { step: "03", title: "Pilot", desc: "Deliver a high-impact pilot project to prove value and build momentum." },
      { step: "04", title: "Scaled Delivery", desc: "Systematic rollout across business units with KPI tracking." },
      { step: "05", title: "Training", desc: "Enablement workshops and documentation for internal teams." },
      { step: "06", title: "Continuous Improvement", desc: "Quarterly reviews and optimisation cycles to sustain gains." },
    ],
    techStack: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Power BI", "Snowflake", "Kafka", "ServiceNow", "SAP"],
    faqs: [
      { q: "Where do we start with digital transformation?", a: "We begin with a free assessment workshop to identify the highest-impact opportunities in your organisation." },
      { q: "How do you handle change resistance?", a: "Our change management practice includes executive alignment, communication planning, and end-user training." },
      { q: "Can you work within regulated industries?", a: "Yes — we have experience in financial services, healthcare, and government, including compliance with HIPAA, PCI-DSS, and GDPR." },
      { q: "Do you offer a fixed-price transformation package?", a: "We offer both T&M and fixed-scope engagements. Most transformations begin with a fixed discovery phase." },
    ],
  },

  // ── 7. DIGITAL MARKETING ──────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    badge: "Growth-Focused Marketing",
    headline: ["Digital Marketing", "That Drives", "Real Revenue"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We deliver <strong>full-funnel digital marketing</strong> — from paid acquisition and SEO to content, email, and conversion optimisation. Our <strong>data-driven marketing team</strong> has generated over $50M in tracked revenue for clients across e-commerce, SaaS, and professional services.",
    stats: [
      { value: "$50M+", label: "Revenue Generated" },
      { value: "3.8", label: "Avg ROAS" },
      { value: "180+", label: "Brands Grown" },
      { value: "60%", label: "Avg CAC Reduction" },
    ],
    features: [
      { icon: Search, title: "SEO & Content Strategy", desc: "Technical SEO, topical authority building, and content calendars that compound traffic over time." },
      { icon: Target, title: "Paid Acquisition", desc: "Google Ads, Meta, LinkedIn, and TikTok campaigns managed for maximum ROAS." },
      { icon: Mail, title: "Email & Lifecycle Marketing", desc: "Klaviyo, HubSpot, and Mailchimp flows that nurture leads and increase LTV." },
      { icon: BarChart2, title: "Analytics & Attribution", desc: "GA4, server-side tagging, and multi-touch attribution so you know exactly what's working." },
      { icon: TrendingUp, title: "Conversion Rate Optimisation", desc: "A/B and multivariate testing on landing pages, checkout flows, and onboarding sequences." },
      { icon: Megaphone, title: "Social Media Marketing", desc: "Platform-native content strategies and community management that build brand equity." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Review existing channels, analytics setup, and competitive landscape." },
      { step: "02", title: "Strategy", desc: "Define ICP, channel mix, messaging framework, and 90-day growth plan." },
      { step: "03", title: "Campaign Build", desc: "Creative production, copy, landing pages, and campaign architecture." },
      { step: "04", title: "Launch", desc: "Controlled launch with daily monitoring and rapid iteration." },
      { step: "05", title: "Optimise", desc: "Weekly performance reviews, bid adjustments, and creative refresh cycles." },
      { step: "06", title: "Report & Scale", desc: "Monthly executive reporting and budget reallocation to winning channels." },
    ],
    techStack: ["Google Ads", "Meta Ads", "GA4", "Klaviyo", "HubSpot", "Semrush", "Ahrefs", "Hotjar", "Optimizely", "Looker Studio"],
    faqs: [
      { q: "How quickly will we see results?", a: "Paid channels typically show traction within 2–4 weeks. SEO compounding results emerge at 3–6 months." },
      { q: "Do you manage creative production?", a: "Yes — our in-house team handles ad creative, landing page design, and video production." },
      { q: "What budget do we need to start?", a: "We work with ad budgets from $5K/month upward, though $15K+ unlocks our full media mix." },
      { q: "How do you measure success?", a: "We align on KPIs at the start — typically ROAS, CAC, MQL volume, and organic traffic growth." },
    ],
  },

  // ── 8. DATA SCIENCE & ANALYTICS ───────────
  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    badge: "Data-Driven Intelligence",
    headline: ["Turn Data Into", "Competitive", "Advantage"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We help organisations unlock the full value of their data through <strong>advanced analytics, machine learning, and business intelligence</strong>. Our <strong>data science team</strong> builds predictive models, unified data platforms, and self-serve dashboards that drive better decisions at every level.",
    stats: [
      { value: "100+", label: "Data Projects Delivered" },
      { value: "85%", label: "Avg Model Accuracy" },
      { value: "10×", label: "Reporting Speed Increase" },
      { value: "30+", label: "BI Dashboards Live" },
    ],
    features: [
      { icon: BrainCircuit, title: "Machine Learning", desc: "Supervised, unsupervised, and reinforcement learning models tailored to your business problem." },
      { icon: BarChart2, title: "Business Intelligence", desc: "Power BI, Tableau, and Looker dashboards giving every team real-time visibility." },
      { icon: Database, title: "Data Engineering", desc: "Modern data stacks with dbt, Snowflake, and Airflow for reliable, scalable pipelines." },
      { icon: TrendingUp, title: "Forecasting & Optimisation", desc: "Demand forecasting, inventory optimisation, and dynamic pricing models." },
      { icon: Search, title: "Data Strategy Consulting", desc: "Data governance, quality frameworks, and organisational data literacy programmes." },
      { icon: Cpu, title: "NLP & Text Analytics", desc: "Sentiment analysis, entity extraction, and document classification at scale." },
    ],
    process: [
      { step: "01", title: "Data Audit", desc: "Inventory existing data sources, quality issues, and access controls." },
      { step: "02", title: "Problem Definition", desc: "Translate business questions into measurable data science objectives." },
      { step: "03", title: "Data Preparation", desc: "ETL pipelines, feature engineering, and dataset versioning." },
      { step: "04", title: "Modelling", desc: "Experimentation, model selection, and hyperparameter tuning." },
      { step: "05", title: "Deployment", desc: "Model serving via API with monitoring for drift and accuracy." },
      { step: "06", title: "Insight Delivery", desc: "Executive dashboards and self-serve analytics for ongoing value." },
    ],
    techStack: ["Python", "R", "Spark", "dbt", "Snowflake", "Airflow", "Power BI", "Tableau", "scikit-learn", "MLflow"],
    faqs: [
      { q: "We have messy data — can you still help?", a: "Yes. Data cleaning and governance is often the first engagement, and we specialise in turning raw data into reliable assets." },
      { q: "Do you build custom dashboards?", a: "Absolutely. We build in Power BI, Tableau, Looker, or custom React-based dashboards depending on your stack." },
      { q: "What's the difference between a data analyst and a data scientist?", a: "We offer both. Analysts focus on historical reporting; scientists build predictive models. Most clients need a blend." },
      { q: "How do you ensure model fairness?", a: "We apply bias detection frameworks and document model cards for every production ML system." },
    ],
  },

  // ── 9. ECOMMERCE DEVELOPMENT ──────────────
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    badge: "Commerce-First Engineering",
    headline: ["E-commerce Stores", "Built to Sell", "at Scale"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>high-converting e-commerce platforms</strong> on Shopify, WooCommerce, and custom headless stacks — engineered for speed, SEO, and seamless checkout experiences. Our <strong>e-commerce development team</strong> has delivered stores generating $100M+ in annual GMV.",
    stats: [
      { value: "$100M+", label: "GMV Powered" },
      { value: "150+", label: "Stores Launched" },
      { value: "2.1s", label: "Avg Page Load Time" },
      { value: "4.2%", label: "Avg Conversion Rate" },
    ],
    features: [
      { icon: ShoppingCart, title: "Custom Storefront Development", desc: "Bespoke Shopify themes, WooCommerce builds, and headless storefronts with Next.js/Hydrogen." },
      { icon: Zap, title: "Performance Optimisation", desc: "Sub-2s load times, image CDN, and Core Web Vitals tuning for maximum SEO and UX." },
      { icon: Link2, title: "Third-Party Integrations", desc: "ERP, PIM, 3PL, payment gateways, and loyalty platform integrations." },
      { icon: BarChart2, title: "Analytics & Attribution", desc: "GA4 enhanced e-commerce, Klaviyo flows, and revenue attribution dashboards." },
      { icon: Globe, title: "Internationalisation", desc: "Multi-currency, multi-language storefronts with localised checkout flows." },
      { icon: Shield, title: "PCI-DSS Compliance", desc: "Secure checkout architecture, tokenised payments, and fraud prevention integrations." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Catalogue your products, payment flows, and integration requirements." },
      { step: "02", title: "Platform Selection", desc: "Shopify, WooCommerce, or headless — we recommend based on scale and budget." },
      { step: "03", title: "Design", desc: "Conversion-focused UI with clear hierarchy, trust signals, and mobile-first layouts." },
      { step: "04", title: "Development", desc: "Theme/storefront build with all integrations and payment provider setup." },
      { step: "05", title: "QA & Performance", desc: "Cross-device checkout testing, load testing, and Lighthouse audits." },
      { step: "06", title: "Launch & Growth", desc: "Store launch, analytics setup, and ongoing CRO retainer." },
    ],
    techStack: ["Shopify", "WooCommerce", "Next.js", "Hydrogen", "Stripe", "Klaviyo", "Algolia", "Contentful", "Sanity", "AWS CloudFront"],
    faqs: [
      { q: "Shopify or WooCommerce — which should we choose?", a: "Shopify for simplicity and speed-to-market; WooCommerce for flexibility and lower transaction fees on high volumes." },
      { q: "Can you migrate our existing store?", a: "Yes — we handle full data migrations including products, orders, customers, and reviews." },
      { q: "Do you offer ongoing CRO support?", a: "Absolutely. We run monthly A/B tests on PDPs, checkout, and cart pages to continuously improve conversion." },
      { q: "Can you build a headless e-commerce site?", a: "Yes. We use Next.js with Shopify Storefront API or WooCommerce REST API for headless builds." },
    ],
  },

  // ── 10. SOCIAL MEDIA MARKETING ────────────
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    badge: "Organic & Paid Social",
    headline: ["Social Media", "Strategies That", "Build Brands"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We craft and execute <strong>platform-native social media strategies</strong> that grow audiences, spark engagement, and drive qualified traffic. From organic content to paid social campaigns, our team manages your brand presence across Instagram, LinkedIn, TikTok, X, and more.",
    stats: [
      { value: "500M+", label: "Impressions Generated" },
      { value: "8×", label: "Avg Engagement Growth" },
      { value: "120+", label: "Brands Managed" },
      { value: "2.5×", label: "Avg Follower Growth" },
    ],
    features: [
      { icon: PenTool, title: "Content Strategy & Creation", desc: "Platform-specific content calendars, copywriting, and creative assets produced in-house." },
      { icon: Target, title: "Paid Social Advertising", desc: "Meta, TikTok, LinkedIn, and Pinterest ad campaigns optimised for CPL and ROAS." },
      { icon: Users, title: "Community Management", desc: "Daily engagement, comment moderation, and DM handling to build loyal communities." },
      { icon: BarChart2, title: "Social Analytics", desc: "Weekly performance reports with insights on reach, engagement, and conversion attribution." },
      { icon: Star, title: "Influencer Partnerships", desc: "Micro and macro influencer outreach, briefing, and campaign management." },
      { icon: TrendingUp, title: "Trend & Competitor Monitoring", desc: "Real-time social listening to capitalise on trends and stay ahead of competitors." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Review existing channels, content performance, and audience demographics." },
      { step: "02", title: "Strategy", desc: "Define brand voice, content pillars, posting cadence, and platform priorities." },
      { step: "03", title: "Content Production", desc: "Monthly content batch — graphics, reels, carousels, and copy." },
      { step: "04", title: "Scheduling & Publishing", desc: "Optimal-time publishing via Later or Sprout Social." },
      { step: "05", title: "Engagement", desc: "Daily community management and proactive engagement." },
      { step: "06", title: "Reporting", desc: "Monthly performance decks with insights and strategy adjustments." },
    ],
    techStack: ["Meta Ads Manager", "TikTok Ads", "Later", "Sprout Social", "Canva Pro", "CapCut", "Hootsuite", "Brandwatch", "Semrush Social", "LinkedIn Campaign Manager"],
    faqs: [
      { q: "Which platforms should we focus on?", a: "It depends on your audience. We recommend starting with 2–3 platforms where your ICP is most active." },
      { q: "Do you produce video content?", a: "Yes — our creative team produces Reels, TikToks, and short-form video ads in-house." },
      { q: "How long before we see follower growth?", a: "Consistent organic growth typically accelerates in month 2–3; paid campaigns drive immediate reach." },
      { q: "Can you manage our existing ad accounts?", a: "Absolutely. We conduct a full audit and take over management within 48 hours." },
    ],
  },

  // ── 11. DIGITAL MARKETING STRATEGY ────────
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    badge: "Strategic Growth Planning",
    headline: ["A Strategy", "That Turns Clicks", "Into Customers"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>full-funnel digital marketing strategies</strong> grounded in data — defining your ICP, positioning, channel mix, and 12-month growth roadmap. Our strategists have helped brands scale from startup to category leader across competitive global markets.",
    stats: [
      { value: "80+", label: "Strategies Delivered" },
      { value: "4.5×", label: "Avg Revenue Multiplier" },
      { value: "90%", label: "Client Retention Rate" },
      { value: "6wk", label: "Strategy Delivery Time" },
    ],
    features: [
      { icon: Target, title: "ICP & Positioning", desc: "Deep audience research to define your ideal customer profile and sharpen your value proposition." },
      { icon: BarChart2, title: "Channel & Budget Planning", desc: "Data-backed channel mix recommendations with budget allocation modelling." },
      { icon: TrendingUp, title: "Funnel Architecture", desc: "Full TOFU-MOFU-BOFU content and campaign mapping aligned to buyer stages." },
      { icon: Search, title: "SEO Strategy", desc: "Keyword universe, topical authority roadmap, and technical SEO baseline." },
      { icon: Megaphone, title: "Brand Messaging Framework", desc: "Messaging hierarchy, tone of voice guide, and campaign themes for the next 12 months." },
      { icon: RefreshCw, title: "Performance Framework", desc: "KPI definitions, reporting cadence, and optimisation trigger thresholds." },
    ],
    process: [
      { step: "01", title: "Discovery Workshops", desc: "Stakeholder interviews, data review, and competitive intelligence gathering." },
      { step: "02", title: "Market Research", desc: "Primary and secondary research to validate assumptions and size the opportunity." },
      { step: "03", title: "Strategy Development", desc: "Draft strategy document with channel recommendations and budget modelling." },
      { step: "04", title: "Stakeholder Review", desc: "Presentation and collaborative refinement with your leadership team." },
      { step: "05", title: "Activation Planning", desc: "Detailed Q1 action plan with owners, timelines, and tooling setup." },
      { step: "06", title: "Quarterly Reviews", desc: "Strategy refresh based on performance data and market changes." },
    ],
    techStack: ["Google Analytics 4", "Semrush", "Ahrefs", "SimilarWeb", "HubSpot", "Looker Studio", "Hotjar", "SparkToro", "Typeform", "Miro"],
    faqs: [
      { q: "What does a strategy engagement deliver?", a: "A comprehensive strategy document including ICP profiles, channel playbook, 12-month roadmap, and a 90-day quick-start plan." },
      { q: "Do you execute the strategy too?", a: "Yes — most clients retain us for both strategy and execution. We can also hand off to your in-house team." },
      { q: "How is this different from a marketing audit?", a: "An audit looks backward at what's happened. A strategy looks forward at what you should do next." },
      { q: "Can you work with our agency partners?", a: "Absolutely. We often act as strategic lead, coordinating with specialist agencies for paid, PR, and creative execution." },
    ],
  },

  // ── 12. CONVERSION RATE OPTIMISATION ──────
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    badge: "CRO & Experimentation",
    headline: ["More Revenue", "From the Traffic", "You Already Have"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "Our <strong>CRO specialists</strong> use behavioural data, user research, and systematic A/B testing to remove friction and increase conversions across your entire funnel. On average, clients see a <strong>30–80% lift in CVR</strong> within 90 days.",
    stats: [
      { value: "52%", label: "Avg CVR Improvement" },
      { value: "500+", label: "Experiments Run" },
      { value: "90d", label: "To First Significant Win" },
      { value: "8×", label: "Avg ROI on CRO Investment" },
    ],
    features: [
      { icon: BarChart2, title: "Heuristic & UX Audit", desc: "Expert review of your funnel against 250+ CRO best practices to identify quick wins." },
      { icon: Users, title: "User Research & Surveys", desc: "Session recordings, heatmaps, and on-site surveys to understand why users drop off." },
      { icon: Zap, title: "A/B & Multivariate Testing", desc: "Hypothesis-driven experiments on landing pages, PDPs, checkout, and onboarding." },
      { icon: Target, title: "Landing Page Optimisation", desc: "Redesigns of key entry points with clear hierarchy, social proof, and compelling CTAs." },
      { icon: ShoppingCart, title: "Checkout Optimisation", desc: "Reduce cart abandonment with streamlined forms, trust signals, and express checkout." },
      { icon: TrendingUp, title: "Personalisation", desc: "Dynamic content and offers tailored to traffic source, device, and user segment." },
    ],
    process: [
      { step: "01", title: "Data Audit", desc: "Review GA4, Hotjar, and funnel analytics to identify leakiest points." },
      { step: "02", title: "Research", desc: "Heatmaps, session recordings, and user surveys to build qualitative insight." },
      { step: "03", title: "Hypothesis Bank", desc: "Prioritised list of test ideas scored by potential impact and implementation effort." },
      { step: "04", title: "Test Design", desc: "Variant design, copy, and development ready for your testing platform." },
      { step: "05", title: "Run Tests", desc: "Statistically rigorous experiments run until 95% significance is reached." },
      { step: "06", title: "Implement & Iterate", desc: "Winning variants shipped and learnings feed next test cycle." },
    ],
    techStack: ["Optimizely", "VWO", "Google Optimize", "Hotjar", "FullStory", "Heap", "GA4", "Unbounce", "Figma", "Segment"],
    faqs: [
      { q: "How much traffic do we need for CRO to work?", a: "We recommend at least 1,000 conversions per month per page to reach statistical significance in a reasonable timeframe." },
      { q: "Do you redesign pages or just tweak copy?", a: "Both. We follow a spectrum from micro-copy changes to full page redesigns, prioritised by projected impact." },
      { q: "How do you pick what to test first?", a: "We use an ICE or PXL framework to score ideas by impact, confidence, and ease — focussing on high-traffic, high-drop-off pages first." },
      { q: "Can CRO work alongside a paid ads campaign?", a: "Absolutely — CRO amplifies paid performance by improving the post-click experience your ad budget is sending traffic to." },
    ],
  },

  // ── 13. INFLUENCER MARKETING ──────────────
  {
    slug: "trusted-influencer-marketing-agency",
    title: "Trusted Influencer Marketing Agency",
    badge: "Creator-Led Growth",
    headline: ["Influencer Campaigns", "That Convert, Not", "Just Impress"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We connect brands with the right creators across Instagram, TikTok, YouTube, and LinkedIn — managing everything from talent identification to campaign analytics. Our <strong>performance-focused influencer marketing</strong> drives measurable sales, not just impressions.",
    stats: [
      { value: "5,000+", label: "Creator Network" },
      { value: "2.1B+", label: "Total Reach" },
      { value: "4.8%", label: "Avg Engagement Rate" },
      { value: "60+", label: "Campaigns Delivered" },
    ],
    features: [
      { icon: Star, title: "Creator Identification", desc: "AI-assisted matching against your ICP — evaluating audience authenticity, niche fit, and past performance." },
      { icon: MessageSquare, title: "Campaign Briefing", desc: "Detailed creative briefs, brand guidelines, and talking points that preserve creator authenticity." },
      { icon: Link2, title: "Contract & Compliance", desc: "FTC-compliant agreements, usage rights negotiation, and exclusivity terms handled end-to-end." },
      { icon: BarChart2, title: "Performance Tracking", desc: "Real-time dashboards tracking views, clicks, conversions, and EMV." },
      { icon: ShoppingCart, title: "Affiliate & Discount Codes", desc: "Trackable links and promo codes to directly attribute revenue to each creator." },
      { icon: RefreshCw, title: "Always-On Programmes", desc: "Long-term ambassador programmes that build sustained brand equity over time." },
    ],
    process: [
      { step: "01", title: "Brief & Goals", desc: "Define campaign objectives, target audience, platforms, and KPIs." },
      { step: "02", title: "Creator Shortlist", desc: "Present a vetted shortlist with audience analytics and rate cards." },
      { step: "03", title: "Outreach & Contracting", desc: "Negotiate rates, timelines, usage rights, and compliance requirements." },
      { step: "04", title: "Content Production", desc: "Creators produce content with feedback loops and brand review." },
      { step: "05", title: "Activation", desc: "Content goes live with tracking links and promo codes active." },
      { step: "06", title: "Reporting", desc: "Post-campaign analysis with ROI attribution and creator performance scoring." },
    ],
    techStack: ["Grin", "Creator.co", "Aspire", "Later Influence", "Traackr", "Upfluence", "TikTok Creator Marketplace", "Instagram Partnerships", "Brandwatch", "Looker Studio"],
    faqs: [
      { q: "Micro or macro influencers — which is better?", a: "Micro-influencers (10K–100K) typically deliver higher engagement and trust; macros deliver scale. We recommend a mix." },
      { q: "How do you ensure brand safety?", a: "We screen all creators against brand safety criteria and review content before publication." },
      { q: "Can you track sales from influencer campaigns?", a: "Yes — we use unique discount codes, UTM links, and pixel-based attribution to tie influencer posts to revenue." },
      { q: "Do you have creators in specific niches?", a: "Our network spans fashion, beauty, tech, fitness, food, finance, B2B SaaS, and more." },
    ],
  },

  // ── 14. SEO ───────────────────────────────
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    badge: "Organic Growth Specialists",
    headline: ["Rank Higher,", "Earn More", "Organic Traffic"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We deliver <strong>technical SEO, content strategy, and link acquisition</strong> that compound into sustained organic growth. Our <strong>SEO team</strong> has taken brands from page 3 to position 1 across competitive verticals including SaaS, e-commerce, finance, and healthcare.",
    stats: [
      { value: "300%", label: "Avg Traffic Growth" },
      { value: "1,200+", label: "Keywords Ranked #1" },
      { value: "90+", label: "Clients Retained" },
      { value: "6mo", label: "Avg Time to Top 3" },
    ],
    features: [
      { icon: Search, title: "Technical SEO", desc: "Crawlability, Core Web Vitals, structured data, and log-file analysis to fix what Google sees." },
      { icon: PenTool, title: "Content Strategy", desc: "Keyword clustering, topical authority mapping, and editorial calendars that fill search intent." },
      { icon: Link2, title: "Link Acquisition", desc: "White-hat digital PR, HARO, and outreach to build domain authority sustainably." },
      { icon: Globe, title: "Local & International SEO", desc: "Google Business Profile optimisation, hreflang implementation, and geo-targeted content." },
      { icon: BarChart2, title: "SEO Reporting", desc: "Monthly rank tracking, traffic attribution, and opportunity forecasting dashboards." },
      { icon: ShoppingCart, title: "E-commerce SEO", desc: "Category page optimisation, faceted navigation handling, and product schema for Shopping." },
    ],
    process: [
      { step: "01", title: "Technical Audit", desc: "Crawl your site to identify indexing issues, speed problems, and structural gaps." },
      { step: "02", title: "Keyword Research", desc: "Build a keyword universe mapped to buyer intent and content gaps." },
      { step: "03", title: "On-Page Optimisation", desc: "Title tags, meta descriptions, headings, and internal linking overhaul." },
      { step: "04", title: "Content Production", desc: "Publish optimised articles, landing pages, and pillar content at scale." },
      { step: "05", title: "Link Building", desc: "Monthly link outreach targeting high-DA, relevant referring domains." },
      { step: "06", title: "Track & Iterate", desc: "Weekly rank monitoring and monthly strategy refinement." },
    ],
    techStack: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "GA4", "Surfer SEO", "Clearscope", "Moz", "BrightEdge", "Looker Studio"],
    faqs: [
      { q: "How long does SEO take?", a: "Most clients see measurable ranking movement in 3–4 months, with significant traffic growth at 6–12 months." },
      { q: "Do you guarantee rankings?", a: "No ethical SEO agency can guarantee specific rankings. We guarantee a rigorous, transparent process with measurable outputs." },
      { q: "Will you write the content too?", a: "Yes — we have an in-house team of SEO writers and a network of niche-specialist contributors." },
      { q: "Can you handle enterprise-scale SEO?", a: "Yes. We use enterprise crawl tools and have experience managing SEO for sites with 500K+ pages." },
    ],
  },

  // ── 15. LEAD GENERATION ───────────────────
  {
    slug: "lead-generation",
    title: "Lead Generation",
    badge: "Pipeline-Focused Growth",
    headline: ["Qualified Leads,", "Delivered to", "Your Pipeline"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build and operate <strong>multi-channel lead generation systems</strong> — combining paid media, outbound, SEO, and marketing automation to fill your pipeline with high-intent prospects. Our team has generated 500,000+ qualified leads for B2B and B2C clients globally.",
    stats: [
      { value: "500K+", label: "Leads Generated" },
      { value: "42%", label: "Avg Lead Quality Improvement" },
      { value: "3×", label: "Avg Pipeline Growth" },
      { value: "30%", label: "Avg CPL Reduction" },
    ],
    features: [
      { icon: Target, title: "Paid Lead Gen", desc: "Google Lead Forms, Meta Lead Ads, and LinkedIn Conversation Ads for immediate pipeline fill." },
      { icon: Mail, title: "Email & Outbound", desc: "Personalised cold outbound sequences with A/B-tested subject lines and follow-up cadences." },
      { icon: Search, title: "SEO Lead Funnels", desc: "Intent-driven landing pages and pillar content that capture leads organically at scale." },
      { icon: Zap, title: "Marketing Automation", desc: "HubSpot and Marketo workflows that nurture leads from MQL to SQL automatically." },
      { icon: BarChart2, title: "Lead Scoring", desc: "Behavioural and demographic scoring models so sales focuses on the hottest prospects." },
      { icon: Users, title: "CRM Integration", desc: "Seamless integration with Salesforce, HubSpot, Pipedrive, or your existing CRM." },
    ],
    process: [
      { step: "01", title: "ICP Definition", desc: "Define ideal customer profiles and lead qualification criteria with your sales team." },
      { step: "02", title: "Channel Planning", desc: "Select highest-potential channels based on your ICP's digital behaviour." },
      { step: "03", title: "Funnel Build", desc: "Landing pages, lead magnets, forms, and CRM integration set up end-to-end." },
      { step: "04", title: "Campaign Launch", desc: "Paid campaigns and outbound sequences activated with tracking in place." },
      { step: "05", title: "Nurture Sequences", desc: "Automated email and retargeting workflows move leads down the funnel." },
      { step: "06", title: "Optimise", desc: "Weekly CPL review and funnel optimisation to continuously lower cost per qualified lead." },
    ],
    techStack: ["HubSpot", "Salesforce", "Google Ads", "LinkedIn Ads", "Instantly", "Apollo.io", "Clay", "Unbounce", "Zapier", "Segment"],
    faqs: [
      { q: "B2B or B2C — do you cover both?", a: "Yes. Our B2B lead gen uses LinkedIn and outbound; B2C leans on paid social, SEO, and email." },
      { q: "How do you define a qualified lead?", a: "We work with your sales team to agree MQL and SQL criteria before the campaign launches." },
      { q: "Do you handle the CRM setup?", a: "Yes — we configure pipelines, lead stages, and automated notifications in your CRM." },
      { q: "What's a realistic CPL to expect?", a: "It varies widely by industry. We provide CPL benchmarks during the strategy phase and work to beat them." },
    ],
  },

  // ── 16. BRAND MANAGEMENT ──────────────────
  {
    slug: "brand-management",
    title: "Brand Management",
    badge: "Brand Strategy & Identity",
    headline: ["Brands Built for", "Longevity and", "Recognition"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We help companies define, build, and protect their brand across every touchpoint. From <strong>brand strategy and visual identity</strong> to guidelines and brand governance, our team ensures your brand is consistent, compelling, and commercially powerful.",
    stats: [
      { value: "70+", label: "Brands Built" },
      { value: "92%", label: "Brand Recall Improvement" },
      { value: "3×", label: "Avg Perceived Value Lift" },
      { value: "48h", label: "First Concept Delivery" },
    ],
    features: [
      { icon: Palette, title: "Brand Strategy", desc: "Positioning, purpose, values, and personality frameworks that differentiate your brand in market." },
      { icon: PenTool, title: "Visual Identity", desc: "Logo, typography, colour system, and iconography designed for versatility and memorability." },
      { icon: Globe, title: "Brand Guidelines", desc: "Comprehensive brand books covering voice, visual standards, and usage rules across all media." },
      { icon: MessageSquare, title: "Brand Voice & Tone", desc: "Copywriting frameworks that make your brand instantly recognisable across all communications." },
      { icon: RefreshCw, title: "Rebranding", desc: "Strategic refreshes and full rebrands that evolve your identity without losing brand equity." },
      { icon: ShieldCheck, title: "Brand Governance", desc: "Processes and tools to ensure brand consistency across teams, agencies, and global markets." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Brand audit, competitive analysis, and stakeholder interviews." },
      { step: "02", title: "Strategy", desc: "Positioning statement, brand architecture, and personality definition." },
      { step: "03", title: "Identity Design", desc: "Concept exploration, refinement, and final identity system delivery." },
      { step: "04", title: "Copywriting", desc: "Taglines, boilerplate, brand voice guide, and key messages." },
      { step: "05", title: "Brand Book", desc: "Comprehensive guidelines document and digital asset library." },
      { step: "06", title: "Rollout Support", desc: "Templates, training, and governance frameworks for consistent activation." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Brandkit", "Frontify", "Bynder", "Lottie", "Framer", "Notion", "Canva for Teams"],
    faqs: [
      { q: "How long does a full rebrand take?", a: "A comprehensive rebrand typically takes 8–12 weeks from discovery to final brand book delivery." },
      { q: "Do you offer logo design only?", a: "Yes, though we recommend at minimum a logo + colour + typography system for consistent application." },
      { q: "Can you help us apply the brand across marketing materials?", a: "Absolutely — we offer a rollout package covering key collateral, social templates, and presentation decks." },
      { q: "Do you trademark the identity?", a: "We don't provide legal services, but we conduct conflict checks and advise on trademark filing as part of the process." },
    ],
  },

  // ── 17. ECOMMERCE SEO ─────────────────────
  {
    slug: "specialized-ecommerce-seo-services",
    title: "Specialized eCommerce SEO Services",
    badge: "E-commerce Organic Growth",
    headline: ["E-commerce SEO", "That Fills Your", "Cart Organically"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We specialise in <strong>e-commerce SEO</strong> for Shopify, WooCommerce, and custom platforms — driving organic product discovery, category traffic, and revenue without ad spend. Our team has generated $20M+ in organic e-commerce revenue for online retailers globally.",
    stats: [
      { value: "$20M+", label: "Organic Revenue Attributed" },
      { value: "250%", label: "Avg Organic Traffic Growth" },
      { value: "80+", label: "E-commerce Clients" },
      { value: "5×", label: "Avg ROI on SEO Investment" },
    ],
    features: [
      { icon: ShoppingCart, title: "Category Page SEO", desc: "Optimised category architecture, copy, and structured data for maximum category-level ranking power." },
      { icon: Search, title: "Product Page Optimisation", desc: "Schema markup, unique descriptions, and UGC strategies to rank product pages at scale." },
      { icon: Link2, title: "Faceted Navigation Management", desc: "Canonical and noindex strategies to resolve crawl budget waste from filter URLs." },
      { icon: Globe, title: "Google Shopping SEO", desc: "Structured data and feed optimisation to appear in Shopping results without paid bids." },
      { icon: TrendingUp, title: "Seasonal SEO Campaigns", desc: "Content and link campaigns timed to peak demand periods — Black Friday, Christmas, and more." },
      { icon: BarChart2, title: "E-commerce Analytics", desc: "GA4 enhanced e-commerce reporting mapping organic sessions to SKU-level revenue." },
    ],
    process: [
      { step: "01", title: "Technical Audit", desc: "Identify crawl, indexing, and site architecture issues specific to e-commerce platforms." },
      { step: "02", title: "Keyword Mapping", desc: "Map commercial and transactional keywords to the right pages in your catalogue." },
      { step: "03", title: "On-Page Optimisation", desc: "Category and product page rewrites, schema, and internal linking improvements." },
      { step: "04", title: "Content Hub", desc: "Blog and buying-guide content to capture informational queries and build category authority." },
      { step: "05", title: "Link Building", desc: "Product PR, gift-guide outreach, and supplier link acquisition." },
      { step: "06", title: "Revenue Reporting", desc: "Monthly organic revenue attribution and ranking progress reports." },
    ],
    techStack: ["Screaming Frog", "Ahrefs", "Semrush", "Google Search Console", "Shopify", "WooCommerce", "Surfer SEO", "Schema App", "GA4", "Looker Studio"],
    faqs: [
      { q: "Can you handle large catalogues with thousands of products?", a: "Yes — we use templated optimisation and automation scripts to apply SEO improvements at scale." },
      { q: "How do you handle out-of-stock products?", a: "We advise on canonical, redirect, and content strategies to preserve ranking equity for discontinued products." },
      { q: "Do you optimise for Amazon too?", a: "We focus on Google SEO. For Amazon, a specialised marketplace SEO service is recommended." },
      { q: "Can SEO reduce our reliance on paid ads?", a: "That's the goal. Most clients see a meaningful shift in organic vs paid revenue mix within 9–12 months." },
    ],
  },

  // ── 18. GOOGLE ADS ────────────────────────
  {
    slug: "google-ad-campaigns",
    title: "Google Ad Campaigns",
    badge: "Paid Search Specialists",
    headline: ["Google Ads That", "Maximise Return", "on Every Dollar"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "Our certified Google Ads specialists manage <strong>Search, Performance Max, Shopping, Display, and YouTube campaigns</strong> engineered for maximum ROAS. We manage $5M+ in annual ad spend across industries with an average 4.2× return on ad spend.",
    stats: [
      { value: "$5M+", label: "Ad Spend Managed" },
      { value: "4.2", label: "Avg ROAS" },
      { value: "35%", label: "Avg CPC Reduction" },
      { value: "150+", label: "Accounts Managed" },
    ],
    features: [
      { icon: Search, title: "Search Campaign Management", desc: "Granular keyword strategy, negative keyword sculpting, and ad copy A/B testing for quality score optimisation." },
      { icon: ShoppingCart, title: "Google Shopping & PMax", desc: "Feed optimisation, bidding strategy, and product group segmentation for e-commerce ROAS." },
      { icon: Monitor, title: "Display & Remarketing", desc: "Audience-based display and dynamic remarketing to recover lost traffic and cross-sell." },
      { icon: BarChart2, title: "Conversion Tracking", desc: "Server-side and enhanced conversion setup to accurately attribute revenue to campaigns." },
      { icon: Target, title: "Audience Targeting", desc: "Custom intent, in-market, and Customer Match audiences to reach the highest-value users." },
      { icon: TrendingUp, title: "Bid Strategy Optimisation", desc: "Smart bidding configuration and Target CPA/ROAS strategy tuning based on actual conversion data." },
    ],
    process: [
      { step: "01", title: "Account Audit", desc: "Comprehensive review of existing campaigns, quality scores, and wasted spend." },
      { step: "02", title: "Strategy", desc: "Campaign architecture, keyword research, and budget allocation recommendation." },
      { step: "03", title: "Build", desc: "Campaign setup, ad group structure, copy creation, and conversion tracking verification." },
      { step: "04", title: "Launch", desc: "Controlled launch with daily monitoring and rapid optimisation in week 1." },
      { step: "05", title: "Optimise", desc: "Weekly performance reviews, bid adjustments, and creative refresh." },
      { step: "06", title: "Report", desc: "Monthly ROAS reports with channel attribution and budget recommendations." },
    ],
    techStack: ["Google Ads", "Google Merchant Centre", "GA4", "Tag Manager", "Looker Studio", "Search Ads 360", "Optmyzr", "Semrush", "Shopify", "WooCommerce"],
    faqs: [
      { q: "What's the minimum budget for Google Ads?", a: "We recommend a minimum of $3,000/month in ad spend for Search, plus our management fee." },
      { q: "How quickly can we expect results?", a: "Initial data typically flows within the first 2 weeks; ROAS optimisation matures over 6–8 weeks." },
      { q: "Do you work with e-commerce and lead gen clients?", a: "Yes — our team has specialists for both shopping/PMax campaigns and lead-gen Search campaigns." },
      { q: "Can you take over an existing Google Ads account?", a: "Absolutely. We conduct a full audit, share findings, and present a restructure plan before making changes." },
    ],
  },

  // ── 19. CONTENT MARKETING ─────────────────
  {
    slug: "content-marketing",
    title: "Content Marketing",
    badge: "Content That Compounds",
    headline: ["Content That", "Earns Trust and", "Drives Revenue"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We create and distribute <strong>high-quality content</strong> — articles, whitepapers, case studies, videos, and interactive tools — that builds authority, drives organic traffic, and generates leads. Our content strategies are built on search intent data and audience insight.",
    stats: [
      { value: "10,000+", label: "Articles Published" },
      { value: "8×", label: "Avg Organic Traffic Lift" },
      { value: "200+", label: "Content Programmes" },
      { value: "65%", label: "Avg Increase in Time-on-Site" },
    ],
    features: [
      { icon: PenTool, title: "Editorial Strategy", desc: "Topical authority maps, content calendars, and keyword-to-content matrices aligned to your funnel." },
      { icon: FileCode, title: "Long-Form Content", desc: "In-depth articles, ultimate guides, and whitepapers that rank and convert." },
      { icon: Monitor, title: "Video & Multimedia", desc: "Explainer videos, webinar recordings, and interactive tools repurposed across channels." },
      { icon: Link2, title: "Content Distribution", desc: "Multi-channel syndication, newsletter, LinkedIn, and social repurposing amplifying every piece." },
      { icon: BarChart2, title: "Content Analytics", desc: "Traffic, engagement, and lead attribution per content piece to identify what to produce more of." },
      { icon: Search, title: "SEO-First Writing", desc: "Every piece optimised for target keywords, E-E-A-T signals, and featured snippet capture." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Review existing content performance and identify cannibalistion and gap opportunities." },
      { step: "02", title: "Strategy", desc: "Topical cluster planning, persona alignment, and editorial calendar production." },
      { step: "03", title: "Briefing", desc: "Detailed briefs with keyword targets, SERP analysis, and word count guidance for every piece." },
      { step: "04", title: "Production", desc: "Expert writers produce content; editors review for quality and SEO compliance." },
      { step: "05", title: "Publishing", desc: "CMS upload with proper schema, internal linking, and meta data." },
      { step: "06", title: "Promote & Measure", desc: "Distribution across channels and monthly performance reporting." },
    ],
    techStack: ["Surfer SEO", "Clearscope", "Semrush", "Ahrefs", "WordPress", "Webflow", "HubSpot", "Canva", "Descript", "Notion"],
    faqs: [
      { q: "How many articles do you produce per month?", a: "Packages range from 4 to 20+ pieces per month depending on your budget and growth targets." },
      { q: "Do your writers have subject-matter expertise?", a: "Yes — we match briefs to writers with proven expertise in your vertical." },
      { q: "Do you handle content promotion?", a: "Yes — every piece is promoted via social, newsletter, and outreach as part of our full-service packages." },
      { q: "Can we repurpose existing content?", a: "Absolutely. Content refreshes and repurposing are often higher ROI than producing net-new pieces." },
    ],
  },

  // ── 20. PAID ADVERTISING ──────────────────
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    badge: "Performance Media Buying",
    headline: ["Paid Ads That", "Scale Revenue", "Predictably"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We manage <strong>omnichannel paid advertising</strong> across Google, Meta, TikTok, LinkedIn, YouTube, and Amazon — building data-driven media strategies that scale revenue without sacrificing margin. Our team manages $8M+ in annual ad spend.",
    stats: [
      { value: "$8M+", label: "Annual Spend Managed" },
      { value: "4.5×", label: "Avg blended ROAS" },
      { value: "200+", label: "Campaigns Active" },
      { value: "28%", label: "Avg CPA Reduction" },
    ],
    features: [
      { icon: Target, title: "Media Strategy", desc: "Channel attribution modelling and budget allocation across full-funnel paid channels." },
      { icon: Monitor, title: "Creative Strategy", desc: "Ad creative direction, copy testing, and UGC production to combat creative fatigue." },
      { icon: BarChart2, title: "Cross-Channel Analytics", desc: "Unified reporting across platforms with incrementality testing and blended ROAS." },
      { icon: ShoppingCart, title: "E-commerce Paid Media", desc: "Shopping, PMax, and DPA campaigns with full-funnel retargeting for D2C brands." },
      { icon: Users, title: "B2B Lead Gen", desc: "LinkedIn and Google demand-gen campaigns optimised for CPL and pipeline velocity." },
      { icon: RefreshCw, title: "Programmatic Display", desc: "DV360 and The Trade Desk for brand awareness and retargeting at competitive CPMs." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Review all active accounts, creative assets, and attribution setup." },
      { step: "02", title: "Strategy", desc: "Channel mix, audience strategy, and creative brief development." },
      { step: "03", title: "Creative Production", desc: "Ad creative, copy variants, and landing page alignment." },
      { step: "04", title: "Launch", desc: "Campaigns launched with controlled spend ramp-up and daily monitoring." },
      { step: "05", title: "Optimise", desc: "Creative rotation, bid adjustments, and audience pruning on a weekly cycle." },
      { step: "06", title: "Report & Scale", desc: "Monthly reporting and budget reallocation to best-performing channels and creatives." },
    ],
    techStack: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Amazon Ads", "DV360", "GA4", "Triple Whale", "Northbeam", "Segment"],
    faqs: [
      { q: "What is the minimum ad budget you work with?", a: "We work with clients spending from $10K/month across all channels." },
      { q: "Do you produce ad creatives?", a: "Yes — our in-house creative team produces static, video, and UGC-style ad creatives." },
      { q: "How do you attribute conversions across channels?", a: "We implement data-driven attribution in GA4 and layer in incrementality testing for major budget decisions." },
      { q: "Can you manage Amazon Ads as well?", a: "Yes — we manage Sponsored Products, Sponsored Brands, and DSP campaigns on Amazon." },
    ],
  },

  // ── 21. iOS APP DEVELOPMENT ───────────────
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    badge: "Apple Platform Specialists",
    headline: ["iOS Apps That", "Set the Standard", "on the App Store"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>native and cross-platform iOS applications</strong> using Swift, SwiftUI, and React Native — polished to Apple's Human Interface Guidelines and optimised for App Store success. Our iOS team has shipped 60+ apps with an average rating of 4.8★.",
    stats: [
      { value: "60+", label: "iOS Apps Shipped" },
      { value: "4.8★", label: "Avg App Store Rating" },
      { value: "5M+", label: "iPhone Users Reached" },
      { value: "98%", label: "First-Submission Approval Rate" },
    ],
    features: [
      { icon: Smartphone, title: "Native Swift Development", desc: "Pure Swift and SwiftUI for performance-critical apps that leverage the latest iOS APIs." },
      { icon: Zap, title: "React Native iOS", desc: "Cross-platform iOS apps with near-native performance sharing code with your Android version." },
      { icon: Palette, title: "UI/UX to HIG Standards", desc: "Interfaces that feel unmistakably iOS — haptics, Dynamic Type, Dark Mode, and fluid transitions." },
      { icon: ShieldCheck, title: "App Security", desc: "Keychain, Face ID/Touch ID, App Transport Security, and data encryption best practices." },
      { icon: Cloud, title: "Apple Ecosystem Integration", desc: "iCloud, Sign in with Apple, StoreKit, ARKit, HealthKit, and Core ML integrations." },
      { icon: BarChart2, title: "App Store Optimisation", desc: "Keyword optimisation, screenshots, and preview video to maximise organic installs." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Define user flows, platform features to leverage, and target iOS versions." },
      { step: "02", title: "Design", desc: "HIG-compliant Figma designs with interaction specifications and asset export." },
      { step: "03", title: "Development", desc: "Xcode development with code review and TestFlight builds every sprint." },
      { step: "04", title: "QA", desc: "Testing on physical iPhone and iPad devices across target iOS versions." },
      { step: "05", title: "App Store Review", desc: "Submission management with pre-screening to avoid guideline rejections." },
      { step: "06", title: "Post-Launch", desc: "Crash monitoring via Sentry, update releases, and App Store rating management." },
    ],
    techStack: ["Swift", "SwiftUI", "UIKit", "React Native", "Xcode", "TestFlight", "Firebase", "CoreData", "StoreKit", "Fastlane"],
    faqs: [
      { q: "Swift or React Native for iOS?", a: "Swift for complex, performance-sensitive apps; React Native when you also need an Android version." },
      { q: "Will the app support older iPhones?", a: "We define minimum iOS version during scoping — typically iOS 15+ to cover 95%+ of active devices." },
      { q: "Do you handle in-app purchases?", a: "Yes — we implement StoreKit 2 for subscriptions and one-time purchases with receipt validation." },
      { q: "Can you add a feature to our existing iOS app?", a: "Yes — we're experienced in taking over codebases, adding features, and modernising legacy Objective-C." },
    ],
  },

  // ── 22. ANDROID APP DEVELOPMENT ───────────
  {
    slug: "android-app-development",
    title: "Android App Development",
    badge: "Android & Play Store Experts",
    headline: ["Android Apps", "Built for a", "Billion Devices"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We develop <strong>native Kotlin and cross-platform Android apps</strong> following Material You design principles — tested across OEM devices, optimised for Play Store visibility, and built to handle the fragmentation of the Android ecosystem.",
    stats: [
      { value: "70+", label: "Android Apps Shipped" },
      { value: "4.7★", label: "Avg Play Store Rating" },
      { value: "8M+", label: "Android Users Reached" },
      { value: "50+", label: "OEM Devices Tested" },
    ],
    features: [
      { icon: Smartphone, title: "Native Kotlin Development", desc: "Jetpack Compose and Kotlin for modern, maintainable Android apps with full Play Services access." },
      { icon: Zap, title: "React Native Android", desc: "Cross-platform Android apps sharing a single codebase with your iOS version." },
      { icon: Palette, title: "Material You Design", desc: "Dynamic colour, adaptive layouts, and motion that feels native to Android 12+." },
      { icon: ShieldCheck, title: "Security & Privacy", desc: "Android Keystore, biometric APIs, Network Security Config, and Play Integrity API." },
      { icon: Cloud, title: "Firebase & Google APIs", desc: "Push notifications, Crashlytics, Analytics, Maps, and ML Kit integrations." },
      { icon: Settings, title: "Play Store Submission", desc: "AAB builds, Play Console setup, content rating, and closed/open testing tracks management." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Target Android versions, device matrix, and Google Play policy requirements." },
      { step: "02", title: "Design", desc: "Material You Figma screens with adaptive layouts for phone and tablet." },
      { step: "03", title: "Development", desc: "Android Studio development with Compose and continuous internal test track builds." },
      { step: "04", title: "Device QA", desc: "Testing across Samsung, OnePlus, Pixel, Xiaomi, and other major OEMs." },
      { step: "05", title: "Play Store Review", desc: "Submission with pre-screening to avoid policy violations." },
      { step: "06", title: "Post-Launch", desc: "Crashlytics monitoring, staged rollouts, and ANR/crash resolution." },
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "React Native", "Firebase", "Hilt", "Retrofit", "Room", "Play Console", "Fastlane"],
    faqs: [
      { q: "How do you handle Android fragmentation?", a: "We define a device test matrix and use Firebase Test Lab to catch OEM-specific issues before release." },
      { q: "Do you support Android tablets?", a: "Yes — we build adaptive layouts targeting both phone and tablet form factors." },
      { q: "Can you publish the app under our company account?", a: "Yes — we manage the entire submission process on your Play Console account." },
      { q: "Do you optimise for Play Store search?", a: "Yes — we include Play Store ASO as part of every launch, covering keywords, screenshots, and descriptions." },
    ],
  },

  // ── 23. WEB APP DEVELOPMENT ───────────────
  {
    slug: "web-app-development",
    title: "Web App Development",
    badge: "SaaS & Web Application Experts",
    headline: ["Web Applications", "Your Users Will", "Love to Use"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We architect and build <strong>complex web applications</strong> — SaaS platforms, internal tools, and customer portals — with React/Next.js frontends, robust APIs, and scalable cloud infrastructure. Our web app team has shipped products used by 1M+ end users.",
    stats: [
      { value: "100+", label: "Web Apps Launched" },
      { value: "1M+", label: "End Users Served" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "4wk", label: "MVP Delivery" },
    ],
    features: [
      { icon: Monitor, title: "SaaS Product Development", desc: "Multi-tenant architecture, subscription billing with Stripe, and role-based access control." },
      { icon: Zap, title: "Real-Time Features", desc: "WebSocket, Server-Sent Events, and Supabase Realtime for live dashboards and collaboration." },
      { icon: Shield, title: "Auth & Identity", desc: "OAuth2, SSO (SAML/OIDC), MFA, and enterprise directory integrations with Auth0 or Clerk." },
      { icon: Database, title: "API Development", desc: "REST and GraphQL APIs with OpenAPI documentation, rate limiting, and versioning." },
      { icon: Cloud, title: "Cloud-Native Architecture", desc: "Serverless, containerised, or hybrid deployments on AWS, GCP, or Vercel/Railway." },
      { icon: BarChart2, title: "Analytics Integration", desc: "Product analytics with Mixpanel, PostHog, or Amplitude wired to user actions." },
    ],
    process: [
      { step: "01", title: "Product Discovery", desc: "User story mapping, technical scoping, and architecture decision records." },
      { step: "02", title: "Design", desc: "Component library, information architecture, and interactive prototypes." },
      { step: "03", title: "MVP Build", desc: "Core feature set shipped in 4–6 weeks with CI/CD pipeline in place." },
      { step: "04", title: "Beta Testing", desc: "Closed beta with real users and structured feedback loops." },
      { step: "05", title: "Scale", desc: "Performance optimisation, feature expansion, and infrastructure scaling." },
      { step: "06", title: "Operations", desc: "Ongoing maintenance, feature development retainer, and 24/7 uptime monitoring." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "Stripe", "Auth0", "AWS"],
    faqs: [
      { q: "How long does it take to build an MVP web app?", a: "Most MVPs are delivered in 4–6 weeks. We scope tightly to keep the first release lean and shippable." },
      { q: "Do you build multi-tenant SaaS?", a: "Yes — multi-tenancy, workspace isolation, and subscription management are core to our SaaS practice." },
      { q: "Can you integrate with our existing systems?", a: "Absolutely — REST APIs, webhooks, and Zapier/Make integrations are standard in every project." },
      { q: "Do you provide ongoing product development after launch?", a: "Yes — most clients retain us on a sprint-based retainer for continued feature development." },
    ],
  },

  // ── 24. WORDPRESS DEVELOPMENT ─────────────
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    badge: "WordPress Specialists",
    headline: ["WordPress Sites", "Built Fast,", "Built Right"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>custom WordPress themes, plugins, and WooCommerce stores</strong> — performant, secure, and easy to manage. From corporate websites to complex membership platforms, our WordPress team delivers production-ready sites that score 90+ on PageSpeed.",
    stats: [
      { value: "250+", label: "WordPress Sites Built" },
      { value: "90+", label: "Avg PageSpeed Score" },
      { value: "50+", label: "Custom Plugins Developed" },
      { value: "99.9%", label: "Uptime Achieved" },
    ],
    features: [
      { icon: Palette, title: "Custom Theme Development", desc: "Pixel-perfect themes built from Figma designs — no page-builder bloat, pure custom code." },
      { icon: FileCode, title: "Plugin Development", desc: "Custom WordPress plugins for bespoke functionality not available in the plugin ecosystem." },
      { icon: ShoppingCart, title: "WooCommerce Development", desc: "Custom WooCommerce stores with bespoke checkout flows, shipping rules, and payment gateways." },
      { icon: Zap, title: "Performance Optimisation", desc: "WP Rocket, object caching, CDN integration, and image compression for 90+ PageSpeed scores." },
      { icon: ShieldCheck, title: "Security Hardening", desc: "Wordfence, login protection, file permission hardening, and regular vulnerability scanning." },
      { icon: RefreshCw, title: "Migrations & Upgrades", desc: "From any CMS to WordPress, or WordPress version upgrades with zero data loss." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Content audit, plugin requirements, and hosting environment assessment." },
      { step: "02", title: "Design", desc: "Figma designs or Elementor/Bricks mockups reviewed by stakeholders." },
      { step: "03", title: "Development", desc: "Theme and plugin development on a staging environment." },
      { step: "04", title: "Content Migration", desc: "Pages, posts, media, and ACF data migrated to the new site." },
      { step: "05", title: "QA & Speed", desc: "Cross-browser QA and PageSpeed optimisation before launch." },
      { step: "06", title: "Launch & Support", desc: "DNS cutover and ongoing maintenance retainer." },
    ],
    techStack: ["WordPress", "WooCommerce", "ACF", "Custom Post Types", "Elementor Pro", "WP Rocket", "Wordfence", "PHP", "MySQL", "Cloudflare"],
    faqs: [
      { q: "Will I be able to edit the site myself?", a: "Yes — we use ACF and a user-friendly admin setup so your team can manage content without developer help." },
      { q: "How do you ensure the site is fast?", a: "We configure WP Rocket, serve images via CDN, and tune database and server settings for sub-2s load times." },
      { q: "Can you build custom plugins?", a: "Absolutely — from simple shortcodes to complex CPT-driven applications and REST API integrations." },
      { q: "Do you handle WordPress hosting?", a: "We recommend and configure managed WordPress hosting on Kinsta, WP Engine, or Cloudways." },
    ],
  },

  // ── 25. WEBSITE DEVELOPMENT ───────────────
  {
    slug: "website-development",
    title: "Website Development",
    badge: "Full-Stack Web Delivery",
    headline: ["Websites That", "Work Hard for", "Your Business"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "From landing pages to multi-thousand-page corporate sites, we deliver <strong>high-performance websites</strong> built on the right technology for your goals — WordPress, Next.js, Webflow, or fully custom. Every site we build is fast, accessible, and conversion-optimised.",
    stats: [
      { value: "300+", label: "Websites Delivered" },
      { value: "2.1s", label: "Avg Load Time" },
      { value: "95+", label: "Avg Accessibility Score" },
      { value: "100%", label: "Mobile-First Builds" },
    ],
    features: [
      { icon: Globe, title: "Responsive Design", desc: "Pixel-perfect across desktop, tablet, and mobile with a mobile-first development approach." },
      { icon: Zap, title: "Performance Engineering", desc: "Edge caching, image optimisation, code splitting, and Core Web Vitals tuning." },
      { icon: Search, title: "Technical SEO", desc: "Clean URL structures, schema markup, sitemap generation, and canonical implementation." },
      { icon: ShieldCheck, title: "Security & GDPR", desc: "SSL, GDPR-compliant cookie consent, form security, and DDoS protection." },
      { icon: RefreshCw, title: "CMS & Easy Editing", desc: "Content management setup so your team can make updates without developer help." },
      { icon: BarChart2, title: "Analytics Setup", desc: "GA4, Search Console, and heatmap tracking configured from day one." },
    ],
    process: [
      { step: "01", title: "Brief & Scope", desc: "Goals, sitemap, technology recommendation, and timeline agreement." },
      { step: "02", title: "Design", desc: "Responsive mockups reviewed and signed off before development begins." },
      { step: "03", title: "Development", desc: "Build on staging with weekly updates to a preview link." },
      { step: "04", title: "Content", desc: "Content population and imagery sourcing or optimisation." },
      { step: "05", title: "QA", desc: "Multi-browser, multi-device testing and accessibility audit." },
      { step: "06", title: "Launch", desc: "DNS migration, analytics verification, and post-launch monitoring." },
    ],
    techStack: ["Next.js", "WordPress", "Webflow", "Tailwind CSS", "TypeScript", "Sanity", "Cloudflare", "Vercel", "AWS S3", "GA4"],
    faqs: [
      { q: "Which platform should we use?", a: "We recommend WordPress for content-heavy sites, Next.js for high-performance web apps, and Webflow for design-led marketing sites." },
      { q: "Do you provide copywriting?", a: "We have in-house content writers who can produce all website copy or work from your existing materials." },
      { q: "How long does a standard website take?", a: "A typical 10–15 page website takes 4–6 weeks from brief to launch." },
      { q: "What happens after launch?", a: "We offer a maintenance retainer covering updates, security patches, and content changes." },
    ],
  },

  // ── 26. REACT.JS DEVELOPMENT ──────────────
  {
    slug: "react-js-development",
    title: "React.js Development",
    badge: "React Specialists",
    headline: ["React Applications", "Built for Speed", "and Scale"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "Our <strong>React.js development team</strong> builds complex SPAs, micro-frontends, and component libraries — with TypeScript, modern state management, and performance as a first-class concern. We've built React UIs handling millions of monthly active users.",
    stats: [
      { value: "150+", label: "React Apps Built" },
      { value: "40ms", label: "Avg First Contentful Paint" },
      { value: "100%", label: "TypeScript Coverage" },
      { value: "80%+", label: "Test Coverage Standard" },
    ],
    features: [
      { icon: Code2, title: "Component Architecture", desc: "Atomic design systems and reusable component libraries built with Storybook and Tailwind." },
      { icon: Zap, title: "Performance Optimisation", desc: "Code splitting, memoisation, virtual scrolling, and React Profiler-driven optimisation." },
      { icon: Database, title: "State Management", desc: "Redux Toolkit, Zustand, Jotai, or React Query — chosen to match your app's complexity." },
      { icon: Shield, title: "Testing", desc: "Jest, React Testing Library, and Playwright end-to-end test suites." },
      { icon: Link2, title: "API Integration", desc: "REST, GraphQL (Apollo/urql), and WebSocket integrations with full error boundary coverage." },
      { icon: RefreshCw, title: "Micro-Frontend Architecture", desc: "Module Federation for large-scale apps decomposed into independently deployable frontend modules." },
    ],
    process: [
      { step: "01", title: "Architecture Review", desc: "Choose routing, state, styling, and data-fetching patterns before a line is written." },
      { step: "02", title: "Design System", desc: "Token-based design system with a Storybook component library established first." },
      { step: "03", title: "Feature Development", desc: "Agile sprints with feature branches, PR reviews, and Chromatic visual regression." },
      { step: "04", title: "Performance Audit", desc: "Lighthouse and React Profiler audit at sprint milestones." },
      { step: "05", title: "Testing", desc: "Unit, integration, and E2E test coverage built alongside features." },
      { step: "06", title: "Deployment", desc: "CI/CD to Vercel, Netlify, or AWS CloudFront with preview deployments per PR." },
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Redux Toolkit", "React Query", "Storybook", "Jest", "Playwright", "Vercel"],
    faqs: [
      { q: "React or Next.js — which do we need?", a: "React SPA for fully client-side apps; Next.js when you need SSR, SEO, or API routes." },
      { q: "Do you build design systems?", a: "Yes — we build token-based design systems with Storybook documentation for your component library." },
      { q: "Can you optimise our existing slow React app?", a: "Absolutely. Performance audits and re-architecture are a core offering for legacy React codebases." },
      { q: "Do you work with micro-frontend architectures?", a: "Yes — we've implemented Module Federation setups for large enterprise frontend platforms." },
    ],
  },

  // ── 27. NEXT.JS DEVELOPMENT ───────────────
  {
    slug: "next-js-development",
    title: "Next.js Development",
    badge: "Next.js Full-Stack Experts",
    headline: ["Next.js Apps", "That Perform,", "Rank, and Scale"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build production-grade <strong>Next.js applications</strong> leveraging the App Router, React Server Components, and edge rendering for exceptional Core Web Vitals and developer experience. From marketing sites to full-stack SaaS platforms — we ship Next.js products that perform.",
    stats: [
      { value: "100+", label: "Next.js Projects" },
      { value: "100", label: "Avg Lighthouse Score" },
      { value: "50ms", label: "Avg TTFB on Edge" },
      { value: "99.99%", label: "Uptime Achieved" },
    ],
    features: [
      { icon: Zap, title: "App Router & RSC", desc: "Server Components, Streaming, and Suspense for lightning-fast, SEO-friendly pages." },
      { icon: Globe, title: "Edge & Middleware", desc: "Vercel Edge Runtime for personalisation, A/B testing, and geo-routing at the CDN layer." },
      { icon: Database, title: "Full-Stack API Routes", desc: "Next.js API routes or separate Node.js microservices with Prisma and PostgreSQL." },
      { icon: Search, title: "SEO Engineering", desc: "Metadata API, OG images, structured data, and sitemap generation built into the framework." },
      { icon: ShieldCheck, title: "Auth Integration", desc: "NextAuth.js, Clerk, or Auth0 with protected routes, session management, and OAuth flows." },
      { icon: Cloud, title: "Deployment & DevOps", desc: "Vercel, AWS App Runner, or self-hosted Kubernetes with preview deployments per PR." },
    ],
    process: [
      { step: "01", title: "Architecture", desc: "App Router vs Pages Router, rendering strategy, and data-fetching pattern decisions." },
      { step: "02", title: "Design System", desc: "Tailwind-based component library with dark mode and responsive tokens." },
      { step: "03", title: "Development", desc: "Feature-branch workflow with Vercel preview URLs for every PR." },
      { step: "04", title: "Performance", desc: "Core Web Vitals audit, bundle analysis, and image/font optimisation." },
      { step: "05", title: "Testing", desc: "Vitest unit tests and Playwright E2E tests before every merge to main." },
      { step: "06", title: "Launch", desc: "Production deployment with monitoring, error tracking, and rollback capability." },
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel", "Upstash", "Sentry"],
    faqs: [
      { q: "App Router or Pages Router?", a: "App Router for all new projects — it offers RSC, better data fetching, and the future roadmap of Next.js." },
      { q: "Can Next.js replace a separate backend?", a: "For many projects, yes — API routes and Server Actions can handle most backend needs. For complex logic, we use a separate service." },
      { q: "Do you deploy on Vercel?", a: "Vercel is our default for Next.js. We also deploy on AWS, GCP, or self-hosted Kubernetes based on your requirements." },
      { q: "Can you migrate an existing CRA/Vite app to Next.js?", a: "Yes — we handle incremental migrations that preserve functionality while unlocking SSR and performance benefits." },
    ],
  },

  // ── 28. NODE.JS DEVELOPMENT ───────────────
  {
    slug: "node-js-development",
    title: "Node.js Development",
    badge: "Backend Engineering Experts",
    headline: ["Node.js Backends", "Built for", "High-Traffic Scale"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We engineer <strong>high-performance Node.js backends</strong> — REST APIs, GraphQL servers, real-time systems, and microservices — built with TypeScript, tested end-to-end, and deployed on scalable cloud infrastructure. Our Node.js systems handle millions of requests daily.",
    stats: [
      { value: "100M+", label: "API Requests/Day Handled" },
      { value: "10ms", label: "Avg API Response Time" },
      { value: "120+", label: "Node.js Projects" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
    features: [
      { icon: Server, title: "REST & GraphQL APIs", desc: "Express, Fastify, and Apollo Server APIs with OpenAPI documentation and schema-first design." },
      { icon: Zap, title: "Real-Time Systems", desc: "WebSocket and Socket.io servers for live dashboards, chat, and collaborative features." },
      { icon: Database, title: "Database Integration", desc: "Prisma, Sequelize, and Mongoose ORM layers with query optimisation and connection pooling." },
      { icon: Workflow, title: "Microservices", desc: "Event-driven microservice architectures with Kafka, RabbitMQ, and gRPC communication." },
      { icon: Shield, title: "Security", desc: "JWT/OAuth2, rate limiting, CORS, helmet.js, and OWASP Node.js security best practices." },
      { icon: GitBranch, title: "CI/CD & DevOps", desc: "Docker containerisation, Kubernetes orchestration, and GitHub Actions pipelines." },
    ],
    process: [
      { step: "01", title: "API Design", desc: "OpenAPI spec and database schema designed and agreed before development." },
      { step: "02", title: "Setup", desc: "TypeScript project scaffold with ESLint, Prettier, Husky, and CI pipeline." },
      { step: "03", title: "Development", desc: "Endpoint-by-endpoint development with unit tests written alongside." },
      { step: "04", title: "Integration Testing", desc: "Supertest integration tests covering every API route and edge case." },
      { step: "05", title: "Load Testing", desc: "Artillery/k6 load tests simulating production traffic before go-live." },
      { step: "06", title: "Deployment", desc: "Docker deployment with health checks, logging, and APM instrumentation." },
    ],
    techStack: ["Node.js", "TypeScript", "Express", "Fastify", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS Lambda"],
    faqs: [
      { q: "Node.js or Go — which should we choose for our backend?", a: "Node.js is ideal for I/O-heavy APIs and teams with JavaScript expertise. Go wins for CPU-bound workloads at extreme scale." },
      { q: "Can you build real-time features?", a: "Yes — Socket.io and WebSocket infrastructure is a core Node.js strength we leverage regularly." },
      { q: "Do you write tests?", a: "All Node.js projects include unit and integration tests as standard, not as an add-on." },
      { q: "Can you optimise our existing slow API?", a: "Yes — we conduct query analysis, profiling, and N+1 detection to significantly reduce response times." },
    ],
  },

  // ── 29. LARAVEL DEVELOPMENT ───────────────
  {
    slug: "laravel-development",
    title: "Laravel Development",
    badge: "Laravel & PHP Experts",
    headline: ["Laravel Applications", "Crafted for", "Enterprise Grade"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>robust Laravel applications</strong> — SaaS platforms, REST APIs, and enterprise web systems — following Laravel best practices, SOLID principles, and clean architecture patterns. Our Laravel team has shipped platforms serving 500K+ registered users.",
    stats: [
      { value: "80+", label: "Laravel Projects" },
      { value: "500K+", label: "Users on Laravel Platforms" },
      { value: "100%", label: "Projects with Test Coverage" },
      { value: "5yr+", label: "Avg Team Experience in Laravel" },
    ],
    features: [
      { icon: FileCode, title: "Laravel SaaS Development", desc: "Multi-tenant SaaS with subscription billing via Spark/Cashier, RBAC, and team management." },
      { icon: Server, title: "REST API Development", desc: "Versioned Laravel APIs with Sanctum/Passport auth, resource transformers, and OpenAPI docs." },
      { icon: Database, title: "Eloquent & Database", desc: "Optimised Eloquent ORM, complex query builders, and database migration strategies." },
      { icon: Workflow, title: "Queue & Jobs", desc: "Laravel Horizon, Redis queues, and scheduled jobs for background processing at scale." },
      { icon: ShieldCheck, title: "Security Best Practices", desc: "CSRF, XSS, SQL injection protection, policy-based authorisation, and audit logging." },
      { icon: Cloud, title: "Laravel Deployment", desc: "Laravel Forge, Vapor, or custom Docker/AWS deployments with zero-downtime releases." },
    ],
    process: [
      { step: "01", title: "Architecture", desc: "Domain-driven design, service layer planning, and database schema design." },
      { step: "02", title: "Development", desc: "Feature development with TDD — tests written before implementation." },
      { step: "03", title: "Code Review", desc: "Senior Laravel developer reviews every PR against coding standards." },
      { step: "04", title: "Testing", desc: "PHPUnit feature and unit tests, plus Dusk browser tests for critical flows." },
      { step: "05", title: "Staging", desc: "Full staging environment mirroring production for stakeholder UAT." },
      { step: "06", title: "Deployment", desc: "Zero-downtime deployment via Envoy or Vapor with automated rollback." },
    ],
    techStack: ["Laravel 11", "PHP 8.3", "MySQL", "Redis", "Livewire", "Inertia.js", "PHPUnit", "Laravel Horizon", "Forge", "AWS"],
    faqs: [
      { q: "Laravel or Node.js for our backend?", a: "Laravel is ideal for teams with PHP experience, rapid SaaS development, and projects valuing its rich ecosystem." },
      { q: "Can you integrate Laravel with React or Vue?", a: "Yes — we use Inertia.js for hybrid apps and API-only Laravel for decoupled React/Vue frontends." },
      { q: "Do you handle multi-tenancy?", a: "Yes — we implement tenant isolation using schema-per-tenant or row-level strategies depending on scale." },
      { q: "Can you take over an existing Laravel codebase?", a: "Absolutely. We conduct a code quality audit and produce a remediation plan before beginning work." },
    ],
  },

  // ── 30. AI DEVELOPMENT ────────────────────
  {
    slug: "ai-development",
    title: "AI Development",
    badge: "Applied AI Engineering",
    headline: ["AI Systems That", "Transform How", "You Operate"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We design and build <strong>production AI systems</strong> — from intelligent automation and NLP pipelines to computer vision and recommendation engines. Our AI development team ships models and integrations that deliver measurable business outcomes, not just demos.",
    stats: [
      { value: "80+", label: "AI Systems Shipped" },
      { value: "40%", label: "Avg Operational Cost Reduction" },
      { value: "10×", label: "Process Speed Improvement" },
      { value: "25+", label: "LLMs Integrated" },
    ],
    features: [
      { icon: BrainCircuit, title: "NLP & Text AI", desc: "Summarisation, classification, entity extraction, and sentiment analysis pipelines at scale." },
      { icon: Bot, title: "LLM Integration", desc: "GPT-4o, Claude 3, Gemini, and Llama integrated into your product via LangChain or custom orchestration." },
      { icon: Cpu, title: "Computer Vision", desc: "Object detection, OCR, image classification, and video analytics using YOLO and vision transformers." },
      { icon: BarChart2, title: "Recommendation Systems", desc: "Collaborative and content-based recommendation engines for e-commerce, content, and SaaS." },
      { icon: Workflow, title: "AI Workflow Automation", desc: "Intelligent document processing, email triage, and multi-step AI agents replacing manual workflows." },
      { icon: Cloud, title: "MLOps", desc: "Model versioning, drift monitoring, A/B testing, and retraining pipelines on AWS SageMaker or Vertex AI." },
    ],
    process: [
      { step: "01", title: "Use Case Definition", desc: "Define the problem, success metrics, and data requirements before writing any code." },
      { step: "02", title: "Data Assessment", desc: "Evaluate existing data quality and coverage; design data collection if needed." },
      { step: "03", title: "Prototype", desc: "Rapid proof-of-concept to validate technical feasibility and benchmark accuracy." },
      { step: "04", title: "Production Build", desc: "Scalable model serving infrastructure with API endpoints and logging." },
      { step: "05", title: "Testing", desc: "Accuracy benchmarks, edge-case testing, and bias evaluation." },
      { step: "06", title: "Monitor & Improve", desc: "Drift detection, retraining schedules, and continuous accuracy improvement." },
    ],
    techStack: ["Python", "LangChain", "OpenAI", "Anthropic Claude", "Hugging Face", "FastAPI", "AWS SageMaker", "Pinecone", "Docker", "Kubernetes"],
    faqs: [
      { q: "Do I need to provide training data?", a: "Not always — we assess whether fine-tuning is necessary or if a prompted foundation model will meet your needs." },
      { q: "How do you prevent AI hallucinations?", a: "We implement RAG (Retrieval-Augmented Generation), structured output parsing, and human-in-the-loop validation." },
      { q: "Can you build a private AI that doesn't send data to OpenAI?", a: "Yes — we deploy open-source LLMs (Llama 3, Mistral) on your own infrastructure for full data sovereignty." },
      { q: "What's the difference between AI development and AI engineering?", a: "Both overlap — AI development focuses on building the AI itself; AI engineering on integrating it into production systems." },
    ],
  },

  // ── 31. AI CHATBOT DEVELOPMENT ────────────
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    badge: "Conversational AI Experts",
    headline: ["AI Chatbots That", "Actually Understand", "Your Customers"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>intelligent AI chatbots</strong> powered by GPT-4o, Claude, and Gemini — trained on your data, integrated into your products, and capable of handling complex multi-turn conversations. Our chatbots have resolved 70%+ of support tickets automatically for enterprise clients.",
    stats: [
      { value: "70%", label: "Avg Ticket Deflection Rate" },
      { value: "50+", label: "Chatbots Deployed" },
      { value: "24/7", label: "Availability" },
      { value: "4.7★", label: "Avg Customer Satisfaction" },
    ],
    features: [
      { icon: MessageSquare, title: "Custom LLM-Powered Chatbots", desc: "GPT-4o or Claude-powered bots fine-tuned or RAG-augmented with your knowledge base." },
      { icon: Link2, title: "Multi-Channel Deployment", desc: "Web widget, WhatsApp, Telegram, Slack, Teams, and mobile in-app — one bot, everywhere." },
      { icon: Database, title: "Knowledge Base Integration", desc: "Connect your docs, FAQs, CRM, and database so the bot always has the right answer." },
      { icon: Users, title: "Human Handoff", desc: "Seamless escalation to a live agent with full conversation context passed to the support team." },
      { icon: BarChart2, title: "Chatbot Analytics", desc: "Track resolution rate, CSAT, topic distribution, and unanswered query reports." },
      { icon: ShieldCheck, title: "Privacy & Compliance", desc: "GDPR-compliant data handling, conversation encryption, and PII redaction." },
    ],
    process: [
      { step: "01", title: "Use Case Mapping", desc: "Define intents, conversation flows, and escalation triggers." },
      { step: "02", title: "Knowledge Ingestion", desc: "Ingest your documentation, FAQs, and product data into a vector database." },
      { step: "03", title: "Bot Development", desc: "Build the LLM orchestration layer, memory management, and tool integrations." },
      { step: "04", title: "Testing", desc: "Adversarial testing, edge case coverage, and accuracy benchmarking." },
      { step: "05", title: "Integration", desc: "Embed into your web app, CRM, or messaging platform." },
      { step: "06", title: "Monitor & Improve", desc: "Weekly review of unanswered queries and monthly knowledge base updates." },
    ],
    techStack: ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "Pinecone", "Weaviate", "FastAPI", "React", "Twilio", "Intercom", "Zendesk"],
    faqs: [
      { q: "How is your chatbot different from a simple FAQ bot?", a: "Our chatbots understand natural language, handle multi-turn context, and reason over complex queries — not just keyword matching." },
      { q: "Can the chatbot integrate with our CRM?", a: "Yes — we integrate with Salesforce, HubSpot, Zendesk, and custom CRMs to provide context and log interactions." },
      { q: "How do we keep the knowledge base up to date?", a: "We build an admin panel so your team can add, edit, and remove content without developer involvement." },
      { q: "What happens when the bot doesn't know the answer?", a: "It gracefully escalates to a human agent with full conversation history, configured to your support workflow." },
    ],
  },

  // ── 32. GENERATIVE AI ─────────────────────
  {
    slug: "generative-ai-development",
    title: "Generative AI Development",
    badge: "Generative AI Specialists",
    headline: ["Generative AI", "Products That", "Redefine Possible"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>generative AI applications</strong> — text, image, audio, and code generation systems — powered by the latest foundation models and deployed as production-grade products. Our generative AI team has shipped tools generating millions of AI outputs per month.",
    stats: [
      { value: "30M+", label: "AI Outputs Generated/Month" },
      { value: "40+", label: "GenAI Products Shipped" },
      { value: "80%", label: "Content Production Cost Saved" },
      { value: "10×", label: "Creative Output Increase" },
    ],
    features: [
      { icon: PenTool, title: "AI Content Generation", desc: "Blog posts, ad copy, product descriptions, and email campaigns generated at scale with brand voice." },
      { icon: Palette, title: "AI Image Generation", desc: "DALL-E 3, Stable Diffusion, and Midjourney API integrations for on-brand image creation." },
      { icon: BrainCircuit, title: "AI Code Generation", desc: "GitHub Copilot-style code assistants and code review tools built into your development workflow." },
      { icon: MessageSquare, title: "Multimodal AI Apps", desc: "Applications combining text, image, audio, and video understanding with GPT-4o and Gemini." },
      { icon: Workflow, title: "AI-Powered Workflows", desc: "Multi-agent systems that autonomously research, write, review, and publish content." },
      { icon: Cloud, title: "GenAI Infrastructure", desc: "Scalable inference infrastructure with cost optimisation, caching, and rate-limit management." },
    ],
    process: [
      { step: "01", title: "Opportunity Assessment", desc: "Identify highest-value generative AI use cases within your workflows." },
      { step: "02", title: "Model Selection", desc: "Choose the optimal foundation model for quality, cost, and latency requirements." },
      { step: "03", title: "Prompt Engineering", desc: "Systematic prompt development and testing against quality benchmarks." },
      { step: "04", title: "Application Build", desc: "Full-stack application wrapping the AI with your UX, branding, and workflow integration." },
      { step: "05", title: "Evaluation", desc: "Output quality evaluation with human raters and automated scoring." },
      { step: "06", title: "Scale & Monitor", desc: "Cost monitoring, quality drift detection, and model upgrade pathway." },
    ],
    techStack: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "Stable Diffusion", "Replicate", "LangChain", "LlamaIndex", "Vercel AI SDK", "Next.js", "FastAPI", "AWS"],
    faqs: [
      { q: "Can you build a product with our own branding on top of GPT or Claude?", a: "Yes — white-label generative AI products are one of our most common engagements." },
      { q: "How do you control the quality of AI-generated output?", a: "We combine prompt engineering, output parsing, and optionally a human review step in the workflow." },
      { q: "Is generative AI expensive to run at scale?", a: "Costs vary by model and volume. We architect for cost efficiency using caching, smaller models for simple tasks, and batching." },
      { q: "Can you fine-tune a model on our brand voice?", a: "Yes — we fine-tune GPT-4o mini or open-source models on your existing content to match your tone." },
    ],
  },

  // ── 33. AI AGENT DEVELOPMENT ──────────────
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    badge: "Autonomous AI Agents",
    headline: ["AI Agents That", "Work While You", "Sleep"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build <strong>autonomous AI agents</strong> that plan, execute multi-step tasks, use tools, and complete complex workflows with minimal human oversight. Our agents have automated workflows saving clients 1,000+ hours per month.",
    stats: [
      { value: "1,000+", label: "Hours Saved/Month per Client" },
      { value: "30+", label: "Agent Systems Deployed" },
      { value: "95%", label: "Task Completion Rate" },
      { value: "10×", label: "Workflow Throughput Increase" },
    ],
    features: [
      { icon: Bot, title: "Autonomous Task Agents", desc: "Agents that receive a goal, plan sub-tasks, and execute them across tools and APIs." },
      { icon: Workflow, title: "Multi-Agent Orchestration", desc: "Supervisor-worker agent architectures for parallel, specialised task execution." },
      { icon: Link2, title: "Tool & API Integration", desc: "Agents equipped with web search, code execution, CRM, database, and file-system tools." },
      { icon: BrainCircuit, title: "Memory & Context Management", desc: "Short-term (conversation), long-term (vector DB), and episodic memory for persistent agents." },
      { icon: Shield, title: "Human-in-the-Loop", desc: "Approval gates, escalation triggers, and audit logs for safety-critical agent actions." },
      { icon: BarChart2, title: "Agent Observability", desc: "Full trace logging, cost monitoring, and performance dashboards for every agent run." },
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Document the end-to-end workflow the agent will automate, including edge cases." },
      { step: "02", title: "Tool Design", desc: "Define the tools and APIs the agent needs and build safe, typed wrappers." },
      { step: "03", title: "Agent Prompting", desc: "System prompt engineering for reliable planning and tool use." },
      { step: "04", title: "Sandbox Testing", desc: "Extensive testing in a sandboxed environment against real-world scenarios." },
      { step: "05", title: "HITL Integration", desc: "Add approval checkpoints and escalation logic for low-confidence decisions." },
      { step: "06", title: "Production Deployment", desc: "Deploy with observability, cost caps, and kill-switch capability." },
    ],
    techStack: ["LangGraph", "AutoGen", "CrewAI", "OpenAI GPT-4o", "Anthropic Claude", "Pinecone", "FastAPI", "Redis", "Celery", "Docker"],
    faqs: [
      { q: "What's the difference between an AI chatbot and an AI agent?", a: "A chatbot responds to queries. An agent takes action — browsing, writing files, calling APIs, and completing multi-step tasks." },
      { q: "How do you ensure agents don't make costly mistakes?", a: "We implement approval gates for irreversible actions, cost caps, and full audit trails on every production agent." },
      { q: "Can agents integrate with our existing tools?", a: "Yes — we build tool wrappers for Salesforce, Jira, Slack, GitHub, Google Workspace, and custom REST APIs." },
      { q: "What LLM do you use for agents?", a: "We benchmark GPT-4o and Claude 3.5 Sonnet for most agent tasks. The choice depends on reasoning quality vs. cost requirements." },
    ],
  },

  // ── 34. AI INTEGRATION ────────────────────
  {
    slug: "ai-integration",
    title: "AI Integration",
    badge: "Plug AI Into Your Stack",
    headline: ["Add AI to", "Your Existing", "Products Fast"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We integrate <strong>AI capabilities into your existing software</strong> — adding intelligence to CRMs, ERPs, web apps, and mobile products without a full rebuild. Our integration specialists have connected AI to 50+ enterprise platforms.",
    stats: [
      { value: "50+", label: "Enterprise Platforms Integrated" },
      { value: "4wk", label: "Avg Integration Timeline" },
      { value: "60%", label: "Avg Productivity Gain" },
      { value: "99%", label: "Integration Uptime" },
    ],
    features: [
      { icon: Link2, title: "LLM API Integration", desc: "Connect OpenAI, Anthropic, Google, or Mistral to your existing application via clean API wrappers." },
      { icon: Database, title: "RAG Implementation", desc: "Retrieval-Augmented Generation connecting your knowledge base to LLM responses." },
      { icon: Workflow, title: "AI-Enhanced Workflows", desc: "Add AI summarisation, classification, and drafting to your CRM, email, or helpdesk tool." },
      { icon: Monitor, title: "AI UI Components", desc: "Frontend components — chatbots, AI editors, autocomplete — embedded in your web or mobile app." },
      { icon: Shield, title: "Security & Data Privacy", desc: "On-premise or VPC-deployed models ensuring your data never leaves your infrastructure." },
      { icon: BarChart2, title: "Cost & Usage Monitoring", desc: "Token tracking, cost dashboards, and usage alerts to prevent budget overruns." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Map integration points, data flows, and user touchpoints in your existing system." },
      { step: "02", title: "Architecture", desc: "Design the integration layer — API gateway, caching, and fallback strategies." },
      { step: "03", title: "Development", desc: "Build, test, and document the AI integration endpoints." },
      { step: "04", title: "UAT", desc: "User acceptance testing with your team on a staging environment." },
      { step: "05", title: "Rollout", desc: "Phased rollout with feature flags and rollback capability." },
      { step: "06", title: "Monitor", desc: "AI performance monitoring, cost tracking, and continuous prompt improvement." },
    ],
    techStack: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "FastAPI", "Node.js", "Zapier", "Make", "REST APIs", "Docker"],
    faqs: [
      { q: "Can you integrate AI without rebuilding our app?", a: "Yes — most integrations are additive, using API calls and UI components that slot into your existing architecture." },
      { q: "How long does a typical AI integration take?", a: "Simple integrations (e.g. AI-powered search or summarisation) can go live in 2–4 weeks." },
      { q: "Do you support on-premise AI deployments?", a: "Yes — we deploy open-source models (Llama 3, Mistral) on your infrastructure for full data sovereignty." },
      { q: "Will the integration affect our existing app's performance?", a: "We design async patterns and caching so AI features add capability without degrading existing UX." },
    ],
  },

  // ── 35. ML DEVELOPMENT ────────────────────
  {
    slug: "ml-development",
    title: "ML Development",
    badge: "Machine Learning Engineering",
    headline: ["Machine Learning", "Systems Built for", "Production"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We build and deploy <strong>production machine learning systems</strong> — from classical ML to deep learning — with MLOps pipelines, model monitoring, and continuous retraining. Our models power fraud detection, demand forecasting, personalisation, and computer vision at scale.",
    stats: [
      { value: "60+", label: "ML Models in Production" },
      { value: "92%", label: "Avg Model Accuracy" },
      { value: "100ms", label: "Avg Inference Latency" },
      { value: "5×", label: "Avg ROI on ML Investment" },
    ],
    features: [
      { icon: BrainCircuit, title: "Supervised & Unsupervised Learning", desc: "Classification, regression, clustering, and anomaly detection models tailored to your data." },
      { icon: Cpu, title: "Deep Learning", desc: "CNN, RNN, Transformer, and diffusion model architectures for vision, NLP, and time-series." },
      { icon: Database, title: "Feature Engineering", desc: "Domain-expert feature creation, automated feature selection, and feature store implementation." },
      { icon: Cloud, title: "MLOps Pipelines", desc: "Automated training, evaluation, and deployment pipelines with MLflow, Kubeflow, or SageMaker." },
      { icon: BarChart2, title: "Model Monitoring", desc: "Data drift, concept drift, and accuracy degradation alerts with automated retraining triggers." },
      { icon: Shield, title: "Explainable AI", desc: "SHAP and LIME explanations for model decisions — essential for regulated industries." },
    ],
    process: [
      { step: "01", title: "Problem Framing", desc: "Translate business objective into a well-defined ML problem with measurable success criteria." },
      { step: "02", title: "Data Engineering", desc: "Data collection, cleaning, labelling, and feature pipeline construction." },
      { step: "03", title: "Experimentation", desc: "Model selection, training, and hyperparameter optimisation in a tracked experiment environment." },
      { step: "04", title: "Evaluation", desc: "Offline evaluation against held-out test sets and business KPI simulation." },
      { step: "05", title: "Deployment", desc: "Model serving via REST API with A/B testing against the existing baseline." },
      { step: "06", title: "Monitor & Retrain", desc: "Automated monitoring with scheduled retraining on new production data." },
    ],
    techStack: ["Python", "scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "MLflow", "Kubeflow", "AWS SageMaker", "Feast", "Seldon"],
    faqs: [
      { q: "How much data do we need?", a: "It depends on the model type. Classical ML works with thousands of rows; deep learning often needs millions. We advise on data requirements upfront." },
      { q: "How do you handle imbalanced datasets?", a: "We use SMOTE, class weighting, and threshold tuning strategies to handle class imbalance effectively." },
      { q: "What's the difference between ML development and AI development?", a: "ML development focuses on statistical learning from data. AI development is broader, including rule systems, LLMs, and knowledge engineering." },
      { q: "Do you handle the full MLOps lifecycle?", a: "Yes — from data pipelines to model registry, CI/CD for models, and production drift monitoring." },
    ],
  },

  // ── 36. AI PRODUCT DEVELOPMENT ────────────
  {
    slug: "ai-product-development",
    title: "AI Product Development",
    badge: "AI-First Product Engineering",
    headline: ["AI-First Products", "From Idea to", "Market Fast"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We help founders and enterprises <strong>build AI-native products</strong> — from zero to launch. Our multidisciplinary team of product managers, AI engineers, and UX designers has built AI products that have reached product-market fit and scaled to thousands of paying users.",
    stats: [
      { value: "35+", label: "AI Products Launched" },
      { value: "8wk", label: "Avg MVP Timeline" },
      { value: "$15M+", label: "VC Raised by Our Clients" },
      { value: "4.8★", label: "Avg Product Rating" },
    ],
    features: [
      { icon: Rocket, title: "Product Discovery", desc: "User research, competitive analysis, and AI opportunity mapping to define the right product." },
      { icon: Palette, title: "AI UX Design", desc: "Designing for uncertainty, latency, and AI failure modes — UX patterns unique to AI products." },
      { icon: BrainCircuit, title: "AI Core Engineering", desc: "The AI layer — models, prompts, fine-tuning, and evaluation — built production-ready." },
      { icon: Monitor, title: "Full-Stack Development", desc: "Frontend, backend, and infrastructure built as an integrated, scalable product." },
      { icon: BarChart2, title: "Product Analytics", desc: "Behavioural analytics and AI-specific metrics (accuracy, latency, fallback rate) from day one." },
      { icon: Users, title: "Go-to-Market Support", desc: "Positioning, landing page, and onboarding flow designed to convert your first paying users." },
    ],
    process: [
      { step: "01", title: "Discovery Sprint", desc: "1-week sprint to define the core use case, user persona, and differentiating AI capability." },
      { step: "02", title: "Prototype", desc: "AI prototype in 1–2 weeks to validate technical feasibility with real users." },
      { step: "03", title: "MVP Build", desc: "Full product build in 4–6 weeks — AI core, frontend, auth, billing, and analytics." },
      { step: "04", title: "Beta Launch", desc: "Closed beta with 50–200 users for feedback and iteration." },
      { step: "05", title: "Public Launch", desc: "GA launch with marketing site, onboarding flow, and support tooling." },
      { step: "06", title: "Scale", desc: "Feature roadmap, growth engineering, and infrastructure scaling." },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "Anthropic Claude", "Pinecone", "PostgreSQL", "Stripe", "Vercel", "AWS"],
    faqs: [
      { q: "We have an AI idea — where do we start?", a: "With a 1-week discovery sprint to validate the idea, define scope, and produce a buildable spec." },
      { q: "How long to MVP?", a: "Typically 6–8 weeks from a clear spec to a shippable beta product." },
      { q: "Can you help us raise funding?", a: "We can produce technical due diligence documentation, architecture diagrams, and demo-quality prototypes for investor pitches." },
      { q: "Do you own any IP?", a: "All IP is fully assigned to you. We sign comprehensive IP assignment agreements as standard." },
    ],
  },

  // ── 37. MACHINE LEARNING & DEEP LEARNING ──
  {
    slug: "machine-learning-deep-learning",
    title: "Machine Learning & Deep Learning",
    badge: "Advanced ML/DL Research & Engineering",
    headline: ["Advanced ML/DL", "From Research", "to Production"],
    headlineColors: ["text-slate-900", "gradient-cyan-purple", "text-slate-900"],
    description:
      "We bridge the gap between <strong>ML/DL research and production deployment</strong> — implementing state-of-the-art architectures, custom training pipelines, and inference optimisation for computer vision, NLP, and tabular applications.",
    stats: [
      { value: "70+", label: "ML/DL Models Deployed" },
      { value: "94%", label: "Avg Model Accuracy" },
      { value: "8×", label: "Inference Speed vs Baseline" },
      { value: "15+", label: "Research Papers Implemented" },
    ],
    features: [
      { icon: Cpu, title: "Deep Neural Networks", desc: "CNN, RNN, LSTM, Transformer, and diffusion architectures for vision, NLP, and sequential data." },
      { icon: BrainCircuit, title: "Transfer Learning", desc: "Fine-tuning pre-trained models (BERT, ViT, ResNet) on your domain-specific data." },
      { icon: Database, title: "Custom Training Pipelines", desc: "Distributed training on GPU clusters with mixed precision, gradient checkpointing, and data loaders." },
      { icon: Zap, title: "Inference Optimisation", desc: "ONNX export, TensorRT, and model quantisation to reduce latency by up to 10×." },
      { icon: Shield, title: "Explainability & Fairness", desc: "SHAP, Grad-CAM, and counterfactual explanations for model transparency and compliance." },
      { icon: Cloud, title: "GPU Infrastructure", desc: "Training on AWS P4, GCP A100, or Lambda Labs with spot-instance cost optimisation." },
    ],
    process: [
      { step: "01", title: "Literature Review", desc: "Survey state-of-the-art approaches and select the right architecture for your problem." },
      { step: "02", title: "Data Pipeline", desc: "Build ingestion, augmentation, and dataloader pipelines with reproducibility in mind." },
      { step: "03", title: "Baseline", desc: "Establish a simple baseline model to benchmark improvements against." },
      { step: "04", title: "Model Development", desc: "Implement, train, and iterate on the target architecture with experiment tracking." },
      { step: "05", title: "Optimisation", desc: "Quantise, prune, and distil the model for production latency targets." },
      { step: "06", title: "Deployment", desc: "Serve via TorchServe, Triton, or BentoML with monitoring and rollback." },
    ],
    techStack: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "ONNX", "TensorRT", "CUDA", "Ray", "W&B", "AWS SageMaker"],
    faqs: [
      { q: "Can you implement a specific research paper?", a: "Yes — reproducing and adapting research papers to production constraints is a core capability of our ML team." },
      { q: "How do you handle limited labelled data?", a: "We use semi-supervised learning, active learning, and synthetic data augmentation to maximise model performance from small datasets." },
      { q: "Do you need access to our GPU hardware?", a: "Not necessarily. We can train on cloud GPU providers and transfer the trained model to your infrastructure." },
      { q: "What is model distillation?", a: "It's a technique to create a smaller, faster model that mimics a larger one — useful for deploying on edge or mobile devices." },
    ],
  },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* ── BACKGROUND ACCENTS ── */}
      {/* <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] opacity-40" />
      </div> */}

      <div className="relative z-10">
        {/* ── HERO ── */}
        <ScrollReveal>
          <section className="pt-32 pb-20 px-4 text-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-12 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                {service.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight mb-10 text-slate-900"
            >
              {service.headline.map((line, i) =>
                service.headlineColors[i] === "gradient-cyan-purple" ? (
                  <span
                    key={i}
                    className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent block"
                  >
                    {line}
                  </span>
                ) : (
                  <span key={i} className="block text-slate-900">
                    {line}
                  </span>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-600 text-lg md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contact-us"
                className="group px-10 py-5 rounded-2xl bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425]  text-white font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3"
              >
                Start A Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 rounded-2xl border border-slate-200 bg-white font-bold text-lg text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
              >
                Case Studies
              </Link>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* ── STATS ── */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
            {service.stats.map((stat, i) => (
              <ScrollReveal key={i}>
                <div className="text-center group">
                  <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── WHAT WE OFFER ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Institutional <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425] bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((f, i) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <ScrollReveal key={i}>
                    <div className="h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-blue-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Icon className="w-16 h-16 text-blue-600" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg font-light">{f.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-16 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Execution <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425] bg-clip-text text-transparent">Framework</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((p, i) => (
                <ScrollReveal key={i}>
                  <div className="relative p-10 rounded-3xl border border-slate-100 bg-white hover:border-blue-500/30 transition-all group overflow-hidden h-[-webkit-fill-available] shadow-sm hover:shadow-lg">
                    <span className="text-8xl font-black text-slate-100 absolute top-0 right-4 select-none group-hover:text-slate-200 transition-all">
                      {p.step}
                    </span>
                    <div className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-8">Phase {p.step}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{p.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-light">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 uppercase tracking-tighter">
              The <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425] bg-clip-text text-transparent">Technology Matrix</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {service.techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-bold hover:border-blue-500 hover:bg-blue-50 transition-all cursor-default shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="pt-16 pb-16 max-w-7xl mx-auto px-4 mb-10">
          <div className="relative rounded-[4rem] overflow-hidden border border-slate-100 bg-linear-to-br from-blue-600 to-blue-800 p-16 md:p-24 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
                Ready to build something <br />
                <span className="italic font-light">extraordinary?</span>
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-16 font-light">
                Talk to our senior consultants and get a roadmap for your digital transformation.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex px-12 py-6 rounded-4xl bg-white text-blue-600 font-bold text-xl hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Start A Project
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                Common <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425] bg-clip-text text-transparent">Inquiries</span>
              </h2>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <ScrollReveal key={i}>
                  <details className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-blue-500/30 transition-all shadow-sm">
                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-slate-900 hover:text-blue-600 transition-colors">
                      {faq.q}
                      <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="px-8 pb-8 text-slate-600 text-lg font-light leading-relaxed border-t border-slate-100 pt-6">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}