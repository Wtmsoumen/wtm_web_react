"use client";

import {
    Mail, Phone, Globe, Bot, Code2, Megaphone, Palette,
    Eye, TrendingUp, Users, Target,
} from "lucide-react";
import CustomMapColor from "./CustomMapColor";

const stats = [
    { icon: "📅", value: "350+", label: "Projects Delivered" },
    { icon: "👥", value: "12+", label: "Countries Served" },
    { icon: "😊", value: "96%", label: "Client Satisfaction" },
    { icon: "🏆", value: "13+", label: "Years of Experience" },
];

const services = [
    { Icon: Bot, title: "AI Solutions", desc: "Intelligent solutions for modern problems." },
    { Icon: Code2, title: "Web & App Development", desc: "Scalable, secure & future-ready applications." },
    { Icon: Megaphone, title: "Digital Marketing", desc: "Data-driven strategies for real growth." },
    { Icon: Palette, title: "Creative & Branding", desc: "Designs that create lasting impressions." },
];

const bottomBar = [
    { Icon: Eye, title: "Global Reach", desc: "Expanding possibilities across the world." },
    { Icon: TrendingUp, title: "Trusted by Clients", desc: "Trusted partnerships built on results." },
    { Icon: Users, title: "Customer Focused", desc: "Your success is our top priority." },
    { Icon: Target, title: "Result Driven", desc: "We deliver measurable growth and impact." },
];

const GRAD = "linear-gradient(108deg,#0079d0 0%,#9e52d8 32%,#da365c 84%,#d04901 100%)";

function DotGrid({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`absolute pointer-events-none select-none ${className}`}
            width="180" height="180" viewBox="0 0 180 180"
            xmlns="http://www.w3.org/2000/svg"
        >
            {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 10 }).map((_, col) => (
                    <circle
                        key={`${row}-${col}`}
                        cx={col * 18 + 9} cy={row * 18 + 9} r={2}
                        fill="#c084fc" opacity={0.25}
                    />
                ))
            )}
        </svg>
    );
}

export default function GlobalPresenceSection() {
    return (
        <section
            className="relative w-full overflow-hidden py-16 px-4 md:px-10"
            style={{
                background:
                    "radial-gradient(ellipse at 85% 5%, rgba(218,54,92,0.09) 0%, transparent 50%), " +
                    "radial-gradient(ellipse at 10% 95%, rgba(0,121,208,0.09) 0%, transparent 50%), " +
                    "linear-gradient(160deg, #fdf6ff 0%, #fef0f8 45%, #fff5f0 100%)",
            }}
        >
            {/* Dot grid accents */}
            <DotGrid className="top-0 right-0 opacity-90" />
            <DotGrid className="bottom-32 left-0 opacity-40 rotate-180" />

            {/* ── Heading ── */}
            <div className="relative text-center mb-2 z-10">
                <h2
                    className="text-5xl md:text-[64px] font-black uppercase tracking-tight leading-none"
                    style={{
                        background: GRAD,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Our Global Presence
                </h2>

                <div className="flex justify-center mt-3 mb-5">
                    <span className="block h-[3px] w-44 rounded-full" style={{ background: GRAD }} />
                </div>

                <p className="text-gray-700 font-semibold text-base md:text-lg tracking-wide">
                    Connecting Businesses. Delivering Excellence. Across the Globe.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                    We are proud to work with amazing clients from around the world.{" "}
                    Here&apos;s where you can find us!
                </p>
            </div>

            {/* ── Map + Right Panel ── */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-5 mt-10 items-stretch">

                {/* Map card */}
                <div
                    className="flex-1 min-h-[340px] pt-20 overflow-hidden"
                    style={{
                        // background: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(14px)",
                        // boxShadow: "0 8px 40px rgba(158,82,216,0.12), 0 1px 4px rgba(0,0,0,0.05)",
                        // border: "1px solid rgba(255,255,255,0.9)",
                    }}
                >
                    <CustomMapColor />
                </div>

                {/* Right panel */}
                <div className="w-full lg:w-[380px] flex flex-col gap-4 bg-white/70 rounded-3xl p-5 shadow-lg">

                    {/* Let's Connect */}
                    <div
                        className="rounded-3xl p-6"
                        style={{
                            background: "rgba(255,255,255,0.75)",
                            backdropFilter: "blur(14px)",
                            boxShadow: "0 8px 32px rgba(158,82,216,0.10), 0 1px 4px rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.9)",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="grid grid-cols-3 gap-[4px]">
                                {Array(9).fill(0).map((_, i) => (
                                    <span key={i} className="w-[6px] h-[6px] rounded-full block bg-violet-500" />
                                ))}
                            </span>
                            <h3 className="font-extrabold uppercase text-sm tracking-[0.18em] text-violet-600">
                                Let&apos;s Connect
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                            Have a project in mind or want to learn more about our services?
                            We&apos;d love to hear from you.
                        </p>

                        {[
                            { Icon: Mail, label: "Email", value: "hello@webtechnomind.vercel.app" },
                            { Icon: Phone, label: "Phone", value: "+91 98745 67890" },
                            { Icon: Globe, label: "Website", value: "webtechnomind.vercel.app" },
                        ].map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-center gap-4 mb-4 last:mb-0">
                                <span
                                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0
  bg-gradient-to-b from-white/20 to-transparent
  shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)]
  translate-y-[-2px]
  ring-1 ring-black/10
  transition-all duration-200
  hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.5)]"
                                    style={{ background: GRAD }}
                                >
                                    <Icon size={25} className="text-white" />
                                </span>
                                <div>
                                    <p className="text-sm font-bold text-gray-700">{label}</p>
                                    <p className="text-sm text-gray-400">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* What We Do */}
                    <div
                        className="rounded-3xl p-6 flex-1"
                        style={{
                            background: "rgba(255,255,255,0.75)",
                            backdropFilter: "blur(14px)",
                            boxShadow: "0 8px 32px rgba(158,82,216,0.10), 0 1px 4px rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.9)",
                        }}
                    >
                        <h3
                            className="font-extrabold text-sm uppercase tracking-[0.18em] mb-5"
                            style={{
                                background: GRAD,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            What We Do
                        </h3>

                        <div className="flex flex-col gap-4">
                            {services.map(({ Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4">
                                    <span
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0
  bg-gradient-to-b from-white/20 to-transparent
  shadow-[0_6px_20px_rgba(0,0,0,0.22),0_2px_5px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.35)]
  translate-y-[-2px]
  ring-1 ring-black/10
  transition-all duration-200
  hover:translate-y-[-3px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.28),0_3px_7px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.45)]"
                                        style={{ background: "rgba(158,82,216,0.10)" }}
                                    >
                                        <Icon size={20} style={{ color: "#9e52d8" }} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">{title}</p>
                                        <p className="text-sm text-gray-400 leading-snug">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
{/* ── Stats bar ── */}
<div
    className="relative z-10 mt-6 rounded-3xl overflow-hidden"
    style={{
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 4px 24px rgba(158,82,216,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        border: "1px solid rgba(255,255,255,0.9)",
    }}
>
    <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map(({ icon, value, label }, idx) => (
            <div
                key={label}
                className="flex items-center gap-3 px-6 py-5"
                style={{
                    borderRight: idx < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
            >
                <span
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0
                      translate-y-[-2px] ring-1 ring-black/10 transition-all duration-200"
                    style={{
                        background: GRAD,
                        boxShadow: "0 8px 20px rgba(158,82,216,0.35), 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.4)",
                    }}
                >
                    {icon}
                </span>
                <div>
                    <p
                        className="text-2xl font-black"
                        style={{
                            background: GRAD,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {value}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">{label}</p>
                </div>
            </div>
        ))}
    </div>
</div>

{/* ── Bottom bar ── */}
<div
    className="relative z-10 mt-5 rounded-3xl p-6 overflow-hidden"
    style={{ background: GRAD }}
>
    {/* noise texture */}
    <div
        className="absolute inset-0 rounded-3xl opacity-[0.08] pointer-events-none"
        style={{
            backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "120px",
        }}
    />
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5">
        {bottomBar.map(({ Icon, title, desc }, idx) => (
            <div
                key={title}
                className="flex items-start gap-3"
                style={{
                    borderRight: idx < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
                    paddingRight: idx < 3 ? "1.25rem" : "0",
                }}
            >
                <span
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0
                      translate-y-[-2px] transition-all duration-200"
                    style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.18), 0 2px 5px rgba(0,0,0,0.10), inset 0 1px 1px rgba(255,255,255,0.45)",
                    }}
                >
                    <Icon size={18} className="text-white" />
                </span>
                <div>
                    <p className="text-sm font-bold text-white leading-snug">{title}</p>
                    <p className="text-[11px] text-white/70 leading-snug mt-0.5">{desc}</p>
                </div>
            </div>
        ))}
    </div>
</div>

        </section>
    );
}