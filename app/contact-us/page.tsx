"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  Building2,
  Globe2,
  ChevronDown,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { globalStyle } from "../globalStyle";
import Footer from "../components/Footer";

// ─── Team Data ───────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Amit Singh (India)",
    role: "Founder | Director & CEO",
    image: "images/sir-image.jpg",
    tier: "founder",
  },
  {
    name: "Mitul",
    role: "Director of Marketing (Dubai)",
    image: "images/Mitul.jpg",
    tier: "director",
  },
  {
    name: "ANZ Region Sales (Aus)",
    role: "ANZ Region Sales",
     image: "images/Vaibhav.jpg",
    tier: "manager",
  },
  {
    name: "ANZ Region Sales (Aus)",
    role: "ANZ Region Sales",
     image: "images/Manuj.jpeg",
    tier: "manager",
  },
  {
    name: "Rahul Halder",
    role: "Project Manager",
     image: "images/rahul-da.jpg",
    tier: "manager",
  },
  {
    name: "Debashis Majumdar",
    role: "Director - Marketing (World Wide)",
     image: "images/debu.jpg",
    tier: "manager",
  },
];

// ─── Office Locations ─────────────────────────────────────────────────────────
const offices = [
  {
    country: "India (HQ)",
    address: "Unit No. 227, PS Abacus, Action Area IIE, Newtown, Kolkata, West Bengal 700157",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.748!2d88.462!3d22.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIyLjgiTiA4OMKwMjcnNDMuMiJF!5e0!3m2!1sen!2sin!4v1700000000000",
    flag: "🇮🇳",
     image: "images/ps-abacus-featured.webp",
  },
  {
    country: "Dubai, UAE",
    address: "1602/03, Bay View Tower, Business Bay, Dubai, UAE",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.264!3d25.186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA5LjYiTiA1NcKwMTUnNTAuNCJF!5e0!3m2!1sen!2sae!4v1700000000000",
    flag: "🇦🇪",
       image: "images/Dubai-UAE.jpg",
  },
 
];

const services = [
  "AI Engineering",
  "Blockchain Development",
  "Mobile App Development",
  "Custom Web Development",
  "Software Development",
  "Digital Transformation",
  "Digital Marketing",
  "Data Science & Analytics",
  "E-commerce Development",
];

// ─── Avatar Placeholder ───────────────────────────────────────────────────────
function AvatarPlaceholder({ name, size = 80 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-br from-[#1D74CF] via-[#b33b41] to-[#D04425] flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
    >
      {initials}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [activeOffice, setActiveOffice] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* ── HERO BAND ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#D04425]/10 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4">
          {/* Badge */}
          <div
            className={`${globalStyle?.gradientText} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 shadow-sm`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Have Some{" "}
            <span
              className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}
            >
              Questions?
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-xl max-w-2xl leading-relaxed">
            Welcome to Webtechnomind IT Solutions, the leading Website Design and
            Development Company in India, offering comprehensive web development,
            mobile app development and digital marketing services to a global clientele.
          </p>
        </div>
      </section>

  {/* ── GROWTH / TEAM SECTION ─────────────────────────────────────── */}
      <section className="relative bg-white  overflow-hidden">

        {/* ── Background texture ── */}
        <div className="pointer-events-none absolute inset-0">
          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Gradient blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#D04425]/8 to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Section label ── */}
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Our Story
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ══ LEFT – Team ══════════════════════════════════════════════ */}
            <div className="flex flex-col gap-8">

              {/* Left header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#1D74CF] to-[#b33b41] rounded-full" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#1D74CF]">
                    Meet the Team
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  The People Behind{" "}
                  <span className="bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] bg-clip-text text-transparent">
                    Our Success
                  </span>
                </h2>
               
              </div>

              {/* Team grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    {/* Photo */}
                    <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-107 transition-transform duration-500"
                      />
                      {/* Scrim so name always readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Info */}
                    <div className="px-3 pt-3 pb-2.5 flex flex-col gap-0.5">
                      <p className="text-sm font-bold text-black leading-snug">{member.name}</p>
                      <p className="text-[11px] text-gray-400 leading-snug">{member.role}</p>
                    </div>

                    {/* Gradient bottom bar */}
                    <div className="h-[3px] bg-gradient-to-r from-[#1D74CF] via-[#b33b41] to-[#D04425] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT – Tagline + Offices ════════════════════════════════ */}
            <div className="flex flex-col gap-8">

              {/* Right header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#D04425] to-[#b33b41] rounded-full" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#D04425]">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  Growth strategies to be{" "}
                  <span className="bg-gradient-to-r from-[#D04425] to-[#b33b41] bg-clip-text text-transparent">
                    effective &amp; competitive
                  </span>
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed text-sm md:text-base max-w-md">
                  Welcome to Webtechnomind IT Solutions, the leading Website Design and
                  Development Company in India, offering comprehensive web development,
                  mobile app development and digital marketing services to a global clientele.
                </p>
              </div>

              {/* Office cards */}
              <div className="flex flex-col gap-5">
                {offices.map((office, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Photo with flag overlay */}
                    <div className="relative w-full overflow-hidden" style={{ height: "250px" }}>
                      <img
                        src={office.image}
                        alt={`Webtechnomind IT Solutions - ${office.country}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Flag badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                        <span className="text-base">{office.flag}</span>
                        <span className="text-xs font-semibold text-black">{office.country}</span>
                      </div>
                      {/* Bottom scrim */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Caption */}
                    <div className="px-4 py-3 flex items-start gap-3 border-t border-gray-50">
                      <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#1D74CF] to-[#D04425] flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-black text-sm">
                          Webtechnomind IT Solutions Pvt. Ltd ({office.country})
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{office.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── CONTACT FORM + MAP ────────────────────────────────────────── */}
      <section className="bg-white py-20">
           {/* ── Background texture ── */}
        <div className="pointer-events-none absolute inset-0">
          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Gradient blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#D04425]/8 to-transparent blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Maps column */}
            <div className="flex flex-col gap-6">
              {offices.slice(0, 2).map((office, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="text-xl">{office.flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-black">Webtechnomind IT Solutions Pvt. Ltd ({office.country})</p>
                      <p className="text-xs text-gray-500">{office.address}</p>
                    </div>
                  </div>
                  <iframe
                    src={office.mapEmbedUrl}
                    width="100%"
                    height="220"
                    className="border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map - ${office.country}`}
                  />
                </div>
              ))}
            </div>

            {/* Form column */}
            <div className="card-glass rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* decorative blob */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-[#D04425]/10 blur-2xl" />

              <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                Want a Store That Drives ROI?
              </h3>
              <p className="text-[#D04425] font-semibold mb-6">Let's Build It.</p>

              <div className="flex flex-col gap-8">
                {/* Name */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <User className="w-6 h-6 text-gray-400 group-focus-within:text-[#1D74CF] transition-colors flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-black text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Company */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <Briefcase className="w-6 h-6 text-gray-400 group-focus-within:text-[#1D74CF] transition-colors flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-black text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <Phone className="w-6 h-6 text-gray-400 group-focus-within:text-[#1D74CF] transition-colors flex-shrink-0" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-black text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <Mail className="w-6 h-6 text-gray-400 group-focus-within:text-[#1D74CF] transition-colors flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-black text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Service Select */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <Globe2 className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent text-sm outline-none text-gray-400 cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Select Service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-black">{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                </div>

                {/* Message */}
                <div className="flex items-start gap-3 border-b border-gray-200 pb-2 group focus-within:border-[#1D74CF] transition-colors">
                  <MessageSquare className="w-6 h-6 text-gray-400 group-focus-within:text-[#1D74CF] transition-colors flex-shrink-0 mt-1" />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent text-black text-sm outline-none placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 mt-1">
                  <input type="checkbox" id="robot" className="w-4 h-4 accent-[#1D74CF]" />
                  <label htmlFor="robot" className="text-sm text-gray-500 cursor-pointer">
                    I'm not a robot
                  </label>
                  <div className="ml-auto flex flex-col items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1D74CF] to-[#D04425] rounded opacity-60" />
                    <span className="text-[9px] text-gray-400 mt-0.5">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="mt-2 w-full bg-gradient-to-r from-[#b33b41] via-[#D04425] to-[#1D74CF] text-white font-bold text-sm py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    "Message Sent! ✓"
                  ) : (
                    <>
                      SUBMIT NOW
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat, 9am–7pm IST" },
              { icon: Mail, label: "Email Us", value: "info@webtechnomind.com", sub: "We reply within 24hrs" },
              { icon: MapPin, label: "Visit Us", value: "Newtown, Kolkata, WB", sub: "PS Abacus, Action Area IIE" },
            ].map(({ icon: Icon, label, value, sub }, i) => (
              <div
                key={i}
                className="card-glass rounded-2xl p-6 flex items-center gap-4 shadow border border-gray-100 group hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D74CF] via-[#b33b41] to-[#D04425] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                  <p className="text-black font-semibold text-sm tracking-wider">{value}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}