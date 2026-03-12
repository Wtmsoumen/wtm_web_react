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
  Target
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png"
import logoWhite from "../../public/images/logoWhite.png"
import Image from "next/image";
import Link from "next/link";
import { globalStyle } from "../globalStyle";

const navLinks = [
  { label: "Hello AI", href: "#helloai", icon: "helloai" },
  {
    label: "Marketing", href: "#markating", icon: "markating", megaMenu: [
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
  { label: "Development", href: "#development", icon: "development" },
  { label: "Services", href: "#services", icon: "services" },
  { label: "On-Demand", href: "#ondemand", icon: "ondemand" },
  { label: "Industry", href: "#industry", icon: "industry" },
  { label: "Company", href: "#footer", icon: "footer" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white shadow-sm shadow-gray-300" : ""}`}>
      <div className={globalStyle?.container}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={scrolled ? logo : logoWhite} alt="logo" width={1920} height={1080} className="w-50 h-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="relative hidden lg:flex items-center gap-5">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className={`${scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-red-300"} cursor-pointer font-medium text-sm transition-colors duration-200 group`}
                onMouseEnter={() => setOpenMegaMenu(item?.megaMenu)}
                onClick={() => setOpenMegaMenu([])}
              >
                <div className="relative flex gap-1 z-11 font-medium text-[15px]">
                  {item.icon === "helloai" ? <Sparkles className="w-5 h-auto text-red-500" /> : item.icon === "markating" ? <SquarePercent className="w-5 h-auto text-amber-400" /> : item.icon === "development" ? <CodeXml className="w-5 h-auto text-sky-400" /> : ""}
                  {item.label}
                  <ChevronDown className="w-4.5 h-auto group-hover:rotate-180 duration-300" />
                </div>
                {/* <div className="w-full h-12 absolute top-0 bg-black z-10" /> */}
              </div>
            ))}

            {openMegaMenu?.length > 0 ? <div className="absolute top-11 bg-white w-full rounded-3xl overflow-hidden flex">
              <div className="text-black grid grid-cols-2 p-5! gap-y-6 gap-x-2 w-[75%]" onMouseLeave={() => setOpenMegaMenu([])}>
                {openMegaMenu?.length > 0 ? openMegaMenu?.map((v: any, idx: number) => {
                  const Icon = v?.icon;
                  return (
                    <Link href={v?.href} key={idx} className={`flex items-start gap-2 font-medium group`}>{v?.icon !== "" ? <Icon className={`w-5 group-hover:w-5.5 duration-300 h-auto mt-0.5!`} style={{ color: v?.color }} /> : ""}{v?.title}</Link>
                  )
                }) : ""}
              </div>
              <div className="w-[25%] h-[-webkit-fill-available] z-10" style={{ backgroundColor: openMegaMenu[0]?.color }} />
            </div> : ""}
          </div>

          {/* CTA */}
          <button className={`${scrolled ? "bg-black/20 hover:bg-black/40 text-black border-black/20" : "bg-white/20 hover:bg-white/40 text-white border-white/20"} duration-300 cursor-pointer px-4! py-2! border rounded-full text-sm font-medium`}>
            Get Quote
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
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
