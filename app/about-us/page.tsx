"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

import { globalStyle } from "../globalStyle";
import Link from "next/link";
import Footer from "../components/Footer";

const slides = [
  { src: "images/abacus-building.webp", alt: "Webtechnomind India Office" },
  { src: "images/abacus2.webp", alt: "Webtechnomind Dubai Office" },
  { src: "images/abacus3.webp", alt: "Webtechnomind USA Office" },
  { src: "images/abacus4.webp", alt: "Webtechnomind Global Team" },
];

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "12+", label: "Years of Service" },
  { value: "85%", label: "Customer Retention" },
  { value: "3500+", label: "Projects" },
  { value: "40+", label: "Brainers" },
  { value: "3000+", label: "Global Clients" },
  { value: "15+", label: "Countries Served" },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with full transparency and honesty in every client relationship and project we undertake.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries, embracing emerging technologies to deliver future-ready solutions.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your satisfaction drives everything we do. Your smile is our greatest motivation and measure of success.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, aligning deeply with your goals, culture, and vision.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We go the extra mile on every project, ensuring quality, precision, and performance at every step.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With offices in India, Dubai, and the USA, we bring a global perspective to every local challenge.",
  },
];

const teamMembers = [
  { name: "Amit Singh", role: "Founder | Director & CEO", image: "/team/amit.jpg", country: "India" },
  { name: "Mitul", role: "Director of Marketing", image: "/team/mitul.jpg", country: "Dubai" },
  { name: "Rahul Halder", role: "Project Manager", image: "/team/rahul.jpg", country: "India" },
  { name: "Debashis Majumdar", role: "Director – Marketing (World Wide)", image: "/team/debashis.jpg", country: "India" },
];

const galleryImages = [
  { src: "/about/team-group.jpg", span: "col-span-2 row-span-2" },
  { src: "/about/office-work1.jpg", span: "col-span-1 row-span-1" },
  { src: "/about/team-meeting.jpg", span: "col-span-1 row-span-1" },
  { src: "/about/office-building.jpg", span: "col-span-1 row-span-2" },
  { src: "/about/office-interior.jpg", span: "col-span-1 row-span-1" },
  { src: "/about/team-collab.jpg", span: "col-span-1 row-span-1" },
];

const milestones = [
  { year: "2012", title: "Founded", desc: "Webtechnomind IT Solutions was established in Kolkata, India." },
  { year: "2015", title: "Global Expansion", desc: "Opened our Dubai office and started serving clients across the Middle East." },
  { year: "2018", title: "1000+ Projects", desc: "Crossed the milestone of 1000 successful project deliveries globally." },
  { year: "2020", title: "USA Office", desc: "Expanded to the United States, strengthening our presence in North America." },
  { year: "2022", title: "3000+ Clients", desc: "Grew our trusted global clientele to over 3000 businesses worldwide." },
  { year: "2024", title: "AI & Innovation", desc: "Launched dedicated AI Engineering & Blockchain development divisions." },
];

const technologies = [
  "React", "Next.js", "Flutter", "React Native", "Laravel", "WordPress",
  "Node.js", "TypeScript", "Python", "AWS", "Firebase", "MongoDB",
];

// ─── Counter Hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Stat Item ────────────────────────────────────────────────────────────────
function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const numeric = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[\d]/g, "");
  const count = useCounter(numeric, 1600, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 group">
      <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent tabular-nums">
        {visible ? count : 0}{suffix}
      </span>
      <span className="text-sm text-gray-500 font-medium text-center">{label}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {

    const [active, setActive] = useState(0);
  return (
    <main className="bg-white min-h-screen overflow-x-hidden pt-20">

      {/* ══ 1. HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-20 pb-0 overflow-hidden">
        {/* blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#1D74CF]/8 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[#D04425]/8 to-transparent blur-3xl" />
        {/* grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">

            {/* Left copy */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm w-fit`}>
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Who We Are</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1]">
                Welcome To{" "}
                <span className="bg-gradient-to-r from-[#1D74CF] to-[#b33b41] bg-clip-text text-transparent">
                  Webtechnomind IT Solutions
                </span>{" "}
                <span className="bg-gradient-to-r from-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                  Private Limited.
                </span>
              </h1>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                With <strong className="text-black">12+ years</strong> of experience in the industry we have established{" "}
                <strong className="text-black">3500+ robust websites and applications</strong> and gathered{" "}
                <strong className="text-black">40+ exceptional brains</strong> working on our projects 24×7. We take pride in being trusted by{" "}
                <strong className="text-black">3000+ clients globally</strong> and are expanding our services in the sector of digital marketing. We provide a 360° approach in our web-based services and go another extra mile for each of our projects. Client satisfaction matters to us — your smile is our motivation.
              </p>

              {/* Mission & Vision inline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                {[
                  {
                    icon: Target,
                    label: "OUR MISSION",
                    color: "#1D74CF",
                    text: "At WebTechnoMind, our mission is to deliver high-quality web, app, and digital marketing solutions through expert teams and proven experience. We prioritize secure, timely results and strive to exceed client expectations with a strong focus on quality, innovation, and satisfaction.",
                  },
                  {
                    icon: Eye,
                    label: "OUR VISION",
                    color: "#D04425",
                    text: "Our vision is to be a global leader in digital solutions, recognized for delivering quality, reliability, and client-centric service. We strive to expand our global presence while providing continuous support and innovative, future-ready technologies.",
                  },
                ].map(({ icon: Icon, label, color, text }) => (
                  <div key={label} className="flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color }} />
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{label}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

         {/* Right photo collage – single image */}
            <div className="  h-[480px]">
              <img
                src="images/collage-about-us.png"
                alt="WebTechnoMind Team Collage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 divide-x divide-gray-200">
              {stats.map((s, i) => (
                <StatItem key={i} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. OUR PURPOSE ════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative" style={{
            background: "linear-gradient(135deg, #1D74CF 0%, #b33b41 50%, #D04425 100%)"
          }}>
            {/* noise texture overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
            <div className="relative z-10 px-8 md:px-16 py-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Purpose</h2>
              <p className="text-white/85 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                At Webtechnomind, our mission is to empower businesses globally by simplifying the journey toward digital transformation. We strive to eliminate the complexities of adopting new technologies, enabling companies to harness the power of digital solutions to improve efficiency, drive innovation, and create outstanding experiences for their customers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. CORE VALUES ════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}>
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              Our Core{" "}
              <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl text-base leading-relaxed">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default">
                {/* blob */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-[#D04425]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D74CF] via-[#b33b41] to-[#D04425] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. JOURNEY / TIMELINE ══════════════════════════════════════════════ */}


      {/* ══ 5. TEAM ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1D74CF] to-[#b33b41] bg-clip-text text-transparent">
                Global
              </span>{" "}
              <span className="bg-gradient-to-r from-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                Presence
              </span>
            </h2>
 
            <div className="flex flex-col gap-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                At WebTechnoMind, we proudly operate as a globally recognized brand with
                strong local expertise. With a strategic presence across North America,
                Canada, Europe, the Middle East, and APAC, we deliver customized digital
                solutions that reflect each region's unique culture, market dynamics, and
                regulatory needs.
              </p>
              <p>
                We go beyond one-size-fits-all approaches by crafting region-specific strategies
                tailored to your business goals. Our global delivery model ensures high-quality
                results, fast turnaround, and scalable solutions — whether you're a startup or
                an established enterprise.
              </p>
              <p>
                Backed by a worldwide team and local partners, we offer 24/7 support, agile
                project execution, and deep cultural insight. Wherever you are,
                WebTechnoMind is your trusted partner for globally minded, locally effective
                digital transformation.
              </p>
            </div>
          </div>
 
          {/* ── Right: Image slider ── */}
          <div className="flex flex-col gap-4">
            {/* Image */}
        <div
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100 cursor-grab active:cursor-grabbing select-none"
              style={{ height: "380px" }}
              onMouseDown={(e) => {
                const startX = e.clientX;
                const onMove = (ev: MouseEvent) => {
                  const diff = ev.clientX - startX;
                  if (Math.abs(diff) > 50) {
                    if (diff < 0) setActive((p) => (p + 1) % slides.length);
                    else setActive((p) => (p - 1 + slides.length) % slides.length);
                    document.removeEventListener("mousemove", onMove);
                    document.removeEventListener("mouseup", onUp);
                  }
                };
                const onUp = () => {
                  document.removeEventListener("mousemove", onMove);
                  document.removeEventListener("mouseup", onUp);
                };
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onUp);
              }}
              onTouchStart={(e) => {
                const startX = e.touches[0].clientX;
                const onMove = (ev: TouchEvent) => {
                  const diff = ev.touches[0].clientX - startX;
                  if (Math.abs(diff) > 50) {
                    if (diff < 0) setActive((p) => (p + 1) % slides.length);
                    else setActive((p) => (p - 1 + slides.length) % slides.length);
                    document.removeEventListener("touchmove", onMove);
                  }
                };
                document.addEventListener("touchmove", onMove, { passive: true });
              }}
            >
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}

              {/* Left / Right arrow hints */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
 
            {/* Dots */}
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full border transition-all duration-300 ${
                    i === active
                      ? "w-8 h-3 border-[#1D74CF] bg-[#1D74CF]"
                      : "w-3 h-3 border-gray-300 bg-white hover:border-[#b33b41]"
                  }`}
                />
              ))}
            </div>
          </div>
 
        </div>
      </div>

        
        </div>
      </section>

      {/* ══ 6. TECHNOLOGIES ════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-10">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 bg-gray-50 hover:border-[#1D74CF] hover:text-[#1D74CF] hover:bg-blue-50 transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-[#1D74CF]/10 to-transparent blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Ready to Start?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Whether you're a startup or an enterprise, we have the expertise and passion to bring your vision to life. Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] text-white font-bold px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-gray-200 text-black font-bold px-10 py-4 rounded-full hover:border-[#1D74CF] hover:text-[#1D74CF] transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>

  

    </main>
  );
}