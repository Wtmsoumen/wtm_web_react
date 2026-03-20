import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  PlayCircle,
  Smartphone,
  Calendar,
  Clock,
  Users,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Star,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: Record<string, Project> = {
  "bitdelta": {
    slug: "bitdelta",
    tag: "Crypto Exchange",
    tagColor: "bg-blue-600",
    title: "BitDelta",
    subtitle: "Global Crypto & Derivatives Exchange",
    client: "BitDelta Global",
    year: "2023",
    duration: "18 months",
    teamSize: "25+",
    description:
      "A comprehensive exchange platform with advanced trading engine supporting spot and derivatives trading across 130+ countries. BitDelta serves over 2 million active users with enterprise-grade security, real-time order matching, and a seamless mobile experience.",
    image: "/images/portfolio/bitdelta.webp",
    links: {
      website: "https://bitdelta.com",
      playStore: "#",
      appStore: "#",
    },
    stats: [
      { value: "2M+", label: "Active Users" },
      { value: "130+", label: "Countries Served" },
      { value: "100+", label: "Trading Pairs" },
      { value: "24/7", label: "Trading Availability" },
    ],
    challenge:
      "BitDelta needed a high-performance exchange capable of handling millions of concurrent trades with sub-millisecond latency, while providing an intuitive UI for both beginners and professional traders across web and mobile.",
    solution:
      "We engineered a microservices architecture with a custom matching engine, real-time WebSocket feeds, and a React-based trading terminal. Mobile apps in Flutter ensured a consistent cross-platform experience with biometric auth and push notifications.",
    features: [
      "Real-time order book & trade history",
      "Spot & derivatives trading engine",
      "KYC/AML compliance workflow",
      "Multi-currency wallet integration",
      "Advanced charting with TradingView",
      "iOS & Android mobile apps",
      "Admin dashboard & risk management",
      "API for institutional traders",
    ],
    techStack: [
      { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "Next.js", color: "bg-white/5 text-white/60 border-white/10" },
      { label: "Flutter", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { label: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { label: "Redis", color: "bg-red-500/10 text-red-400 border-red-500/20" },
      { label: "Kafka", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { label: "AWS", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    ],
    results: [
      { metric: "2M+", desc: "Active traders onboarded within 12 months of launch" },
      { metric: "99.98%", desc: "Uptime SLA maintained across all trading sessions" },
      { metric: "<50ms", desc: "Average order execution latency on spot markets" },
      { metric: "4.8★", desc: "App store rating across iOS and Android" },
    ],
    testimonial: {
      quote:
        "WebTechnoMind delivered a world-class exchange platform that exceeded our expectations. The engineering quality and attention to detail set BitDelta apart from competitors from day one.",
      author: "Alex R.",
      role: "CTO, BitDelta Global",
    },
    accentColor: "from-blue-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.3)",
  },
  "flitpay": {
    slug: "flitpay",
    tag: "Crypto Exchange",
    tagColor: "bg-blue-500",
    title: "Flitpay",
    subtitle: "India's Trusted Crypto Exchange",
    client: "Flitpay Technologies",
    year: "2022",
    duration: "12 months",
    teamSize: "15+",
    description:
      "A RBI-compliant Indian crypto exchange with INR on/off ramp, UPI integration, and a mobile-first trading experience trusted by 500K+ users.",
    image: "/images/portfolio/flitpay.webp",
    links: { website: "#", playStore: "#", appStore: "#" },
    stats: [
      { value: "500K+", label: "Active Users" },
      { value: "4.8★", label: "App Rating" },
      { value: "50+", label: "Crypto Pairs" },
      { value: "INR", label: "Fiat On-Ramp" },
    ],
    challenge:
      "Building a fully compliant Indian crypto exchange with UPI/IMPS banking rails, real-time KYC, and a mobile-first experience for first-time crypto users.",
    solution:
      "We built a Laravel + React web platform and a Flutter mobile app with integrated UPI payments, Aadhaar-based KYC, and a simplified trading interface designed for mass-market adoption.",
    features: [
      "UPI & IMPS INR deposits/withdrawals",
      "Aadhaar + PAN KYC integration",
      "Real-time price alerts",
      "Simplified buy/sell interface",
      "Portfolio tracker",
      "Referral & reward system",
    ],
    techStack: [
      { label: "Laravel", color: "bg-red-500/10 text-red-400 border-red-500/20" },
      { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "Flutter", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { label: "MySQL", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { label: "Redis", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    ],
    results: [
      { metric: "500K+", desc: "Registered users within first year" },
      { metric: "4.8★", desc: "Play Store rating" },
      { metric: "₹100Cr+", desc: "Monthly trading volume achieved" },
      { metric: "99.9%", desc: "Payment success rate via UPI" },
    ],
    testimonial: {
      quote: "The team understood Indian compliance requirements deeply and delivered a product our users love.",
      author: "Rahul M.",
      role: "CEO, Flitpay",
    },
    accentColor: "from-blue-400 to-cyan-500",
    glowColor: "rgba(59,130,246,0.3)",
  },
};

// Generic fallback
function buildGenericProject(slug: string): Project {
  const title = slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  return {
    slug,
    tag: "Digital Product",
    tagColor: "bg-purple-600",
    title,
    subtitle: "A premium digital product built by WebTechnoMind",
    client: `${title} Inc.`,
    year: "2024",
    duration: "8 months",
    teamSize: "10+",
    description: `${title} is a full-featured digital platform engineered from the ground up with a focus on performance, scalability, and user experience.`,
    image: "/images/portfolio/default.webp",
    links: { website: "#", playStore: "#", appStore: "#" },
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "4.8★", label: "App Rating" },
      { value: "99.9%", label: "Uptime" },
      { value: "12+", label: "Integrations" },
    ],
    challenge: "The client needed a scalable, secure platform that could handle rapid user growth while delivering an exceptional UX across devices.",
    solution: "We architected a modern stack with Next.js, Node.js, and a Flutter mobile app — deployed on AWS with full CI/CD and monitoring pipelines.",
    features: [
      "Responsive web & mobile apps",
      "Real-time data sync",
      "Role-based access control",
      "Third-party API integrations",
      "Admin dashboard",
      "Analytics & reporting",
    ],
    techStack: [
      { label: "Next.js", color: "bg-white/5 text-white/60 border-white/10" },
      { label: "Flutter", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { label: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { label: "AWS", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    ],
    results: [
      { metric: "10K+", desc: "Users onboarded post-launch" },
      { metric: "99.9%", desc: "Uptime across production environments" },
      { metric: "4.8★", desc: "User satisfaction rating" },
      { metric: "3×", desc: "Performance improvement over previous solution" },
    ],
    testimonial: {
      quote: "WebTechnoMind delivered beyond our expectations — on time, on budget, and with exceptional quality.",
      author: "Client",
      role: "Founder",
    },
    accentColor: "from-purple-500 to-pink-600",
    glowColor: "rgba(168,85,247,0.3)",
  };
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Project = {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  duration: string;
  teamSize: string;
  description: string;
  image: string;
  links: { website?: string; playStore?: string; appStore?: string };
  stats: { value: string; label: string }[];
  challenge: string;
  solution: string;
  features: string[];
  techStack: { label: string; color: string }[];
  results: { metric: string; desc: string }[];
  testimonial: { quote: string; author: string; role: string };
  accentColor: string;
  glowColor: string;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project = projects[slug] ?? buildGenericProject(slug);

  return (
    <div className="min-h-screen bg-[#080b14] text-white">

      {/* ── TOP GLOW ── */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none z-0 opacity-30"
        style={{ background: project.glowColor }}
      />

      {/* ── BREADCRUMB ── */}
      <div className="relative z-10 px-4 sm:px-8 pt-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/portfolio" className="hover:text-white/70 transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-white/80">{project.title}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative z-10 px-4 sm:px-8 pt-10 pb-0 max-w-7xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-5 ${project.tagColor}`}
            >
              {project.tag}
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1] mb-3">
              {project.title}
            </h1>
            <p className="text-white/50 text-lg mb-2">{project.subtitle}</p>
            <p className="text-white/30 text-sm mb-8">
              Client:{" "}
              <span className="text-white/60 font-medium">{project.client}</span>
            </p>

            {/* Meta info cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Calendar, label: "Year", value: project.year },
                { icon: Clock, label: "Duration", value: project.duration },
                { icon: Users, label: "Team Size", value: project.teamSize },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className="w-4 h-4 text-white/30 mb-2" />
                  <div className="text-white font-bold text-base">{value}</div>
                  <div className="text-white/30 text-[11px] mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${project.accentColor} hover:opacity-90 transition-opacity shadow-lg`}
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <PlayCircle className="w-4 h-4" />
                  Play Store
                </a>
              )}
              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  App Store
                </a>
              )}
            </div>
          </div>

          {/* Right — screenshot */}
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-3xl blur-2xl opacity-20"
              style={{ background: `linear-gradient(135deg, ${project.glowColor}, transparent)` }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={800}
                className="w-full h-auto"
              />
              {/* Floating stat badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                <div className="text-2xl font-black text-white">{project.stats[0].value}</div>
                <div className="text-white/40 text-xs">{project.stats[0].label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="relative z-10 px-4 sm:px-8 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center hover:border-white/20 transition-colors"
            >
              <div
                className={`text-4xl font-black bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent mb-1`}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="relative z-10 px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3 block">
              Project Overview
            </span>
            <p className="text-white/60 text-lg leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
              The Challenge
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
              Our Solution
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES + TECH STACK ── */}
      <section className="relative z-10 px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5 block">
              Key Features
            </span>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5 block">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${t.color}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="relative z-10 px-4 sm:px-8 py-14 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2 block">
            Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Results That{" "}
            <span
              className={`bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}
            >
              Speak for Themselves
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {project.results.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-white/20 transition-colors group"
            >
              <TrendingUp className="w-5 h-5 text-white/20 mb-3 group-hover:text-white/40 transition-colors" />
              <div
                className={`text-3xl font-black bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent mb-2`}
              >
                {r.metric}
              </div>
              <p className="text-white/40 text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="relative z-10 px-4 sm:px-8 py-10 pb-20 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{ background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)` }}
          />
          <Star className="w-6 h-6 text-yellow-400 mx-auto mb-4 relative z-10" />
          <blockquote className="relative z-10 text-white/70 text-lg leading-relaxed italic mb-6 max-w-2xl mx-auto">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="relative z-10">
            <div className="font-bold text-white text-sm">{project.testimonial.author}</div>
            <div className="text-white/30 text-xs mt-0.5">{project.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT CTA ── */}
      <section className="relative z-10 px-4 sm:px-8 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-7">
          <div>
            <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">
              Ready to build something great?
            </div>
            <div className="text-white font-bold text-xl">
              Let&apos;s discuss your project
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${project.accentColor} hover:opacity-90 transition-opacity`}
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}