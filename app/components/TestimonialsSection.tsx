"use client";

import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { ArrowRight, ShoppingCart, Megaphone, Globe, Smartphone, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// ─── Tech Logos (SVG inline) ──────────────────────────────────────────────────
const ReactLogo = () => (
    <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
    </svg>
);

const NextLogo = () => (
    <div className="bg-white rounded-full">
        <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
            <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
        </svg>
    </div>
);

const NodeLogo = () => (
    <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#68A063" strokeWidth="1.5" fill="none" />
        <text x="11" y="24" fontSize="9" fill="#68A063" fontFamily="monospace" fontWeight="bold">node</text>
    </svg>
);

const techStack = [
    { name: "React.js", Logo: ReactLogo, color: "#61DAFB" },
    { name: "Next.js", Logo: NextLogo, color: "#ffffff" },
    { name: "Node.js", Logo: NodeLogo, color: "#68A063" },
    { name: "PHP", color: "#ffffff", isText: true },
    { name: "ORACLE", color: "#F80000", isText: true },
    { name: "MySQL", color: "#E48E00", isText: true },
    { name: "Google Cloud", color: "#4285F4", isText: true },
    { name: "Azure", color: "#0078D4", isText: true },
    { name: "Node.js", Logo: NodeLogo, color: "#68A063" },
    { name: "MySQL", color: "#E48E00", isText: true },
    { name: "AI Integration", color: "#4285F4", isText: true },
];

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
    className?: string;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    "data-aos"?: string;
    "data-aos-delay"?: number;
}

function ServiceCard({ icon, title, description, highlight, className = "", onMouseEnter, onMouseLeave, ...rest }: ServiceCardProps) {
    return (
        <div
            className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1 ${highlight
                ? "bg-linear-to-tl from-[#692cb5] via-[#341f7a] to-[#2817c9]"
                : "bg-[#0d1b3e]/80 border border-white/10"
                } ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...rest}
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
        <div className="relative overflow-hidden border-y border-white/10 py-0" data-aos="fade-in">
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesTestimonialsSection() {

    const [highlight, setHighlight] = useState("")

    return (
        <div
            className="min-h-screen text-white pb-0"
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
            <ScrollReveal>
                <section className="px-6! md:px-16! pt-16! pb-12!">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Top-left: Heading + Stat */}
                            <div className="flex flex-col justify-between py-4 pr-4" data-aos="fade-right">
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
                                    <div className="text-5xl md:text-7xl font-bold text-white leading-none">90%</div>
                                    <p className="text-white/50 text-sm mt-1">Client Satisfaction Rate</p>
                                </div>
                            </div>

                            {/* Full-Stack (highlighted) */}
                            <ServiceCard
                                highlight={highlight === "Full-Stack Development"}
                                onMouseEnter={() => setHighlight("Full-Stack Development")}
                                onMouseLeave={() => setHighlight("")}
                                icon={<Globe className="w-6 h-6 text-white" />}
                                title="Full-Stack Development"
                                description="Webtechnomind provides comprehensive full-stack solutions, solidifying our reputation as a top web development company."
                                data-aos="fade-up"
                                data-aos-delay={100}
                            />

                            {/* Mobile Apps */}
                            <ServiceCard
                                highlight={highlight === "Mobile Apps Development"}
                                onMouseEnter={() => setHighlight("Mobile Apps Development")}
                                onMouseLeave={() => setHighlight("")}
                                icon={<Smartphone className="w-6 h-6 text-white/70" />}
                                title="Mobile Apps Development"
                                description="Webtechnomind offers cutting-edge mobile app development services tailored to meet your business goals. Our expert."
                                data-aos="fade-up"
                                data-aos-delay={200}
                            />

                            {/* Ecommerce */}
                            <ServiceCard
                                highlight={highlight === "Ecommerce Development"}
                                onMouseEnter={() => setHighlight("Ecommerce Development")}
                                onMouseLeave={() => setHighlight("")}
                                icon={<ShoppingCart className="w-6 h-6 text-white/70" />}
                                title="Ecommerce Development"
                                description="Webtechnomind is a trusted ecommerce development company offering custom, scalable, and user-friendly solutions."
                                data-aos="fade-up"
                                data-aos-delay={300}
                            />

                            {/* Digital Marketing */}
                            <ServiceCard
                                highlight={highlight === "Digital Marketing"}
                                onMouseEnter={() => setHighlight("Digital Marketing")}
                                onMouseLeave={() => setHighlight("")}
                                icon={<Megaphone className="w-6 h-6 text-white/70" />}
                                title="Digital Marketing"
                                description="Unlock exponential business growth with Webtechnomind — a tech-powered digital marketing agency that thrives."
                                data-aos="fade-up"
                                data-aos-delay={400}
                            />

                            {/* CTA Block */}
                            <div 
                                className="rounded-2xl bg-[#0d1b3e]/80 border border-white/10 p-7 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={500}
                            >
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
            </ScrollReveal>

            {/* ── Section 2: Stats + "End to End Technology" ────────── */}
            <ScrollReveal>
                <section className="px-6! md:px-16! py-16!">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10">
                        <div className="flex-1" data-aos="fade-right">
                            <p className="text-white/70 text-2xl font-light">End to End</p>
                            <h2 className="text-4xl font-bold">
                                <span className="bg-linear-to-l from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                    Technology
                                </span>
                            </h2>
                        </div>
                        <div className="flex gap-8 md:gap-16">
                            <div data-aos="zoom-in" data-aos-delay={100}>
                                <div className="text-4xl md:text-6xl font-bold text-white">2K+</div>
                                <p className="text-white/50 text-sm mt-1">Successful Project</p>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay={200}>
                                <div className="text-4xl md:text-6xl font-bold text-white">90%</div>
                                <p className="text-white/50 text-sm mt-1">Client Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ── Section 3: Tech Stack Marquee ─────────────────────── */}
            <TechMarquee />

            {/* ── Section 4: Testimonials ────────────────────────────── */}
            {/* <TestimonialsSection /> */}
        </div>
    );
}