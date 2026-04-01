"use client";

import React, { useState } from "react";
import {
    ShieldCheck, Brain, ArrowRight, Activity,
    Stethoscope, Building2, Microscope, Lock, BadgeCheck,
    Cloud, Sparkles, Workflow, Phone, Laptop, Globe,
    Landmark, ShoppingCart, Truck, Plane, Car, Gamepad2, Dumbbell,
    Plus, Zap, CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DiscussProjectForm from "../../components/DiscussProjectForm";
import FAQ from "../../components/FAQ";
import FreeConsultation from "../../components/FreeConsultation";
import ScrollReveal from "../../components/ScrollReveal";

// Define strict typing for dynamic dynamic data
type IndustryData = {
    title: string;
    subtitle: string;
    desc: string;
    introHeading: string;
    services: { icon: any; title: string; description: string }[];
    targets: { icon: any; title: string; desc: string }[];
    compliances: { title: string; desc: string }[];
};

function getIndustryData(slug: string): IndustryData {
    const formattedName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const specificData: Record<string, IndustryData> = {
        'healthcare-software-development': {
            title: "Healthcare",
            subtitle: "App Development",
            desc: "Leading healthcare app development company providing medical software development services, telemedicine app development, HIPAA compliant app development, AI healthcare solutions, and hospital management software for healthcare providers worldwide.",
            introHeading: "HIPAA Compliant Healthcare IT Services",
            services: [
                { icon: Phone, title: "Telemedicine App Development", description: "Purpose-driven applications and platforms engineered to address specific clinical challenges, from telehealth delivery to precision medicine." },
                { icon: Brain, title: "AI Healthcare Solutions", description: "From Fortune 500 healthcare systems to innovative startups, we deliver technology solutions that scale with your ambitions." },
                { icon: Workflow, title: "Hospital Management Software", description: "Intelligent systems that enhance diagnostic accuracy, streamline care coordination, and improve overall operations." }
            ],
            targets: [
                { icon: Building2, title: "Healthcare Providers", desc: "Empowering hospitals and clinics with intelligent systems that enhance diagnostic accuracy." },
                { icon: Activity, title: "Medical Device Manufacturers", desc: "Engineering FDA-compliant embedded software and connectivity solutions." },
                { icon: Microscope, title: "Pharmaceutical Businesses", desc: "Accelerating drug discovery and clinical trials through advanced data management." },
                { icon: Laptop, title: "Digital Health Startups", desc: "Transforming innovative health concepts into market-ready products." },
                { icon: ShieldCheck, title: "Healthcare Insurance", desc: "Automating claims workflows, fraud detection, and member engagement." },
                { icon: Globe, title: "Research Institutions", desc: "Enabling breakthrough discoveries through secure data sharing." },
            ],
            compliances: [
                { title: "HIPAA", desc: "Health Insurance Portability & Accountability" },
                { title: "HL7", desc: "Health Level Seven International" },
                { title: "GDPR", desc: "General Data Protection Regulation" },
                { title: "FHIR", desc: "Fast Healthcare Interoperability Resources" },
                { title: "FDA", desc: "Food and Drug Administration" },
                { title: "SOC 2", desc: "Service Organization Control" },
                { title: "DICOM", desc: "Digital Imaging & Communications" },
                { title: "HITECH", desc: "Health Information Technology Act" },
            ]
        },
        'fintech': {
            title: "FinTech",
            subtitle: "Software Solutions",
            desc: "Secure, scalable, and innovative financial technology solutions. From mobile banking implementations to cross-border payments, decentralized finance platforms, and algorithmic trading applications.",
            introHeading: "Secure & Compliant Financial IT Services",
            services: [
                { icon: Phone, title: "Mobile Banking & Neo-banks", description: "Next-gen neo-banking solutions offering frictionless financial operations." },
                { icon: Globe, title: "Payment Gateways", description: "Secure integration of localized and global peer-to-peer transaction platforms." },
                { icon: Lock, title: "Blockchain & Crypto", description: "Decentralized finance (DeFi), smart contracts, and secure ledger integration." }
            ],
            targets: [
                { icon: Landmark, title: "Traditional Banks", desc: "Modernize legacy cores and digitize consumer facing assets securely." },
                { icon: Activity, title: "Investment Firms", desc: "Algorithmic trading platforms equipped with real-time data ingestion." },
                { icon: Laptop, title: "FinTech Startups", desc: "Launch new disruptive financial products rapidly and seamlessly." },
                { icon: ShieldCheck, title: "Insurance Underwriters", desc: "Automate policy decisions via AI-powered fraud-detection platforms." },
                { icon: Globe, title: "Global Exchanges", desc: "Highly available and low-latency exchange interfaces." },
                { icon: Building2, title: "Credit Unions", desc: "Drive member engagement through intelligent lending architectures." },
            ],
            compliances: [
                { title: "PCI-DSS", desc: "Payment Card Industry Data Security Standard" },
                { title: "GDPR", desc: "General Data Protection Regulation" },
                { title: "KYC / AML", desc: "Know Your Customer / Anti-Money Laundering" },
                { title: "SOC 2 Type II", desc: "Service Organization Control" },
                { title: "ISO 27001", desc: "Information Security Management" },
                { title: "PSD2", desc: "Revised Payment Services Directive" },
                { title: "GLBA", desc: "Gramm-Leach-Bliley Act" },
                { title: "FINRA", desc: "Financial Industry Regulatory Authority" }
            ]
        },
        'ecommerce': {
            title: "eCommerce",
            subtitle: "App Development",
            desc: "Drive conversions and build brand loyalty with high-performance eCommerce platforms, omnichannel solutions, and tailored retail experiences.",
            introHeading: "Scalable Omnichannel Retail Experiences",
            services: [
                { icon: ShoppingCart, title: "Headless Commerce", description: "Decoupled architectures for lightning-fast user experiences on all devices." },
                { icon: Phone, title: "mCommerce Apps", description: "Native and cross-platform mobile storefronts that elevate shopping trends." },
                { icon: Workflow, title: "Inventory & ERP Integrations", description: "Centralized operational hubs synchronizing multi-location supply chains." }
            ],
            targets: [
                { icon: ShoppingCart, title: "Retail Brands", desc: "Digitizing physical retail footfalls into global e-commerce engagement." },
                { icon: Truck, title: "D2C Brands", desc: "Direct-to-consumer pipelines bypassing intermediary friction." },
                { icon: Building2, title: "B2B Wholesalers", desc: "Complex pricing structures and bulk ordering mechanisms digitised." },
                { icon: Globe, title: "Global Marketplaces", desc: "Multi-vendor architectures allowing seamless commission splits." },
                { icon: Laptop, title: "Drop-shippers", desc: "Automated aggregation and order routing pipelines." },
                { icon: Activity, title: "Subscription Boxes", desc: "Recurring billing and customizable subscription algorithms." },
            ],
            compliances: [
                { title: "PCI-DSS", desc: "Payment Card Industry Data Security Standard" },
                { title: "GDPR", desc: "General Data Protection Regulation" },
                { title: "ADA", desc: "Americans with Disabilities Act (Web Accessibility)" },
                { title: "CCPA", desc: "California Consumer Privacy Act" },
                { title: "ISO 27001", desc: "Information Security Management" },
                { title: "SOC 2", desc: "Service Organization Control" },
                { title: "WCAG 2.1", desc: "Web Content Accessibility Guidelines" },
                { title: "FIPS", desc: "Federal Information Processing Standards" }
            ]
        }
    };

    if (specificData[slug]) return specificData[slug];

    // Generic fallback for any other slug
    return {
        title: formattedName,
        subtitle: "Digital Solutions",
        desc: `Leading ${formattedName} software development company providing innovative digital solutions, mobile app development, and enterprise systems tailored for the ${formattedName} sector.`,
        introHeading: `Next-Gen ${formattedName} IT Services`,
        services: [
            { icon: Phone, title: "Custom App Development", description: `Purpose-driven applications engineered specifically for the ${formattedName} industry.` },
            { icon: Brain, title: "AI & Automation", description: "We deliver intelligent technology solutions that scale with your ambitions and accelerate digital transformation." },
            { icon: Workflow, title: "Enterprise Software", description: "Intelligent systems that enhance operations, streamline coordination, and improve overall workflows." }
        ],
        targets: [
            { icon: Building2, title: "Enterprise Businesses", desc: "Empowering large organizations with intelligent systems that enhance operational efficiency." },
            { icon: Laptop, title: "Fast-growing Startups", desc: "Transforming innovative concepts into market-ready products with rapid prototyping." },
            { icon: Globe, title: "Global Brands", desc: "Accelerating digital transformation on a global scale to reach wider target demographics." },
            { icon: Activity, title: "B2B Organizations", desc: "Developing reliable software architectures for business-to-business synergies." },
            { icon: ShieldCheck, title: "Service Providers", desc: "Automating workflows and boosting end-customer engagement organically." },
            { icon: Microscope, title: "R&D Teams", desc: "Enabling breakthrough operational discoveries through secure collaborative platforms." },
        ],
        compliances: [
            { title: "ISO 27001", desc: "Information Security Management" },
            { title: "GDPR", desc: "General Data Protection Regulation" },
            { title: "SOC 2", desc: "Service Organization Control" },
            { title: "CCPA", desc: "California Consumer Privacy Act" },
            { title: "OWASP", desc: "Top Security Protocols" },
            { title: "WCAG 2.1", desc: "Web Content Accessibility Guidelines" },
            { title: "PCI-DSS", desc: "If handling payment transactions" },
            { title: "GLBA", desc: "Gramm-Leach-Bliley Act (If applicable)" },
        ]
    };
}

const whyChooseUs = [
    { icon: BadgeCheck, title: "Domain Expertise", desc: "Deep knowledge of specific industry regulations and requirements. Every solution we deliver meets the strictest compliance standards from day one." },
    { icon: Lock, title: "Security-First Architecture", desc: "Military-grade encryption, zero-trust networking, and continuous penetration testing. We treat your data protection as our highest priority." },
    { icon: Stethoscope, title: "Focused Engineering", desc: "Our team combines technical excellence with real-world industry experience, ensuring solutions that your target audience actually wants to use." },
    { icon: Cloud, title: "End-to-End Capabilities", desc: "From initial concept through deployment and beyond—we handle strategy, design, development, integration, and ongoing optimization under one roof." }
];

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const resolvedParams = React.use(params);

    // Use dynamic content extraction based on slug
    const industryData = getIndustryData(resolvedParams?.slug || 'software-development');

    return (
        <div className="min-h-screen bg-[#010816] text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* ── BACKGROUND ACCENTS ── */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-[#1D74CF]/10 rounded-full blur-[140px] opacity-30" />
                <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-[#D04425]/10 rounded-full blur-[120px] opacity-20" />
            </div>

            {/* 1. Hero Section */}
            <ScrollReveal>
                <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col justify-center items-center text-center w-full">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl"
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                                Elite {industryData.title} Partner
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight"
                        >
                            {industryData.title}<br />
                            <span className="bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#D04425] bg-clip-text text-transparent">{industryData.subtitle}</span> Expert
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light italic"
                        >
                            &quot;{industryData.desc}&quot;
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-10 py-5 rounded-2xl bg-white text-[#010816] font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-500/10 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Consult Our Experts
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </div>
                </section>
            </ScrollReveal>

            {/* 2. Intro Section */}
            <ScrollReveal>
                <section className="py-32 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
                                    {industryData.introHeading.split(' ').slice(0, -2).join(' ')}{" "}
                                    <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {industryData.introHeading.split(' ').slice(-2).join(' ')}
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-xl leading-relaxed font-light border-l-2 border-blue-600/50 pl-8">
                                    From digital strategy to implementation and support, we deliver technology solutions that drive excellence, operational efficiency, and sustainable growth. Our software ecosystem is built for high-performance and deep integration.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
                                <div className="relative grid grid-cols-2 gap-4">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className={`h-40 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md ${i % 2 === 0 ? 'translate-y-8' : ''}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 3. Services / Digital Products */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Core <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-widest">Digital Solutions</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industryData.services.map((srv, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="h-full bg-linear-to-br from-white/5 to-transparent rounded-[2.5rem] p-10 border border-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-xl">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <srv.icon className="w-16 h-16 text-blue-400" />
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400">
                                        <srv.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{srv.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg font-light">{srv.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Who We Partner With */}
            <section className="py-32 relative z-10 bg-white/2 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Global <span className="bg-linear-to-r from-[orange] to-[red] bg-clip-text text-transparent">Partnership Network</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industryData.targets.map((target, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <target.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">{target.title}</h3>
                                    </div>
                                    <p className="text-slate-400 font-light leading-relaxed">
                                        {target.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Regulatory Compliance */}
            <section className="py-40 relative z-10">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter">
                        Institutional <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Compliance</span>
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-20 font-light italic">
                        &quot;Every solution we deliver adheres to the strictest global industry regulations and security standards.&quot;
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industryData.compliances.map((comp, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center">
                                    <h4 className="text-3xl font-black text-white mb-3 tracking-tighter">{comp.title}</h4>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight">{comp.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Us */}
            <section className="py-40 relative z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-600/10 rounded-full -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Unrivaled <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {whyChooseUs.map((reason, idx) => (
                            <ScrollReveal key={idx}>
                                <div className="flex gap-10 p-10 rounded-[3rem] bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/20 transition-all">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-600/10 text-blue-400">
                                        <reason.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{reason.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-lg font-light">{reason.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Tech Stack Chips */}
            <section className="py-32 relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                        The <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Arsenal</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Artificial Intelligence", "Blockchain", "Internet of Things", "Cloud Computing", "Data Analytics", "AR/VR Core", "Cybersecurity", "Next.js 15", "GraphQL"].map((tech, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:border-blue-500 hover:bg-blue-600/10 transition-all cursor-default shadow-xl"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusable Core Components */}
            <div className="bg-white/2 border-t border-white/5">
                <FAQ />
            </div>
            <FreeConsultation />

            <DiscussProjectForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
