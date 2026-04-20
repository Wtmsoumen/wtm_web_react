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
    title: "FinTech",
    subtitle: "Smart Fraud Detection",
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
  { id: 18, title: "E-Learning", stat: "50+ Apps", icon: GraduationCap },
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
      {/* -----------LOWER SECTION--------- */}
      <div
        className="w-full md:w-[85%] mx-auto shadow-md bg-white rounded-3xl p-4 md:p-8"
        data-aos="zoom-in"
      >

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <Bot className="w-5 h-5 text-purple-500" />
          <h3 className="text-2xl font-bold text-gray-900">Expertise Across Industries</h3>
        </div>

        {/* Grid */}
        <div className="">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {moreIndustries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col items-center gap-2 p-3 md:p-5 rounded-2xl bg-purple-100 cursor-pointer transition-all duration-200 group border border-transparent hover:border-purple-200 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:bg-purple-white">
                  <industry.icon className="w-6 h-6 text-gray-700 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-200">{industry.title}</p>
                  {/* <div className="flex items-center justify-center gap-1 mt-1">
                    <Cpu className="w-3 h-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                    <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors duration-200">{industry.stat}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <button onClick={() => router.push('/contact-us')} className={`${globalStyle?.gradientText} flex items-center gap-3  text-white text-sm font-bold px-14 py-5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300  `}>

          <Sparkles className="w-6 h-6" />
          Start Your AI-Powered Project
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section></ScrollReveal>
  );
};

export default Industries;