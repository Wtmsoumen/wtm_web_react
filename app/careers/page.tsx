"use client";

import React from "react";

import { useState } from "react";
import {
    User,
    Mail,
    Briefcase,
    MessageSquare,
    Upload,
    FileText,
    X
} from "lucide-react";

const CareersPage = () => {

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
    };

    const scrollToForm = () => {
        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-white text-black">

            {/* 🔥 HERO */}
            <section className="py-24 text-center border-b">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                    Careers at <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Our Company</span>
                </h1>
                <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
                    We’re building high-performance digital products. Join us and grow with a team that values execution and impact.
                </p>
            </section>

            {/* 🔥 JOB LIST */}
            <section className="max-w-5xl mx-auto px-4 py-16 space-y-10">

                {/* ===== JOB 1 ===== */}
                <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">IT Sales Executive</h2>
                            <p className="text-gray-500 text-sm mt-1">Newtown, Kolkata • Full-time</p>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:scale-105 transition"
                        >
                            Apply Now
                        </button>
                    </div>

                    <div className="mt-6 text-gray-600 text-sm leading-relaxed space-y-2">
                        <p><b>Experience:</b> Minimum 4 Years</p>
                        <p><b>Industry:</b> IT Services / Software Solutions</p>
                        <p>
                            We are looking for female professionals for B2B telesales and email outreach.
                            The candidate should have strong communication skills and experience in client handling.
                        </p>

                        <div>
                            <p className="font-semibold mt-4 mb-2">Responsibilities:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Lead generation through calls and email campaigns</li>
                                <li>Client communication and deal closure</li>
                                <li>Maintain CRM and follow-ups</li>
                                <li>Work closely with marketing & tech teams</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ===== JOB 2 ===== */}
                <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">WordPress Developer</h2>
                            <p className="text-gray-500 text-sm mt-1">Newtown, Kolkata • Full-time</p>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:scale-105 transition"
                        >
                            Apply Now
                        </button>
                    </div>

                    <div className="mt-6 text-gray-600 text-sm leading-relaxed space-y-2">
                        <p><b>Experience:</b> 6 – 8 Years</p>
                        <p><b>Industry:</b> IT Services / Software Development</p>

                        <div>
                            <p className="font-semibold mt-4 mb-2">Responsibilities:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Develop and maintain WordPress websites</li>
                                <li>Custom theme and plugin development</li>
                                <li>Optimize performance and SEO</li>
                                <li>Collaborate with UI/UX and backend teams</li>
                                <li>Ensure website security and scalability</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            {/* 🔥 APPLY FORM */}
             <section id="apply" className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4">

        <div className="relative bg-white p-10 md:p-12 rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl rounded-full" />

          {/* Heading */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Apply for a Position
            </h2>
            <p className="text-gray-500">
              Fill in your details and we’ll get back to you shortly.
            </p>
          </div>

          <form className="space-y-6 relative z-10">

            {/* Name */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <User className="w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Full Name" className="w-full outline-none bg-transparent" />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-5 h-5 text-gray-400" />
              <input type="email" placeholder="Email Address" className="w-full outline-none bg-transparent" />
            </div>

            {/* Role */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Position Applied For" className="w-full outline-none bg-transparent" />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
              <textarea rows={4} placeholder="Tell us about your experience" className="w-full outline-none bg-transparent resize-none" />
            </div>

            {/* Resume Upload */}
            {!file ? (
              <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500 text-sm">
                    Upload Resume (PDF)
                  </span>
                </div>
                <span className="text-xs text-gray-400">Max 5MB</span>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="flex items-center justify-between border rounded-xl px-4 py-3 bg-gray-50">
                <div className="flex items-center gap-3 overflow-hidden">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-sm truncate max-w-[180px]">
                    {file.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Change file */}
                  <label className="text-xs text-blue-600 cursor-pointer hover:underline">
                    Change
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  {/* Remove file */}
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-[linear-gradient(108deg,#0079d0,#9e52d8,#da365c,#d04901)] hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Submit Application
            </button>

          </form>
        </div>
      </div>
    </section>

        </div>
    );
};

export default CareersPage;