"use client";

import React, { useState } from "react";
import {
  Sparkles, Bot,
  Link2,
  Smartphone,
  Globe,
  Code2,
  RefreshCw,
  BarChart2,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
  Check,
  Palette,
  
} from "lucide-react";
import Link from "next/link";
import DiscussProjectForm from "./DiscussProjectForm";
// import DiscussProjectForm from "./DiscussProjectForm";
// import ScrollReveal from "./ScrollReveal";
// import { globalStyle } from "../globalStyle";

const services = [
  {
    slug: "ai-engineering",
    icon: Bot,
    title: "AI Engineering",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    checkColor: "text-blue-500",
    iconColor: "text-blue-600",
    bullets: [
      "Custom LLM Integrations",
      "AI Chatbot Development",
      "Computer Vision Solutions",
      "ML Model Training & Deployment",
      "Intelligent Automation (RPA)",
      "AI-powered Data Pipelines",
    ],
  },
  {
    slug: "digital-marketing",
    icon: BarChart2,
    title: "Digital Marketing",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    checkColor: "text-rose-500",
    iconColor: "text-rose-600",
    bullets: [
      "SEO & Content Strategy",
      "Performance Marketing (PPC)",
      "Social Media Management",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Analytics & Growth Hacking",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    checkColor: "text-violet-500",
    iconColor: "text-violet-600",
    bullets: [
      "React Native Cross-platform Apps",
      "Flutter Development",
      "Native iOS (Swift) Apps",
      "Native Android (Kotlin) Apps",
      "App Store Optimization (ASO)",
      "Push Notifications & Real-time",
    ],
  },
  {
    slug: "custom-web-development",
    icon: Globe,
    title: "Custom Web Development",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    checkColor: "text-sky-500",
    iconColor: "text-sky-600",
    bullets: [
      "Next.js / React Web Apps",
      "SaaS Platform Development",
      "Progressive Web Apps (PWA)",
      "CMS Integration (WordPress)",
      "REST & GraphQL APIs",
      "Performance & Core Web Vitals",
    ],
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    checkColor: "text-emerald-500",
    iconColor: "text-emerald-600",
    bullets: [
      "End-to-end Custom Software",
      "Microservices Architecture",
      "Cloud-native Development",
      "DevOps & CI/CD Pipelines",
      "API Design & Development",
      "Legacy System Modernization",
    ],
  },
  {
    slug: "digital-transformation",
    icon: RefreshCw,
    title: "Digital Transformation",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    checkColor: "text-orange-500",
    iconColor: "text-orange-600",
    bullets: [
      "Cloud Migration Strategy",
      "Business Process Automation",
      "ERP & CRM Integration",
      "Digital Workflow Design",
      "Change Management Consulting",
      "Technology Roadmapping",
    ],
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    title: "E-commerce Development",
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    checkColor: "text-pink-500",
    iconColor: "text-pink-600",
    bullets: [
      "Shopify & Headless Commerce",
      "WooCommerce Development",
      "Custom Marketplace Platforms",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Multi-vendor & B2B Portals",
    ],
  },


    {
    slug: "ecommerce-development",
    icon: Palette,
    title: "Creative & Media Studio",
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    checkColor: "text-pink-500",
    iconColor: "text-pink-600",
    bullets: [
      "Motion Graphic Designers",
      "Multimedia Producers",
      "Video Editors",
      "Visual Designers",
     
      "UI/UX  Designers",
    ],
  },
//   {
//     slug: "blockchain-development",
//     icon: Link2,
//     title: "Blockchain Development",
//     bg: "bg-purple-50",
//     iconBg: "bg-purple-100",
//     checkColor: "text-purple-500",
//     iconColor: "text-purple-600",
//     bullets: [
//       "Smart Contract Development",
//       "DeFi Platform Engineering",
//       "NFT Marketplace Development",
//       "Web3 dApp Development",
//       "Token Launch & ICO Support",
//       "Enterprise Blockchain Solutions",
//     ],
//   },
//   {
//     slug: "data-science-analytics",
//     icon: TrendingUp,
//     title: "Data Science & Analytics",
//     bg: "bg-cyan-50",
//     iconBg: "bg-cyan-100",
//     checkColor: "text-cyan-600",
//     iconColor: "text-cyan-700",
//     bullets: [
//       "Big Data Engineering",
//       "Predictive Analytics Models",
//       "BI Dashboard Development",
//       "Data Warehouse Design",
//       "Real-time Analytics Pipelines",
//       "Data Visualization & Reporting",
//     ],
//   },
];

export default function ServicesAboutUs() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    // <ScrollReveal>
      <section id="services" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Our Expertise
              </span>
            </div>

            <h2 className="text-black text-4xl md:text-6xl font-black leading-tight">
              What We{" "}
              <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Comprehensive technology services to build, scale, and transform
              your digital products.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-7 pt-14 ${service.bg} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                >
                  {/* Floating icon box */}
                  <div
                    className={`absolute -top-5 left-0 w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-sm border border-white`}
                  >
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-extrabold text-xl mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 mb-6">
                    {service.bullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 flex-shrink-0 ${service.checkColor}`}>
                          <Check className="w-4 h-4" strokeWidth={3} />
                        </span>
                        <span className="text-gray-700 text-sm leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent group/link"
                  >
                    Explore Service
                    <ArrowRight
                      className={`w-4 h-4 ${service.iconColor} transition-transform group-hover/link:translate-x-1`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setFormOpen(true)}
              className="cursor-pointer bg-linear-to-r from-blue-500 to-pink-500 flex items-center gap-3 text-white text-base font-bold px-12 py-5 rounded-full hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-105 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <DiscussProjectForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
      </section>
    // </ScrollReveal>
  );
}