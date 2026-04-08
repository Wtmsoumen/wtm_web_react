"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowUpRight, TrendingUp, Eye, Users, Star, Box, Code2, Globe, Rocket, ArrowRight, ChevronDown } from "lucide-react";
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
  industry?: string;
  tech?: string[];
  interaction?: number;
  visibility?: number;
  growth?: number;
  satisfaction?: number;
  image?: string;
  description: string;
  stats?: Stat[];
  link?: string;
  slug?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 0,
    title: "Virtuard",
    category: "Property Platform",
    industry: "Fintech",
    tech: ["Figma", "Laravel"],
    interaction: 75,
    visibility: 83,
    description: "Modern property selling platform with 360° virtual views. Built with Figma + Laravel. Mobile-friendly, scalable, and SEO-optimized.",
    image: "/images/portfolio/Virtuard.jpg",
    stats: [
      { key: "interaction", value: "75", label: "interaction" },
      { key: "visibility", value: "83", label: "visibility" },
    ],
    slug: "virtuard",
  },
  {
    id: 1,
    title: "Sky Dive",
    category: "Tandem Skydiving",
    industry: "Adventure",
    description: "High-performance WordPress website with immersive UI/UX. Delivered 72% traffic growth.",
    image: "/images/portfolio/skydive.jpg",
    interaction: 75,
    visibility: 83,
    stats: [
      { key: "interaction", value: "75", label: "interaction" },
      { key: "visibility", value: "83", label: "visibility" },
    ],
    slug: "sky-dive",
  },
  {
    id: 2,
    title: "Re-Energi",
    category: "Sustainable Energy",
    industry: "Energy",
    description: "SEO-optimized WordPress site with modern UI reflecting eco-friendly mission.",
    image: "/images/portfolio/reenergi.jpg",
    interaction: 76,
    visibility: 88,
    stats: [
      { key: "interaction", value: "76", label: "interaction" },
      { key: "visibility", value: "88", label: "visibility" },
    ],
    slug: "re-energi",
  },
  {
    id: 3,
    title: "Neuro Apply",
    category: "Psychological Assessment",
    industry: "Healthcare",
    description: "Clean, intuitive WordPress platform with strong SEO performance.",
    image: "/images/portfolio/neuroapply.jpg",
    interaction: 75,
    visibility: 89,
    stats: [
      { key: "interaction", value: "75", label: "interaction" },
      { key: "visibility", value: "89", label: "visibility" },
    ],
    slug: "neuro-apply",
  },
  {
    id: 4,
    title: "Enigma Psychometry",
    category: "Online Education",
    industry: "Education",
    description: "Modern e-learning website with responsive design and SEO optimization.",
    image: "/images/portfolio/enigma.jpg",
    interaction: 70,
    visibility: 89,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "89", label: "visibility" },
    ],
    slug: "enigma-psychometry",
  },
  {
    id: 5,
    title: "Canadian Flyers International College",
    category: "Flight Training",
    industry: "Aviation",
    description: "Professional aviation training website with 80%+ traffic growth.",
    image: "/images/portfolio/canadianflyers.jpg",
    interaction: 82,
    visibility: 93,
    stats: [
      { key: "interaction", value: "82", label: "interaction" },
      { key: "visibility", value: "93", label: "visibility" },
    ],
    slug: "canadian-flyers",
  },
  {
    id: 6,
    title: "Brigient",
    category: "Cybersecurity",
    industry: "Technology",
    description: "Secure and performance-driven website with modern UI/UX.",
    image: "/images/portfolio/brigient.jpg",
    interaction: 79,
    visibility: 86,
    stats: [
      { key: "interaction", value: "79", label: "interaction" },
      { key: "visibility", value: "86", label: "visibility" },
    ],
    slug: "brigient",
  },
  {
    id: 7,
    title: "Balaji Shipping Agency",
    category: "Transport Solutions",
    industry: "Logistics",
    description: "SEO-optimized logistics website boosting online reach.",
    image: "/images/portfolio/balajishippingagency.jpg",
    interaction: 72,
    visibility: 80,
    stats: [
      { key: "interaction", value: "72", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "balaji-shipping",
  },
  {
    id: 8,
    title: "Ahmad Law",
    category: "Legal Services",
    industry: "Legal",
    description: "Professional legal website with strong SEO and UX.",
    image: "/images/portfolio/ahmadlaw.jpg",
    interaction: 79,
    visibility: 83,
    stats: [
      { key: "interaction", value: "79", label: "interaction" },
      { key: "visibility", value: "83", label: "visibility" },
    ],
    slug: "ahmad-law",
  },
  {
    id: 9,
    title: "Accoun Tax Australia",
    category: "Accounting & Tax",
    industry: "Finance",
    description: "Clean and modern financial website with strong traffic growth.",
    image: "/images/portfolio/accountaxaustralia.jpg",
    interaction: 82,
    visibility: 88,
    stats: [
      { key: "interaction", value: "82", label: "interaction" },
      { key: "visibility", value: "88", label: "visibility" },
    ],
    slug: "accoun-tax",
  },
  {
    id: 10,
    title: "Accord Attorneys & Solicitors",
    category: "Legal Services",
    industry: "Legal",
    description: "Mobile-optimized legal website with improved visibility.",
    image: "/images/portfolio/accordattorneys.jpg",
    interaction: 68,
    visibility: 75,
    stats: [
      { key: "interaction", value: "68", label: "interaction" },
      { key: "visibility", value: "75", label: "visibility" },
    ],
    slug: "accord-attorneys",
  },
  {
    id: 11,
    title: "Pre Drinks Bar",
    category: "Hospitality",
    industry: "Retail",
    description: "Flexible bar experience website with strong engagement growth.",
    image: "/images/portfolio/pre-drimks.jpg",
    interaction: 85,
    visibility: 92,
    stats: [
      { key: "interaction", value: "85", label: "interaction" },
      { key: "visibility", value: "92", label: "visibility" },
    ],
    slug: "pre-drinks-bar",
  },
  {
    id: 12,
    title: "Lj Morelli Films",
    category: "Videography",
    industry: "Media",
    description: "Custom CRM-integrated filmmaking website.",
    image: "/images/portfolio/lj.jpg",
    interaction: 85,
    visibility: 70,
    stats: [
      { key: "interaction", value: "85", label: "interaction" },
      { key: "visibility", value: "70", label: "visibility" },
    ],
    slug: "lj-morelli-films",
  },
  {
    id: 13,
    title: "Cerchio Lighting",
    category: "Lighting Solutions",
    industry: "Manufacturing",
    description: "Modern lighting brand website with SEO growth.",
    image: "/images/portfolio/cerchiolighting.jpg",
    interaction: 70,
    visibility: 86,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "86", label: "visibility" },
    ],
    slug: "cerchio-lighting",
  },
  {
    id: 14,
    title: "Byiba Lights",
    category: "Lighting Solutions",
    industry: "Manufacturing",
    description: "Stylish lighting website with 80%+ traffic growth.",
    image: "/images/portfolio/byiba.jpg",
    interaction: 80,
    visibility: 73,
    stats: [
      { key: "interaction", value: "80", label: "interaction" },
      { key: "visibility", value: "73", label: "visibility" },
    ],
    slug: "byiba-lights",
  },
  {
    id: 15,
    title: "Bullard Collection",
    category: "Security & Lighting",
    industry: "Manufacturing",
    description: "Premium solutions website with responsive design.",
    image: "/images/portfolio/bullardcollaction.jpg",
    interaction: 80,
    visibility: 70,
    stats: [
      { key: "interaction", value: "80", label: "interaction" },
      { key: "visibility", value: "70", label: "visibility" },
    ],
    slug: "bullard-collection",
  },
  {
    id: 16,
    title: "Bullard Bollards",
    category: "Industrial Products",
    industry: "Manufacturing",
    description: "SEO-driven product website with strong traffic increase.",
    image: "/images/portfolio/bullard.jpg",
    interaction: 70,
    visibility: 86,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "86", label: "visibility" },
    ],
    slug: "bullard-bollards",
  },
  {
    id: 17,
    title: "aib4d",
    category: "Education System",
    industry: "Education",
    description: "Advanced school management system website.",
    image: "/images/portfolio/aib4d.jpg",
    interaction: 70,
    visibility: 82,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "82", label: "visibility" },
    ],
    slug: "aib4d",
  },
  {
    id: 18,
    title: "Dr. Bchara",
    category: "Real Estate / Clinic",
    industry: "Healthcare",
    description: "Clean modern website with performance optimization.",
    image: "/images/glubery_B2B.jpg",
    interaction: 62,
    visibility: 74,
    stats: [
      { key: "interaction", value: "62", label: "interaction" },
      { key: "visibility", value: "74", label: "visibility" },
    ],
    slug: "dr-bchara",
  },
  {
    id: 19,
    title: "Dubai Real",
    category: "Interior Design",
    industry: "Real Estate",
    description: "Premium design-focused real estate website.",
    image: "/images/Dubai-UAE.jpg",
    interaction: 65,
    visibility: 80,
    stats: [
      { key: "interaction", value: "65", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "dubai-real",
  },
  {
    id: 20,
    title: "Europe Sports Tour",
    category: "Travel",
    industry: "Travel",
    description: "European sports travel platform with SEO growth.",
    image: "/images/portfolio/tourseurosports.jpg",
    interaction: 70,
    visibility: 85,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "85", label: "visibility" },
    ],
    slug: "europe-sports-tour",
  },
  {
    id: 21,
    title: "The Europe Tours",
    category: "Travel",
    industry: "Travel",
    description: "Modern travel website with improved inquiries.",
    image: "/images/portfolio/theeuropetours.jpg",
    interaction: 65,
    visibility: 80,
    stats: [
      { key: "interaction", value: "65", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "the-europe-tours",
  },
  {
    id: 22,
    title: "Interior Design Company",
    category: "Construction",
    industry: "Real Estate",
    description: "Mobile-first redesign with 40%+ traffic growth.",
    image: "/images/portfolio/Global-Lifestyle-Interior.jpg",
    interaction: 40,
    visibility: 75,
    stats: [
      { key: "interaction", value: "40", label: "interaction" },
      { key: "visibility", value: "75", label: "visibility" },
    ],
    slug: "interior-design-company",
  },
  {
    id: 23,
    title: "Total IRP",
    category: "Trucking Compliance",
    industry: "Logistics",
    description: "Compliance solutions platform for US trucking.",
    image: "/images/portfolio/totalirp.jpg",
    interaction: 70,
    visibility: 90,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "90", label: "visibility" },
    ],
    slug: "total-irp",
  },
  {
    id: 24,
    title: "MusicMolecule",
    category: "E-commerce + Learning",
    industry: "Education",
    description: "WooCommerce + booking integrated platform.",
    image: "/images/portfolio/musicmolecule.jpg",
    interaction: 65,
    visibility: 70,
    stats: [
      { key: "interaction", value: "65", label: "interaction" },
      { key: "visibility", value: "70", label: "visibility" },
    ],
    slug: "music-molecule",
  },
  {
    id: 25,
    title: "EasydrinkbyGrutas",
    category: "E-commerce",
    industry: "Retail",
    description: "Wine shop platform built with Laravel + Angular.",
    image: "/images/portfolio/easydrink.jpg",
    interaction: 60,
    visibility: 60,
    stats: [
      { key: "interaction", value: "60", label: "interaction" },
      { key: "visibility", value: "60", label: "visibility" },
    ],
    slug: "easydrinkbygrutas",
  },
  {
    id: 26,
    title: "Anytime Tots",
    category: "Parenting CMS",
    industry: "Media",
    description: "SEO-driven parenting content platform.",
    image: "/images/portfolio/anytimetots.jpg",
    interaction: 70,
    visibility: 85,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "85", label: "visibility" },
    ],
    slug: "anytime-tots",
  },
  {
    id: 27,
    title: "Joli Best View Cafe",
    category: "Hospitality",
    industry: "Retail",
    description: "Restaurant website with booking system and CMS.",
    image: "/images/portfolio/jolibestviewcafe.jpg",
    interaction: 60,
    visibility: 80,
    stats: [
      { key: "interaction", value: "60", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "joli-cafe",
  },
  {
    id: 28,
    title: "DrSany",
    category: "E-commerce Ayurvedic",
    industry: "Healthcare",
    description: "Shopify-based Ayurvedic product platform.",
    image: "/images/portfolio/drsany.jpg",
    interaction: 60,
    visibility: 75,
    stats: [
      { key: "interaction", value: "60", label: "interaction" },
      { key: "visibility", value: "75", label: "visibility" },
    ],
    slug: "drsany",
  },
  {
    id: 29,
    title: "SchooPed",
    category: "Education Recruitment",
    industry: "Education",
    description: "Teacher recruitment platform with filters and APIs.",
    image: "/images/portfolio/schooped.jpg",
    interaction: 65,
    visibility: 85,
    stats: [
      { key: "interaction", value: "65", label: "interaction" },
      { key: "visibility", value: "85", label: "visibility" },
    ],
    slug: "schooped",
  },
  {
    id: 30,
    title: "Glubery",
    category: "B2B E-commerce",
    industry: "Retail",
    description: "Office essentials platform with scalable system.",
    image: "/images/portfolio/glubery.jpg",
    interaction: 55,
    visibility: 90,
    stats: [
      { key: "interaction", value: "55", label: "interaction" },
      { key: "visibility", value: "90", label: "visibility" },
    ],
    slug: "glubery",
  },
  {
    id: 31,
    title: "Sattva Ayurved",
    category: "Healthcare",
    industry: "Healthcare",
    description: "Ayurvedic clinic website with SEO focus.",
    image: "/images/portfolio/sattvaayurved.jpg",
    interaction: 65,
    visibility: 98,
    stats: [
      { key: "interaction", value: "65", label: "interaction" },
      { key: "visibility", value: "98", label: "visibility" },
    ],
    slug: "sattva-ayurved",
  },
  {
    id: 32,
    title: "Flight Enquiry Platform",
    category: "Travel",
    industry: "Travel",
    description: "Flight booking and enquiry platform with SEO ranking.",
    image: "/images/portfolio/cheapbusinessclass.jpg",
    interaction: 70,
    visibility: 80,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "flight-enquiry",
  },
  {
    id: 33,
    title: "JTS Innovations",
    category: "Service CMS",
    industry: "Services",
    description: "Inquiry-based CMS platform for services.",
    image: "/images/portfolio/jtsinnovations.jpg",
    interaction: 78,
    visibility: 80,
    stats: [
      { key: "interaction", value: "78", label: "interaction" },
      { key: "visibility", value: "80", label: "visibility" },
    ],
    slug: "jts-innovations",
  },
  {
    id: 34,
    title: "Rimalinum",
    category: "E-commerce",
    industry: "Retail",
    description: "SEO-optimized WooCommerce platform.",
    image: "/images/portfolio/rimalinum.jpg",
    interaction: 70,
    visibility: 95,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "95", label: "visibility" },
    ],
    slug: "rimalinum",
  },
  {
    id: 35,
    title: "Whitebook World",
    category: "Custom E-commerce",
    industry: "Retail",
    description: "Scalable photo frame platform with microservices.",
    image: "/images/portfolio/whitebook.jpg",
    interaction: 78,
    visibility: 89,
    stats: [
      { key: "interaction", value: "78", label: "interaction" },
      { key: "visibility", value: "89", label: "visibility" },
    ],
    slug: "whitebook-world",
  },
  {
    id: 36,
    title: "PG Hostel Mess",
    category: "Booking Platform",
    industry: "Services",
    description: "Hostel booking system with React + Laravel.",
    image: "/images/portfolio/pghostelmess.jpg",
    interaction: 56,
    visibility: 79,
    stats: [
      { key: "interaction", value: "56", label: "interaction" },
      { key: "visibility", value: "79", label: "visibility" },
    ],
    slug: "pg-hostel-mess",
  },
  {
    id: 37,
    title: "ABC Learnings",
    category: "LMS Platform",
    industry: "Education",
    description: "Online learning system with dashboards and SEO.",
    image: "/images/portfolio/abclearnings.jpg",
    interaction: 70,
    visibility: 97,
    stats: [
      { key: "interaction", value: "70", label: "interaction" },
      { key: "visibility", value: "97", label: "visibility" },
    ],
    slug: "abc-learnings",
  }
];

// ─── Filter Lists ─────────────────────────────────────────────────────────────
const industryList = ["All", ...Array.from(new Set(projects.map((p) => p.industry).filter((i): i is string => !!i)))];
const categoryList = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter((c): c is string => !!c)))];

// ─── Stat Icon Map ─────────────────────────────────────────────────────────────
const StatIcon: Record<StatKey, React.ElementType> = {
  interaction: Users,
  visibility: Eye,
  growth: TrendingUp,
  satisfaction: Star,
};

// ─── FilterSelect Component ───────────────────────────────────────────────────
const FilterSelect = ({
  options,
  value,
  onChange,
  placeholder
}: {
  options: string[],
  value: string,
  onChange: (val: string) => void,
  placeholder: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-w-[240px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white border border-slate-300 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-900 shadow-md hover:border-blue-600 transition-all group"
      >
        <span className={value === "All" ? "text-slate-400" : "text-slate-900"}>
          {value === "All" ? placeholder : value}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden z-50 backdrop-blur-3xl"
            >
              <div className="max-h-[350px] overflow-y-auto py-3 scrollbar-thin scrollbar-thumb-slate-200">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-7 py-3.5 text-[11px] font-black uppercase tracking-widest transition-all ${value === opt
                      ? "bg-blue-600/5 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
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
        <section className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl mb-12 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#9e52d8]" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#9e52d8]">Selected Works</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-10 leading-[0.9]"
            >
              The More We Know <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">You,</span><br />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-solid border-gray-300">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            <div className="flex p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 w-fit">
              {(["industries", "technology"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-8 py-3 rounded-xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${activeTab === tab
                    ? "text-white bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)]"
                    : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-bg-v2"
                      className="absolute inset-0 bg-[blue-600] rounded-xl -z-10 shadow-lg shadow-blue-600/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab === "industries" ? "Industries" : "Technology"}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <FilterSelect
                options={activeTab === "industries" ? industryList : categoryList}
                value={activeTab === "industries" ? activeIndustry : activeCategory}
                onChange={(val) => activeTab === "industries" ? setActiveIndustry(val) : setActiveCategory(val)}
                placeholder={activeTab === "industries" ? "Select Industry" : "Select Category"}
              />

              {(activeIndustry !== "All" || activeCategory !== "All") && (
                <button
                  onClick={() => {
                    setActiveIndustry("All");
                    setActiveCategory("All");
                  }}
                  className="text-[10px] font-black uppercase tracking-widest text-[#9e52d8] hover:text-blue-600 transition-colors"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:gap-20">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id ?? `proj-${i}`}
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
                    className="relative aspect-16/10"
                  >
                    <img
                      src={project.image || "/images/glubery_B2B.jpg"}
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
                    {project.tech?.map(t => (
                      <span key={t} className="px-5 py-2 rounded-xl bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-xl">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-2/5 flex flex-col items-start px-4">
                  <div className="w-16 h-1.5 mb-10 bg-blue-600 rounded-full" />
                  <p className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent text-md font-bold tracking-widest mb-6 uppercase">Institutional Transformation</p>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight group-hover:text-[#9e52d8] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-black leading-[1.6] text-xl mb-12 font-light italic">
                    &quot;{project.description}&quot;
                  </p>

                  <div className="grid grid-cols-2 gap-10 w-full mb-14">
                    {project.stats?.map(stat => {
                      const Icon = StatIcon[stat.key];
                      return (
                        <div key={stat.label} className="flex items-center gap-5 group/stat">
                          <div className="w-14 h-14 rounded-[1.25rem] bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover/stat:bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] group-hover/stat:text-white transition-all duration-500 shadow-sm">
                            {Icon && <Icon className="w-6 h-6 text-[#9e52d8] group-hover/stat:text-white" />}
                          </div>
                          <div>
                            <p className="text-3xl font-black bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent tracking-tighter">{stat.value}</p>
                            <p className="text-[10px] font-black text-black/80 uppercase tracking-widest">{stat.label}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug || ""}`}
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
                <Rocket className="w-12 h-12 text-[#9e52d8]" />
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
                    <stat.icon className="w-6 h-6 text-[#9e52d8]/30 group-hover:text-[#9e52d8]/60" />
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
