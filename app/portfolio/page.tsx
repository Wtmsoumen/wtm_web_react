"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowUpRight, TrendingUp, Eye, Users, Star } from "lucide-react";
import { globalStyle } from "../globalStyle";
import Footer from "../components/Footer";

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
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform for Wine & Liquor Stores",
    category: "E-commerce",
    industry: "Retail",
    tech: ["Laravel", "Angular", "MySQL"],
    image: "images/easydrink.jpg",
    description:
      "We crafted the EasydrinkbyGrutex wine shop eCommerce website from scratch. Started with custom UI design in Figma and frontend in Angular. Backend development was done using Laravel for smooth performance and scalability. Integrated a secure payment gateway for seamless online wine purchases. Fully mobile responsive and optimised with SEO best practices. The site delivers a fast, user-friendly shopping experience. Client experienced a 70% increase in traffic and online sales post-launch.",
    stats: [
      { key: "interaction", value: "60%", label: "Heightened Interaction" },
      { key: "visibility", value: "60%", label: "Increased Visibility" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Website (Direct-to-Consumer Ayurvedic Products)",
    category: "E-commerce",
    industry: "Healthcare",
    tech: ["Shopify", "React", "API Integration"],
    image: "images/drsany_ayurvedic.jpg",
    description:
      "DrSany.com operates as a contemporary e-commerce site designed for a high-end Ayurvedic brand. The platform is built on Shopify and offers a robust product selling system, efficient product management features, expert SEO strategies for organic growth, seamless payment gateway integration, and tailored API integrations to enhance operations. This has effectively established Dr. Sany as a vibrant and leading brand in the market, meeting key business goals through a scalable and user-friendly e-commerce solution.",
    stats: [
      { key: "interaction", value: "60%", label: "Heightened Interaction" },
      { key: "visibility", value: "75%", label: "Increased Visibility" },
    ],
  },
  {
    id: 3,
    title: "Real Estate Listing & Lead Generation Portal",
    category: "Web Development",
    industry: "Real Estate",
    tech: ["Next.js", "TypeScript", "Laravel"],
    image: "images/glubery_B2B.jpg",
    description:
      "A comprehensive real estate platform built for a leading property firm. Features advanced property search, virtual tours, agent management, and a CRM-integrated lead generation system. Fully SEO optimised with structured data markup. Mobile-first design ensures seamless browsing on all devices. The platform drove a significant uptick in qualified leads and reduced manual agent workload by automating follow-ups.",
    stats: [
      { key: "growth", value: "80%", label: "Lead Growth" },
      { key: "visibility", value: "55%", label: "Increased Visibility" },
    ],
  },
  {
    id: 4,
    title: "Food Delivery Mobile App (iOS & Android)",
    category: "Mobile App",
    industry: "Food and Beverage",
    tech: ["Flutter", "Firebase", "Node.js"],
    image: "images/easydrink.jpg",
    description:
      "A full-featured food delivery application built with Flutter for cross-platform performance. Includes real-time order tracking, push notifications, dynamic menu management, multi-restaurant support, and Razorpay/Stripe payment integration. The admin dashboard provides live analytics and order management. The app achieved 4.8 stars on launch week and onboarded 50+ restaurant partners in the first month.",
    stats: [
      { key: "satisfaction", value: "4.8★", label: "App Store Rating" },
      { key: "growth", value: "50+", label: "Restaurant Partners" },
    ],
  },
  {
    id: 5,
    title: "Immigration Assessment & CRS Calculator Suite",
    category: "Web Development",
    industry: "Legal",
    tech: ["WordPress", "PHP", "MySQL"],
    image: "images/drsany_ayurvedic.jpg",
    description:
      "A comprehensive immigration tools suite built for Global Vision Immigration. Includes an Australia PR Subclass 189 calculator with ANZSCO occupation gating, OTP verification, and PDF report generation. Also features Canada CRS Score Calculator and 67 Points Calculator with database storage, email templates, and a full admin panel. Thousands of assessments processed with a near-zero error rate.",
    stats: [
      { key: "interaction", value: "90%", label: "Form Completion Rate" },
      { key: "visibility", value: "70%", label: "Organic Traffic Lift" },
    ],
  },
  {
    id: 6,
    title: "Logistics & Freight Management Platform",
    category: "Web Development",
    industry: "Logistics",
    tech: ["Next.js", "RTK Query", "Tailwind CSS"],
    image: "images/portfolio/logistics-platform.jpg",
    description:
      "M Deliver is a multi-step shipment management platform built for a logistics firm. Features include billing region selection, automated quote generation, country flag dropdowns, responsive shipment tables with card fallbacks, and a role-based admin dashboard. Chart.js-powered analytics give operations managers real-time freight visibility. Reduced manual quote processing time by 65% post-launch.",
    stats: [
      { key: "growth", value: "65%", label: "Process Time Saved" },
      { key: "visibility", value: "85%", label: "Client Satisfaction" },
    ],
  },
  {
    id: 7,
    title: "AI Video Lip-Sync & Face Enhancement Tool",
    category: "AI Engineering",
    industry: "Media & Entertainment",
    tech: ["Python", "Wav2Lip", "GFPGAN", "React"],
    image: "images/portfolio/ai-video-tool.jpg",
    description:
      "A production-grade AI video tooling platform integrating Wav2Lip for accurate lip-sync generation, SadTalker for talking head animation, and GFPGAN for face restoration and enhancement. Built a React-based frontend for video upload, processing queue management, and download. Used by media agencies and content creators to produce high-quality AI-generated video content at scale.",
    stats: [
      { key: "interaction", value: "10×", label: "Faster Production" },
      { key: "satisfaction", value: "95%", label: "Client Retention" },
    ],
  },
  {
    id: 8,
    title: "Ride-Sharing App with Real-Time Tracking",
    category: "Mobile App",
    industry: "Automobile",
    tech: ["React Native", "Firebase", "Google Maps API"],
    image: "images/portfolio/ride-sharing-app.jpg",
    description:
      "A full-featured ride-sharing application built in React Native with real-time location tracking via Firebase Realtime Database and Google Maps API. Features include driver/rider matching, fare estimation, in-app chat, ride history, and custom tab bar navigation. Stripe integration powers seamless in-app payments. The app handles concurrent rides with sub-second location update latency.",
    stats: [
      { key: "growth", value: "40%", label: "User Growth MoM" },
      { key: "visibility", value: "4.7★", label: "Play Store Rating" },
    ],
  },
];

// ─── Category / Industry Filters ──────────────────────────────────────────────
const industryList = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
const categoryList = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function countByIndustry(industry: string) {
  if (industry === "All") return projects.length;
  return projects.filter((p) => p.industry === industry).length;
}
function countByCategory(category: string) {
  if (category === "All") return projects.length;
  return projects.filter((p) => p.category === category).length;
}

// ─── Stat Icon Map ─────────────────────────────────────────────────────────────
const StatIcon: Record<StatKey, React.ElementType> = {
  interaction: Users,
  visibility: Eye,
  growth: TrendingUp,
  satisfaction: Star,
};

// ─── Tech Pill ────────────────────────────────────────────────────────────────
function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">
      {label}
    </span>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
      {/* gradient top bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425]" />

      <div className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
        {/* ── Image ── */}
        <div className="relative lg:w-[42%] min-h-[260px] lg:min-h-[320px] overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* Category badge */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[#1D74CF] shadow-sm border border-white/50">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[#D04425] shadow-sm border border-white/50">
              {project.industry}
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 flex flex-col justify-between px-7 py-7 lg:px-10 lg:py-8 gap-5">
          {/* Top */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 pt-2 border-t border-gray-100">
            {project.stats.map((stat) => {
              const Icon = StatIcon[stat.key];
              return (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1D74CF]/10 to-[#D04425]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#1D74CF]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{stat.label}</p>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="ml-auto flex items-end">
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D74CF] hover:text-[#D04425] transition-colors group/btn">
                View Case Study
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
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
    <main className="bg-white min-h-screen">
      {/* ── HERO BAND ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#D04425]/10 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4">
          {/* Badge */}
          <div
            className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Our Work</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            The Better We Know{" "}
            <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
              You,
            </span>
            <br />
            the More We{" "}
            <span className="bg-gradient-to-r from-[#D04425] via-[#b33b41] to-[#1D74CF] bg-clip-text text-transparent">
              Can Do.
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-xl max-w-2xl leading-relaxed">
            Welcome to Webtechnomind IT Solutions, the leading Website Design and
            Development Company in India, offering comprehensive web development,
            mobile app development and also digital marketing services to a global
            clientele.
          </p>
        </div>
      </section>

      {/* ── FILTER SECTION ────────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          {/* Tab switcher */}
          <div className="flex items-center gap-1 mb-4 w-fit border border-gray-200 rounded-lg p-0.5">
            {(["industries", "technology"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-1.5 rounded-md text-sm font-semibold capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab === "industries" ? "Industries" : "Technology"}
              </button>
            ))}
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {activeTab === "industries"
              ? industryList.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveIndustry(ind)}
                    className={`inline-flex items-center gap-1 px-6 py-3 rounded-full text-xs font-medium border transition-all duration-200 ${
                      activeIndustry === ind
                        ? "bg-gradient-to-r from-[#b33b41] to-[#D04425] text-white border-transparent shadow-sm"
                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black"
                    }`}
                  >
                    {ind}
                    <span
                      className={`ml-0.5 ${
                        activeIndustry === ind ? "text-white/80" : "text-gray-400"
                      }`}
                    >
                      ({countByIndustry(ind)})
                    </span>
                  </button>
                ))
              : categoryList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-[#1D74CF] to-[#b33b41] text-white border-transparent shadow-sm"
                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black"
                    }`}
                  >
                    {cat}
                    <span
                      className={`ml-0.5 ${
                        activeCategory === cat ? "text-white/80" : "text-gray-400"
                      }`}
                    >
                      ({countByCategory(cat)})
                    </span>
                  </button>
                ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ─────────────────────────────────────────────── */}
      <section className="relative bg-white py-14 overflow-hidden">
        {/* background texture */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/8 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#D04425]/8 to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400 text-sm">
              No projects found for this filter.
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1D74CF] via-[#b33b41] to-[#D04425] flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
              Remarkable?
            </span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Let's turn your vision into a high-performance digital product. Our
            team of engineers, designers, and strategists is ready to partner with you.
          </p>
          <a
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-[#b33b41] via-[#D04425] to-[#1D74CF] text-white font-bold text-sm px-8 py-4 rounded-full hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}