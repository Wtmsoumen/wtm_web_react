// "use client"
// import { Sparkles, ArrowRight } from "lucide-react";
// import { globalStyle } from "../globalStyle";
// import DiscussProjectForm from "./DiscussProjectForm";
// import { useState, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollReveal from "./ScrollReveal";


// export default function Hero() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const container = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     tl.fromTo(
//       ".hero-title",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1 }
//     )
//       .fromTo(
//         ".hero-btn",
//         { scale: 0.9, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.6 },
//         "-=0.5"
//       )
//       .fromTo(
//         ".hero-stat",
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
//         "-=0.3"
//       );
//   }, { scope: container });

//   return (
//     <ScrollReveal><section ref={container} className="relative lg:min-h-[100vh] min-h-[80vh] flex items-center justify-center bg-white overflow-hidden pt-16">

//       {/* Video Background - High visibility */}
//       <video
//         src="/video/hero-video7.mp4"
//         loop
//         autoPlay
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-90"
//       />

//       {/* Minimal white tint */}
//       {/* <div className="absolute inset-0 bg-black/10 pointer-events-none" />
//       <div className="flex md:hidden absolute top-[3.5em] left-[25%] w-64 h-44 bg-[radial-gradient(circle,#ffffff95_0%,#ffffff90_20%,#ffffff00_70%)] rounded-full pointer-events-none" /> */}

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:py-20 py-10 flex flex-col justify-center items-center text-center w-full">

//         {/* Main Heading */}
//         <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
//           <span className="text-white">Your</span>{" "}
//           <span className={`${globalStyle?.gradientText} text-shadow-white bg-clip-text text-transparent`}>Next-gen</span>
//           <br />
//           <span className="text-white">AI Tech Growth Partner</span>
//         </h1>

//         {/* CTA Button */}
//         <div className="hero-btn flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//           <button onClick={() => setIsModalOpen(true)} className="group bg-linear-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
//             <Sparkles className="w-5 h-5" />
//             <span>Start Your Project</span>
//             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto w-full">
//           {[
//             { value: "13+", label: "Years Experience" },
//             { value: "350+", label: "Products Built" },
//             { value: "96%", label: "Satisfaction Rate" },
//             { value: "12+", label: "Countries Served" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="hero-stat flex flex-col justify-center items-center text-center p-3 rounded-2xl
//                 bg-white backdrop-blur-md border border-white/20
//                 shadow-sm hover:bg-white hover:scale-105 transition duration-300"
//             >
//               <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-1 bg-clip-text text-transparent ${globalStyle?.gradientText}`}>
//                 {stat.value}
//               </div>
//               <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom fade - Adjusted for white theme */}
//       {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white via-white/50 to-transparent pointer-events-none" /> */}

//       {/* Modal */}
//       <DiscussProjectForm
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section></ScrollReveal>
//   );
// }














"use client"
import { Sparkles, ArrowRight, Eye, TrendingUp, ShoppingCart, BarChart2, Cpu, Megaphone, Cloud, Smartphone, Globe, Search } from "lucide-react";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollReveal from "./ScrollReveal";
import { useRouter } from "next/navigation";


const serviceTagsRow1 = [
  { icon: <Cpu className="w-3.5 h-3.5" />, label: "AI Engineering" },
  { icon: <Megaphone className="w-3.5 h-3.5" />, label: "Digital Marketing" },
  { icon: <Cloud className="w-3.5 h-3.5" />, label: "SaaS Products" },
  { icon: <Smartphone className="w-3.5 h-3.5" />, label: "Mobile Apps" },
];
const serviceTagsRow2 = [
  { icon: <Globe className="w-3.5 h-3.5" />, label: "Web Dev" },
  { icon: <Search className="w-3.5 h-3.5" />, label: "SEO · PPC" },
];

const progressBars = [
  { label: "AI & Machine Learning", value: 97 },
  { label: "360° Digital Marketing", value: 95 },
  { label: "Web & App Development", value: 99 },
  { label: "SaaS Architecture", value: 93 },
];

const stats = [
  { value: "13+", label: "YEARS" },
  { value: "350+", label: "PRODUCTS" },
  { value: "12+", label: "COUNTRIES" },
  { value: "96%", label: "SATISFACTION" },
];

const bottomItems = [
  { icon: <Eye className="w-5 h-5" />, label: "Visibility" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Traffic" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Sales" },
  { icon: <BarChart2 className="w-5 h-5" />, label: "Growth" },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
    const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.3")
      .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(".hero-btn", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
      .fromTo(".hero-tag", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, "-=0.2")
      .fromTo(".hero-card", { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, "-=0.8");
  }, { scope: container });

  return (
    <ScrollReveal>
      <section
        ref={container}
        className="relative min-h-[calc(100vh-0px)] flex flex-col bg-white overflow-hidden pt-20"
        style={{
          background: "radial-gradient(ellipse at 60% 0%, #e8f0ff 0%, #fff 50%, #fff8f5 100%)",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c7d5f0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative background blobs */}
        <div className="absolute top-[-80px] right-[20%] w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }} />
        <div className="absolute bottom-[10%] left-[5%] w-60 h-60 rounded-full pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }} />

        {/* Main content */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-80px)]">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-5 lg:gap-6 pt-8 lg:pt-0">

              {/* Badge */}
              <div className="hero-badge inline-flex items-center self-start gap-2">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
                  style={{
                    borderColor: "#d1d5db",
                    color: "#6b7280",
                    background: "rgba(255,255,255,0.8)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "linear-gradient(135deg,#1D74CF,#b33b41)" }}
                  />
                  360° AI-Powered Digital Studio
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}
                >
                  2025
                </span>
              </div>

              {/* Heading */}
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-tight text-gray-900">
                Your Next-Gen
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg,#1D74CF 0%,#b33b41 50%,#D04425 100%)" }}
                >
                  AI Tech Growth
                </span>
                <br />
                Partner
              </h1>

              {/* 360° Made sub-label */}
              <div className="hero-desc flex items-center gap-1.5 -mt-2">
                <span className="text-red-500 font-bold text-lg leading-none">↙</span>
                <span className="text-sm font-semibold text-gray-600 tracking-wide">360° Made</span>
              </div>

              {/* Description */}
              <p className="hero-desc text-gray-500 text-base leading-relaxed max-w-[480px]">
                From AI-driven SaaS platforms to 360° digital marketing — we build intelligent
                digital products trusted by 350+ clients across 12+ countries worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hero-btn group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#1D74CF 0%,#b33b41 100%)",
                    boxShadow: "0 8px 24px rgba(29,116,207,0.35)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  className="hero-btn group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                  style={{ borderColor: "#1D74CF", color: "#1D74CF" }}
                  onClick={() => {router.push("/portfolio")}}
                >
                  Explore Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {serviceTagsRow1.map((t) => (
                  <span
                    key={t.label}
                    className="hero-tag flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-white/80 text-gray-600"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <span style={{ color: "#1D74CF" }}>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
                {serviceTagsRow2.map((t) => (
                  <span
                    key={t.label}
                    className="hero-tag flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-white/80 text-gray-600"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <span style={{ color: "#1D74CF" }}>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN — Dashboard Card ── */}
            <div className="hero-card relative flex items-center justify-center lg:justify-end">

              {/* Decorative "!" */}
              <div
                className="absolute left-[-60px] top-[10%] text-[120px] font-black leading-none select-none pointer-events-none z-0 hidden lg:block"
                style={{
                  background: "linear-gradient(135deg,#f472b6,#c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.9,
                  filter: "drop-shadow(0 8px 24px rgba(192,132,252,0.4))",
                }}
              >
                !
              </div>

              {/* Dashed arc connecting left to card */}
              <svg
                className="absolute left-[-60px] top-[8%] hidden lg:block pointer-events-none z-0"
                width="200" height="260"
                viewBox="0 0 200 260"
                fill="none"
              >
                <path
                  d="M 20 200 Q 100 20 180 80"
                  stroke="#b33b41"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  fill="none"
                  opacity="0.5"
                />
              </svg>

              {/* The Card */}
              <div
                className="relative z-10 w-full max-w-[430px] rounded-3xl overflow-hidden"
                style={{
                  background: "#fff",
                  boxShadow: "0 20px 60px rgba(29,116,207,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(229,231,235,0.8)",
                }}
              >
                {/* Card Top Row */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#1D74CF,#b33b41)" }}
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">WTM AI Growth Engine</div>
                      <div className="text-xs text-gray-400">360° Digital Transformation Platform</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                      style={{ background: "#22c55e" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                      LIVE
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border"
                      style={{ borderColor: "#e5e7eb", color: "#374151" }}
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[10px] text-gray-400 uppercase tracking-wide">Avg ROAS</span>
                      <span className="font-bold text-gray-800">3.8x Growth</span>
                    </div>
                  </div>
                </div>

                {/* 360° Service Section */}
                <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-100">
                  {/* Circular icon */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                      <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
                      <circle cx="32" cy="32" r="20" stroke="url(#cg)" strokeWidth="2" />
                      <text x="32" y="37" textAnchor="middle" fontSize="11" fontWeight="800" fill="url(#cg2)">360°</text>
                      <defs>
                        <linearGradient id="cg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1D74CF" />
                          <stop offset="1" stopColor="#b33b41" />
                        </linearGradient>
                        <linearGradient id="cg2" x1="0" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1D74CF" />
                          <stop offset="1" stopColor="#b33b41" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">Full-Circle Service</div>
                    <div
                      className="text-base font-extrabold bg-clip-text text-transparent leading-tight"
                      style={{ backgroundImage: "linear-gradient(90deg,#1D74CF,#b33b41)" }}
                    >
                      AI-Based Digital<br />Marketing Excellence
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Strategy · Content · SEO · PPC · Analytics</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="px-5 py-4 border-b border-gray-100 space-y-2.5">
                  {progressBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600 font-medium">{bar.label}</span>
                        <span className="text-xs font-bold text-gray-800">{bar.value}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${bar.value}%`,
                            background: "linear-gradient(90deg,#1D74CF 0%,#b33b41 80%,#D04425 100%)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center py-3">
                      <span
                        className="text-xl font-extrabold bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(135deg,#1D74CF,#D04425)" }}
                      >
                        {s.value}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Terminal */}
                <div className="mx-4 my-4 rounded-xl overflow-hidden" style={{ background: "#0f172a" }}>
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="px-4 py-3 font-mono text-[11px] leading-relaxed">
                    <div className="text-gray-400">
                      <span className="text-green-400">wtm@studio</span>
                      <span className="text-white"> ~ $ </span>
                      <span className="text-blue-300">ai-deploy --service=360-marketing</span>
                    </div>
                    <div className="text-green-400 mt-1">✓ SEO · PPC · Content · Social activated</div>
                    <div className="text-green-400">✓ AI model GPT-4 + WTM Custom LLM</div>
                    <div className="text-gray-400 mt-1">
                      <span className="text-green-400">wtm@studio</span>
                      <span className="text-white"> ~ $ </span>
                      <span className="animate-pulse text-white">▍</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM GRADIENT BAR ── */}
        <div
          className="relative z-10 w-full py-4"
          style={{ background: "linear-gradient(90deg,#1D74CF 0%,#7c3aed 40%,#b33b41 70%,#D04425 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 divide-x divide-white/20">
              {bottomItems.map((item) => (
                <div key={item.label} className="flex items-center justify-center gap-2.5 text-white py-1">
                  {item.icon}
                  <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        <DiscussProjectForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </ScrollReveal>
  );
}