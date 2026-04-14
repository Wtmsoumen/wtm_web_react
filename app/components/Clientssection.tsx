"use client";

import { Star } from "lucide-react";
import { globalStyle } from "../globalStyle";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
    category: string;
    stars: number;
    quote: React.ReactNode;
    name: string;
    role: string;
    location: string;
    avatar: string;
    featured?: boolean;
    stats?: { label: string; value: string }[];
}

interface MiniTestimonial {
    name: string;
    category: string;
    stars: number;
    quote: React.ReactNode;
    avatar: string;
    location: string;
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-200"}`}
                />
            ))}
        </div>
    );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ initials, bg }: { initials: string; bg: string }) {
    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: bg }}
        >
            {initials}
        </div>
    );
}

// ─── Category Badge ───────────────────────────────────────────────────────────
function Badge({ label, color = "#8B5CF6" }: { label: string; color?: string }) {
    return (
        <span
            className="text-xs font-medium px-2 py-0.5 rounded w-fit"
            style={{ color, backgroundColor: `${color}18` }}
        >
            {label}
        </span>
    );
}

// ─── Flag Icon Component ───────────────────────────────────────────────────
function FlagIcon({ code, className = "w-5 h-3.5" }: { code: string; className?: string }) {
    // Map UK to GB for the flag API
    const isoCode = code.toUpperCase() === "UK" ? "gb" : code.toLowerCase();
    return (
        <img
            src={`https://flagcdn.com/${isoCode}.svg`}
            alt={`${code} flag`}
            className={`${className} object-cover rounded-sm shadow-sm inline-block`}
            loading="lazy"
        />
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredTestimonial: Testimonial = {
    category: "FinTech",
    stars: 5,
    quote: (
        <>
            "Working with WTM was transformative for our business. They didn't
            just build an app— they became our strategic partner. The platform handles{" "}
            <strong>$50M+ in daily transactions</strong> with zero downtime. Their
            expertise in AI integration helped us launch faster than expected."
        </>
    ),
    name: "Marcus Chen",
    role: "CEO, TechScale Ventures",
    location: "SG Singapore",
    avatar: "MC",
    stats: [
        { value: "$50M+", label: "Daily Volume" },
        { value: "200K+", label: "Users" },
        { value: "5 mo", label: "Launch Time" },
    ],
};

const gridTestimonials: Testimonial[] = [
    {
        category: "On-Demand",
        stars: 5,
        quote: (
            <>
                "Outstanding delivery app solution with incredible customization options.
                We launched our service in just <strong>6 weeks</strong>. The AI-powered
                matching algorithm was invaluable."
            </>
        ),
        name: "Ahmed Al-Rashid",
        role: "CTO",
        location: "AE Dubai",
        avatar: "AA",
    },
    {
        category: "Healthcare",
        stars: 5,
        quote: (
            <>
                "Their AI diagnostic integration has{" "}
                <strong>improved patient outcomes by 40%</strong>. True partners who
                understood healthcare compliance from day one."
            </>
        ),
        name: "David Mitchell",
        role: "Director",
        location: "AU Sydney",
        avatar: "DM",
    },
    {
        category: "Education",
        stars: 5,
        quote: (
            <>
                "WTM built our adaptive learning platform that now serves{" "}
                <strong>500K+ students</strong>. Professional, knowledgeable, and always
                available."
            </>
        ),
        name: "Sarah Williams",
        role: "Founder",
        location: "UK London",
        avatar: "SW",
    },
    {
        category: "E-Commerce",
        stars: 5,
        quote: (
            <>
                "Our grocery delivery app processes <strong>100K+ orders daily</strong>.
                The AI recommendation engine increased average order value by 35%."
            </>
        ),
        name: "Priya Sharma",
        role: "Product Director",
        location: "IN Bangalore",
        avatar: "PS",
    },
];

const miniTestimonials: MiniTestimonial[] = [
    {
        name: "Michael Weber",
        category: "Logistics",
        stars: 4,
        quote: (
            <>
                "The route optimization AI reduced our delivery costs by 35%. Now
                handling 10,000+ daily deliveries seamlessly."
            </>
        ),
        avatar: "MW",
        location: "US",
    },
    {
        name: "Jennifer Thompson",
        category: "Fitness",
        stars: 5,
        quote: (
            <>
                "The AI personal trainer app with computer vision has been a game-changer.{" "}
                <strong>800K active users</strong> and…"
            </>
        ),
        avatar: "JT",
        location: "UK",
    },
    {
        name: "Takeshi Yamamoto",
        category: "Gaming",
        stars: 5,
        quote: (
            <>
                "AI NPCs and procedural content made our game stand out.{" "}
                <strong>5 million downloads</strong> in the first month!"
            </>
        ),
        avatar: "TY",
        location: "JP",
    },
    {
        name: "Sophie Martin",
        category: "Hospitality",
        stars: 5,
        quote: (
            <>
                "AI concierge and dynamic pricing revolutionised our hotel chain.{" "}
                <strong>28% higher occupancy</strong> and record guest…"
            </>
        ),
        avatar: "SM",
        location: "FR",
    },
];

const trustedCountries = [
    { code: "US", label: "USA" },
    { code: "UK", label: "UK" },
    { code: "AE", label: "UAE" },
    { code: "SG", label: "Singapore" },
    { code: "AU", label: "Australia" },
    { code: "IN", label: "India" },
    { code: "FR", label: "France" },
    { code: "PL", label: "Poland" },
    { code: "AL", label: "Airland" },
    { code: "CY", label: "Cyprus" },
    { code: "PT", label: "Portugal" },
];

const avatarColors: Record<string, string> = {
    MC: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    AA: "linear-gradient(135deg,#f59e0b,#ef4444)",
    DM: "linear-gradient(135deg,#10b981,#059669)",
    SW: "linear-gradient(135deg,#ec4899,#f43f5e)",
    PS: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    MW: "linear-gradient(135deg,#0ea5e9,#3b82f6)",
    JT: "linear-gradient(135deg,#f97316,#ef4444)",
    TY: "linear-gradient(135deg,#14b8a6,#06b6d4)",
    SM: "linear-gradient(135deg,#a855f7,#ec4899)",
};

const categoryColors: Record<string, string> = {
    FinTech: "#8B5CF6",
    "On-Demand": "#F59E0B",
    Healthcare: "#10B981",
    Education: "#3B82F6",
    "E-Commerce": "#EF4444",
    Logistics: "#0EA5E9",
    Fitness: "#F97316",
    Gaming: "#8B5CF6",
    Hospitality: "#EC4899",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ClientsSection() {
    return (
        <section
            className="min-h-screen py-16 px-4"
            style={{
                background: "#f8f9fb",
                fontFamily: "'Inter', 'DM Sans', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="text-center mb-12 max-w-xl mx-auto" data-aos="fade-down">
                <div className="inline-block border border-purple-300 rounded-full px-4 py-1 text-xs font-semibold text-purple-600 tracking-widest uppercase mb-5 bg-white">
                    SUCCESS STORIES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    What Our{" "}
                    <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Clients Say</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Real stories from founders across industries who built successful
                    products with us.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col gap-4">
                {/* ── Row 1: Featured + 2 grid cards ───────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Featured Card */}
                    <div
                        className="bg-white rounded-2xl p-6 shadow-sm border-t border-x border-gray-200 flex flex-col justify-between md:row-span-2 scale-100 hover:scale-105 duration-300"
                        data-aos="fade-right"
                    >
                        <div className="flex flex-col gap-4">
                            <Badge label={featuredTestimonial.category} color={categoryColors[featuredTestimonial.category]} />
                            <Stars count={featuredTestimonial.stars} />
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {featuredTestimonial.quote}
                            </p>
                        </div>

                        {/* Author */}
                        <div className="mt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Avatar initials={featuredTestimonial.avatar} bg={avatarColors[featuredTestimonial.avatar]} />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{featuredTestimonial.name}</p>
                                    <p className="text-gray-400 text-xs">{featuredTestimonial.role}</p>
                                    <p className="text-gray-400 text-xs flex items-center gap-1.5">
                                        <FlagIcon code={featuredTestimonial.location.split(" ")[0]} />
                                        {featuredTestimonial.location.split(" ").slice(1).join(" ")}
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            {featuredTestimonial.stats && (
                                <div className="flex gap-4 pt-4 border-t border-gray-100">
                                    {featuredTestimonial.stats.map((s) => (
                                        <div key={s.label}>
                                            <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                                            <p className="text-gray-400 text-xs">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Top-right 2 cards */}
                    {gridTestimonials.slice(0, 4).map((t, idx) => (
                        <div key={t.name} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <TestimonialCard t={t} />
                        </div>
                    ))}
                </div>

                {/* ── Row 3: Mini cards ─────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {miniTestimonials.map((t, idx) => (
                        <div
                            key={t.name}
                            className="bg-white rounded-2xl p-4 shadow-sm border-t border-x border-gray-200 flex flex-col gap-3 scale-100 hover:scale-105 duration-300"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                        >
                            <div className="flex items-center gap-2">
                                <Avatar initials={t.avatar} bg={avatarColors[t.avatar]} />
                                <div>
                                    <p className="font-semibold text-gray-900 text-xs">{t.name}</p>
                                    <Badge label={t.category} color={categoryColors[t.category] ?? "#6366f1"} />
                                </div>
                            </div>
                            <Stars count={t.stars} />
                            <p className="text-gray-500 text-xs leading-relaxed">{t.quote}</p>
                        </div>
                    ))}
                </div>

                {/* ── Footer: Trusted by ────────────────────────────────── */}
                <div
                    className="flex flex-col md:flex-row items-center gap-4 pt-6 border-t border-gray-200 mt-4 overflow-hidden"
                    data-aos="fade-in"
                >
                    <span className="text-gray-400 text-xs font-medium whitespace-nowrap bg-white z-10 pr-4">
                        Trusted by teams in:
                    </span>

                    <div className="relative flex overflow-hidden w-full items-center">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{
                                x: [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Duplicated for seamless loop */}
                            {[...trustedCountries, ...trustedCountries, ...trustedCountries].map((c, idx) => (
                                <span key={`${c.code}-${idx}`} className="text-gray-600 text-xs font-semibold flex items-center gap-2 whitespace-nowrap hover:text-purple-600 transition-colors duration-300">
                                    <FlagIcon code={c.code} className="w-5 h-3.5" />
                                    {c.label}
                                </span>
                            ))}
                        </motion.div>

                        {/* Gradient Fades */}
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Reusable grid card ───────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: Testimonial }) {
    const categoryColors: Record<string, string> = {
        FinTech: "#8B5CF6", "On-Demand": "#F59E0B", Healthcare: "#10B981",
        Education: "#3B82F6", "E-Commerce": "#EF4444",
    };
    const avatarColors: Record<string, string> = {
        AA: "linear-gradient(135deg,#f59e0b,#ef4444)",
        DM: "linear-gradient(135deg,#10b981,#059669)",
        SW: "linear-gradient(135deg,#ec4899,#f43f5e)",
        PS: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    };
    const flags: Record<string, string> = {
        SG: "🇸🇬", US: "🇺🇸", UK: "🇬🇧", AE: "🇦🇪",
        AU: "🇦🇺", IN: "🇮🇳", JP: "🇯🇵", DE: "🇩🇪", FR: "🇫🇷",
    };
    const [locCode, ...locName] = t.location.split(" ");

    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border-t border-x border-gray-200 flex flex-col gap-3 scale-100 hover:scale-105 duration-300 h-full">
            <div className="flex items-center justify-between">
                <Badge label={t.category} color={categoryColors[t.category] ?? "#6366f1"} />
            </div>
            <Stars count={t.stars} />
            <p className="text-gray-700 text-sm leading-relaxed flex-1">{t.quote}</p>
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <Avatar initials={t.avatar} bg={avatarColors[t.avatar] ?? "linear-gradient(135deg,#6366f1,#8b5cf6)"} />
                <div>
                    <p className="font-semibold text-gray-900 text-xs">{t.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1.5">
                        {t.role} · <FlagIcon code={locCode} /> {locName.join(" ")}
                    </p>
                </div>
            </div>
        </div>
    );
}