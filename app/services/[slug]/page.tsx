"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  Bot, Zap, BarChart2, Link2, ShieldCheck, Cloud,
  Rocket, Lock, TrendingUp, Users, RefreshCw,
  ArrowRight, Sparkles, CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/ScrollReveal";

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
  { slug: "social-media-marketing", title: "Social Media Marketing" },
  { slug: "digital-marketing-strategy", title: "Digital Marketing Strategy" },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization" },
  { slug: "trusted-influencer-marketing-agency", title: "Trusted Influencer Marketing Agency" },
  { slug: "search-engine-optimization", title: "Search Engine Optimization" },
  { slug: "lead-generation", title: "Lead Generation" },
  { slug: "brand-management", title: "Brand Management" },
  { slug: "specialized-ecommerce-seo-services", title: "Specialized eCommerce SEO Services" },
  { slug: "google-ad-campaigns", title: "Google Ad Campaigns" },
  { slug: "content-marketing", title: "Content Marketing" },
  { slug: "paid-advertising", title: "Paid Advertising" },
  { slug: "ios-app-development", title: "iOS App Development" },
  { slug: "android-app-development", title: "Android App Development" },
  { slug: "web-app-development", title: "Web App Development" },
  { slug: "wordpress-development", title: "Wordpress Development" },
  { slug: "website-development", title: "Website Development" },
  { slug: "react-js-development", title: "React.js Development" },
  { slug: "next-js-development", title: "Next.js Development" },
  { slug: "node-js-development", title: "Node.js Development" },
  { slug: "laravel-development", title: "Laravel Development" },
  { slug: "ai-development", title: "AI Development" },
  { slug: "ai-chatbot-development", title: "AI Chatbot Development" },
  { slug: "generative-ai-development", title: "Generative AI Development" },
  { slug: "ai-agent-development", title: "AI Agent Development" },
  { slug: "ai-integration", title: "AI Integration" },
  { slug: "ml-development", title: "ML Development" },
  { slug: "ai-product-development", title: "AI Product Development" },
  { slug: "machine-learning-deep-learning", title: "Machine Learning & Deep Learning" },
];

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const raw = allServices.find((s) => s.slug === slug);
  if (!raw) return notFound();

  const service = "features" in raw ? raw : generateServiceData(raw.slug, raw.title);

  return (
    <div className="relative min-h-screen bg-[#010816] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* ── HERO ── */}
        <ScrollReveal>
          <section className="pt-32 pb-20 px-4 text-center max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                {service.badge}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-10"
            >
              {service.headline.map((line, i) =>
                service.headlineColors[i] === "gradient-cyan-purple" ? (
                  <span
                    key={i}
                    className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block"
                  >
                    {line}
                  </span>
                ) : (
                  <span key={i} className="block text-white">
                    {line}
                  </span>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-light"
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
                className="group px-10 py-5 rounded-2xl bg-white text-[#010816] font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-500/10 flex items-center gap-3"
              >
                Start A Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl font-bold text-lg text-white hover:bg-white/10 transition-all"
              >
                Case Studies
              </Link>
            </motion.div>
          </section>
        </ScrollReveal>

        {/* ── STATS ── */}
        <section className="py-20 bg-white/2 border-y border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
            {service.stats.map((stat, i) => (
              <ScrollReveal key={i}>
                <div className="text-center group">
                  <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── WHAT WE OFFER ── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Institutional <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((f, i) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <ScrollReveal key={i}>
                    <div className="h-full bg-linear-to-br from-white/5 to-transparent rounded-[2.5rem] p-10 border border-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-xl">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon className="w-16 h-16 text-blue-400" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-300 transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-lg font-light">{f.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-32 bg-white/2 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Execution <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Framework</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((p, i) => (
                <ScrollReveal key={i}>
                  <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all group overflow-hidden">
                    <span className="text-8-xl font-black text-white/5 absolute top-0 right-4 select-none group-hover:text-white/10 transition-all">
                      {p.step}
                    </span>
                    <div className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">Phase {p.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 uppercase tracking-tighter">
              The <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Matrix</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {service.techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold hover:border-blue-500 hover:bg-blue-600/10 transition-all cursor-default shadow-xl"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-32 max-w-7xl mx-auto px-4 mb-20">
          <div className="relative rounded-[4rem] overflow-hidden border border-white/10 bg-linear-to-br from-blue-600 to-blue-900/40 p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
                Ready to build something <br />
                <span className="italic">extraordinary?</span>
              </h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto mb-16 font-light">
                Talk to our senior consultants and get a roadmap for your digital transformation.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex px-12 py-6 rounded-4xl bg-white text-blue-600 font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105"
              >
                Start A Project
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-32 bg-white/2 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                Common <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Inquiries</span>
              </h2>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <ScrollReveal key={i}>
                  <details className="group rounded-3xl border border-white/10 bg-white/2 overflow-hidden hover:border-blue-500/30 transition-all">
                    <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-white hover:text-blue-400 transition-colors">
                      {faq.q}
                      <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <div className="px-8 pb-8 text-slate-400 text-lg font-light leading-relaxed border-t border-white/5 pt-6">
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