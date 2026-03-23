import BackgroundParticles from "@/app/components/BackgroundParticles";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bot, Zap, BarChart2, Link2, ShieldCheck, Cloud,
  Rocket, Lock, TrendingUp, Users, RefreshCw,
  type LucideIcon,
} from "lucide-react";
import Footer from "@/app/components/Footer";

const services = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    badge: "Next-Gen AI Solutions",
    headline: ["Intelligent AI", "Engineering for", "Modern Business"],
    headlineColors: ["text-white", "gradient-cyan-purple", "text-white"],
    description:
      "As a trusted <strong>artificial intelligence engineering company</strong>, we build custom AI systems that automate complex workflows, unlock predictive insights, and scale your business. Our <strong>AI engineering services</strong> are trusted by startups and Fortune 500 companies across USA, UK, UAE, Singapore, Australia, and India.",
    stats: [
      { value: "75+", label: "AI Solutions Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "50+", label: "AI Models Deployed" },
      { value: "20+", label: "Industries Served" },
    ],
    features: [
      {
        icon: Bot,
        title: "Custom AI Model Development",
        desc: "We design, train, and deploy custom ML/DL models tailored to your business needs — from NLP pipelines to computer vision systems.",
      },
      {
        icon: Zap,
        title: "AI Automation & Workflows",
        desc: "Eliminate manual bottlenecks with intelligent automation. Our AI agents handle data extraction, classification, decision-making, and more.",
      },
      {
        icon: BarChart2,
        title: "Predictive Analytics",
        desc: "Turn raw data into actionable intelligence. We build forecasting models that help you stay ahead of trends and customer behavior.",
      },
      {
        icon: Link2,
        title: "LLM Integration & Fine-Tuning",
        desc: "Integrate GPT-4, Claude, Gemini or fine-tune open-source LLMs on your proprietary data for enterprise-grade AI assistants.",
      },
      {
        icon: ShieldCheck,
        title: "Responsible AI & Compliance",
        desc: "We build transparent, auditable AI systems that comply with GDPR, HIPAA, and emerging AI governance frameworks.",
      },
      {
        icon: Cloud,
        title: "AI Cloud Infrastructure",
        desc: "Deploy at scale with optimized MLOps pipelines on AWS, GCP, or Azure — with monitoring, versioning, and CI/CD built in.",
      },
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
  // Other slugs share same structure but are generated dynamically below
];

// Generic fallback generator for all other slugs
function generateServiceData(slug: string, title: string) {
  return {
    slug,
    title,
    badge: `Expert ${title} Services`,
    headline: [`Expert`, title, `for Enterprise`],
    headlineColors: ["text-white", "gradient-cyan-purple", "text-white"],
    description: `As a trusted <strong>${title.toLowerCase()} company</strong>, we deliver cutting-edge solutions that drive growth, efficiency, and innovation. Our services are trusted by startups and Fortune 500 companies across USA, UK, UAE, Singapore, Australia, and India.`,
    stats: [
      { value: "75+", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "50+", label: "Solutions Deployed" },
      { value: "20+", label: "Industries Served" },
    ],
    features: [
      { icon: Rocket, title: "End-to-End Solutions", desc: `Full-cycle ${title} services from strategy to deployment, tailored to your business goals.` },
      { icon: Zap, title: "Rapid Development", desc: "Agile sprints with continuous delivery ensure your project ships on time and on budget." },
      { icon: Lock, title: "Security First", desc: "Enterprise-grade security baked into every layer of the solution we build." },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Built to grow with you — from MVP to millions of users without re-architecting." },
      { icon: Users, title: "Dedicated Team", desc: "Senior engineers and designers who become an extension of your internal team." },
      { icon: RefreshCw, title: "Ongoing Support", desc: "Post-launch monitoring, maintenance, and iterative improvements to keep you ahead." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep-dive into your requirements, goals, and technical landscape." },
      { step: "02", title: "Strategy", desc: "Define architecture, tech stack, and roadmap aligned with your vision." },
      { step: "03", title: "Design", desc: "Craft intuitive UX/UI with pixel-perfect fidelity to your brand." },
      { step: "04", title: "Development", desc: "Agile build sprints with regular demos and feedback loops." },
      { step: "05", title: "QA & Testing", desc: "Comprehensive testing for performance, security, and reliability." },
      { step: "06", title: "Launch & Support", desc: "Smooth deployment with ongoing monitoring and maintenance." },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Laravel", "Flutter", "AWS", "Docker", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      { q: `How much does ${title} cost?`, a: "Pricing depends on scope and complexity. We provide detailed proposals after a free discovery call." },
      { q: "How long will my project take?", a: "Typical projects range from 4–20 weeks. We'll give you a firm timeline after scoping." },
      { q: "Do you offer post-launch support?", a: "Yes — we offer monthly retainer packages for maintenance, updates, and feature development." },
      { q: "Can you work with our existing team?", a: "Absolutely. We integrate seamlessly as an extended team or take full ownership of delivery." },
    ],
  };
}

const allServices = [
  ...services,
  { slug: "blockchain-development", title: "Blockchain Development" },
  { slug: "mobile-app-development", title: "Mobile App Development" },
  { slug: "custom-web-development", title: "Custom Web Development" },
  { slug: "software-development", title: "Software Development" },
  { slug: "digital-transformation", title: "Digital Transformation" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "data-science-analytics", title: "Data Science & Analytics" },
  { slug: "ecommerce-development", title: "E-commerce Development" },
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const raw = allServices.find((s) => s.slug === slug);
  if (!raw) return notFound();

  const service = "features" in raw ? raw : generateServiceData(raw.slug, raw.title);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white font-sans">
      <BackgroundParticles />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 pb-20 px-4 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {service.badge}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          {service.headline.map((line, i) =>
            service.headlineColors[i] === "gradient-cyan-purple" ? (
              <span
                key={i}
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent block"
              >
                {line}
              </span>
            ) : (
              <span key={i} className="block text-white">
                {line}
              </span>
            )
          )}
        </h1>

        {/* Description */}
        <p
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            Start Your Project →
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {service.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {service.title}
              </span>{" "}
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From strategy to deployment, we cover every dimension of {service.title.toLowerCase()} to deliver measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => {
              const Icon = f.icon as LucideIcon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative z-10 py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven, structured process that ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-400/40 transition-all duration-300">
                <span className="text-5xl font-black text-white/5 absolute top-4 right-6 select-none">
                  {p.step}
                </span>
                <div className="text-cyan-400 text-xs font-bold tracking-widest mb-3">STEP {p.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Technologies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Tools & Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              We Master
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            We use industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-gray-300 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent p-12 text-center">
            {/* Glow blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <span className="relative text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Ready to get started?
            </span>
            <h2 className="relative text-4xl md:text-5xl font-extrabold mt-3 mb-4">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="relative text-gray-400 max-w-xl mx-auto mb-8">
              Talk to our experts and get a free project consultation. No commitments — just clarity on how we can help you win.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              Get Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-20 px-4 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
              Common{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-white hover:text-cyan-300 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-cyan-400 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
         </div>
  );
}