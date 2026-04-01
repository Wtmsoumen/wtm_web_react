"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
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
  Quote,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    image: "/images/glubery_B2B.jpg",
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
      { label: "React", color: "bg-blue-50 text-blue-600 border-blue-100" },
      { label: "Next.js", color: "bg-slate-50 text-slate-600 border-slate-100" },
      { label: "Flutter", color: "bg-blue-50 text-blue-600 border-blue-100" },
      { label: "Node.js", color: "bg-green-50 text-green-600 border-green-100" },
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
    accentColor: "from-blue-600 to-indigo-600",
    glowColor: "rgba(37, 99, 235, 0.1)",
  },
};

// Generic fallback
function buildGenericProject(slug: string): Project {
  const title = slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  return {
    slug,
    tag: "Digital Solutions",
    tagColor: "bg-blue-600",
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
      { label: "Next.js", color: "bg-slate-50 text-slate-600 border-slate-100" },
      { label: "PostgreSQL", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
      { label: "AWS", color: "bg-orange-50 text-orange-600 border-orange-100" },
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
    accentColor: "from-blue-600 to-purple-600",
    glowColor: "rgba(37, 99, 235, 0.05)",
  };
}

export default function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;
  const project: Project = projects[slug] ?? buildGenericProject(slug);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <main className="min-h-screen bg-[#FDFDFF] text-slate-900 pt-24 overflow-x-hidden selection:bg-blue-600/10">
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-[180px] opacity-10"
          style={{ background: project.accentColor.includes('from-') ? 'blue' : project.glowColor }}
        />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <Link
            href="/portfolio"
            className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-all w-fit py-2.5 px-5 rounded-xl hover:bg-blue-50 border border-transparent"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-widest uppercase">Portfolio Gallery</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-white shadow-xl ${project.tagColor} shadow-blue-500/20`}>
                  {project.tag}
                </span>
                <div className="h-px w-12 bg-slate-200" />
                <span className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">Case Study {project.year}</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
                {project.title}
              </h1>
              <p className="text-2xl md:text-3xl font-light text-slate-500 mb-14 border-l-4 border-blue-600 pl-8 leading-relaxed max-w-xl">
                {project.subtitle}
              </p>

              <div className="grid grid-cols-3 gap-10 mb-14 py-10 border-y border-slate-100">
                {[
                  { icon: Calendar, label: "Released", value: project.year },
                  { icon: Clock, label: "Duration", value: project.duration },
                  { icon: Users, label: "Team", value: project.teamSize },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] leading-none">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900 leading-none whitespace-nowrap">{item.value}</p>
                  </div>
                ))}
              </div>

              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  className={`inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-slate-900 text-white font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-slate-900/10 hover:shadow-blue-500/20`}
                >
                  Visit Live Project
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/5 to-transparent z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-1000"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Dynamic Stats Grid */}
        <section className="bg-slate-50/50 border-y border-slate-100 relative mb-32 overflow-hidden py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
              {project.stats.map((stat, i) => (
                <ScrollReveal key={i}>
                  <div className="text-center group">
                    <div className={`text-6xl md:text-7xl font-black bg-linear-to-r ${project.accentColor} bg-clip-text text-transparent mb-5 group-hover:scale-110 transition-transform duration-500 tracking-tighter`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 flex flex-col gap-24">
              <ScrollReveal>
                <div className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Zap className="w-24 h-24 text-blue-600" />
                  </div>
                  <h3 className="text-xs font-bold text-blue-600 tracking-[0.4em] uppercase mb-10">The Challenge</h3>
                  <p className="text-2xl font-light text-slate-700 leading-relaxed italic">
                    &quot;{project.challenge}&quot;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="px-4">
                  <h3 className="text-xs font-bold text-slate-400 tracking-[0.4em] uppercase mb-12">Core Technology</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={`px-6 py-3 rounded-2xl border text-sm font-bold transition-all hover:-translate-y-1 ${tech.color} shadow-sm`}>
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-20">
              <ScrollReveal>
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-blue-600 tracking-[0.4em] uppercase mb-10">Strategic Engineering</h3>
                  <p className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                    {project.solution}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-8">
                {project.features.map((feature, i) => (
                  <ScrollReveal key={i}>
                    <div className="flex items-start gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-slate-600 font-bold text-lg leading-snug">{feature}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact / Results */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-40">
          <div className="relative p-16 md:p-32 rounded-[5rem] bg-slate-900 overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

            <div className="text-center mb-24 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Quantifiable Results</h2>
              <div className="h-2 w-24 bg-blue-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center relative z-10">
              {project.results.map((result, i) => (
                <ScrollReveal key={i}>
                  <div className="flex flex-col gap-5">
                    <div className={`text-6xl font-black bg-linear-to-r ${project.accentColor} bg-clip-text text-transparent tracking-tighter`}>
                      {result.metric}
                    </div>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed px-6">{result.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-48 mb-32 relative text-center">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.03]">
            <Quote className="w-120 h-120 text-slate-900" />
          </div>
          <ScrollReveal>
            <p className="text-4xl md:text-6xl font-light text-slate-900 italic mb-20 leading-[1.2]">
              &quot;{project.testimonial.quote}&quot;
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-1.5 bg-blue-600 mb-10 rounded-full" />
              <p className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{project.testimonial.author}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">{project.testimonial.role}</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-40">
          <div className="p-16 md:p-32 rounded-[5rem] bg-blue-600 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.25)]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-14 leading-[0.95] tracking-tight">
                Inspired by this project? <br />
                <span className="text-blue-100">Let&apos;s build yours next.</span>
              </h2>
              <Link
                href="/contact-us"
                className="inline-flex px-14 py-7 rounded-4xl bg-white text-blue-600 font-black text-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105 active:scale-95"
              >
                Start A Workshop
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  );
}

