"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowUpRight, TrendingUp, Eye, Users, Star, Box, Code2, Globe, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

// ─── Types ────────────────────────────────────────────────────────────────────
type StatKey = "interaction" | "visibility" | "growth" | "satisfaction";

interface Stat {
  key: StatKey;
  value: string;
  label: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  tech: string[];
  image: string;
  description: string;
  stats: Stat[];
  link?: string;
  slug?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 0,
    title: "BitDelta",
    category: "Crypto Exchange",
    industry: "Fintech",
    tech: ["React", "Node.js", "Flutter"],
    image: "/images/glubery_B2B.jpg",
    description:
      "A comprehensive exchange platform with advanced trading engine supporting spot and derivatives trading across 130+ countries. BitDelta serves over 2 million active users with enterprise-grade security.",
    stats: [
      { key: "interaction", value: "2M+", label: "Active Users" },
      { key: "visibility", value: "130+", label: "Countries" },
    ],
    slug: "bitdelta",
  },
  {
    id: 1,
    title: "E-commerce Platform for Wine & Liquor Stores",
    category: "E-commerce",
    industry: "Retail",
    tech: ["Laravel", "Angular", "MySQL"],
    image: "/images/easydrink.jpg",
    description:
      "We crafted the EasydrinkbyGrutex wine shop eCommerce website from scratch. Started with custom UI design in Figma and frontend in Angular. Backend development was done using Laravel for smooth performance and scalability.",
    stats: [
      { key: "interaction", value: "60%", label: "Interaction" },
      { key: "visibility", value: "60%", label: "Visibility" },
    ],
    slug: "ecommerce-wine-liquor",
  },
  {
    id: 2,
    title: "Ayurvedic Product E-commerce",
    category: "E-commerce",
    industry: "Healthcare",
    tech: ["Shopify", "React", "Next.js"],
    image: "/images/drsany_ayurvedic.jpg",
    description:
      "DrSany.com is a premium shopify-backed platform offering a robust product selling system, efficient management features, and expert SEO strategies.",
    stats: [
      { key: "interaction", value: "60%", label: "Interaction" },
      { key: "visibility", value: "75%", label: "Visibility" },
    ],
    slug: "ayurvedic-ecommerce",
  },
  {
    id: 3,
    title: "Real Estate & Lead Gen Portal",
    category: "Web Development",
    industry: "Real Estate",
    tech: ["Next.js", "TypeScript", "Laravel"],
    image: "/images/glubery_B2B.jpg",
    description:
      "A comprehensive real estate platform with advanced search, virtual tours, and CRM integration for lead generation.",
    stats: [
      { key: "growth", value: "80%", label: "Lead Growth" },
      { key: "visibility", value: "55%", label: "Visibility" },
    ],
    slug: "real-estate-portal",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "Mobile App",
    industry: "Food and Beverage",
    tech: ["Flutter", "Firebase", "Node.js"],
    image: "/images/easydrink.jpg",
    description:
      "Cross-platform Flutter application with real-time tracking, push notifications, and multi-restaurant support.",
    stats: [
      { key: "satisfaction", value: "4.8★", label: "App Store Rating" },
      { key: "growth", value: "50+", label: "Restaurant Partners" },
    ],
    slug: "food-delivery-app",
  },
  {
    id: 5,
    title: "Immigration Suite & CRS Calculator",
    category: "Web Development",
    industry: "Legal",
    tech: ["WordPress", "PHP", "MySQL"],
    image: "/images/drsany_ayurvedic.jpg",
    description:
      "A specialized tool suite for Global Vision Immigration including complex calculators and automated assessment flows.",
    stats: [
      { key: "interaction", value: "90%", label: "Form Completion" },
      { key: "visibility", value: "70%", label: "Traffic Lift" },
    ],
    slug: "immigration-tools",
  },
  {
    id: 6,
    title: "Logistics Freight Management",
    category: "Web Development",
    industry: "Logistics",
    tech: ["Next.js", "RTK Query", "Tailwind CSS"],
    image: "/images/glubery_B2B.jpg",
    description:
      "A multi-step shipment management platform featuring quote generation and real-time shipment monitoring.",
    stats: [
      { key: "growth", value: "65%", label: "Time Saved" },
      { key: "visibility", value: "85%", label: "Satisfaction" },
    ],
    slug: "logistics-platform",
  },
];

// ─── Filter Lists ─────────────────────────────────────────────────────────────
const industryList = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
const categoryList = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// ─── Stat Icon Map ─────────────────────────────────────────────────────────────
const StatIcon: Record<StatKey, React.ElementType> = {
  interaction: Users,
  visibility: Eye,
  growth: TrendingUp,
  satisfaction: Star,
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"industries" | "technology">("industries");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeTab === "industries") {
        return activeIndustry === "All" || p.industry === activeIndustry;
      } else {
        return activeCategory === "All" || p.category === activeCategory;
      }
    });
  }, [activeTab, activeIndustry, activeCategory]);

  return (
    <main className="bg-[#FDFDFF] min-h-screen pt-20 overflow-x-hidden text-slate-900 selection:bg-blue-600/10">
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-blue-100/40 rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[140px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-blue-600/5 rounded-full" />
      </div>

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative pt-32 pb-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl mb-12 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-blue-600">Selected Works</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-10 leading-[0.9]"
            >
              The More We Know <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">You,</span><br />
              the More We <span className="relative inline-block italic">
                Can Do.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "110%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-4 -left-2 h-2 bg-blue-600/10 -z-10 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 text-xl md:text-2xl max-w-3xl leading-relaxed font-light"
            >
              Transforming complex visions into high-end digital products. Explore our institutional capabilities across global industries.
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FILTER SECTION ────────────────────────────────────────────── */}
      <section className="sticky top-20 z-40 bg-white/60 backdrop-blur-2xl border-y border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            <div className="flex p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 w-fit">
              {(["industries", "technology"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-8 py-3 rounded-xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${activeTab === tab
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-bg-v2"
                      className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-lg shadow-blue-600/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab === "industries" ? "Industries" : "Technology"}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence mode="popLayout">
                {(activeTab === "industries" ? industryList : categoryList).map((f) => {
                  const isActive = (activeTab === "industries" ? activeIndustry : activeCategory) === f;
                  return (
                    <motion.button
                      key={f}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => (activeTab === "industries" ? setActiveIndustry(f) : setActiveCategory(f))}
                      className={`px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest border transition-all duration-300 ${isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10"
                        : "bg-white text-slate-500 border-slate-200 hover:border-blue-600 hover:text-blue-600"
                        }`}
                    >
                      {f}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:gap-20">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`border-b border-solid border-gray-200 pb-10 lg:pb-20 flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center group`}
              >
                {/* Image Container */}
                <div className="relative w-full lg:w-3/5 rounded-[4rem] overflow-hidden bg-slate-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-700 group-hover:shadow-[0_60px_120px_-30px_rgba(37,99,235,0.15)] group-hover:border-blue-200">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative aspect-[16/10]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 grayscale-20 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent" />
                  </motion.div>

                  {/* Floating Badges */}
                  <div className="absolute top-10 left-10 flex gap-4">
                    <div className="px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl text-[10px] font-black text-slate-900 tracking-[0.2em] uppercase border border-white">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-5 py-2 rounded-xl bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-xl">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-2/5 flex flex-col items-start px-4">
                  <div className="w-16 h-1.5 mb-10 bg-blue-600 rounded-full" />
                  <p className="text-blue-600 text-xs font-black tracking-[0.4em] mb-6 uppercase">Institutional Transformation</p>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 leading-[1.6] text-xl mb-12 font-light italic">
                    &quot;{project.description}&quot;
                  </p>

                  <div className="grid grid-cols-2 gap-10 w-full mb-14">
                    {project.stats.map(stat => {
                      const Icon = StatIcon[stat.key];
                      return (
                        <div key={stat.label} className="flex items-center gap-5 group/stat">
                          <div className="w-14 h-14 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover/stat:bg-blue-600 group-hover/stat:text-white transition-all duration-500 shadow-sm">
                            <Icon className="w-6 h-6 text-blue-600 group-hover/stat:text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group/link w-full py-6 px-10 rounded-3xl bg-slate-900 text-white font-black text-sm tracking-[0.2em] uppercase text-center flex items-center justify-center gap-4 hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/10 hover:shadow-blue-600/30 active:scale-95"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -skew-y-2 border-y border-slate-800" />
        <div className="max-w-5xl mx-auto relative text-center z-10">
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 rounded-[2.5rem] bg-white flex items-center justify-center shadow-3xl transform -rotate-6">
                <Rocket className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[0.9]">
              Ready to <span className="text-blue-400">Scale?</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              We engineer enterprise-grade solutions for global visionaries. Let&apos;s leverage high-performance tech to amplify your business.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link
                href="/contact-us"
                className="w-full md:w-auto px-16 py-7 rounded-4xl bg-white text-slate-900 font-black text-xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:-translate-y-1"
              >
                Launch Workshop
              </Link>
              <Link
                href="/services"
                className="w-full md:w-auto px-16 py-7 rounded-4xl bg-slate-800 text-white font-black text-xl hover:bg-slate-700 transition-all border border-slate-700"
              >
                Capabilities
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER-ISH STATS ── */}
      <section className="py-32 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { label: "High-End Projects", value: "250+", icon: Box },
              { label: "Nations Served", value: "12+", icon: Globe },
              { label: "Performance Code", value: "4M+", icon: Code2 },
              { label: "Elite Standard", value: "8+", icon: Sparkles },
            ].map(stat => (
              <div key={stat.label} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
                    <stat.icon className="w-6 h-6 text-blue-600/30 group-hover:text-blue-600/60" />
                  </div>
                </div>
                <p className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
