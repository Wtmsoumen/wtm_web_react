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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}>
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              Built Over{" "}
              <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                A Decade
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1D74CF] via-[#b33b41] to-[#D04425] hidden md:block" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className="flex-1 flex justify-end md:pr-10">
                    <div className={`${i % 2 !== 0 ? "md:ml-0 md:mr-0" : ""} max-w-sm w-full rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow p-6 group`}>
                      <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#1D74CF] to-[#D04425] bg-clip-text text-transparent">{m.year}</span>
                      <h3 className="text-lg font-bold text-black mt-1 mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#1D74CF] via-[#b33b41] to-[#D04425] flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>

                  {/* Empty side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. TEAM ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}>
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl text-base leading-relaxed">
              The visionaries and strategists shaping Webtechnomind's global growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                {/* Photo */}
                <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: "240px" }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  {/* country badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
                    {member.country}
                  </div>
                  {/* scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* social icons on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {[Linkedin, Twitter, Mail].map((Icon, j) => (
                      <div key={j} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                        <Icon className="w-4 h-4 text-gray-700" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Info */}
                <div className="px-4 py-4 flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-black leading-snug">{member.name}</p>
                  <p className="text-xs text-gray-400 leading-snug">{member.role}</p>
                </div>
                <div className="h-[3px] bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
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