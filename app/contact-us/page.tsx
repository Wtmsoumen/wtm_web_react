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
import ScrollReveal from "../components/ScrollReveal";

// ─── Team Data ───────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Amit Singh (India)",
    role: "Founder | Director & CEO",
    image: "images/sir-image.jpg",
    tier: "founder",
  },
  {
    name: "Avijit Sir",
    role: "Chief Marketing Officer",
    image: "images/avijit_sir.jpg",
    tier: "manager",
  },
  {
    name: "Rahul Halder",
    role: "Project Manager",
    image: "images/rahul-da.jpg",
    tier: "manager",
  },
  {
    name: "Mitul",
    role: "Director of Marketing (Dubai)",
    image: "images/Mitul.jpg",
    tier: "director",
  },
  // {
  //   name: "ANZ Region Sales (Aus)",
  //   role: "ANZ Region Sales",
  //   image: "images/Vaibhav.jpg",
  //   tier: "manager",
  // },
  // {
  //   name: "ANZ Region Sales (Aus)",
  //   role: "ANZ Region Sales",
  //   image: "images/Manuj.jpeg",
  //   tier: "manager",
  // },
  {
    name: "Debashis Majumdar",
    role: "Director - Marketing (World Wide)",
    image: "images/debu.jpg",
    tier: "manager",
  }
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* ── HERO BAND ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative overflow-hidden bg-white py-20 pb-0">
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-linear-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-linear-to-br from-[#D04425]/10 to-transparent blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-blue-50 text-blue-600 shadow-sm" data-aos="fade-down">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight">
              Have Some <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Questions?</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Leading Website Design and Development Company in India, offering comprehensive technical solutions to a global clientele.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── STORY / TEAM SECTION ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

              {/* LEFT – Team */}
              <div className="flex flex-col gap-10">
                <div data-aos="fade-right">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-linear-to-r from-[#1D74CF] to-[#b33b41] rounded-full" />
                    <span className="text-xs font-bold tracking-widest uppercase text-[#1D74CF]">Meet the Team</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                    The People Behind <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Our Success</span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {teamMembers.map((member, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={i * 50}
                    >
                      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-xs text-white/80 font-medium">{member.role}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-bold text-black">{member.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{member.tier}</p>
                      </div>
                      <div className="h-1 w-full bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] group-hover:flex hidden mt-auto" />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT – Offices */}
              <div className="flex flex-col gap-10">
                <div data-aos="fade-left">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-linear-to-r from-[#D04425] to-[#b33b41] rounded-full" />
                    <span className="text-xs font-bold tracking-widest uppercase text-[#D04425]">Our Locations</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                    Global Reach, <span className="bg-linear-to-r from-[#D04425] to-[#b33b41] bg-clip-text text-transparent">Local Impact</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-8">
                  {offices.map((office, i) => (
                    <div
                      key={i}
                      className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                      data-aos="fade-left"
                      data-aos-delay={i * 200}
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={office.image}
                          alt={office.country}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl">
                          <span className="text-xl">{office.flag}</span>
                          <span className="text-xs font-bold text-black uppercase tracking-widest">{office.country}</span>
                        </div>
                      </div>

                      <div className="p-8 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-black text-lg mb-1">Webtechnomind IT Solutions ({office.country})</p>
                          <p className="text-sm text-gray-500 leading-relaxed">{office.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CONTACT FORM + MAP ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Maps column */}
              <div className="flex flex-col gap-8" data-aos="fade-right">
                {offices.map((office, i) => (
                  <div key={i} className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white h-full group">
                    <div className="p-6 bg-white border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{office.flag}</span>
                        <p className="font-bold text-black">{office.country} Branch</p>
                      </div>
                      <a
                        href={`https://maps.google.com?q=${encodeURIComponent(office.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-blue-600 hover:underline tracking-widest uppercase"
                      >
                        Direction
                      </a>
                    </div>
                    <iframe
                      src={office.mapEmbedUrl}
                      width="100%"
                      height="300"
                      className="border-0 transition-all duration-700"
                      loading="lazy"
                      title={office.country}
                    />
                  </div>
                ))}
              </div>

              {/* Form column */}
              <div
                className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
                data-aos="fade-left"
              >
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-linear-to-br from-[#1D74CF]/5 to-[#D04425]/5 blur-3xl" />

                <h3 className="text-3xl font-black text-black mb-2">Ready to Grow?</h3>
                <p className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent font-bold text-xl mb-10 uppercase tracking-tight">Let&apos;s talk about your project.</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-4 group focus-within:border-blue-600 transition-all">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full outline-none text-black font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-4 group focus-within:border-blue-600 transition-all">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full outline-none text-black font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-4 group focus-within:border-blue-600 transition-all">
                    <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full outline-none text-black font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-4 group focus-within:border-blue-600 transition-all">
                    <Globe2 className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
                    <select
                      className="w-full outline-none text-black font-medium bg-transparent cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="" disabled>Select a Service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex items-start gap-4 border-b-2 border-gray-100 pb-4 group focus-within:border-blue-600 transition-all">
                    <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 mt-1" />
                    <textarea
                      placeholder="Project Brief"
                      className="w-full outline-none text-black font-medium h-24 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] text-white font-black py-5 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                  >
                    {submitted ? "MESSAGE RECEIVED ✓" : "SEND MESSAGE"}
                    {!submitted && <Send className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── QUICK CONTACT STRIP ───────────────────────────────────────── */}
      <ScrollReveal>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Phone, label: "Call Us", value: "+91 98765 43210", color: "bg-blue-600" },
                { icon: Mail, label: "Email Us", value: "info@webtechnomind.com", color: "bg-red-600" },
                { icon: MapPin, label: "Visit Us", value: "Newtown, Kolkata, WB", color: "bg-orange-600" },
              ].map(({ icon: Icon, label, value, color }, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-6 p-8 rounded-3xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-black font-black text-base">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}