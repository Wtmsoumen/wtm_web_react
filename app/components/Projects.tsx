"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const featuredProject = {
    slug: "virtuard",
    tag: "Property Platform",
    title: "Virtuard",
    subtitle: "Property Selling Platform",
    description:
        "Modern property selling platform with 360° virtual views. Built with Figma + Laravel. Mobile-friendly, scalable, and SEO-optimized.",
    stats: [
        { value: "75", label: "Interaction" },
        { value: "83", label: "Visibility" },
    ],
    cta: "View Case Study",
    image: "/images/portfolio/Virtuard.jpg",
    bg: "from-[#0d1117] to-[#1a1f2e]",
};

const gridProjects = [
    {
        id: 1,
        title: "Sky Dive",
        category: "Tandem Skydiving",
        industry: "Adventure",
        description: "High-performance WordPress website with immersive UI/UX. Delivered 72% traffic growth.",
        image: "/images/portfolio/skydive.jpg",
        interaction: 75,
        visibility: 83,
        stats: [
            "75",
            "83",
        ],
        slug: "sky-dive",
    },
    {
        id: 2,
        title: "Re-Energi",
        category: "Sustainable Energy",
        industry: "Energy",
        description: "SEO-optimized WordPress site with modern UI reflecting eco-friendly mission.",
        image: "/images/portfolio/reenergi.jpg",
        interaction: 76,
        visibility: 88,
        stats: [
            "76",
            "88",
        ],
        slug: "re-energi",
    },
    {
        id: 3,
        title: "Neuro Apply",
        category: "Psychological Assessment",
        industry: "Healthcare",
        description: "Clean, intuitive WordPress platform with strong SEO performance.",
        image: "/images/portfolio/neuroapply.jpg",
        interaction: 75,
        visibility: 89,
        stats: [
            "75",
            "89",
        ],
        slug: "neuro-apply",
    },
    {
        id: 4,
        title: "Enigma Psychometry",
        category: "Online Education",
        industry: "Education",
        description: "Modern e-learning website with responsive design and SEO optimization.",
        image: "/images/portfolio/enigma.jpg",
        interaction: 70,
        visibility: 89,
        stats: [
            "70",
            "89",
        ],
        slug: "enigma-psychometry",
    },
    {
        id: 5,
        title: "Canadian Flyers International College",
        category: "Flight Training",
        industry: "Aviation",
        description: "Professional aviation training website with 80%+ traffic growth.",
        image: "/images/portfolio/canadianflyers.jpg",
        interaction: 82,
        visibility: 93,
        stats: [
            "82",
            "93",
        ],
        slug: "canadian-flyers",
    },
    {
        id: 6,
        title: "Brigient",
        category: "Cybersecurity",
        industry: "Technology",
        description: "Secure and performance-driven website with modern UI/UX.",
        image: "/images/portfolio/brigient.jpg",
        interaction: 79,
        visibility: 86,
        stats: [
            "79",
            "86",
        ],
        slug: "brigient",
    },
];

// Pill tag component
function Tag({ label, color }: { label: string; color?: string }) {
    return (
        <span
            className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wide text-white ${color || "bg-blue-600"}`}
        >
            {label}
        </span>
    );
}

// Stats badge row
function StatsBadges({ stats }: { stats: string[] }) {
    return (
        <div className="flex items-center gap-2 mt-2">
            {stats.map((s, i) => (
                <span
                    key={i}
                    className="text-[11px] font-bold text-white/60 bg-white/10 rounded px-2 py-0.5"
                >
                    {s}
                </span>
            ))}
        </div>
    );
}

export default function PortfolioSection() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <ScrollReveal>
            <section className="relative bg-[#0a0d14] py-20 px-4 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[120px] rounded-full" />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Section Label */}
                    <div className="flex justify-center mb-4" data-aos="fade-down">
                        <span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/60 border border-blue-800/40 px-4 py-1.5 rounded-full">
                            Our Portfolio
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-10" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                            Projects That Drive{" "}
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)]">
                                Real Results
                            </span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-md mx-auto">
                            From crypto exchanges to healthcare platforms — we build digital
                            products that scale globally.
                        </p>
                    </div>

                    {/* Featured Card */}
                    <div data-aos="fade-up">
                        <Link
                            href={`/portfolio/${featuredProject.slug}`}
                            className="block rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#111827] to-[#1a2035] mb-5 hover:border-white/20 transition-colors duration-200 group"
                        >
                            <div className="flex flex-col sm:flex-row items-center">
                                {/* Left: screenshot */}
                                <div className="relative w-full sm:w-[55%] overflow-hidden p-4">
                                    <Image
                                        src={featuredProject?.image}
                                        alt={featuredProject.title}
                                        width={1920}
                                        height={1080}
                                        className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                                    />
                                </div>

                                {/* Right: content */}
                                <div className="flex flex-col justify-center p-6 w-full sm:w-[45%] gap-3">
                                    <Tag label={featuredProject.tag} color="bg-blue-600 w-fit py-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{featuredProject.title}</h3>
                                        <p className="text-white/70 text-md mt-0.5">{featuredProject.subtitle}</p>
                                    </div>
                                    <p className="text-white/70 text-md leading-relaxed">{featuredProject.description}</p>
                                    <div className="flex gap-6">
                                        {featuredProject.stats.map((s, i) => (
                                            <div key={i}>
                                                <div className="text-lg font-extrabold text-white">{s.value}</div>
                                                <div className="text-[11px] text-white/40">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="flex items-center gap-1.5 text-blue-400 text-md font-semibold group-hover:text-blue-300 transition-colors w-fit">
                                        {featuredProject.cta}
                                        <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Grid Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
                        {gridProjects.map((project, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <Link
                                    href={`/portfolio/${project.slug}`}
                                    onMouseEnter={() => setHovered(i)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`group relative rounded-2xl overflow-hidden border border-white/10  p-0 flex flex-col transition-transform duration-200 ${hovered === i ? "scale-[1.02] border-white/20" : ""} cursor-pointer`}
                                    style={{ minHeight: 160 }}
                                >
                                    {/* Mock image / bg area */}
                                    <div className="relative w-full flex-1 min-h-[90px] flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 opacity-30 bg-linear-to-br from-white/5 to-transparent" />
                                        <span className="text-white/10 text-[10px] font-mono select-none z-10">
                                            <Image src={project?.image} alt={project?.title} width={1920} height={1080} />
                                        </span>

                                        {/* Tag top-left */}
                                        {/* <div className="absolute top-2 left-2 z-20">
                                            <Tag label={project.tag} color={project.tagColor} />
                                        </div> */}
                                        <div className="absolute top-0 w-full h-full group-hover:bg-linear-to-t from-black/60 via-blue-black/40 to-blue-800/20 z-10" />
                                    </div>

                                    {/* Bottom info */}
                                    <div className="p-3 pt-2 z-11">
                                        <StatsBadges stats={project.stats} />
                                        <div className="mt-1.5">
                                            <div className="text-white text-sm font-bold leading-tight">{project.title}</div>
                                            <div className="text-white/40 text-[11px] mt-0.5">{project.description}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col items-center gap-2 mt-8" data-aos="zoom-in">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-blue-900/30"
                        >
                            Explore Full Portfolio
                            <span className="rounded-full p-0.5! flex items-center justify-center text-xs">→</span>
                        </Link>
                        <p className="text-white/30 text-xs">27+ projects across 12 industries</p>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}