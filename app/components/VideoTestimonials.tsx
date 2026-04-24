"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const videos = [
  {
    id: 1,
    embedId: "p46Cebnosq8",
    title: "Webtechnomind IT Solutions P...",
  },
  {
    id: 2,
    embedId: "LplmVCTnHEE",
    title: "Happy Client Review | Webtechnomind",
  },
  {
    id: 3,
    embedId: "9C_V3Erk9JI",
    title: "Another Review from our Happy Client",
  },
  {
    id: 4,
    embedId: "RFRPsGlOwlY",
    title: "Client feedback of Webtechnomind IT S...",
  },
  {
    id: 5,
    embedId: "mFmT5Ia6t-s",
    title: "Client feedback of Webtechnomind IT S...",
  },
  {
    id: 6,
    embedId: "r8MGZoAlZ4c",
    title: "Client feedback of Webtechnomind IT S...",
  },
];

export default function VideoTestimonials() {
  return (
    <ScrollReveal>
      <section className="relative bg-[#0a0a0a] py-20 px-4 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/8 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-pink-600/8 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex justify-center mb-4" data-aos="fade-down">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_50%,#da365c_100%)]">
              Video Testimonials
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)]">
                Clients Said
              </span>
            </h2>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-10" data-aos="zoom-in">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, i) => (
              <div
                key={video.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 bg-[#111111] shadow-lg hover:shadow-blue-900/20 hover:scale-[1.02]"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-10" data-aos="zoom-in">
            <a
              href="https://www.youtube.com/@webtechnomind"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              View All on YouTube
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}