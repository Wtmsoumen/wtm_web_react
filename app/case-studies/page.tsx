"use client";

import React, { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Smartphone,
  ShoppingCart,
  BookOpen,
  Plane,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  positive: boolean;
}

interface Phase {
  date: string;
  label: string;
  work: string[];
  stats: { label: string; value: string }[];
}

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  platform: "Google Ads" | "Meta Ads";
  industry: string;
  location?: string;
  icon: React.ElementType;
  background: string;
  challenge: string;
  keyMetrics: Metric[];
  phases: Phase[];
  winMetrics: { label: string; value: string; icon: React.ElementType }[];
  conclusion: string;
  tags: string[];
  images?: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "B2B SaaS Google Ads",
    category: "Workflow Automation SaaS",
    platform: "Google Ads",
    industry: "SaaS / Technology",
    icon: Zap,
    background:
      "A B2B SaaS company offering workflow automation solutions to mid-sized enterprises was burning ad spend with minimal results. With an average customer LTV of $10,000+, each lead was extremely valuable — yet they were generating just 18 leads per month at a CPL of $172.",
    challenge:
      "Campaigns ran on broad match without proper negative keywords, all traffic was driven to a non-optimized homepage, conversion tracking used vanity metrics like page scrolls, and ad copy was generic with no clear CTA.",
    keyMetrics: [
      { label: "Cost Per Lead", before: "$172.22", after: "$26.48", improvement: "84% reduction", positive: true },
      { label: "Lead Volume", before: "18 leads", after: "108 leads", improvement: "6x increase", positive: true },
      { label: "Conversion Rate", before: "0.58%", after: "3.78%", improvement: "6.5x improvement", positive: true },
      { label: "Monthly Spend", before: "$3,100", after: "$2,860", improvement: "Optimized budget", positive: true },
    ],
    phases: [
      {
        date: "May 2024",
        label: "Pre-Optimization",
        work: ["No optimization done"],
        stats: [
          { label: "Cost", value: "$3,100" },
          { label: "Conv. Rate", value: "0.58%" },
          { label: "Leads", value: "18" },
          { label: "CPL", value: "$172.22" },
        ],
      },
      {
        date: "July 2024",
        label: "Campaign Restructure",
        work: [
          "Rebuilt tracking via Google Tag Manager (trial signups, demo requests)",
          "Switched from broad match to phrase & exact match keywords",
          "Built negative keyword lists and tightly themed ad groups",
          "Wrote hyper-relevant ad copy with strong CTAs",
        ],
        stats: [
          { label: "Cost", value: "$2,540" },
          { label: "Conv. Rate", value: "1.26%" },
          { label: "Leads", value: "32" },
          { label: "CPL", value: "$79.37" },
        ],
      },
      {
        date: "August 2024",
        label: "Landing Pages + Refinement",
        work: [
          "Built dedicated landing pages per keyword theme",
          "Single CTA per page: 'Start Free Trial' or 'Book a Demo'",
          "Added testimonials, video walkthroughs, comparison tables",
          "Eliminated all distracting navigation",
        ],
        stats: [
          { label: "Cost", value: "$2,860" },
          { label: "Conv. Rate", value: "3.78%" },
          { label: "Leads", value: "108" },
          { label: "CPL", value: "$26.48" },
        ],
      },
    ],
    winMetrics: [
      { label: "CPL Reduction", value: "84%", icon: TrendingDown },
      { label: "Lead Volume", value: "6x", icon: TrendingUp },
      { label: "Conv. Rate", value: "3.78%", icon: BarChart3 },
    ],
    conclusion:
      "With accurate tracking, campaign restructuring, and conversion-focused landing pages, we cut CPL by 84% and grew qualified leads 6x — and we're still scaling.",
    tags: ["B2B", "SaaS", "Lead Gen", "Landing Pages"],
    images: [
      "/images/caseStudy/b2b.png",
    ]
  },
  {
    id: 2,
    title: "E-Commerce PPC",
    category: "High-End Home Goods",
    platform: "Google Ads",
    industry: "E-Commerce / Retail",
    icon: ShoppingCart,
    background:
      "A high-end specialty home goods retailer selling items priced $5,000+ approached us to lower lead costs and increase volume. In this premium market, most consumers speak with a consultant before purchasing rather than buying directly online.",
    challenge:
      "Conversion tracking was counting 'All Page Views' as conversions, inflating data. Multiple ad groups shared generic ads with no product-specific messaging, and there were no dedicated landing pages — all traffic went to the homepage.",
    keyMetrics: [
      { label: "Cost Per Conversion", before: "$403", after: "$56.90", improvement: "86% reduction", positive: true },
      { label: "Conversions", before: "5", after: "32", improvement: "540% increase", positive: true },
      { label: "Conversion Rate", before: "0.34%", after: "1.19%", improvement: "3.5x improvement", positive: true },
      { label: "Monthly Spend", before: "$2,020", after: "$1,820", improvement: "Lower cost", positive: true },
    ],
    phases: [
      {
        date: "April 2024",
        label: "Pre-Optimization",
        work: ["No work done (Pre-engagement)"],
        stats: [
          { label: "Cost", value: "$2,020" },
          { label: "Conv. Rate", value: "0.34%" },
          { label: "Conversions", value: "5" },
          { label: "CPC", value: "$403" },
        ],
      },
      {
        date: "June 2024",
        label: "Basic Restructure",
        work: [
          "Rebuilt all triggers & tags in Google Tag Manager",
          "Created unique headlines & descriptions per ad group referencing exact keywords",
          "Improved ad relevancy score and user experience",
          "Daily campaign management and bid optimization",
        ],
        stats: [
          { label: "Cost", value: "$1,690" },
          { label: "Conv. Rate", value: "0.42%" },
          { label: "Conversions", value: "7" },
          { label: "CPC", value: "$241" },
        ],
      },
      {
        date: "July 2024",
        label: "Advanced + Landing Pages",
        work: [
          "Built dedicated landing page with single CTA",
          "Invite visitors to opt-in to view current inventory & pricing",
          "Removed all links to other pages",
          "Centered copy on client avatar and specific keywords",
        ],
        stats: [
          { label: "Cost", value: "$1,820" },
          { label: "Conv. Rate", value: "1.19%" },
          { label: "Conversions", value: "32" },
          { label: "CPC", value: "$56.90" },
        ],
      },
    ],
    winMetrics: [
      { label: "CPL Reduction", value: "86%", icon: TrendingDown },
      { label: "Conversion Lift", value: "540%", icon: TrendingUp },
      { label: "Conv. Rate", value: "1.19%", icon: BarChart3 },
    ],
    conclusion:
      "By fixing tracking, creating product-specific ads, and deploying a focused landing page, we reduced CPL by over 85% — with room to scale further as data matures.",
    tags: ["E-Commerce", "High-End Retail", "PPC", "Landing Pages"],
    images: [
      "/images/caseStudy/eCommercePPc.png",
    ]
  },
  {
    id: 3,
    title: "Google Ads App Install",
    category: "Fitness & Workouts App",
    platform: "Google Ads",
    industry: "Health & Fitness / Mobile Apps",
    location: "Canada",
    icon: Smartphone,
    background:
      "A Peloton-style fitness app in Canada offering cycling, strength, yoga, HIIT, and trainer-led programs had previously launched Google App Campaigns but saw limited installs at a higher-than-expected CPI. They needed scale without sacrificing acquisition efficiency.",
    challenge:
      "The campaign had only 3 text assets, 2 image assets, and zero video creatives — severely limiting the algorithm's ability to optimize. No YouTube inventory was being accessed, and the Play Store listing lacked compelling screenshots and a strong value proposition.",
    keyMetrics: [
      { label: "App Installs", before: "1,240", after: "3,980", improvement: "220% increase", positive: true },
      { label: "Cost Per Install", before: "$5.00", after: "$1.60", improvement: "68% reduction", positive: true },
      { label: "Install Rate", before: "1.8%", after: "3.9%", improvement: "2.2x improvement", positive: true },
      { label: "Monthly Spend", before: "$6,200", after: "$6,400", improvement: "More efficient", positive: true },
    ],
    phases: [
      {
        date: "Nov 2025",
        label: "Pre-Optimization",
        work: ["No optimization done"],
        stats: [
          { label: "Cost", value: "$6,200" },
          { label: "Installs", value: "1,240" },
          { label: "Install Rate", value: "1.8%" },
          { label: "CPI", value: "$5.00" },
        ],
      },
      {
        date: "Dec 2025",
        label: "Creative & Store Optimization",
        work: [
          "Expanded text assets (4 new variants) and image assets",
          "Created 15-sec video ads, trainer intros, feature demos",
          "Unlocked YouTube placements via video creatives",
          "Redesigned Play Store listing with high-quality screenshots",
          "Switched bidding to Target CPI strategy",
        ],
        stats: [
          { label: "Cost", value: "$5,800" },
          { label: "Installs", value: "1,720" },
          { label: "Install Rate", value: "2.4%" },
          { label: "CPI", value: "$3.37" },
        ],
      },
      {
        date: "Jan 2026",
        label: "Scaling Phase",
        work: [
          "Scaled YouTube placement budgets",
          "Optimized top-performing asset combinations",
          "Adjusted campaign bids based on learning data",
        ],
        stats: [
          { label: "Cost", value: "$6,400" },
          { label: "Installs", value: "3,980" },
          { label: "Install Rate", value: "3.9%" },
          { label: "CPI", value: "$1.60" },
        ],
      },
    ],
    winMetrics: [
      { label: "Install Growth", value: "220%", icon: TrendingUp },
      { label: "CPI Reduction", value: "68%", icon: TrendingDown },
      { label: "Install Rate", value: "3.9%", icon: BarChart3 },
    ],
    conclusion:
      "By expanding creative assets, adding video, optimizing the Play Store listing, and refining bidding — we grew installs 220% and cut CPI from $5.00 to $1.60.",
    tags: ["App Install", "UAC", "Fitness", "Canada"],
    images: [
      "/images/caseStudy/AppInstall.png",
    ]
  },
  {
    id: 4,
    title: "Lead Generation PPC",
    category: "Cheap Business Class (UK)",
    platform: "Google Ads",
    industry: "Travel / Flights",
    location: "United Kingdom",
    icon: Plane,
    background:
      "Cheap Business Class is a UK travel agency specializing in discounted business class flights from the UK to the USA, Canada, Australia, and the Middle East. Most travelers submit a quote request and speak with a consultant — making lead quality and CPL critical metrics.",
    challenge:
      "Multiple non-conversion events (like Page View) were being counted as conversions, inflating data. All traffic directed to homepage. Generic ads ran across all ad groups. Keywords targeted low-intent users searching 'cheap flights' and 'budget airline tickets'.",
    keyMetrics: [
      { label: "Cost Per Lead", before: "£261", after: "£41.80", improvement: "84% reduction", positive: true },
      { label: "Lead Volume", before: "9 leads", after: "55 leads", improvement: "6x increase", positive: true },
      { label: "Conversion Rate", before: "0.52%", after: "2.38%", improvement: "4.6x improvement", positive: true },
      { label: "Monthly Spend", before: "£2,350", after: "£2,300", improvement: "Same budget", positive: true },
    ],
    phases: [
      {
        date: "April 2024",
        label: "Pre-Optimization",
        work: ["No optimization done"],
        stats: [
          { label: "Spend", value: "£2,350" },
          { label: "Conv. Rate", value: "0.52%" },
          { label: "Leads", value: "9" },
          { label: "CPL", value: "£261" },
        ],
      },
      {
        date: "June 2024",
        label: "Campaign Restructure",
        work: [
          "Rebuilt tracking via GTM (quote forms, phone clicks, WhatsApp, callbacks)",
          "Restructured campaigns by destination intent (NYC, Dubai, Toronto, Sydney)",
          "Created keyword-specific ads per destination with CTR-boosting copy",
          "Added 'Save Up To 60%' and 'Speak With a Travel Expert' messaging",
        ],
        stats: [
          { label: "Spend", value: "£2,120" },
          { label: "Conv. Rate", value: "1.04%" },
          { label: "Leads", value: "22" },
          { label: "CPL", value: "£96" },
        ],
      },
      {
        date: "July 2024",
        label: "Landing Pages + Advanced Optimization",
        work: [
          "Built destination-specific landing pages with quote form above the fold",
          "Added trust badges, airline partners, and direct phone number",
          "Removed all navigation to eliminate distractions",
          "Launched competitor targeting, remarketing & Performance Max",
        ],
        stats: [
          { label: "Spend", value: "£2,300" },
          { label: "Conv. Rate", value: "2.38%" },
          { label: "Leads", value: "55" },
          { label: "CPL", value: "£41.80" },
        ],
      },
    ],
    winMetrics: [
      { label: "CPL Reduction", value: "84%", icon: TrendingDown },
      { label: "Lead Volume", value: "6x", icon: TrendingUp },
      { label: "Conv. Rate", value: "2.38%", icon: BarChart3 },
    ],
    conclusion:
      "Destination-targeted campaigns, accurate tracking, and dedicated landing pages slashed CPL from £261 to £41.80 — a 6x increase in qualified travel leads.",
    tags: ["Lead Gen", "Travel", "PPC", "UK"],
    images: [
      "/images/caseStudy/leadGeneration.png",
    ]
  },
  {
    id: 5,
    title: "Meta Ads eCommerce",
    category: "Consumer Electronics Retailer",
    platform: "Meta Ads",
    industry: "Consumer Electronics",
    location: "United States",
    icon: ShoppingCart,
    background:
      "A US-based online electronics retailer selling wireless earbuds, smart home accessories, Bluetooth speakers, and portable gadgets struggled with inconsistent Meta Ads performance. Despite running campaigns on Facebook & Instagram, ROAS was below profitability at just 1.9x.",
    challenge:
      "No structured audience funnel — large interest groups were targeted without separating by purchase intent. Product catalog existed but dynamic ads were underutilized. Outdated static creatives failed to highlight product features, limited-time offers, or real-life usage.",
    keyMetrics: [
      { label: "Website Purchases", before: "132", after: "395", improvement: "199% increase", positive: true },
      { label: "Cost Per Purchase", before: "$52.27", after: "$21.26", improvement: "59% reduction", positive: true },
      { label: "ROAS", before: "1.9x", after: "4.8x", improvement: "152% improvement", positive: true },
      { label: "Monthly Spend", before: "$6,900", after: "$8,400", improvement: "Scaled profitably", positive: true },
    ],
    phases: [
      {
        date: "April 2025",
        label: "Pre-Optimization",
        work: ["No optimization done"],
        stats: [
          { label: "Spend", value: "$6,900" },
          { label: "Impressions", value: "295K" },
          { label: "Purchases", value: "132" },
          { label: "ROAS", value: "1.9x" },
        ],
      },
      {
        date: "May 2025",
        label: "Restructure & Dynamic Ads",
        work: [
          "Rebuilt using Meta Catalog Sales campaigns with dynamic product ads",
          "Implemented 3-stage audience funnel: Cold → Lookalike → Retargeting",
          "Launched carousel ads, demo videos, and lifestyle imagery",
          "Messaging focused on fast shipping, limited-time deals, trending gadgets",
        ],
        stats: [
          { label: "Spend", value: "$7,100" },
          { label: "Impressions", value: "380K" },
          { label: "Purchases", value: "210" },
          { label: "ROAS", value: "3.1x" },
        ],
      },
      {
        date: "June 2025",
        label: "Scaling Phase",
        work: [
          "Expanded lookalike audiences up to 5%",
          "Increased budget on highest-performing ad sets",
          "Launched retargeting campaigns for cart abandoners",
          "Continuous creative A/B testing",
        ],
        stats: [
          { label: "Spend", value: "$8,400" },
          { label: "Impressions", value: "575K" },
          { label: "Purchases", value: "395" },
          { label: "ROAS", value: "4.8x" },
        ],
      },
    ],
    winMetrics: [
      { label: "Purchase Growth", value: "199%", icon: TrendingUp },
      { label: "CPP Reduction", value: "59%", icon: TrendingDown },
      { label: "ROAS", value: "4.8x", icon: BarChart3 },
    ],
    conclusion:
      "Dynamic catalog ads, a structured audience funnel, and refreshed creatives transformed a struggling Meta account into a 4.8x ROAS machine with 395 monthly purchases.",
    tags: ["eCommerce", "Meta Ads", "Electronics", "USA"],
    images: [
      "/images/caseStudy/metaAdds1.png",
      "/images/caseStudy/metaAdds2.png",
      "/images/caseStudy/metaAdds3.png",
    ],
  },
  {
    id: 6,
    title: "Meta Ads Lead Generation",
    category: "Career Education Institute",
    platform: "Meta Ads",
    industry: "Education",
    location: "Dubai, UAE",
    icon: BookOpen,
    background:
      "A Dubai-based education institute offering career-oriented programs (Digital Marketing, Data Analytics, Project Management, UI/UX Design) had run Meta campaigns but faced high CPL, low lead volume, and inconsistent performance in Dubai's competitive education market.",
    challenge:
      "Campaigns targeted overly broad interests (Education, Business, Entrepreneurship), resulting in low-intent users. Ad creatives lacked messaging around career growth, job placement, or salary improvement. Lead forms were too simple, with no course selection or qualification questions.",
    keyMetrics: [
      { label: "Leads Generated", before: "58", after: "210", improvement: "262% increase", positive: true },
      { label: "Cost Per Lead", before: "$55.17", after: "$16.19", improvement: "70% reduction", positive: true },
      { label: "Impressions", before: "84,000", after: "245,000", improvement: "192% growth", positive: true },
      { label: "Monthly Spend", before: "$3,200", after: "$3,400", improvement: "Scaled efficiently", positive: true },
    ],
    phases: [
      {
        date: "Nov 2025",
        label: "Pre-Optimization",
        work: ["No optimization done"],
        stats: [
          { label: "Spend", value: "$3,200" },
          { label: "Impressions", value: "84K" },
          { label: "Leads", value: "58" },
          { label: "CPL", value: "$55.17" },
        ],
      },
      {
        date: "Dec 2025",
        label: "Audience, Creative & Form Optimization",
        work: [
          "Refined targeting: job seekers, marketing pros, business grads (age 22–40)",
          "Created Lookalike Audiences from previous student data",
          "New ad creatives: 'Upgrade Your Career in 3 Months', 'Learn In-Demand Skills in Dubai'",
          "Tested image, carousel, and short video ad formats",
          "Redesigned lead forms with course selection and qualification questions",
        ],
        stats: [
          { label: "Spend", value: "$2,950" },
          { label: "Impressions", value: "126K" },
          { label: "Leads", value: "102" },
          { label: "CPL", value: "$28.92" },
        ],
      },
      {
        date: "Jan 2026",
        label: "Advanced Optimization & Scaling",
        work: [
          "Lookalike audiences based on qualified leads",
          "Retargeting campaigns for engaged users",
          "Budget allocation shifted to top-performing ads",
          "Continuous creative A/B testing",
        ],
        stats: [
          { label: "Spend", value: "$3,400" },
          { label: "Impressions", value: "245K" },
          { label: "Leads", value: "210" },
          { label: "CPL", value: "$16.19" },
        ],
      },
    ],
    winMetrics: [
      { label: "Lead Growth", value: "262%", icon: TrendingUp },
      { label: "CPL Reduction", value: "70%", icon: TrendingDown },
      { label: "Impressions", value: "192%", icon: BarChart3 },
    ],
    conclusion:
      "Career-focused targeting, stronger creative messaging, and optimized lead forms grew leads 262% and cut CPL from $55.17 to $16.19 in just two months.",
    tags: ["Lead Gen", "Education", "Meta Ads", "Dubai"],
    images: [
      "/images/caseStudy/metaAddsLead1.png",
      "/images/caseStudy/metaAddsLead2.png",
      "/images/caseStudy/metaAddsLead3.png",
    ],
  },
];

const PLATFORM_FILTERS = ["All", "Google Ads", "Meta Ads"] as const;
type PlatformFilter = (typeof PLATFORM_FILTERS)[number];

// ─── Phase Timeline Component ──────────────────────────────────────────────────
function PhaseTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {phases.map((phase, i) => (
        <motion.div
          key={phase.date}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`relative rounded-2xl p-6 border ${
            i === phases.length - 1
              ? "bg-[linear-gradient(135deg,#0079d0/10,#9e52d8/10)] border-[#9e52d8]/30 shadow-lg shadow-[#9e52d8]/10"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          {i < phases.length - 1 && (
            <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 z-10" />
          )}
          <p className="text-[10px] font-black uppercase tracking-widest text-[#9e52d8] mb-1">{phase.date}</p>
          <p className="text-sm font-bold text-slate-800 mb-4">{phase.label}</p>
          <div className="grid grid-cols-2 gap-3">
            {phase.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-lg font-black ${i === phases.length - 1 ? "bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent" : "text-slate-900"}`}>
                  {stat.value}
                </p>
                <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Case Study Card ───────────────────────────────────────────────────────────
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = study.icon;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (study.images && study.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % study.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (study.images && study.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + study.images!.length) % study.images!.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="bg-white rounded-3xl border border-slate-200 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-20px_rgba(0,121,208,0.18)] transition-all duration-500 overflow-hidden group flex flex-col h-fit"
    >
      {/* Image Slider */}
      {study.images && study.images.length > 0 && (
        <div className="relative w-full h-64 sm:h-80 overflow-hidden group/slider border-b border-slate-100 shrink-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gray-100"
            >
              <Image
                src={study.images[currentImageIndex]}
                alt={`${study.title} ${currentImageIndex + 1}`}
                fill
                className="object-cover object-top h-[94%]! w-[98%]! left-[1%]! top-[2%]! rounded-t-3xl rounded-b-md shadow-md"
              />
            </motion.div>
          </AnimatePresence>
          
          {study.images.length > 1 && (
            <>
              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-slate-700 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-slate-700 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                {study.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white w-5" : "bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Card Header */}
      <div className="p-8 pb-6 flex-1">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] flex items-center justify-center shadow-lg shadow-[#0079d0]/20 shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                  study.platform === "Google Ads"
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-purple-50 text-purple-600 border border-purple-100"
                }`}>
                  {study.platform}
                </span>
                {study.location && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <Globe className="w-3 h-3" />{study.location}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{study.industry}</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight group-hover:bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
          {study.title}
        </h3>
        <p className="text-[#9e52d8] text-sm font-bold mb-4">{study.category}</p>
        <p className="text-slate-500 text-sm leading-relaxed">{study.background}</p>
      </div>

      {/* Win Metrics Bar */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
          {study.winMetrics.map((metric) => {
            const MIcon = metric.icon;
            return (
              <div key={metric.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <MIcon className="w-4 h-4 text-[#da365c]" />
                </div>
                <p className="text-xl md:text-2xl font-black bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="px-8 pb-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-100">
            {tag}
          </span>
        ))}
      </div>

      {/* Expand Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-8 py-5 border-t border-slate-100 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-[#9e52d8] hover:bg-slate-50 transition-all duration-300 group/btn"
      >
        <span>{expanded ? "Hide Details" : "View Full Case Study"}</span>
        <div className="flex items-center gap-2">
          {!expanded && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 py-8 border-t border-slate-100 bg-slate-50/50">
              {/* Challenge Section */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#da365c] mb-3">The Challenge</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
              </div>

              {/* Before vs After Metrics */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0079d0] mb-4">Key Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.keyMetrics.map((metric) => (
                    <div key={metric.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">{metric.label}</p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-center">
                          <p className="text-base font-black text-slate-400 line-through">{metric.before}</p>
                          <p className="text-[9px] text-slate-400 uppercase tracking-wider mt-1">Before</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                        <div className="text-center">
                          <p className="text-base font-black bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">{metric.after}</p>
                          <p className="text-[9px] text-slate-400 uppercase tracking-wider mt-1">After</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-center">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">✓ {metric.improvement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Timeline */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9e52d8] mb-4">Campaign Timeline</h4>
                <PhaseTimeline phases={study.phases} />
              </div>

              {/* What We Did */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0079d0] mb-4">What We Did</h4>
                <div className="space-y-2">
                  {study.phases.slice(1).flatMap((phase) =>
                    phase.work.map((item, i) => (
                      <div key={`${phase.date}-${i}`} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-[linear-gradient(108deg,#0079d0/5_0%,#9e52d8/5_32%,#da365c/5_84%,#d04901/5_100%)] rounded-2xl p-6 border border-[#9e52d8]/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9e52d8] mb-3">Conclusion</h4>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">{study.conclusion}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<PlatformFilter>("All");

  const filtered = caseStudies.filter(
    (s) => activeFilter === "All" || s.platform === activeFilter
  );

  return (
    <main className="bg-[#FDFDFF] min-h-screen pt-20 overflow-x-hidden text-slate-900 selection:bg-blue-600/10">
      {/* Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-blue-100/40 rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-[140px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-[120px] opacity-20" />
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#9e52d8]">Proven Results</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-10 leading-[0.9]"
            >
              Real Clients.{" "}
              <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                Real Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 text-xl md:text-2xl max-w-3xl leading-relaxed font-light mb-16"
            >
              From 84% CPL reductions to 4.8x ROAS — explore how we transform ad accounts into high-performance revenue engines.
            </motion.p>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
            >
              {[
                { value: "6", label: "Case Studies", icon: BarChart3 },
                { value: "84%", label: "Avg. CPL Reduction", icon: TrendingDown },
                { value: "4.8x", label: "Best ROAS Achieved", icon: TrendingUp },
                { value: "262%", label: "Max Lead Growth", icon: Users },
              ].map((stat) => {
                const SIcon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 p-6 shadow-sm text-center">
                    <SIcon className="w-5 h-5 text-[#9e52d8] mx-auto mb-3" />
                    <p className="text-3xl font-black bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FILTER ────────────────────────────────────────────────────────── */}
      <section className="sticky top-20 z-40 bg-white/60 backdrop-blur-2xl border-y border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 w-fit">
              {PLATFORM_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-6 py-3 rounded-xl text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                    activeFilter === filter
                      ? "text-white bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] shadow-lg"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-400">
              Showing <span className="text-slate-900 font-black">{filtered.length}</span> case {filtered.length === 1 ? "study" : "studies"}
            </p>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filtered.map((study, i) => (
                <CaseStudyCard key={study.id} study={study} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────────────── */}
      <section className="relative z-10 py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -skew-y-2 border-y border-slate-800" />
        <div className="max-w-5xl mx-auto relative text-center z-10">
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 rounded-[2.5rem] bg-white flex items-center justify-center shadow-3xl transform -rotate-6">
                <Target className="w-12 h-12 text-[#9e52d8]" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[0.9]">
              Want Results Like{" "}
              <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                These?
              </span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s audit your ad account and show you exactly where you&apos;re leaving money on the table — for free.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link
                href="/contact-us"
                className="w-full md:w-auto px-16 py-7 rounded-4xl bg-white text-slate-900 font-black text-xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:-translate-y-1"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/portfolio"
                className="w-full md:w-auto px-16 py-7 rounded-4xl bg-slate-800 text-white font-black text-xl hover:bg-slate-700 transition-all border border-slate-700"
              >
                View Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
