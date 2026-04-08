"use client"
import { Sparkles, ArrowRight } from "lucide-react";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollReveal from "./ScrollReveal";


export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      ".hero-btn",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 },
      "-=0.5"
    )
    .fromTo(
      ".hero-stat",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      "-=0.3"
    );
  }, { scope: container });

  return (
    <ScrollReveal><section ref={container} className="relative min-h-screen flex items-center justify-center bg-[#060d1b] overflow-hidden pt-16">

      {/* Video Background */}
      <video
        src="/video/hero-video2.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute top-16 inset-0 bg-linear-to-t from-black/20 via-black/10 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:py-20 py-10 flex flex-col justify-center items-center text-center w-full">

        {/* Main Heading */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-shadow-2xs">
          <span>Your</span>{" "}
          <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Next-gen</span>
          <br />
          <span className="text-white">Tech Growth Partner</span>
        </h1>
        {/* <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white bg-clip-text"
          style={{ textShadow: `0 0 10px #f6339a, 0 0 10px #2b7fff` }}
        >
          Your <span>Next-gen</span> <br /> Tech Growth Partner
        </h1> */}

        {/* Subtitle */}
        {/* <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed 
         ">
          We create AI-driven applications and digital solutions that help businesses grow and evolve globally. From the initial idea to the final launch, we focus on delivering products that are fast, dependable, and built to scale.
          </p> */}

        {/* CTA Button */}
        <div className="hero-btn flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={() => setIsModalOpen(true)} className="group bg-linear-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Sparkles className="w-5 h-5" />
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto w-full">
          {[
            { value: "13+", label: "Years Experience" },
            { value: "350+", label: "Products Built" },
            { value: "96%", label: "Satisfaction Rate" },
            { value: "12+", label: "Countries Served" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="hero-stat flex flex-col justify-center items-center text-center p-3 rounded-2xl
                bg-black/30 backdrop-blur-lg border border-white/20
                shadow-2xl hover:bg-black/60 hover:scale-105 transition duration-300"
            // style={{ textShadow: "0 0 16px #ffffff !important" }}
            >
              <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-1 bg-clip-text text-transparent ${globalStyle?.gradientText}`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#060d1b] to-transparent pointer-events-none" />

      {/* Modal */}
      <DiscussProjectForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section></ScrollReveal>
  );
}