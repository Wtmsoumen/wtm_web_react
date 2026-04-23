"use client";
import { globalStyle } from "../globalStyle";
import { Brain, ShieldCheck, Zap, Users, CheckCircle, Cloud } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    stat: "50+",
    statLabel: "AI Projects",
    title: "AI-First Development",
    description: "We embed AI into every solution — from intelligent recommendations to real-time automation and predictive analytics.",
    icon: <Brain className="w-10 h-10 text-blue-600" />,
  },
  {
    stat: "99.9%",
    statLabel: "Uptime",
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, GDPR-ready infrastructure, and 24/7 monitoring.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    stat: "2-Week",
    statLabel: "Sprints",
    title: "Agile & DevOps Excellence",
    description: "Rapid delivery with CI/CD pipelines, automated testing, and transparent project tracking.",
    icon: <Zap className="w-10 h-10 text-blue-600" />,
  },
  {
    stat: "100+",
    statLabel: "Engineers",
    title: "Dedicated Tech Teams",
    description: "Handpicked experts across AI, blockchain, mobile, web, and cloud — fully dedicated to your project.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
  },
  {
    stat: "95%",
    statLabel: "Test Coverage",
    title: "Clean Code Architecture",
    description: "SOLID principles, design patterns, and rigorous code reviews to ensure maintainable, scalable code.",
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
  },
  {
    stat: "10M+",
    statLabel: "Users Scaled",
    title: "Scalable Cloud Solutions",
    description: "AWS, GCP, and Azure expertise to architect systems that handle millions of users without breaking.",
    icon: <Cloud className="w-10 h-10 text-blue-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    <ScrollReveal>
      <section className="section-bg py-18! bg-white!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Why <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Choose Us ?</span>
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              We combine technical excellence with proven processes to deliver products that succeed.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Index badge */}
                <div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-gray-200 group-hover:bg-linear-to-br group-hover:from-[#1D74CF] group-hover:to-[#b33b41] flex items-center justify-center text-black group-hover:text-white text-xs font-bold shadow-md z-10 transition-all duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Bottom right blob */}
                <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gray-200 translate-x-10 translate-y-10 opacity-40 transition-all duration-500 group-hover:scale-125 group-hover:bg-linear-to-r group-hover:from-[#1D74CF] group-hover:via-[#b33b41] group-hover:to-[#D04425]" />
                </div>

                {/* Icon + stat */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl shrink-0 bg-blue-50">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                      {f.stat}
                    </div>
                    <div className="text-gray-400 text-sm">{f.statLabel}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-black font-semibold text-xl mb-2 transition-all duration-300 group-hover:bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] group-hover:bg-clip-text group-hover:text-transparent leading-snug">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-black text-sm md:text-md leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}