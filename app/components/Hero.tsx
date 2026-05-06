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



// -----------Without video background, more stylized card, and additional sections for 2025 revamp -----------
"use client"
import { Sparkles, ArrowRight, Eye, TrendingUp, ShoppingCart, BarChart2, Cpu, Megaphone, Cloud, Smartphone, Globe, Search } from "lucide-react";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";
import HeroBg from "./Herobg";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollReveal from "./ScrollReveal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroOrbit from "./Heroorbit";

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
        className="relative min-h-[calc(100vh-0px)] flex flex-col overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, #eef0ff 0%, #f5f6ff 30%, #ffffff 60%, #fff5f8 100%)",
        }}
      >
        {/* ── Animated AI neural background ── */}
        <HeroBg />

        {/* ── Dot pattern (z:2, above canvas) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c5cef5 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            opacity: 0.30,
            zIndex: 2,
          }}
        />

        {/* ── Blob top-right — blue/indigo ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-100px", right: "-60px",
            width: "580px", height: "580px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 38% 38%, rgba(99,120,246,0.28) 0%, rgba(165,180,255,0.13) 45%, transparent 70%)",
            filter: "blur(55px)",
            zIndex: 2,
          }}
        />

        {/* ── Blob bottom-left — pink ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "20px", left: "-100px",
            width: "500px", height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 55% 55%, rgba(233,30,140,0.18) 0%, rgba(251,182,206,0.09) 50%, transparent 72%)",
            filter: "blur(55px)",
            zIndex: 2,
          }}
        />

        {/* ── Main content (z:10, above everything) ── */}
        <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-16 lg:py-0" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-80px)]">

            {/* ════ LEFT COLUMN ════ */}
            <div className="flex flex-col gap-5 lg:gap-6 pt-8 lg:pt-0">

              {/* Badge */}
              <div className="hero-badge inline-flex items-center self-start gap-2">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
                  style={{ borderColor: "#d1d5db", color: "#6b7280", background: "rgba(255,255,255,0.90)" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(135deg,#1D74CF,#b33b41)" }} />
                  360° AI-Powered Digital Studio
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#f97316,#ef4444)" }}>
                  2025
                </span>
              </div>

              {/* Heading */}
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-tight text-gray-900">
                Your Next-Gen
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#1D74CF 0%,#9333ea 40%,#db2777 70%,#D04425 100%)" }}>
                  AI Tech Growth
                </span>
                <br />
                Partner
              </h1>

              {/* 360 Made */}
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
                  className="hero-btn group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg,#1D74CF 0%,#7c3aed 50%,#db2777 100%)",
                    boxShadow: "0 8px 28px rgba(29,116,207,0.40), 0 2px 8px rgba(219,39,119,0.25)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  className="hero-btn group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                  style={{ borderColor: "#db2777", color: "#db2777", background: "rgba(255,255,255,0.80)" }}
                  onClick={() => router.push("/portfolio")}
                >
                  Explore Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {[...serviceTagsRow1, ...serviceTagsRow2].map((t) => (
                  <span
                    key={t.label}
                    className="hero-tag flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border text-gray-600"
                    style={{ borderColor: "#e5e7eb", background: "rgba(255,255,255,0.85)" }}
                  >
                    <span style={{ color: "#1D74CF" }}>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ════ RIGHT COLUMN ════ */}
            <div className="hero-card relative flex items-center justify-center lg:justify-end">



              <div className="relative z-10 w-full max-w-[1400px] scale-110">
                <Image
                  src="/images/hero_png_image.png"
                  alt="Hero"
                  width={1400}
                  height={1400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>



              {/* <HeroOrbit /> */}



            </div>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div
          className="relative w-[90%] mx-auto rounded-3xl mt-10 py-4"
          style={{ background: "linear-gradient(90deg,#1D74CF 0%,#6d28d9 35%,#be185d 65%,#ea580c 100%)", zIndex: 10 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 divide-x divide-white/25">
              {bottomItems.map((item) => (
                <div key={item.label} className="flex items-center justify-center gap-2.5 text-white py-1">
                  {item.icon}
                  <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DiscussProjectForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    </ScrollReveal>
  );
}