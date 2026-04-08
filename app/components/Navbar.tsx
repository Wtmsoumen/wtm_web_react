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
  Building2,
  HeartPulse, Landmark, GraduationCap,
  Truck, Plane, Car, Wheat, Gamepad2, Trophy,
  Clock, CalendarDays, Dumbbell, Clapperboard,
  UtensilsCrossed, LayoutDashboard, CheckSquare, Home,
  Zap, Newspaper, PlaneTakeoff, Radio,
  Rocket,
  Layers,
  TabletSmartphone,
  MonitorSmartphone,
  Hexagon,
  Triangle,
  Globe,
  PanelsTopLeft,
  Braces,
  MonitorSpeaker,
  MessageSquare,
  Brain,
  Bot,
  Plug,
  ChartColumn,
  Cpu,
  ArrowRight,
  UserRoundSearch
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png"
import logoWhite from "../../public/images/logoWhite.png"
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";

const services = [
  {
    abbr: "GPT",
    abbrColor: "text-violet-300",
    label: "OpenAI Integration",
  },
  {
    abbr: "LLM",
    abbrColor: "text-pink-400",
    label: "Custom Models",
  },
  {
    abbr: "ML",
    abbrColor: "text-cyan-400",
    label: "Deep Learning",
  },
];

const navLinks = [
  {
    label: "Hello AI", href: "#helloai", title: "AI Development Services", subtitle: "Next-Gen AI & ML Solutions", icon: Sparkles, megaMenu: [
      { title: "AI development", href: "/services/ai-development", icon: Sparkles, color: "#fb2c36", color1: "#570707" },
      { title: "AI Chatbot Development", href: "/services/ai-chatbot-development", icon: MessageSquare, color: "#fb2c36", color1: "#570707" },
      { title: "Generative AI Development", href: "/services/generative-ai-development", icon: Brain, color: "#fb2c36", color1: "#570707" },
      { title: "AI Agent Development", href: "/services/ai-agent-development", icon: Bot, color: "#fb2c36", color1: "#570707" },
      { title: "AI Integration", href: "/services/ai-integration", icon: Plug, color: "#fb2c36", color1: "#570707" },
      { title: "ML Development", href: "/services/ml-development", icon: ChartColumn, color: "#fb2c36", color1: "#570707" },
      { title: "AI Product Development", href: "/services/ai-product-development", icon: Cpu, color: "#fb2c36", color1: "#570707" },
      { title: "Machine Learning & Deep Learning", href: "/services/machine-learning-deep-learning", icon: Layers, color: "#fb2c36", color1: "#570707" },
    ]
  },

  {
    label: "Marketing", href: "#markating", title: "Marketing Services", subtitle: "Marketing Solutions", icon: SquarePercent, megaMenu: [
      { title: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, color: "#D95204", color1: "#782E00" },
      { title: "Digital Marketing Strategy", href: "/services/digital-marketing-strategy", icon: Lightbulb, color: "#D95204", color1: "#782E00" },
      { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", icon: TrendingUp, color: "#D95204", color1: "#782E00" },
      { title: "Trusted Influencer Marketing Agency", href: "/services/trusted-influencer-marketing-agency", icon: Users, color: "#D95204", color1: "#782E00" },
      { title: "Search Engine Optimization", href: "/services/search-engine-optimization", icon: Search, color: "#D95204", color1: "#782E00" },
      { title: "Lead Generation", href: "/services/lead-generation", icon: UserPlus, color: "#D95204", color1: "#782E00" },
      { title: "Brand Management", href: "/services/brand-management", icon: ShieldCheck, color: "#D95204", color1: "#782E00" },
      { title: "Specialized eCommerce SEO Services", href: "/services/specialized-ecommerce-seo-services", icon: ShoppingCart, color: "#D95204", color1: "#782E00" },
      { title: "Google Ad Campaigns", href: "/services/google-ad-campaigns", icon: Megaphone, color: "#D95204", color1: "#782E00" },
      { title: "Content Marketing", href: "/services/content-marketing", icon: FileText, color: "#D95204", color1: "#782E00" },
      { title: "Paid Advertising", href: "/services/paid-advertising", icon: Target, color: "#D95204", color1: "#782E00" }
    ]
  },

  {
    label: "Development", href: "#development", title: "Development Services", subtitle: "Development Solutions", icon: CodeXml, megaMenu: [
      { title: "Mobile App Development", href: "/services/mobile-app-development", icon: TabletSmartphone, color: "#00bcff", color1: "#000000", },
      { title: "Ios App Development", href: "/services/ios-app-development", icon: TabletSmartphone, color: "#00bcff", color1: "#000000", },
      { title: "Android App Development", href: "/services/android-app-development", icon: TabletSmartphone, color: "#00bcff", color1: "#000000", },
      { title: "Web App Development", href: "/services/web-app-development", icon: MonitorSmartphone, color: "#00bcff", color1: "#000000", },
      { title: "Wordpress Development", href: "/services/wordpress-development", icon: PanelsTopLeft, color: "#00bcff", color1: "#000000", },
      { title: "Website Development", href: "/services/website-development", icon: MonitorSpeaker, color: "#00bcff", color1: "#000000", },
      { title: "React.js Development", href: "/services/react-js-development", icon: Globe, color: "#00bcff", color1: "#000000", },
      { title: "Next.js Development", href: "/services/next-js-development", icon: Triangle, color: "#00bcff", color1: "#000000", },
      { title: "Node.js Development", href: "/services/node-js-development", icon: Hexagon, color: "#00bcff", color1: "#000000", },
      { title: "Laravel Development", href: "/services/laravel-development", icon: Braces, color: "#00bcff", color1: "#000000", },
    ]
  },

  {
    label: "Services",
    href: "#services",
    title: "Our Services",
    subtitle: "Our Services",
    icon: LaptopMinimalCheck,
    megaMenu: [
      { title: "AI Engineering", href: "/services/ai-engineering", icon: Share2, color: "#a800b7", color1: "#000000" },
      { title: "Digital Marketing", href: "/services/digital-marketing", icon: Lightbulb, color: "#a800b7", color1: "#000000" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", icon: TrendingUp, color: "#a800b7", color1: "#000000" },
      { title: "Custom Web Development", href: "/services/custom-web-development", icon: Users, color: "#a800b7", color1: "#000000" },
      { title: "Software Development", href: "/services/software-development", icon: Search, color: "#a800b7", color1: "#000000" },
      { title: "Digital Transformation", href: "/services/digital-transformation", icon: UserPlus, color: "#a800b7", color1: "#000000" },
      { title: "E-commerce Development", href: "/services/ecommerce-development", icon: ShieldCheck, color: "#a800b7", color1: "#000000" },
      { title: "Blockchain Development", href: "/services/blockchain-development", icon: ShoppingCart, color: "#a800b7", color1: "#000000" },
      { title: "Data Science & Analytics", href: "/services/data-science-analytics", icon: Megaphone, color: "#a800b7", color1: "#000000" },
    ]
  },

  // on que
  // {
  //   label: "On-Demand", href: "#ondemand", icon: ShieldAlert,
  // },
  {
    label: "Industry", href: "/Industry", title: "Industry", subtitle: "Industry", icon: Factory, megaMenu: [
      { title: "FinTech", href: "/Industry/fintech", icon: Landmark, color: "#2d9cdb", color1: "#000000" },
      { title: "Healthcare", href: "/Industry/healthcare-software-development", icon: HeartPulse, color: "#ff4d6d", color1: "#fff0f3" },
      { title: "eCommerce", href: "/Industry/ecommerce", icon: ShoppingCart, color: "#f2994a", color1: "#fff4ec" },
      { title: "Education", href: "/Industry/education", icon: GraduationCap, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Logistics", href: "/Industry/logistics", icon: Truck, color: "#f2994a", color1: "#fff4ec" },
      { title: "Travel & Hospitality", href: "/Industry/travel-and-hospitality", icon: Plane, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Automotive", href: "/Industry/automotive", icon: Car, color: "#6fcf97", color1: "#edfbf2" },
      { title: "Agriculture", href: "/Industry/agriculture", icon: Wheat, color: "#6fcf97", color1: "#edfbf2" },
      { title: "Gaming", href: "/Industry/gaming", icon: Gamepad2, color: "#9b51e0", color1: "#f3ecfd" },
      { title: "Sports", href: "/Industry/sports", icon: Trophy, color: "#6fcf97", color1: "#edfbf2" },
      { title: "On-Demand", href: "/Industry/on-demand", icon: Clock, color: "#f2994a", color1: "#fff4ec" },
      { title: "Events", href: "/Industry/events", icon: CalendarDays, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Social Networking", href: "/Industry/social-networking", icon: Users, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Fitness & Wellness", href: "/Industry/fitness-and-wellness", icon: Dumbbell, color: "#ff4d6d", color1: "#fff0f3" },
      { title: "Entertainment", href: "/Industry/entertainment", icon: Clapperboard, color: "#9b51e0", color1: "#f3ecfd" },
      { title: "Restaurant & Food", href: "/Industry/restaurant-and-food", icon: UtensilsCrossed, color: "#f2994a", color1: "#fff4ec" },
      { title: "SaaS", href: "/Industry/saas", icon: LayoutDashboard, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Politics & Governance", href: "/Industry/politics-and-governance", icon: CheckSquare, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "Real Estate", href: "/Industry/real-estate", icon: Home, color: "#f2994a", color1: "#fff4ec" },
      { title: "Electric Vehicle", href: "/Industry/electric-vehicle", icon: Zap, color: "#6fcf97", color1: "#edfbf2" },
      { title: "News & Media", href: "/Industry/news-and-media", icon: Newspaper, color: "#ff4d6d", color1: "#fff0f3" },
      { title: "Aviation", href: "/Industry/aviation", icon: PlaneTakeoff, color: "#2d9cdb", color1: "#e8f4fd" },
      { title: "OTT", href: "/Industry/ott", icon: Radio, color: "#9b51e0", color1: "#f3ecfd" },
    ]
  },

  {
    label: "Company", href: "#footer", title: "Our Company", subtitle: "Our Company Details", icon: Building2, megaMenu: [
      {
        title: "About Us",
        description: "Our story & mission",
        href: "/about-us",
        icon: Building2,
        color: "#00a63e",
        color1: "#000000"
      },

      {
        title: "Contact Us",
        description: "Our story & mission",
        href: "/contact-us",
        icon: UserRoundSearch,
        color: "#ff00eb",
        color1: "#000000"
      },


      {
        title: "How We Work",
        description: "Our development process",
        href: "/how-we-work",
        icon: Rocket,
        color: "#0083f3",
        color1: "#edfbf2",
      },
      {
        title: "Portfolio & Testimonials",
        description: "Our work & client reviews",
        href: "/portfolio",
        icon: Layers,
        color: "#9b51e0",
        color1: "#f3ecfd",
      },
      {
        title: "Our Team",
        description: "Join our team",
        href: "/our-team",
        icon: Users,
        color: "#f2994a",
        color1: "#fff4ec",
      },
    ]
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<any>({});
  const [openMobileMegaMenu, setOpenMobileMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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

    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white shadow-sm shadow-gray-300" : "lg:bg-black/80 bg-white"}`}
    >
      <div className={`${globalStyle?.container} max-w-full!`}>
        <div className="flex items-center justify-between h-16 w-[94%] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={scrolled ? logo : logoWhite} alt="logo" width={1920} height={1080} className="w-50 h-auto lg:flex hidden" />
            <Image src={logo} alt="logo" width={1920} height={1080} className="w-50 h-auto lg:hidden flex" />
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

            <AnimatePresence>
              {openMegaMenu?.data?.length > 0 ?
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseLeave={() => setOpenMegaMenu({})}
                  className={`absolute top-11 bg-white rounded-3xl overflow-hidden flex w-[150%] -right-32 shadow-md shadow-gray-300`}
                >
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
                    <hr className="w-full border-gray-200 mt-5!" />
                    <div className={`text-black grid ${openMegaMenu?.title === "Industry" ? "grid-cols-4" : openMegaMenu?.title === "Our Company" ? "grid-cols-1" : "grid-cols-2"} p-5! gap-x-2`}>
                      {openMegaMenu?.data?.length > 0 ? openMegaMenu?.data?.map((v: any, idx: number) => {
                        const Icon = v?.icon;
                        return (
                          <div key={idx}>
                            <Link onClick={() => setOpenMegaMenu({})} href={v?.href} className={`flex p-3 items-center gap-2 font-normal group text-sm rounded-xl border border-solid border-transparent hover:border-gray-200`}>
                              {v?.icon !== "" ?
                                <div className={`p-3 rounded-xl`} style={{ background: v?.subMenue?.length ? `${v?.color}40` : `${v?.color}20`, }}>
                                  <Icon className={`w-6 duration-300 h-auto mt-0.5!`} style={{ color: v?.color }} />
                                </div>
                                : ""}
                              <span className="font-semibold text-base text-gray-600">{v?.title}</span>
                            </Link>

                            {/* {v?.subMenue?.length > 0 ? v?.subMenue?.map((val: any, indx: number) => {
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
                          }) : ""} */}
                          </div>
                        )
                      }) : ""}
                    </div>
                  </div>
                  <div className="w-[28%] h-[-webkit-fill-available] z-10 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(0deg, ${openMegaMenu?.data[0]?.color} 0%, ${openMegaMenu?.data[0]?.color1} 100%)`
                    }} >
                    <div className="flex items-center justify-center p-6">
                      <div
                        className="relative flex flex-col gap-5"
                      >
                        {/* Subtle glow blob */}


                        {/* Header */}
                        <div className="flex items-center gap-3 relative z-10">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: "linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(99,51,220,0.2) 100%)",
                              border: "1px solid rgba(139,92,246,0.3)",
                            }}
                          >
                            <Brain size={20} className="text-violet-300" />
                          </div>
                          <div>
                            <h2 className="text-white font-bold text-base leading-tight tracking-wide">
                              AI Excellence
                            </h2>
                            <p className="text-violet-300/70 text-xs font-medium tracking-wider uppercase">
                              Cutting-Edge Technology
                            </p>
                          </div>
                        </div>

                        {/* Service Items */}
                        <div className="flex flex-col gap-3 relative z-10">
                          {services.map(({ abbr, abbrColor, label }) => (
                            <div
                              key={abbr}
                              className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 cursor-pointer group"
                              style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.07)",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background =
                                  "rgba(255,255,255,0.09)";
                                (e.currentTarget as HTMLDivElement).style.border =
                                  "1px solid rgba(255,255,255,0.13)";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.background =
                                  "rgba(255,255,255,0.05)";
                                (e.currentTarget as HTMLDivElement).style.border =
                                  "1px solid rgba(255,255,255,0.07)";
                              }}
                            >
                              <span
                                className={`font-extrabold text-xl w-12 shrink-0 tracking-tight ${abbrColor}`}
                              >
                                {abbr}
                              </span>
                              <span className="text-white/80 text-sm font-medium">{label}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          className="relative z-10 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm text-white transition-all duration-200 active:scale-95"
                          style={{
                            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                            boxShadow: "0 8px 24px rgba(168, 85, 247, 0.4)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow =
                              "0 12px 32px rgba(168, 85, 247, 0.6)";
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow =
                              "0 8px 24px rgba(168, 85, 247, 0.4)";
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                          }}
                        >
                          <Sparkles size={15} className="shrink-0" />
                          Explore AI Services
                          <ArrowRight size={15} className="shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                : ""}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <button
            onClick={() => setFormOpen(true)}
            className={`hidden lg:block bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] text-white hover:scale-105 duration-300 cursor-pointer px-4! py-2! rounded-full text-sm font-medium`}
          >
            Get A Free Consultation
          </button>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 ${scrolled ? "text-black" : "lg:text-white text-black"}`}
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
        <div className="lg:hidden bg-[#ffffff] border-t border-white/10 px-4 py-5 flex flex-col gap-4 max-h-[85vh] overflow-y-auto w-[94%] mx-auto">
          {navLinks.map((item: any) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col gap-2">
                <div
                  className="flex justify-between items-center text-black cursor-pointer"
                  onClick={() => {
                    if (item.megaMenu) {
                      setOpenMobileMegaMenu(openMobileMegaMenu === item.label ? null : item.label);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 hover:text-black text-sm py-1 flex-1">
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </div>
                  {item.megaMenu && (
                    <div className="p-2 -mr-2">
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMobileMegaMenu === item.label ? 'rotate-180' : ''}`} />
                    </div>
                  )}
                </div>

                {item.megaMenu && openMobileMegaMenu === item.label && (
                  <div className="flex flex-col gap-3 pl-6 mt-2 border-l border-white/10 ml-2">
                    {item.megaMenu.map((subItem: any, idx: number) => {
                      const SubIcon = subItem.icon;
                      return (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="text-black hover:text-black text-sm py-1 flex items-center gap-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          {SubIcon && <SubIcon className="w-3.5 h-3.5" style={{ color: subItem.color }} />}
                          {subItem.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => { setMenuOpen(false); setFormOpen(true); }}
              className="gradient-btn text-white px-5 py-3 rounded-full text-sm font-semibold w-full">
              Get Quote
            </button>
          </div>
        </div>
      )}

      <DiscussProjectForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </motion.div>
  );
}
