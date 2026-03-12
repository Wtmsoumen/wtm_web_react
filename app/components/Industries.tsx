

// import Image from 'next/image'
// import React from 'react'

// import ida from "../../public/images/dgwIcons/1ida.png"
// import b2bpm from "../../public/images/dgwIcons/2b2bpm.png"
// import fapp from "../../public/images/dgwIcons/3fapp.png"
// import rest from "../../public/images/dgwIcons/4rest.png"
// import hewe from "../../public/images/dgwIcons/5hewe.png"
// import sone from "../../public/images/dgwIcons/6sone.png"
// import lnt from "../../public/images/dgwIcons/7lnt.png"
// import blcr from "../../public/images/dgwIcons/8blcr.png"
// import trho from "../../public/images/dgwIcons/9trho.png"
// import fifi from "../../public/images/dgwIcons/10fifi.png"
// import bfi from "../../public/images/dgwIcons/11bfi.png"
// import ecr from "../../public/images/dgwIcons/12ecr.png"
// import { globalStyle } from '../globalStyle'

// const Industries = () => {

//   let industries = [
//     {
//       id: 1,
//       title: "Interior Design & Architecture",
//       image: ida,
//     },
//     {
//       id: 2,
//       title: "B2B Portals & Marketplaces",
//       image: b2bpm,
//     },
//     {
//       id: 3,
//       title: "Fashion & Apparel",
//       image: fapp,
//     },
//     {
//       id: 4,
//       title: "Real Estate",
//       image: rest,
//     },
//     {
//       id: 5,
//       title: "Healthcare & Wellness",
//       image: hewe,
//     },
//     {
//       id: 6,
//       title: "Social Networking",
//       image: sone,
//     },
//     {
//       id: 7,
//       title: "Logistics & Transportation",
//       image: lnt,
//     },
//     {
//       id: 8,
//       title: "Blockchain & Crypto",
//       image: blcr,
//     },
//     {
//       id: 9,
//       title: "Travel & Hospitality",
//       image: trho,
//     },
//     {
//       id: 10,
//       title: "Finance & Fintech",
//       image: fifi,
//     },
//     {
//       id: 11,
//       title: "Banking, Finance & Insurance",
//       image: bfi,
//     },
//     {
//       id: 12,
//       title: "E-commerce & Retail",
//       image: ecr,
//     },
//   ]

//   return (
//     <div className='bg-linear-to-r from-[#1E7FF8] via-[#0E8DF6]  to-[#E75061]'>
//       <div className={`${globalStyle?.container} py-16!`}>
//         <div className='flex flex-col items-center gap-4'>
//           <h1 className='uppercase tracking-[2.5%] text-base font-medium text-white'>DIGITALLY GROWING WITH</h1>
//           <h2 className='text-5xl font-normal text-white'>Industries <strong>We Serve</strong></h2>
//           <p className='text-base font-normal text-white text-center max-w-3xl'>At WebTechnomind, we empower businesses across diverse industries with innovative digital solutions that fuel growth and transformation. From stunning websites and intuitive mobile apps to custom software and strategic branding, we craft experiences that help grow your business online.</p>
//         </div>
//         <div className='grid grid-cols-6 gap-4 mt-10!'>
//           {industries.map((industry) => (
//             <div key={industry.id} className='p-7! bg-white rounded-[20px] w-full flex flex-col items-center gap-4'>
//               <Image src={industry.image} alt="industriesWeServe" width={70} height={70} />
//               <p className='text-base font-normal text-black text-center'>{industry?.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Industries



"use client";

import Image from "next/image";
import React from "react";


import ida from "../../public/images/dgwIcons/1ida.png";
import b2bpm from "../../public/images/dgwIcons/2b2bpm.png";
import fapp from "../../public/images/dgwIcons/3fapp.png";
import rest from "../../public/images/dgwIcons/4rest.png";
import hewe from "../../public/images/dgwIcons/5hewe.png";
import { globalStyle } from "../globalStyle";

import {
  Cpu, ArrowRight, HeartPulse, BadgeDollarSign, ShoppingCart,
  GraduationCap, Truck, Car, Wheat, Gamepad2, Trophy, Clock,
  CalendarDays, Users, Dumbbell, Film, UtensilsCrossed, Server,
  ClipboardCheck, Home, Zap, Newspaper, PlaneTakeoff, Tv, Bot,
  Sparkles
} from "lucide-react";



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
  { id: 1, title: "Automotive", stat: "65+ Apps", icon: Car },
  { id: 2, title: "Agriculture", stat: "45+ Apps", icon: Wheat },
  { id: 3, title: "Gaming", stat: "75+ Apps", icon: Gamepad2 },
  { id: 4, title: "Sports", stat: "90+ Apps", icon: Trophy },
  { id: 5, title: "On-Demand", stat: "300+ Apps", icon: Clock },
  { id: 6, title: "Events", stat: "55+ Apps", icon: CalendarDays },
  { id: 7, title: "Social", stat: "85+ Apps", icon: Users },
  { id: 8, title: "Fitness", stat: "95+ Apps", icon: Dumbbell },
  { id: 9, title: "Entertainment", stat: "70+ Apps", icon: Film },
  { id: 10, title: "Restaurant", stat: "180+ Apps", icon: UtensilsCrossed },
  { id: 11, title: "SaaS", stat: "140+ Apps", icon: Server },
  { id: 12, title: "Government", stat: "25+ Apps", icon: ClipboardCheck },
  { id: 13, title: "Real Estate", stat: "90+ Apps", icon: Home },
  { id: 14, title: "EV & Energy", stat: "45+ Apps", icon: Zap },
  { id: 15, title: "Media", stat: "60+ Apps", icon: Newspaper },
  { id: 16, title: "Aviation", stat: "35+ Apps", icon: PlaneTakeoff },
  { id: 17, title: "OTT", stat: "50+ Apps", icon: Tv },
];



const Industries = () => {
  const largeCard = industries.find((i) => i.large)!;
  const smallCards = industries.filter((i) => !i.large);

  return (
    <section className="w-full bg-[#f5f5f7] py-20 px-4 sm:px-6 lg:px-8">

      {/* --------------UPPER INDUSTRIES---------------- */}
      <div className={`${globalStyle?.container}`}>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
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
        <div className="grid grid-cols-3 gap-7 mx-auto">

          {/* Large card - left, spans 2 rows */}
          <div className={`relative col-span-1 row-span-2 shadow-xl  rounded-3xl bg-gradient-to-br ${largeCard.gradient} p-8 flex flex-col justify-between overflow-hidden cursor-pointer group`}>
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
          {smallCards.map((item) => (
            <div
              key={item.id}
              className={`relative   shadow-xl  rounded-3xl bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between min-h-[200px] overflow-hidden cursor-pointer group`}
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


      {/* -----------LOWER SECTION--------- */}
      <div className="w-[85%]  mx-auto mt-16 shadow-md bg-white  rounded-3xl p-8">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <Bot className="w-5 h-5 text-purple-500" />
          <h3 className="text-2xl font-bold text-gray-900">More AI-Powered Industries</h3>
        </div>

        {/* Grid */}
        <div className="">
          <div className="grid grid-cols-6 gap-4">
            {moreIndustries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#f5f5f7] hover:bg-purple-50 cursor-pointer transition-all duration-200 group border border-transparent hover:border-purple-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:bg-purple-100">
                  <industry.icon className="w-6 h-6 text-gray-700 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-200">{industry.title}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Cpu className="w-3 h-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                    <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors duration-200">{industry.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button className={`${globalStyle?.gradientText} flex items-center gap-3  text-white text-sm font-bold px-14 py-5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300  `}>
       
            <Sparkles className="w-6 h-6" />
            Start Your AI-Powered Project
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
    </section>
  );
};

export default Industries;