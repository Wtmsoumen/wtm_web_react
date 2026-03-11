"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShoppingCart, Megaphone, Globe, Smartphone, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";

// ─── Tech Logos (SVG inline) ──────────────────────────────────────────────────
const ReactLogo = () => (
    <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
    </svg>
);

const NodeLogo = () => (
    <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#68A063" strokeWidth="1.5" fill="none" />
        <text x="11" y="24" fontSize="9" fill="#68A063" fontFamily="monospace" fontWeight="bold">node</text>
    </svg>
);

const techStack = [
    { name: "React", Logo: ReactLogo, color: "#61DAFB" },
    { name: "Node.js", Logo: NodeLogo, color: "#68A063" },
    { name: "ORACLE", color: "#F80000", isText: true },
    { name: "MySQL", color: "#E48E00", isText: true },
    { name: "Google Cloud", color: "#4285F4", isText: true },
    { name: "Azure", color: "#0078D4", isText: true },
    { name: "Node.js", Logo: NodeLogo, color: "#68A063" },
    { name: "MySQL", color: "#E48E00", isText: true },
];

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
    className?: string;
}

function ServiceCard({ icon, title, description, highlight, className = "" }: ServiceCardProps) {
    return (
        <div
            className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1 ${highlight
                ? "bg-gradient-to-br from-[#7B5CE5] via-[#6144D3] to-[#3B2DB5]"
                : "bg-[#0d1b3e]/80 border border-white/10"
                } ${className}`}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${highlight ? "bg-white/20" : "bg-white/10"}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-lg tracking-widest uppercase leading-tight mb-3">
                    {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            </div>
            <button className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors mt-auto group">
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                Learn More
            </button>
        </div>
    );
}

// ─── Marquee Tech Strip ───────────────────────────────────────────────────────
function TechMarquee() {
    const items = [...techStack, ...techStack];
    return (
        <div className="relative overflow-hidden border-y border-white/10 py-0">
            <div className="flex animate-marquee whitespace-nowrap">
                {items.map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-8 py-5 border-r border-white/10 min-w-[160px] justify-center"
                    >
                        {tech.Logo && <tech.Logo />}
                        <span className="font-bold text-sm" style={{ color: tech.color }}>
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Testimonial Section ──────────────────────────────────────────────────────
function TestimonialsSection() {
    return (
        <section className="relative px-6 md:px-16 py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Main Video */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-800 group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                    </div>
                    {/* Simulated people in meeting */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-2 w-full h-full p-4 opacity-30">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="rounded-lg bg-slate-500/50 flex items-end justify-center pb-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform z-10">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                    </div>
                </div>

                {/* Right: Heading + Controls + Thumbnails */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-4xl font-light text-white leading-tight">
                            What our
                        </h2>
                        <h2 className="text-4xl font-light leading-tight">
                            <span className="bg-linear-to-l from-pink-500 to-blue-500 bg-clip-text text-transparent">Client's Said</span>
                        </h2>
                        <div className="flex gap-1 mt-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400/40 fill-yellow-400/20" />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#E91E8C] flex items-center justify-center text-white hover:bg-[#c4177a] transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2].map((i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden aspect-video bg-slate-700 group cursor-pointer">
                                <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-1 w-full h-full p-2 opacity-30">
                                        {[...Array(4)].map((_, j) => (
                                            <div key={j} className="rounded bg-slate-500/50" />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesTestimonialsSection() {
    return (
        <div
            className="min-h-screen text-white"
            style={{
                background: "radial-gradient(ellipse at top left, #1a0a3d 0%, #07122a 40%, #050d1f 100%)",
                fontFamily: "'Syne', 'DM Sans', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>

            {/* ── Section 1: Services Grid ─────────────────────────── */}
            <section className="px-6 md:px-16 pt-16 pb-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Top-left: Heading + Stat */}
                        <div className="flex flex-col justify-between py-4 pr-4">
                            <div>
                                <p className="text-white/70 text-lg font-light">Your Dream</p>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Our{" "}
                                    <span className="bg-linear-to-l from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                        Expertise
                                    </span>
                                </h2>
                            </div>
                            <div className="mt-8">
                                <div className="text-7xl font-bold text-white leading-none">90%</div>
                                <p className="text-white/50 text-sm mt-1">Client Satisfaction Rate</p>
                            </div>
                        </div>

                        {/* Full-Stack (highlighted) */}
                        <ServiceCard
                            highlight
                            icon={<Globe className="w-6 h-6 text-white" />}
                            title="Full-Stack Development"
                            description="Webtechnomind provides comprehensive full-stack solutions, solidifying our reputation as a top web development company."
                        />

                        {/* Mobile Apps */}
                        <ServiceCard
                            icon={<Smartphone className="w-6 h-6 text-white/70" />}
                            title="Mobile Apps Development"
                            description="Webtechnomind offers cutting-edge mobile app development services tailored to meet your business goals. Our expert."
                        />

                        {/* Ecommerce */}
                        <ServiceCard
                            icon={<ShoppingCart className="w-6 h-6 text-white/70" />}
                            title="Ecommerce Development"
                            description="Webtechnomind is a trusted ecommerce development company offering custom, scalable, and user-friendly solutions."
                        />

                        {/* Digital Marketing */}
                        <ServiceCard
                            icon={<Megaphone className="w-6 h-6 text-white/70" />}
                            title="Digital Marketing"
                            description="Unlock exponential business growth with Webtechnomind — a tech-powered digital marketing agency that thrives."
                        />

                        {/* CTA Block */}
                        <div className="rounded-2xl bg-[#0d1b3e]/80 border border-white/10 p-7 flex flex-col justify-between">
                            <p className="text-white/60 text-sm leading-relaxed">
                                From social media management to search engine optimization, we provide a full suite of services to help your business succeed.
                            </p>
                            <button
                                className="mt-6 self-start px-6 py-3 rounded-full border-2 text-white text-sm font-semibold tracking-wide transition-all hover:bg-white/10"
                                style={{ borderColor: "#E91E8C", color: "#E91E8C" }}
                            >
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Stats + "End to End Technology" ────────── */}
            <section className="px-6 md:px-16 py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10">
                    <div className="flex-1">
                        <p className="text-white/70 text-2xl font-light">End to End</p>
                        <h2 className="text-4xl font-bold">
                            <span className="bg-linear-to-l from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                Technology
                            </span>
                        </h2>
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <div className="text-6xl font-bold text-white">2K+</div>
                            <p className="text-white/50 text-sm mt-1">Successful Project</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-white">90%</div>
                            <p className="text-white/50 text-sm mt-1">Client Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 3: Tech Stack Marquee ─────────────────────── */}
            <TechMarquee />

            {/* ── Section 4: Testimonials ────────────────────────────── */}
            <TestimonialsSection />
        </div>
    );
}