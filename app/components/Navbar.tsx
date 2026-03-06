"use client";

import { useState } from "react";

const navLinks = [
  { label: "AI Development", href: "#services" },
  { label: "Blockchain", href: "#services" },
  { label: "Development", href: "#services" },
  { label: "On-Demand", href: "#ondemand" },
  { label: "Industries", href: "#industries" },
  { label: "Company", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center gradient-btn">
              <span className="text-white font-bold text-base">A</span>
            </div>
            <span className="text-white font-bold text-lg">
              Wtm
              <span className="gradient-text"> Technologies</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
            <button className="gradient-btn text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Start Your Project
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#080f20] border-t border-white/10 px-4 py-5 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button className="gradient-btn text-white px-5 py-3 rounded-full text-sm font-semibold w-full">
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
