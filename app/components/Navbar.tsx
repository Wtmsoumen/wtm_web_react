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
    label: "Hello AI", href: "#helloai", title: "AI Development Services", subtitle: "Next-Gen AI & ML Solutions", icon: Sparkles, megaMenu: [
      { title: "AI development", href: "#socialmediamarketing", icon: Share2, color: "#fb2c36", color1: "#570707" },
      { title: "AI Chatbot Development", href: "#searchengineoptimization", icon: Search, color: "#fb2c36", color1: "#570707" },
      { title: "Generative AI Development", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "#fb2c36", color1: "#570707" },
      { title: "AI Agent Development", href: "#leadgeneration", icon: UserPlus, color: "#fb2c36", color1: "#570707" },
      { title: "AI Integration", href: "#conversionrateoptimization", icon: TrendingUp, color: "#fb2c36", color1: "#570707" },
      { title: "ML Development", href: "#brandmanagement", icon: ShieldCheck, color: "#fb2c36", color1: "#570707" },
      { title: "AI Product Development", href: "#trustedinfluencermarketingagency", icon: Users, color: "#fb2c36", color1: "#570707" },
      { title: "Machine Learning & Deep Learning", href: "#specializedecommerceseo", icon: ShoppingCart, color: "#fb2c36", color1: "#570707" },
    ]
  },

  {
    label: "Marketing", href: "#markating", title: "Marketing Services", subtitle: "Marketing Solutions", icon: SquarePercent, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "#D95204", color1: "#782E00" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "#D95204", color1: "#782E00" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "#D95204", color1: "#782E00" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "#D95204", color1: "#782E00" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "#D95204", color1: "#782E00" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "#D95204", color1: "#782E00" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "#D95204", color1: "#782E00" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "#D95204", color1: "#782E00" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "#D95204", color1: "#782E00" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "#D95204", color1: "#782E00" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "#D95204", color1: "#782E00" }
    ]
  },

  {
    label: "Development", href: "#development", title: "Development Services", subtitle: "Development Solutions", icon: CodeXml, megaMenu: [
      { title: "Mobile App Development", href: "#socialmediamarketing", icon: Share2, color: "#00bcff", color1: "#000000", subMenue: [{ title: "Mobile App Development", href: "#socialmediamarketing", icon: Share2, }] },
      { title: "Website Development", href: "#socialmediamarketing", icon: Share2, color: "#00bcff", color1: "#000000", subMenue: [{ title: "Mobile App Development", href: "#socialmediamarketing", icon: Share2, }] },
    ]
  },

  {
    label: "Services", href: "#services", title: "Our Services", subtitle: "Our Services", icon: LaptopMinimalCheck, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "#a800b7", color1: "#000000" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "#a800b7", color1: "#000000" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "#a800b7", color1: "#000000" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "#a800b7", color1: "#000000" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "#a800b7", color1: "#000000" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "#a800b7", color1: "#000000" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "#a800b7", color1: "#000000" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "#a800b7", color1: "#000000" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "#a800b7", color1: "#000000" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "#a800b7", color1: "#000000" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "#a800b7", color1: "#000000" }
    ]
  },

  // on que
  // {
  //   label: "On-Demand", href: "#ondemand", icon: ShieldAlert,
  // },
  {
    label: "Industry", href: "#industry", title: "Industry", subtitle: "Industry", icon: Factory, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "#0092b8", color1: "#000000" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "#0092b8", color1: "#000000" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "#0092b8", color1: "#000000" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "#0092b8", color1: "#000000" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "#0092b8", color1: "#000000" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "#0092b8", color1: "#000000" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "#0092b8", color1: "#000000" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "#0092b8", color1: "#000000" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "#0092b8", color1: "#000000" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "#0092b8", color1: "#000000" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "#0092b8", color1: "#000000" }
    ]
  },

  {
    label: "Company", href: "#footer", title: "Our Company", subtitle: "Our Company Details", icon: Building2, megaMenu: [
      { title: "Social Media Marketing", href: "#socialmediamarketing", icon: Share2, color: "#00a63e", color1: "#000000" },
      { title: "Digital Marketing Strategy", href: "#digitalmarketingstrategy", icon: Lightbulb, color: "#00a63e", color1: "#000000" },
      { title: "Conversion Rate Optimization", href: "#conversionrateoptimization", icon: TrendingUp, color: "#00a63e", color1: "#000000" },
      { title: "Trusted Influencer Marketing Agency", href: "#trustedinfluencermarketingagency", icon: Users, color: "#00a63e", color1: "#000000" },
      { title: "Search Engine Optimization", href: "#searchengineoptimization", icon: Search, color: "#00a63e", color1: "#000000" },
      { title: "Lead Generation", href: "#leadgeneration", icon: UserPlus, color: "#00a63e", color1: "#000000" },
      { title: "Brand Management", href: "#brandmanagement", icon: ShieldCheck, color: "#00a63e", color1: "#000000" },
      { title: "Specialized eCommerce SEO Services", href: "#specializedecommerceseo", icon: ShoppingCart, color: "#00a63e", color1: "#000000" },
      { title: "Google Ad Campaigns", href: "#googleadcampaigns", icon: Megaphone, color: "#00a63e", color1: "#000000" },
      { title: "Content Marketing", href: "#contentmarketing", icon: FileText, color: "#00a63e", color1: "#000000" },
      { title: "Paid Advertising", href: "#paidadvertising", icon: Target, color: "#00a63e", color1: "#000000" }
    ]
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<any>({})
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

  let Ticon = openMegaMenu?.icon;

  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white" : "bg-black/40"}`}>
    <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white shadow-sm shadow-gray-300" : "bg-black/80"}`}>
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
                  onMouseEnter={() => setOpenMegaMenu({ title: item?.title, subtitle: item?.subtitle, icon: item?.icon, data: item?.megaMenu })}
                  onClick={() => setOpenMegaMenu({})}
                >
                  <div className="relative flex gap-1 z-11 font-medium text-sm">
                    <Icon className={`w-5 h-auto ${index === 0 ? "text-red-500" : index === 1 ? "text-amber-400" : index === 2 ? "text-sky-400" : index === 3 ? "text-fuchsia-600" : index === 4 ? "text-cyan-600" : index === 5 ? "text-green-600" : index === 6 ? "text-cyan-600" : ""}`} />
                    {item.label}
                    <ChevronDown className="w-4.5 h-auto group-hover:rotate-180 duration-300" />
                  </div>
                  {/* <div className="w-full h-12 absolute top-0 bg-black z-10" /> */}
                </div>
              )
            })}

            {openMegaMenu?.data?.length > 0 ?
              <div onMouseLeave={() => setOpenMegaMenu({})} className={`absolute top-11 -right-12 bg-white w-[120%] rounded-3xl overflow-hidden flex ${scrolled ? "shadow-md shadow-gray-300" : ""}`}>
                <div className={`w-[72%]`}>
                  <div className="text-black px-8 pt-6">
                    <div className="flex items-start gap-2">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          background: `linear-gradient(0deg, ${openMegaMenu?.data[0]?.color} 0%, ${openMegaMenu?.data[0]?.color1} 100%)`
                        }} >
                        <Ticon className={`w-5 h-auto text-white`} />
                      </div>
                      <div className="flex flex-col font-semibold text-gray-600">
                        <h1 className="text-xl">{openMegaMenu?.title}</h1>
                        <h2 className="font-medium text-sm">{openMegaMenu?.subtitle}</h2>
                      </div>
                    </div>
                  </div>
                  <div className={`text-black grid grid-cols-2 p-5! gap-x-2`}>
                    {openMegaMenu?.data?.length > 0 ? openMegaMenu?.data?.map((v: any, idx: number) => {
                      const Icon = v?.icon;
                      return (
                        <div key={idx}>
                          <Link href={v?.href} className={`flex p-3 items-center gap-2 font-normal group text-sm rounded-xl border border-solid border-transparent hover:border-gray-200`}>
                            {v?.icon !== "" ?
                              <div className={`p-3 rounded-xl`} style={{ background: v?.subMenue?.length ? `${v?.color}40` : `${v?.color}20`, }}>
                                <Icon className={`w-4 duration-300 h-auto mt-0.5!`} style={{ color: v?.color }} />
                              </div>
                              : ""}
                            <span className="font-semibold text-base text-gray-600">{v?.title}</span>
                          </Link>

                          {v?.subMenue?.length > 0 ? v?.subMenue?.map((val: any, indx: number) => {
                            const Icon = val?.icon;
                            return (
                              <Link href={v?.href} key={indx} className={`flex p-3 items-center gap-2 font-normal group text-sm rounded-xl border border-solid border-transparent hover:border-gray-200`}>
                                {val?.icon !== "" ?
                                  <div className={`p-3 rounded-xl`} style={{ background: `${v?.color}20` }}>
                                    <Icon className={`w-4 duration-300 h-auto mt-0.5!`} style={{ color: v?.color }} />
                                  </div>
                                  : ""}
                                <span className="font-semibold text-base text-gray-600">{val?.title}</span>
                              </Link>
                            )
                          }) : ""}
                        </div>
                      )
                    }) : ""}
                  </div>
                </div>
                <div className="w-[28%] h-[-webkit-fill-available] z-10"
                  style={{
                    background: `linear-gradient(0deg, ${openMegaMenu?.data[0]?.color} 0%, ${openMegaMenu?.data[0]?.color1} 100%)`
                  }} >
                  sdfsd
                </div>
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
