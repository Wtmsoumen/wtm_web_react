"use client";

import React, { useState } from "react";
import {
  Palette,
  Film,
  Pen,
  Monitor,
  Play,
  Sparkles,
  ArrowRight,
  Check,
  Layers,
} from "lucide-react";
import Link from "next/link";
// import { globalStyle } from "../globalStyle";
// import ScrollReveal from "./ScrollReveal";

const GRADIENT = "linear-gradient(108deg,#0079d0 0%,#9e52d8 32%,#da365c 84%,#d04901 100%)";
const GRADIENT_LIGHT = "linear-gradient(108deg,#0079d010 0%,#9e52d810 32%,#da365c10 84%,#d0490110 100%)";

/* ─── Roles ─────────────────────────────────────────── */
const roles = [
  {
    icon: Film,
    title: "Motion Graphic Designers",
    bullets: ["Brand animations", "Kinetic typography", "Social reels & ads"],
  },
  {
    icon: Palette,
    title: "Visual Designers",
    bullets: ["Brand identity systems", "Print & digital assets", "Illustration & icons"],
  },
  {
    icon: Play,
    title: "Video Editors & Producers",
    bullets: ["Corporate films", "Colour grading", "Sound design"],
  },
  {
    icon: Monitor,
    title: "UI / UX Designers",
    bullets: ["Product design", "Prototyping & testing", "Design systems"],
  },
  {
    icon: Pen,
    title: "Creative Directors",
    bullets: ["Campaign strategy", "Art direction", "Brand storytelling"],
  },
  {
    icon: Layers,
    title: "Multimedia Producers",
    bullets: ["Interactive media", "360° experiences", "AR / VR content"],
  },
];

const tools = [
  "Figma", "After Effects", "Premiere Pro", "Illustrator",
  "Photoshop", "Blender", "Cinema 4D", "DaVinci Resolve",
  "Figma", "After Effects", "Premiere Pro", "Illustrator",
  "Photoshop", "Blender", "Cinema 4D", "DaVinci Resolve",
];

/* ─── Role Card ─────────────────────────────────────── */
function RoleCard({ role }: { role: (typeof roles)[0] }) {
  const Icon = role.icon;
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top: icon + title */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: GRADIENT_LIGHT }}
        >
          <Icon
            className="w-5 h-5"
            style={{
              stroke: "url(#grad)",
              color: "#9e52d8",
            }}
          />
          {/* Hidden SVG def for icon gradient */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0079d0" />
                <stop offset="50%" stopColor="#da365c" />
                <stop offset="100%" stopColor="#d04901" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 className="text-gray-900 font-bold text-sm leading-snug mt-1">{role.title}</h3>
      </div>

      {/* Bullets */}
      <ul className="space-y-1.5">
        {role.bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
            <Check
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "#da365c" }}
              strokeWidth={2.5}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* Hover watermark icon */}
      <div className="absolute -bottom-2 -right-2 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
        <Icon className="w-16 h-16 text-gray-900" strokeWidth={1} />
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────── */
export default function CreativeMediaStudioSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .cms-marquee {
          display: flex;
          animation: cmsScroll 22s linear infinite;
          white-space: nowrap;
        }
        @keyframes cmsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* <ScrollReveal> */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* Ambient blob */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #0079d0, #da365c)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Header: centered ── */}
          <div className="flex flex-col items-center text-center gap-4 mb-14" data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Creative & Media Studio
              </span>
            </div>

            <h2>
              <span
                className="block text-4xl md:text-6xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                We make brands
              </span>
              <span
                className="block text-4xl md:text-6xl font-black italic leading-tight"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  background: GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                impossible to ignore.
              </span>
            </h2>

            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              From pixel-perfect UI to cinematic brand films — our studio crafts every visual touchpoint with intention.
            </p>
          </div>

          {/* ── Feature strip ── */}
          <div
            className="relative rounded-3xl overflow-hidden mb-10 group"
            data-aos="zoom-in"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
              alt="Creative studio"
              className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />

            {/* Left content */}
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-sm">
                <p
                  className="text-white text-2xl md:text-3xl font-black leading-snug mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Design-led.
                  <br />
                  <span className="italic" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Story-driven.
                  </span>
                </p>
                <Link href="/portfolio">
                  <button
                    className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white hover:scale-105 transition-all duration-200"
                    style={{ background: GRADIENT }}
                  >
                    View Portfolio <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right stats pills */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
              {[
                { v: "500+", l: "Projects" },
                { v: "98%", l: "Satisfaction" },
                { v: "12×", l: "Engagement" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <span
                    className="text-lg font-black text-white"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {s.v}
                  </span>
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Role cards grid ── */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5" data-aos="fade-up">
            Our Studio Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {roles.map((role, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 70}>
                <RoleCard role={role} />
              </div>
            ))}
          </div>

          {/* ── Tools marquee + CTA row ── */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch" data-aos="fade-up">
            {/* Marquee */}
            <div className="flex-1 rounded-xl border border-gray-100 overflow-hidden py-3 bg-gray-50">
              <div className="cms-marquee">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest"
                  >
                    {t}
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: GRADIENT, display: "inline-block" }}
                    />
                  </span>
                ))}
              </div>
            </div>

            {/* CTA tile */}
            <Link href="/contact-us">
              <div
                className="flex items-center gap-3 px-6 py-3 rounded-xl text-white text-sm font-bold cursor-pointer hover:scale-105 transition-all duration-200 whitespace-nowrap"
                style={{ background: GRADIENT, boxShadow: "0 8px 24px rgba(0,121,208,0.25)" }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

        </div>
      </section>
      {/* </ScrollReveal> */}
    </>
  );
}