"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sitemapData = {
  "Main Pages": [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/our-team" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  "Services": [
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Web Development", href: "/services/website-development" },
    { name: "Blockchain Development", href: "#" },
    { name: "Specialized E-commerce SEO", href: "/services/specialized-ecommerce-seo-services" },
    { name: "On-Demand Apps", href: "/Industry/on-demand" },
  ],
  "Industry Solutions": [
    { name: "Food Delivery App", href: "/Industry/restaurant-and-food" },
    { name: "Taxi Booking App", href: "/Industry/automotive" },
    { name: "Healthcare App", href: "/Industry/healthcare-software-development" },
    { name: "FinTech Platform", href: "/Industry/fintech" },
    { name: "Crypto Exchange", href: "/Industry/fintech" },
    { name: "Real Estate", href: "/Industry/real-estate" },
    { name: "E-learning", href: "/Industry/education" },
  ],
  "Legal": [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function SitemapPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-20">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site<span className="gradient-text">map</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Navigate through our comprehensive list of pages and services. Everything you need to find at Wtm Technologies, all in one place.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(sitemapData).map(([category, links], catIndex) => (
            <motion.div
              key={category}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-300 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8 relative inline-block">
                  {category}
                  <span className="absolute -bottom-2 left-0 w-12 h-1 gradient-btn rounded-full"></span>
                </h2>
                
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover/link:bg-red-500 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                        <span className="text-sm font-medium tracking-wide">{link.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Section for Popular Links or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 p-10 md:p-14 rounded-3xl relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-red-900/20 backdrop-blur-md border border-white/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Can't find what you're <span className="gradient-text">looking for?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Our experts are ready to help you with your specific requirements. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="gradient-btn text-white px-10 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-[0_10px_20px_-10px_rgba(221,68,68,0.5)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/about-us"
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full text-base font-semibold border border-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
