"use client"
import { Sparkles, ArrowRight } from "lucide-react";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#060d1b] overflow-hidden pt-16">

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
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6   py-20 flex flex-col justify-center items-center text-center w-full">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-shadow-2xs">
          Your{" "}
          <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Next-gen</span>
          <br />
          <span className="text-white">Tech Growth Partner</span>
        </h1>

        {/* Subtitle */}
        {/* <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed 
">
  We create AI-driven applications and digital solutions that help businesses grow and evolve globally. From the initial idea to the final launch, we focus on delivering products that are fast, dependable, and built to scale.
</p> */}

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={() => setIsModalOpen(true)} className="group bg-linear-to-r from-pink-500 to-blue-500  text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
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
              className="flex flex-col justify-center items-center text-center p-6 rounded-2xl
                bg-white/5 backdrop-blur-lg border border-white/20 text-shadow-2xs
                shadow-2xl hover:bg-white/15 hover:scale-105 transition duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-1 bg-clip-text text-transparent ${globalStyle?.gradientText}`}>
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
    </section>
  );
}