"use client";

import React, { useState } from "react";
import {
    ShieldCheck, Brain, ArrowRight, Activity,
    Stethoscope, Building2, Microscope, Lock, BadgeCheck,
    Cloud, Sparkles, Workflow, Phone, Laptop, Globe,
    Landmark, ShoppingCart, Truck, Plane, Car, Gamepad2, Dumbbell
} from "lucide-react";
import { globalStyle } from "../../globalStyle";
import DiscussProjectForm from "../../components/DiscussProjectForm";
import FAQ from "../../components/FAQ";
import FreeConsultation from "../../components/FreeConsultation";

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
            { title: "OWASP Tops", desc: "Top Security Protocols" },
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
        <div className="min-h-screen flex flex-col pt-16 bg-white overflow-hidden">

            {/* 1. Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center bg-[#060d1b] overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0a192f] via-[#060d1b] to-black opacity-90" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col justify-center items-center text-center w-full">
                    <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 mb-8`}>
                        <Sparkles className="w-5 h-5 text-white" />
                        <span className="text-sm font-semibold tracking-wide text-white uppercase">
                            Leading {industryData.title} Solutions
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                        <span>{industryData.title}</span><br />
                        <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>{industryData.subtitle}</span> Company
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        {industryData.desc}
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group bg-linear-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3"
                    >
                        <span>Consult Our {industryData.title} Experts</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="pt-16 pb-8 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-black text-3xl md:text-5xl font-bold mb-6">
                        {industryData.introHeading.split(' ').slice(0, -2).join(' ')}{" "}
                        <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>
                            {industryData.introHeading.split(' ').slice(-2).join(' ')}
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        From digital strategy to implementation and support, we deliver technology solutions that drive excellence, operational efficiency, and sustainable growth. As a leading {industryData.title.toLowerCase()} development company, we build custom software that transforms your ecosystem. Our technology services include custom portals, workflows, and deeply integrated compliant solutions.
                    </p>
                </div>
            </section>

            {/* 3. Services / Digital Products */}
            <section className="pt-8 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            Our <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Core Solutions</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Transforming innovative {industryData.title.toLowerCase()} concepts into market-ready digital products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                        {industryData.services.map((srv, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                <div className={`${globalStyle?.gradientText} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                    <srv.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">{srv.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{srv.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Who We Partner With (Target Audience) */}
            <section className="py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            IT Solutions for <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Organizations We Partner With</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industryData.targets.map((target, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-3 border border-gray-200 relative bg-gray-50 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 group overflow-hidden"
                            >
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-linear-to-r from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-white rounded-xl shadow-xs group-hover:text-[#1D74CF] transition-colors">
                                        <target.icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">{target.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {target.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Regulatory Compliance */}
            <section className="py-24 px-4 sm:px-6 bg-[#060d1b]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Strict & Built-In <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Regulatory Compliance</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-16">
                        Every solution we deliver adheres to the strictest global industry regulations and security standards, fully protecting sensitive data while enabling maximum scaling.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industryData.compliances.map((comp, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <h4 className="text-2xl font-bold text-white mb-2">{comp.title}</h4>
                                <p className="text-gray-400 text-sm">{comp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Us */}
            <section className="py-8 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            Your Trusted Partner in <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Global Innovation</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            We combine deep domain expertise across diverse sectors with cutting-edge engineering capabilities to deliver solutions that genuinely transform business processes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUs.map((reason, idx) => (
                            <div key={idx} className="flex gap-6 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                                <div className={`${globalStyle?.gradientText} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>
                                    <reason.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-3">{reason.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Next-Gen Tech Grid */}
            <section className="py-24 px-4 sm:px-6 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                        Next-Gen <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Technology Stack</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Artificial Intelligence", "Blockchain", "Internet of Things", "Cloud Computing", "Data Analytics", "AR/VR Core Services", "Cybersecurity", "RESTful & GraphQL API"].map((tech, idx) => (
                            <div key={idx} className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-black font-semibold shadow-xs hover:border-pink-500 hover:text-pink-600 transition-colors cursor-pointer">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusable Core Components */}
            <FAQ />
            <FreeConsultation />

            <DiscussProjectForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
