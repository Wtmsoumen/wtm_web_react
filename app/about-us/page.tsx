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
  Award as AwardIcon,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

import { globalStyle } from "../globalStyle";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const slides = [
  { src: "images/abacus-building.webp", alt: "Webtechnomind India Office" },
  { src: "images/abacus2.webp", alt: "Webtechnomind Dubai Office" },
  { src: "images/abacus3.webp", alt: "Webtechnomind USA Office" },
  { src: "images/abacus4.webp", alt: "Webtechnomind Global Team" },
];

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

const technologies = [
  "React", "Next.js", "Flutter", "React Native", "Laravel", "WordPress",
  "Node.js", "TypeScript", "Python", "AWS", "Firebase", "MongoDB", "Shopify",
  "Magento",  "Google Ads", "Facebook Ads", "SEO Tools",
  "Figma", "Adobe XD", "Sketch", "Jira", "GitHub", "Docker", "Kubernetes",
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
function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
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
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 group"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <span className="text-4xl md:text-5xl font-black bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent tabular-nums">
        {visible ? count : 0}{suffix}
      </span>
      <span className="text-sm text-gray-500 font-medium text-center">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-white overflow-y-hidden overflow-x-hidden pt-10">

      {/* ══ 1. HERO ════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="relative bg-white pt-20 pb-0 overflow-hidden">
          {/* blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-linear-to-br from-[#1D74CF]/8 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-40 right-[8%] w-160 h-160 rounded-full bg-linear-to-bl from-[red]/30 to-transparent blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">

              {/* Left copy */}
              <div className="flex flex-col gap-6" data-aos="fade-right">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm w-fit" data-aos="fade-down">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Who We Are</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1]">
                  Welcome To{" "}
                  <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                    Webtechnomind IT Solutions Private Limited.
                  </span>
                </h1>

                <p className="text-black text-base md:text-lg leading-relaxed">
                  With <strong className="text-black">12+ years</strong> of experience in the industry we have established{" "}
                  <strong className="text-black">3500+ robust websites and applications</strong> and gathered{" "}
                  <strong className="text-black">40+ exceptional brains</strong> working on our projects 24×7. We take pride in being trusted by{" "}
                  <strong className="text-black">3000+ clients globally</strong> and are expanding our services in the sector of digital marketing.
                </p>

                {/* Mission & Vision inline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                  {[
                    {
                      icon: Target,
                      label: "OUR MISSION",
                      color: "#1D74CF",
                      text: "Deploying high-quality software and digital marketing solutions with precision and passion.",
                    },
                    {
                      icon: Eye,
                      label: "OUR VISION",
                      color: "#D04425",
                      text: "To be a global leader in digital innovation, recognized for reliability and client-centricity.",
                    },
                  ].map(({ icon: Icon, label, color, text }) => (
                    <div key={label} className="flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="100">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" style={{ color }} />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{label}</span>
                      </div>
                      <p className="text-black text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right photo – collage image */}
              <div className="h-[480px]" data-aos="fade-left">
                <img
                  src="images/collage-about-us.png"
                  alt="WebTechnoMind Team Collage"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative border-t border-gray-100 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 divide-x divide-gray-200">
                {stats.map((s, i) => (
                  <StatItem key={i} value={s.value} label={s.label} delay={i * 100} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══ 2. OUR PURPOSE ════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto" data-aos="zoom-in">
            <div className="rounded-3xl overflow-hidden relative shadow-2xl" style={{
              background: "linear-gradient(108deg,#0079d0 0%,#9e52d8 32%,#da365c 84%,#d04901 100%)"
            }}>
              <div className="relative z-10 px-8 md:px-16 py-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Purpose</h2>
                <p className="text-white/85 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                  At Webtechnomind, our mission is to empower businesses globally by simplifying the journey toward digital transformation. We eliminate the complexities of adopting new technologies, enabling companies to harness digital solutions for efficiency and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══ 3. CORE VALUES ════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="relative bg-gray-50 py-20 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-14" data-aos="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm">
                <AwardIcon className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">What Drives Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-black">
                Our Core <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black">{title}</h3>
                  <p className="text-black text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══ 4. GLOBAL PRESENCE ═════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6" data-aos="fade-right">
                <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                  Our <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Global Presence</span>
                </h2>
                <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    Strategically present across North America, Canada, Europe, the Middle East, and APAC, we deliver customized digital solutions that reflect each region's unique market dynamics.
                  </p>
                  <p>
                    Our global delivery model ensures high-quality results, fast turnaround, and scalable solutions for startups and enterprises alike.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6" data-aos="fade-left">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 cursor-grab active:cursor-grabbing"
                  style={{ height: "400px" }}
                >
                  {slides.map((slide, i) => (
                    <img
                      key={i}
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? "w-10 h-3 bg-blue-600" : "w-3 h-3 bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══ 5. TECHNOLOGIES ════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="bg-gray-50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-10" data-aos="fade-down">
              Technologies We Work With
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 bg-white hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══ 6. CTA ══════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8" data-aos="zoom-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm" data-aos="fade-down">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Ready to Start?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
              Let&apos;s Build Something <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Amazing Together</span>
            </h2>
            <p className="text-black text-lg max-w-xl leading-relaxed">
              Whether you&apos;re a startup or an enterprise, we have the expertise and passion to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] text-white font-bold px-12 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}