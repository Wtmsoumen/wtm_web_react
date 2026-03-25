"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, ArrowUpRight, TrendingUp, Eye, Users, Star } from "lucide-react";
import { globalStyle } from "../globalStyle";
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
      "We crafted the EasydrinkbyGrutex wine shop eCommerce website from scratch. Started with custom UI design in Figma and frontend in Angular. Backend development was done using Laravel for smooth performance and scalability. Integrated a secure payment gateway for seamless online wine purchases.",
    stats: [
      { key: "interaction", value: "60%", label: "Interaction" },
      { key: "visibility", value: "60%", label: "Visibility" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Website (Ayurvedic Products)",
    category: "E-commerce",
    industry: "Healthcare",
    tech: ["Shopify", "React", "API Integration"],
    image: "images/drsany_ayurvedic.jpg",
    description:
      "DrSany.com operates as a contemporary e-commerce site designed for a high-end Ayurvedic brand. The platform is built on Shopify and offers a robust product selling system, efficient product management features, and expert SEO strategies for organic growth.",
    stats: [
      { key: "interaction", value: "60%", label: "Interaction" },
      { key: "visibility", value: "75%", label: "Visibility" },
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
      "A comprehensive real estate platform built for a leading property firm. Features advanced property search, virtual tours, agent management, and a CRM-integrated lead generation system. Fully SEO optimised with structured data markup.",
    stats: [
      { key: "growth", value: "80%", label: "Lead Growth" },
      { key: "visibility", value: "55%", label: "Visibility" },
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
      "A full-featured food delivery application built with Flutter for cross-platform performance. Includes real-time order tracking, push notifications, dynamic menu management, multi-restaurant support, and Razorpay/Stripe payment integration.",
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
      "A comprehensive immigration tools suite built for Global Vision Immigration. Includes an Australia PR Subclass 189 calculator with ANZSCO occupation gating, Canada CRS Score Calculator and 67 Points Calculator with database storage.",
    stats: [
      { key: "interaction", value: "90%", label: "Form Completion" },
      { key: "visibility", value: "70%", label: "Traffic Lift" },
    ],
  },
  {
    id: 6,
    title: "Logistics & Freight Management Platform",
    category: "Web Development",
    industry: "Logistics",
    tech: ["Next.js", "RTK Query", "Tailwind CSS"],
    image: "images/portfolio/portfolio1.jpg",
    description:
      "M Deliver is a multi-step shipment management platform built for a logistics firm. Features include billing region selection, automated quote generation, country flag dropdowns, and responsive shipment tables.",
    stats: [
      { key: "growth", value: "65%", label: "Time Saved" },
      { key: "visibility", value: "85%", label: "Satisfaction" },
    ],
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
    <main className="bg-white min-h-screen pt-20">
      {/* ── HERO BAND ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative overflow-hidden bg-white py-20 pb-0">
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-linear-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-linear-to-br from-[#D04425]/10 to-transparent blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6" data-aos="fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm`} data-aos="fade-down">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Our Work</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight">
              The Better We Know <span className="bg-linear-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">You,</span><br />
              the More We <span className="bg-linear-to-r from-[#D04425] via-[#b33b41] to-[#1D74CF] bg-clip-text text-transparent">Can Do.</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Leading Website Design and Development Company in India, delivering excellence across 12+ countries.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FILTER SECTION ────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6" data-aos="fade-down">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-1 border border-gray-200 rounded-xl p-1 bg-gray-50 w-fit">
                {(["industries", "technology"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeTab === tab ? "bg-black text-white shadow-xl" : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab === "industries" ? "Industries" : "Technology"}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {(activeTab === "industries" ? industryList : categoryList).map((f) => {
                  const isActive = (activeTab === "industries" ? activeIndustry : activeCategory) === f;
                  return (
                    <button
                      key={f}
                      onClick={() => (activeTab === "industries" ? setActiveIndustry(f) : setActiveCategory(f))}
                      className={`px-5 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-blue-600 to-purple-600 text-white border-transparent"
                          : "bg-white text-gray-600 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PROJECTS LIST ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-16">
              {filtered.map((project, i) => (
                <div 
                  key={project.id} 
                  className={`group flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                  data-aos="fade-up"
                >
                  <div className="relative w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-blue-600 uppercase tracking-widest">{project.category}</span>
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-red-600 uppercase tracking-widest">{project.industry}</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-black text-black leading-tight">{project.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      {project.stats.map(stat => {
                        const Icon = StatIcon[stat.key];
                        return (
                          <div key={stat.label} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                               <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                               <p className="text-2xl font-black text-black">{stat.value}</p>
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <button className="w-fit flex items-center gap-2 text-sm font-black text-blue-600 mt-4 group/btn">
                      VIEW CASE STUDY
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA BAND ──────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-aos="zoom-in">
            <h2 className="text-4xl font-black text-black mb-6">Ready to Build Something <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent underline decoration-blue-600/20 underline-offset-8">Remarkable?</span></h2>
            <p className="text-gray-500 text-lg mb-10">Let&apos;s turn your vision into a high-performance digital product. Our team is ready to partner with you.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 bg-black text-white font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl">
              START A PROJECT
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}