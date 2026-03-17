"use client";

import {
  ChevronDown, CodeXml, Sparkles, SquarePercent, Share2,
  Lightbulb,
  TrendingUp,
  Users,
  Search,
  UserPlus,
  ShieldCheck,
  ShoppingCart,
  Megaphone,
  FileText,
  Target,
  LaptopMinimalCheck,
  ShieldAlert,
  Factory,
  Building2
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png"
import logoWhite from "../../public/images/logoWhite.png"
import Image from "next/image";
import Link from "next/link";
import { globalStyle } from "../globalStyle";

const navLinks = [
  {
    label: "Hello AI", href: "#helloai", icon: Sparkles, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "fb2c36" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "fb2c36" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "fb2c36" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "fb2c36" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "fb2c36" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "fb2c36" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "fb2c36" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "fb2c36" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "fb2c36" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "fb2c36" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "fb2c36" }
    ]
  },
  {
    label: "Marketing", href: "#markating", icon: SquarePercent, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "ffb900" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "ffb900" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "ffb900" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "ffb900" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "ffb900" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "ffb900" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "ffb900" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "ffb900" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "ffb900" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "ffb900" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "ffb900" }
    ]
  },
  {
    label: "Development", href: "#development", icon: CodeXml, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "00bcff" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "00bcff" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "00bcff" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "00bcff" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "00bcff" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "00bcff" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "00bcff" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "00bcff" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "00bcff" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "00bcff" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "00bcff" }
    ]
  },
  {
    label: "Services", href: "#services", icon: LaptopMinimalCheck, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "a800b7" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "a800b7" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "a800b7" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "a800b7" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "a800b7" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "a800b7" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "a800b7" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "a800b7" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "a800b7" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "a800b7" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "a800b7" }
    ]
  },

  // on que
  // {
  //   label: "On-Demand", href: "#ondemand", icon: ShieldAlert, megaMenu: [
  //     { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "1447e6" },
  //     { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "1447e6" },
  //     { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "1447e6" },
  //     { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "1447e6" },
  //     { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "1447e6" },
  //     { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "1447e6" },
  //     { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "1447e6" },
  //     { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "1447e6" },
  //     { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "1447e6" },
  //     { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "1447e6" },
  //     { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "1447e6" }
  //   ]
  // },
  {
    label: "Industry", href: "#industry", icon: Factory, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "00a63e" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "00a63e" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "00a63e" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "00a63e" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "00a63e" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "00a63e" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "00a63e" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "00a63e" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "00a63e" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "00a63e" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "00a63e" }
    ]
  },
  {
    label: "Company", href: "#footer", icon: Building2, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "0092b8" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "0092b8" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "0092b8" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "0092b8" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "0092b8" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "0092b8" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "0092b8" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "0092b8" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "0092b8" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "0092b8" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "0092b8" }
    ]
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<any>([])
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   console.log(openMegaMenu[0], "openMegaMenu0__")
  // }, [openMegaMenu?.length])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white" : "bg-black/40"}`}>
    <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white shadow-sm shadow-gray-300" : "bg-linear-to-t to-black/50 via-[#00000010] from-[#00000005]"}`}>
      <div className={`${globalStyle?.container} max-w-full!`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={scrolled ? logo : logoWhite} alt="logo" width={1920} height={1080} className="w-50 h-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="relative hidden lg:flex items-center gap-3">
            {navLinks.map((item: any, index: number) => {
              let Icon = item.icon
              return (
                <div
                  key={index}
                  className={`${scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-red-300"} cursor-pointer font-medium text-sm transition-colors duration-200 group`}
                  onMouseEnter={() => setOpenMegaMenu(item?.megaMenu)}
                  onClick={() => setOpenMegaMenu([])}
                >
                  <div className="relative flex gap-1 z-11 font-medium text-sm">
                    <Icon className={`w-5 h-auto ${index === 0 ? "text-red-500" : index === 1 ? "text-amber-400" : index === 2 ? "text-sky-400" : index === 3 ? "text-fuchsia-700" : index === 4 ? "text-blue-700" : index === 5 ? "text-green-600" : index === 6 ? "text-cyan-600" : ""}`} />
                    {item.label}
                    <ChevronDown className="w-4.5 h-auto group-hover:rotate-180 duration-300" />
                  </div>
                  {/* <div className="w-full h-12 absolute top-0 bg-black z-10" /> */}
                </div>
              )
            })}

            {openMegaMenu?.length > 0 ?
              <div onMouseLeave={() => setOpenMegaMenu([])} className={`absolute top-11 bg-white w-full rounded-3xl overflow-hidden flex ${scrolled ? "shadow-md shadow-gray-300" : ""}`}>
                <div className={`text-black grid grid-cols-2 p-5! gap-y-6 gap-x-2 w-[75%]`}>
                  {openMegaMenu?.length > 0 ? openMegaMenu?.map((v: any, idx: number) => {
                    const Icon = v?.icon;
                    return (
                      <Link href={v?.href} key={idx} className={`flex items-start gap-2 font-medium group`}>{v?.icon !== "" ? <Icon className={`w-5 group-hover:w-5.5 duration-300 h-auto mt-0.5!`} style={{ color: v?.color }} /> : ""}{v?.title}</Link>
                    )
                  }) : ""}
                </div>
                <div className="w-[25%] h-[-webkit-fill-available] z-10" style={{ backgroundColor: openMegaMenu[0]?.color }} />
              </div>
              : ""}
          </div>

          {/* CTA */}
          <button
            className={`hidden lg:block bg-linear-to-r from-[#1D74CF] via-[#BA4491] to-[#ff2a2a] text-white hover:scale-105 duration-300 cursor-pointer px-4! py-2! rounded-full text-sm font-medium`}
          >
            Get Quote
          </button>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#080f20] border-t border-white/10 px-4 py-5 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:text-white text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button className="gradient-btn text-white px-5 py-3 rounded-full text-sm font-semibold w-full">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
