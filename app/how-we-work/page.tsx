"use client"
import React from 'react'
import { motion } from "framer-motion"
import {
    Eye, Zap, Shield, Workflow, Users, Rocket, Sparkles,
    MessageSquare, Lock, Handshake, FileText,
    Layout, Code, TestTube, Ship, Wrench,
    DollarSign, Globe, Clock, Layers, ArrowRight,
    TrendingUp, CheckCircle2
} from "lucide-react"
import ScrollReveal from '../components/ScrollReveal'
import { globalStyle } from '../globalStyle'

const HowWeWork = () => {
    const principles = [
        {
            title: "Transparency",
            desc: "You will always know what is happening, why it is happening, and what comes next.",
            icon: <Eye className="w-6 h-6" />,
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Speed",
            desc: "DevOps and agile sprints keep momentum high without ever cutting corners.",
            icon: <Zap className="w-6 h-6" />,
            color: "from-amber-400 to-orange-500"
        },
        {
            title: "No Vendor Lock-In",
            desc: "You retain complete ownership of the code, IP, and data. Our builds are designed for independence.",
            icon: <Lock className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "Risk Management",
            desc: "We identify risks early and plan around them, so projects stay on track.",
            icon: <Shield className="w-6 h-6" />,
            color: "from-rose-500 to-red-500"
        },
        {
            title: "Collaboration",
            desc: "We build with you, not just for you. Every decision is shaped together.",
            icon: <Users className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Innovation",
            desc: "We invest in research and future-ready tech so your product is built to last.",
            icon: <Rocket className="w-6 h-6" />,
            color: "from-blue-400 to-cyan-500"
        }
    ]

    const onboarding = [
        {
            title: "Understanding Requirements",
            desc: "We begin by listening. Your goals, challenges, and expectations are captured to define success.",
            icon: <MessageSquare className="w-8 h-8" />
        },
        {
            title: "Protecting Your Idea",
            desc: "Your vision stays yours. We sign an NDA at the start to give you complete peace of mind.",
            icon: <Shield className="w-8 h-8" />
        },
        {
            title: "Deep Consultation",
            desc: "Our experts sit down with you to explore objectives, discuss priorities, and highlight opportunities.",
            icon: <Handshake className="w-8 h-8" />
        },
        {
            title: "A Clear Proposal",
            desc: "You'll receive a straightforward proposal covering scope, timelines, and costs. No hidden extras.",
            icon: <FileText className="w-8 h-8" />
        }
    ]

    const process = [
        {
            stage: "Design & Architecture",
            desc: "Wireframes, prototypes, and system design come together to create a strong base.",
            icon: <Layout className="w-8 h-8" />,
            tags: ["UX/UI", "Wireframing", "Architecture"]
        },
        {
            stage: "Development & Engineering",
            desc: "Ideas turn into working software with clean, secure, and scalable code.",
            icon: <Code className="w-8 h-8" />,
            tags: ["Agile Dev", "Clean Code", "API First"]
        },
        {
            stage: "Testing & Quality Assurance",
            desc: "Thorough checks for speed, security, and compliance before any launch.",
            icon: <TestTube className="w-8 h-8" />,
            tags: ["QA Automation", "Stress Test", "Security"]
        },
        {
            stage: "Deployment & Launch",
            desc: "Smooth rollouts carefully planned so your product is stable and ready.",
            icon: <Ship className="w-8 h-8" />,
            tags: ["CI/CD", "Cloud Setup", "Performance"]
        },
        {
            stage: "Post-Launch Support",
            desc: "We stay with you to fix bugs, roll out upgrades, and add new features.",
            icon: <Wrench className="w-8 h-8" />,
            tags: ["Maintenance", "Monitoring", "Updates"]
        }
    ]

    const models = [
        {
            title: "Fixed Price Model",
            desc: "Best for clearly defined projects with specific deliverables. A set budget and predictable costs.",
            icon: <DollarSign className="w-10 h-10" />,
            highlight: "Predictability"
        },
        {
            title: "Dedicated Team",
            desc: "Ideal for long-term projects. A team of experts works exclusively for you.",
            icon: <Users className="w-10 h-10" />,
            highlight: "Exclusivity"
        },
        {
            title: "Time & Material",
            desc: "Perfect for dynamic projects with changing requirements. Pay for actual time spent.",
            icon: <Clock className="w-10 h-10" />,
            highlight: "Flexibility"
        },
        {
            title: "Hybrid Model",
            desc: "A mix of fixed and flexible - suited for businesses that want structure with room to scale.",
            icon: <Layers className="w-10 h-10" />,
            highlight: "Balanced"
        }
    ]

    return (
        <main className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(29,116,207,0.05),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(186,68,145,0.05),transparent_40%)]" />
                <div className={globalStyle.container}>
                    <ScrollReveal>
                        <div className="text-center max-w-4xl mx-auto relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm w-fit mx-auto" data-aos="fade-down">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-semibold tracking-wide uppercase">Our Methodology</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] mb-8">
                                The <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#ff2a2a] bg-clip-text text-transparent">Architecture</span> <br /> of Excellence
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                                We don't just build software; we engineer success. Our processes are designed for clarity, scale, and uncompromising quality.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-16 bg-gray-50/50">
                <div className={globalStyle.container}>
                    <div className="mb-16" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
                            Principles That <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#ff2a2a] bg-clip-text text-transparent">Power Every Partnership</span>
                        </h2>
                        <p className="text-gray-500 text-lg">Foundation of trust and excellence we bring to every line of code.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((item, idx) => (
                            <ScrollReveal key={idx} yOffset={30} duration={0.4 + idx * 0.1}>
                                <div
                                    className="h-[-webkit-fill-available] group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1D74CF] transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Onboarding Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-blue-50/50 to-transparent pointer-events-none" />
                <div className={globalStyle.container}>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                                    Seamless Client <br /> <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#ff2a2a] bg-clip-text text-transparent">Onboarding</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                    Starting a project should be exciting, not stressful. We've refined our onboarding to ensure momentum from day zero.
                                </p>
                                <div className="space-y-6">
                                    {onboarding.map((item, idx) => (
                                        <div key={idx} className="flex gap-6 items-start">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1D74CF] font-bold">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-gray-500 mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="lg:w-1/2">
                            <ScrollReveal yOffset={100}>
                                <div className="relative p-8 bg-white rounded-[40px] shadow-2xl border border-blue-50">
                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1D74CF]/10 rounded-full blur-3xl" />
                                    <div className="space-y-8 relative z-10 font-medium">
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                                            <CheckCircle2 className="text-[#1D74CF]" />
                                            <span className="text-gray-700">NDA Signed & Secure</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50">
                                            <CheckCircle2 className="text-[#BA4491]" />
                                            <span className="text-gray-700">Requirements Mapped</span>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-50/50 border border-red-100/50">
                                            <CheckCircle2 className="text-[#ff2a2a]" />
                                            <span className="text-gray-700">Project Architect Assigned</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className={globalStyle.container + " relative z-10"}>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Our Agile <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Development Process</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">From blueprint to bit, we follow a rigorous lifecycle ensuring every release is perfect.</p>
                    </div>

                    <div className="relative">
                        {/* Thread Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

                        <div className="space-y-16">
                            {process.map((item, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="md:w-1/2 flex justify-center md:justify-start">
                                        <ScrollReveal yOffset={50}>
                                            <div className={`p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 max-w-md ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-4xl font-black text-white/10">0{idx + 1}</span>
                                                    <div className="p-3 bg-white/10 rounded-xl text-blue-400">{item.icon}</div>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3">{item.stage}</h3>
                                                <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/5">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    </div>

                                    <div className="relative flex items-center justify-center pointer-events-none">
                                        <div className="w-4 h-4 rounded-full bg-white ring-4 ring-blue-500 shadow-[0_0_20px_#3b82f6] z-20 hidden md:block" />
                                    </div>

                                    <div className="md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-16">
                <div className={globalStyle.container}>
                    <div className="text-center mb-16" data-aos="fade-down">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            Flexible <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#ff2a2a] bg-clip-text text-transparent">Engagement Models</span>
                        </h2>
                        <p className="text-gray-500 text-lg">We adapt to your business needs, offering models that maximize value.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {models.map((item, idx) => (
                            <ScrollReveal key={idx} yOffset={40} duration={0.3 + idx * 0.1}>
                                <div
                                    className="h-full flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                    data-aos="zoom-in"
                                    data-aos-delay={idx * 100}
                                >
                                    <div className="mb-6 text-gray-300 group-hover:text-[#1D74CF] transition-colors">{item.icon}</div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1D74CF] mb-2">{item.highlight}</span>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed grow">{item.desc}</p>
                                    <button className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#1D74CF] transition-colors">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-blue-50/50">
                <div className={globalStyle.container}>
                    <div className={`p-10 md:p-20 rounded-[48px] overflow-hidden relative ${globalStyle.gradientBtn} text-white`}>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Build Something <br /> Extraordinary?</h2>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                                Let's turn your vision into a market-leading product using our proven 'Architecture of Excellence' methodology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                                    Start Your Project
                                </button>
                                <button className="px-10 py-5 bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl hover:bg-white/30 transition-all">
                                    View Our Work
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HowWeWork