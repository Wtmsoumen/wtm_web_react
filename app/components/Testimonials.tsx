"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CEO, TechScale Ventures",
    location: "USA",
    flag: "🇺🇸",
    quote:
      "Wtm built our crypto exchange with $50M+ daily volume. The AI-powered matching engine they developed handles 200K+ users seamlessly without a single downtime.",
    highlight: "$50M+ Daily Volume, 200K+ Users",
    avatar: "MC",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CTO, Dubai FinTech",
    location: "UAE",
    flag: "🇦🇪",
    quote:
      "Exceptional speed and quality. They launched our full-stack FinTech platform in just 6 weeks — from design to production. The team was professional throughout.",
    highlight: "6-Week Launch Time",
    avatar: "AA",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "David Mitchell",
    role: "Director, Sydney Health",
    location: "Australia",
    flag: "🇦🇺",
    quote:
      "Our telehealth platform now serves thousands of patients. Wtm's AI diagnostic features have improved patient outcomes by 40% according to our clinical reports.",
    highlight: "40% Better Patient Outcomes",
    avatar: "DM",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Sarah Williams",
    role: "Founder, EduTech London",
    location: "UK",
    flag: "🇬🇧",
    quote:
      "Our e-learning platform scaled to 500K+ students in under a year. The adaptive learning AI they integrated increased student completion rates significantly.",
    highlight: "500K+ Students Served",
    avatar: "SW",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Product Director, Bangalore",
    location: "India",
    flag: "🇮🇳",
    quote:
      "Our food delivery app handles 100K+ daily orders. Wtm's AI recommendation engine boosted our average order value by 35%. Incredible results.",
    highlight: "100K+ Daily Orders, 35% AOV Increase",
    avatar: "PS",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Michael Weber",
    role: "Head of Tech, Germany Logistics",
    location: "Germany",
    flag: "🇩🇪",
    quote:
      "Route optimization AI they built reduced our logistics costs by 35% while handling 10K+ daily deliveries. The ROI was visible within the first month.",
    highlight: "35% Cost Reduction, 10K+ Deliveries",
    avatar: "MW",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Jennifer Thompson",
    role: "Co-Founder, US Fitness",
    location: "USA",
    flag: "🇺🇸",
    quote:
      "800K active users and featured by Apple — that says it all. Wtm delivered a fitness app with AI-powered personalized workout plans that users love.",
    highlight: "800K Active Users, Apple Featured",
    avatar: "JT",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Takeshi Yamamoto",
    role: "CEO, Japan Gaming Studio",
    location: "Japan",
    flag: "🇯🇵",
    quote:
      "5 million downloads in the first month. The performance optimization and multiplayer infrastructure Wtm built handled the massive launch surge flawlessly.",
    highlight: "5M Downloads in First Month",
    avatar: "TY",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Sophie Martin",
    role: "Head of Digital, France Hotels",
    location: "France",
    flag: "🇫🇷",
    quote:
      "Our AI-powered booking platform increased hotel occupancy by 28%. The smart pricing engine Wtm developed dynamically adjusts rates based on demand.",
    highlight: "28% Higher Occupancy",
    avatar: "SM",
    color: "from-teal-500 to-cyan-500",
  },
];

const VISIBLE = 6;

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? testimonials : testimonials.slice(0, VISIBLE);

  return (
    <section className="section-bg-alt py-24">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by teams in USA, UK, UAE, Singapore, Australia, India, Japan, Germany, and France.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((t, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 flex flex-col hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Highlight */}
              <div
                className={`inline-block text-xs font-bold bg-gradient-to-r ${t.color} bg-clip-text text-transparent mb-4`}
              >
                📈 {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm flex items-center gap-1">
                    {t.name} <span>{t.flag}</span>
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="border border-purple-500/40 text-purple-400 px-8 py-3 rounded-full text-sm font-semibold hover:bg-purple-500/10 transition-colors"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
