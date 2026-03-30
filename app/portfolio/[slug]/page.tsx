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
import ScrollReveal from "../../components/ScrollReveal";

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

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    image: "/images/portfolio/portfolio1.jpg",
    links: {
      website: "https://bitdelta.com",
      playStore: "#",
      appStore: "#",
    },
    stats: [
      { value: "2M+", label: "Active Users" },
      { value: "130+", label: "Countries Served" },
      { value: "100+", label: "Trading Pairs" },
      { value: "24/7", label: "Availability" },
    ],
    challenge:
      "BitDelta needed a high-performance exchange capable of handling millions of concurrent trades with sub-millisecond latency.",
    solution:
      "We engineered a microservices architecture with a custom matching engine, real-time WebSocket feeds, and a React-based trading terminal.",
    features: [
      "Real-time order book & trade history",
      "Spot & derivatives trading engine",
      "KYC/AML compliance workflow",
      "Multi-currency wallet integration",
      "Advanced charting with TradingView",
    ],
    techStack: [
      { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
      { label: "Next.js", color: "bg-white/5 text-white/60 border-white/10" },
      { label: "Flutter", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { label: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    ],
    results: [
      { metric: "2M+", desc: "Active traders onboarded within 12 months" },
      { metric: "99.98%", desc: "Uptime SLA maintained throughout" },
      { metric: "<50ms", desc: "Average order execution latency" },
      { metric: "4.8★", desc: "App store rating across platforms" },
    ],
    testimonial: {
      quote:
        "WebTechnoMind delivered a world-class exchange platform that exceeded our expectations in every way.",
      author: "Alex R.",
      role: "CTO, BitDelta Global",
    },
    accentColor: "from-blue-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.3)",
  },
};

// Generic fallback
function buildGenericProject(slug: string): Project {
  const title = slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  return {
    slug,
    tag: "Digital Solutions",
    tagColor: "bg-red-600",
    title,
    subtitle: "High-performance digital ecosystem",
    client: `${title} Global`,
    year: "2024",
    duration: "10 months",
    teamSize: "15+",
    description: `${title} is a scalable enterprise platform designed to streamline operations and enhance user productivity through modern tech.`,
    image: "/images/portfolio/portfolio1.jpg",
    links: { website: "#" },
    stats: [
      { value: "500K+", label: "System Users" },
      { value: "4.9★", label: "User Rating" },
      { value: "99.9%", label: "System Uptime" },
      { value: "15+", label: "Countries" },
    ],
    challenge: "Developing a robust infrastructure capable of real-time processing while maintaining high security standards.",
    solution: "Implementation of a serverless architecture combined with advanced caching and edge computing for peak performance.",
    features: [
      "Advanced Security protocols",
      "Real-time synchronization",
      "Automated workflows",
      "Comprehensive analytics",
    ],
    techStack: [
      { label: "Next.js", color: "bg-white/5 text-white/60 border-white/10" },
      { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { label: "AWS", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    ],
    results: [
      { metric: "500K+", desc: "Users successfully migrated to platform" },
      { metric: "0", desc: "Security breaches recorded since launch" },
      { metric: "40%", desc: "Increase in operational efficiency" },
    ],
    testimonial: {
      quote: "A truly exceptional transformation for our digital landscape. The team was fantastic.",
      author: "Project Stakeholder",
      role: "Executive Director",
    },
    accentColor: "from-red-500 to-orange-600",
    glowColor: "rgba(239,68,68,0.2)",
  };
}

export default async function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project = projects[slug] ?? buildGenericProject(slug);

  return (
    <main className="min-h-screen bg-[#080b14] text-white pt-24 overflow-x-hidden">

      {/* ── TOP GLOW ── */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0 opacity-40"
        style={{ background: project.glowColor }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <ScrollReveal>
          <div className="flex flex-col gap-8 mb-16" data-aos="fade-up">
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO PORTFOLIO
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 inline-block text-white ${project.tagColor}`}>
                  {project.tag}
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">{project.title}</h1>
                <p className="text-white/50 text-xl font-medium mb-12">{project.subtitle}</p>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: Calendar, label: "Year", value: project.year },
                    { icon: Clock, label: "Duration", value: project.duration },
                    { icon: Users, label: "Team Size", value: project.teamSize },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-4 py-1">
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.links.website && (
                    <a href={project.links.website} target="_blank" className={`bg-linear-to-r ${project.accentColor} text-white font-black px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-2xl`}>
                      VIEW PROJECT
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative overflow-hidden group" data-aos="fade-left">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 blur-[100px] opacity-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                  <Image src={project.image} alt={project.title} width={800} height={500} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-20 border-y border-white/5 mb-20">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className={`text-4xl font-black bg-linear-to-r ${project.accentColor} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Core Content */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1 flex flex-col gap-10">
              <div data-aos="fade-right">
                <h3 className="text-xs font-black text-white/30 tracking-widest uppercase mb-4">THE CHALLENGE</h3>
                <p className="text-white/60 leading-relaxed text-lg italic">&quot;{project.challenge}&quot;</p>
              </div>
              <div data-aos="fade-right">
                <h3 className="text-xs font-black text-white/30 tracking-widest uppercase mb-6">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={`px-4 py-2 rounded-lg border text-[11px] font-bold ${tech.color}`}>
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-12" data-aos="fade-left">
              <div>
                <h3 className="text-xs font-black text-white/30 tracking-widest uppercase mb-4">OUR SOLUTION</h3>
                <p className="text-white/70 text-xl leading-relaxed font-light">{project.solution}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-white/70 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Results Section */}
        <ScrollReveal>
          <div className="py-20 bg-linear-to-b from-white/[0.02] to-transparent rounded-[3rem] px-6 md:px-10 mb-20 border border-white/5">
            <div className="text-center mb-16" data-aos="fade-down">
              <h2 className="text-4xl font-black text-white">Tangible Impact</h2>
              <div className={`h-1.5 w-20 bg-linear-to-r ${project.accentColor} mx-auto mt-4 rounded-full`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className={`text-4xl font-black bg-linear-to-r ${project.accentColor} bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left duration-300`}>{result.metric}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial */}
        {/* <ScrollReveal> */}
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="relative">
            <span className="text-9xl text-white/5 absolute -top-10 left-0">&quot;</span>
            <p className="text-3xl text-white/80 font-light italic mb-10 leading-relaxed px-10">{project.testimonial.quote}</p>
            <div className="flex flex-col items-center">
              <p className="text-white font-black text-lg">{project.testimonial.author}</p>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{project.testimonial.role}</p>
            </div>
          </div>
        </div>
        {/* </ScrollReveal> */}

      </div>
    </main>
  );
}