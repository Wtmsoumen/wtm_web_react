"use client";

import Image from "next/image";
import React from "react";


import ida from "../../public/images/dgwIcons/1ida.png";
import b2bpm from "../../public/images/dgwIcons/2b2bpm.png";
import fapp from "../../public/images/dgwIcons/3fapp.png";
import rest from "../../public/images/dgwIcons/4rest.png";
import hewe from "../../public/images/dgwIcons/5hewe.png";
import { globalStyle } from "../globalStyle";

import ScrollReveal from "./ScrollReveal";
import {
  Cpu, ArrowRight, HeartPulse, BadgeDollarSign, ShoppingCart,
  GraduationCap, Truck, Car, Wheat, Gamepad2, Trophy, Clock,
  CalendarDays, Users, Dumbbell, Film, UtensilsCrossed, Server,
  ClipboardCheck, Home, Zap, Newspaper, PlaneTakeoff, Tv, Bot,
  Sparkles
} from "lucide-react";

import { useRouter } from 'next/navigation'

const industries = [
  {
    id: 1,
    title: "Healthcare",
    subtitle: "AI Diagnostics & Patient Care",
    stat: "150+ Apps Delivered",
    image: hewe,
    gradient: "from-[#f0547a] to-[#c2185b]",
    large: true,
    aiPowered: true,
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "Restaurant",
    subtitle: "Smart Food Ordering",
    stat: "200+ Apps Delivered",
    image: fapp,
    gradient: "from-[#2bbfa4] to-[#1a8c76]",
    large: false,
    icon: BadgeDollarSign,
  },
  {
    id: 3,
    title: "eCommerce",
    subtitle: "Personalized Shopping",
    stat: "250+ Apps Delivered",
    image: b2bpm,
    gradient: "from-[#f5a623] to-[#e07b00]",
    large: false,
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Education",
    subtitle: "Adaptive Learning AI",
    stat: "110+ Apps Delivered",
    image: ida,
    gradient: "from-[#5b6fe6] to-[#3a4bbf]",
    large: false,
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Logistics",
    subtitle: "Route Optimization",
    stat: "120+ Apps Delivered",
    image: rest,
    gradient: "from-[#29b6d8] to-[#0288d1]",
    large: false,
    icon: Truck,
  },
];



const moreIndustries = [
  { id: 18, title: "e learning", stat: "50+ Apps", icon: GraduationCap },
  { id: 13, title: "Real Estate", stat: "90+ Apps", icon: Home },
  { id: 10, title: "Restaurant", stat: "180+ Apps", icon: UtensilsCrossed },
  { id: 19, title: "Transport", stat: "50+ Apps", icon: Truck },
  { id: 11, title: "SaaS", stat: "140+ Apps", icon: Server },
  { id: 7, title: "Social", stat: "85+ Apps", icon: Users },
  { id: 5, title: "On-Demand", stat: "300+ Apps", icon: Clock },
  { id: 8, title: "Fitness", stat: "95+ Apps", icon: Dumbbell },
  { id: 12, title: "Government", stat: "25+ Apps", icon: ClipboardCheck },
  { id: 1, title: "Automotive", stat: "65+ Apps", icon: Car },
  { id: 2, title: "Agriculture", stat: "45+ Apps", icon: Wheat },
  { id: 4, title: "Sports", stat: "90+ Apps", icon: Trophy },
  { id: 6, title: "Events", stat: "55+ Apps", icon: CalendarDays },
  { id: 9, title: "Entertainment", stat: "70+ Apps", icon: Film },
  { id: 14, title: "EV & Energy", stat: "45+ Apps", icon: Zap },
  { id: 15, title: "Media", stat: "60+ Apps", icon: Newspaper },
  { id: 16, title: "Aviation", stat: "35+ Apps", icon: PlaneTakeoff },
  { id: 17, title: "OTT", stat: "50+ Apps", icon: Tv },
];



const Industries = () => {
  const largeCard = industries.find((i) => i.large)!;
  const smallCards = industries.filter((i) => !i.large);
  const router = useRouter();

  return (
    <ScrollReveal><section className="w-full bg-white py-16 px-4 sm:px-6  ">

      {/* --------------UPPER INDUSTRIES---------------- */}
      <div className={`${globalStyle?.container}`}>

        {/* Header */}
        <div
          className="flex flex-col items-center text-center mb-12"
          data-aos="fade-down"
        >
          <div className="inline-flex items-center gap-2 border border-purple-200 bg-white text-purple-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <Cpu className="w-6 h-6" />
            23+ Industries Served
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            AI Solutions Tailored for{" "}
            <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>
              Every Industry
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Transforming businesses with intelligent, AI-powered solutions across
            diverse sectors
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto">

          {/* Large card - left, spans 2 rows on lg+ */}
          <div
            className={`relative sm:col-span-1 lg:row-span-2 shadow-xl  rounded-3xl bg-gradient-to-br ${largeCard.gradient} p-8 flex flex-col justify-between overflow-hidden cursor-pointer group min-h-[260px]`}
            data-aos="fade-right"
          >
            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

            {/* Top row */}
            <div className="relative flex items-start justify-between ">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110  ">
                <largeCard.icon className="w-8 h-8 text-white" />
              </div>
              {largeCard.aiPowered && (
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                  <Cpu className="w-3.5 h-3.5" />
                  AI Powered
                </div>
              )}
            </div>

            {/* Bottom content */}
            <div className="relative">
              <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {largeCard.stat}
              </div>
              <h3 className="text-white text-3xl font-extrabold mb-1">{largeCard.title}</h3>
              <p className="text-white/80 text-sm mb-5">{largeCard.subtitle}</p>
              <button className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 small cards - 2x2 right side */}
          {smallCards.map((item, idx) => (
            <div
              key={item.id}
              className={`relative   shadow-xl  rounded-3xl bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between min-h-[200px] overflow-hidden cursor-pointer group`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center  transition-transform duration-300 group-hover:scale-110  ">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.stat}
                </div>
                <h3 className="text-white text-xl font-extrabold mb-0.5">{item.title}</h3>
                <p className="text-white/80 text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Industries;