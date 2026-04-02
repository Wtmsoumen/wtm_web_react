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
} from "lucide-react";
import { globalStyle } from "../globalStyle";
import Link from "next/link";
import DiscussProjectForm from "./DiscussProjectForm";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    slug: "ai-engineering",
    icon: Bot,
    title: "AI Engineering",
    description: "Custom AI models, LLM integrations, and intelligent automation solutions tailored for your business needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "digital-marketing",
    icon: BarChart2,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies, SEO, performance campaigns, and growth hacking.",
    color: "from-rose-500 to-orange-500",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform iOS & Android apps with seamless user experiences.",
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "custom-web-development",
    icon: Globe,
    title: "Custom Web Development",
    description: "Scalable web applications, SaaS platforms, and progressive web apps built for performance.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    description: "End-to-end custom software solutions, APIs, and microservices architecture.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "digital-transformation",
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Legacy modernization, cloud migration, and business process automation.",
    color: "from-orange-500 to-amber-500",
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Custom storefronts, marketplace platforms, and headless commerce solutions.",
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "blockchain-development",
    icon: Link2,
    title: "Blockchain Development",
    description: "Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.",
    color: "from-purple-600 to-indigo-600",
  },
  {
    slug: "data-science-analytics",
    icon: TrendingUp,
    title: "Data Science & Analytics",
    description: "Big data processing, predictive analytics, and business intelligence dashboards.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Services() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <ScrollReveal>
      <section id="services" className="bg-white! py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div
            className="flex flex-col items-center text-center mb-16 gap-4"
            data-aos="fade-down"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Our Expertise
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-black text-4xl md:text-6xl font-black leading-tight">
              What We <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Offer</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Comprehensive technology services to build, scale, and transform your digital products.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 rounded-2xl p-8 transition-all duration-300 group cursor-pointer relative bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Hover gradient decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-white via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/link"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Background accent */}
                {/* <div className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-br-2xl pointer-events-none`}></div> */}
                {/* Background icon watermark */}
                <div className="absolute bottom-3 right-3 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                  <service.icon className="w-20 h-20 text-gray-900" strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-16" data-aos="fade-up">
            <button
              onClick={() => setFormOpen(true)}
              className="cursor-pointer  bg-linear-to-r from-blue-500 to-pink-500  flex items-center gap-3 text-white text-base font-bold px-12 py-5 rounded-full hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-105 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <DiscussProjectForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
      </section>
    </ScrollReveal>
  );
}
