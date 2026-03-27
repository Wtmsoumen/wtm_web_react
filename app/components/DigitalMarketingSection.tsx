"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  BarChart2,
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  Zap,
  ChevronRight,
} from "lucide-react";
import { globalStyle } from "../globalStyle";

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: "3.8×", label: "Average ROAS" },
  { value: "140%", label: "Organic Growth" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  {
    id: "01",
    icon: TrendingUp,
    title: "SEO Optimization",
    desc: "Dominate search rankings with technical SEO, content strategy, and authoritative link building that compounds over time.",
    metric: "+140% Traffic",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "#3B82F6",
  },
  {
    id: "02",
    icon: Target,
    title: "Performance Marketing",
    desc: "High-converting ad campaigns across Google & Meta — precision targeting, relentless A/B testing, and profit-first optimization.",
    metric: "3.8× ROAS",
    color: "from-rose-500/20 to-orange-500/10",
    accent: "#EF4444",
  },
  {
    id: "03",
    icon: Users,
    title: "Social Media Growth",
    desc: "Build an engaged audience that converts. Content calendars, community management, and influencer strategy that actually moves numbers.",
    metric: "2M+ Reach",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "#8B5CF6",
  },
  {
    id: "04",
    icon: BarChart2,
    title: "Analytics & Insights",
    desc: "Full-funnel attribution, real-time dashboards, and monthly performance audits so every decision is backed by data.",
    metric: "360° View",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "#10B981",
  },
];

/* ─── Animated Counter ──────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span
        className={`text-4xl md:text-5xl font-black tracking-tight transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${globalStyle?.gradientText} bg-clip-text text-transparent`}
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {value}
      </span>
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

/* ─── Service Row ───────────────────────────────────── */
function ServiceRow({
  item,
  index,
}: {
  item: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group border-b border-gray-100 last:border-0"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Hover fill */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative flex items-center gap-5 px-5 py-6 cursor-pointer rounded-xl">
        {/* Number */}
        <span
          className="text-xs font-bold tracking-widest text-gray-300 w-6 flex-shrink-0"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {item.id}
        </span>

        {/* Icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${item.accent}20` }}
        >
          <item.icon className="w-5 h-5" style={{ color: item.accent }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4
            className="text-gray-900 font-bold text-base mb-0.5 group-hover:text-gray-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {item.title}
          </h4>
          <p
            className={`text-gray-500 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
              hovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.desc}
          </p>
        </div>

        {/* Metric chip */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="hidden sm:inline-flex text-xs font-bold px-3 py-1 rounded-full transition-all duration-300"
            style={{
              backgroundColor: `${item.accent}15`,
              color: item.accent,
            }}
          >
            {item.metric}
          </span>
          <ChevronRight
            className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────── */
const DigitalMarketingSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

        .dm-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      <section
        className="py-24 bg-white relative overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1D74CF, #D04425)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #b33b41, #1D74CF)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Top label + heading ─────────── */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <div className="flex flex-col gap-5" data-aos="fade-right">
              <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full self-start`}>
                <Zap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Digital Marketing
                </span>
              </div>

              <h2
                className="text-4xl md:text-6xl font-semibold  text-gray-900 leading-[1.05] tracking-tight"
                
              >
                <span className="tracking-[0.1em] text-5xl md:text-7xl">Growth that</span>{" "}
                <span
                  className={`${globalStyle?.gradientText} font-medium bg-clip-text text-transparent`}
                >
                  compounds.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6" data-aos="fade-left">
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                We blend strategy, creative, and ruthless data analysis to turn your marketing into a growth engine — not an expense.
              </p>
              <button
                className="self-start flex items-center gap-3 text-sm font-bold px-6 py-3.5 rounded-full text-white hover:scale-105 active:scale-100 transition-transform duration-200"
                style={{
                  background: "linear-gradient(135deg, #1D74CF 0%, #b33b41 60%, #D04425 100%)",
                  boxShadow: "0 8px 30px rgba(29,116,207,0.25)",
                }}
              >
                Start Growing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── Stats bar ───────────────────── */}
          <div className="noise-bg relative rounded-2xl overflow-hidden mb-16"
            data-aos="zoom-in"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
            <div className="flex items-center divide-x divide-white/10">
              {stats.map((s, i) => (
                <div key={i} className="flex-1 flex items-center justify-center gap-3 py-4 px-4">
                  <span
                    className={`text-2xl font-black tracking-tight ${globalStyle?.gradientText} bg-clip-text text-transparent`}
                 
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Main grid ───────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT: Services accordion list */}
            <div className="flex flex-col" data-aos="fade-right">
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  What we do
                </span>
              </div>

              <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
                {services.map((item, i) => (
                  <ServiceRow key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* RIGHT: Visual panel */}
            <div className="flex flex-col gap-6" data-aos="fade-left">

              {/* Image card */}
              <div className="relative rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Digital Marketing"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                {/* Live badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-xs font-semibold">Live Campaigns</span>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-lg leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    Your audience is online.
                    <br />
                    <span className="text-white/60 font-normal text-sm">
                      We make sure they find you first.
                    </span>
                  </p>
                </div>
              </div>

              {/* Two small info tiles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Avg. Time to ROI</span>
                  <span className="text-3xl font-black text-gray-900"
                    >
                    47
                    <span className="text-base font-semibold text-gray-400 ml-1">days</span>
                  </span>
                  <span className="text-xs text-gray-400">From kickoff to measurable returns</span>
                </div>

                <div className="rounded-xl overflow-hidden relative p-5 flex flex-col gap-2 text-white"
                  style={{
                    background: "linear-gradient(135deg, #1D74CF 0%, #b33b41 100%)",
                  }}>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">Platforms</span>
                  <span className="text-3xl font-black"
                  >
                    12+
                  </span>
                  <span className="text-xs text-white/70">Channels managed simultaneously</span>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                </div>
              </div>

              {/* Marquee tag strip */}
              <div className="rounded-xl border border-gray-100 overflow-hidden py-3 bg-gray-50">
                <div className="dm-marquee">
                  {[
                    "Google Ads", "Meta Ads", "SEO", "Content Marketing",
                    "Email Flows", "LinkedIn Ads", "TikTok", "YouTube",
                    "Google Ads", "Meta Ads", "SEO", "Content Marketing",
                    "Email Flows", "LinkedIn Ads", "TikTok", "YouTube",
                  ].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {tag}
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalMarketingSection;