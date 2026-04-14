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
  UserRoundSearch,
  Phone,
  Smartphone
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import logo from "../../public/images/logo.png"
import logoWhite from "../../public/images/logoWhite.png"
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { globalStyle } from "../globalStyle";
import DiscussProjectForm from "./DiscussProjectForm";




const navLinks = [
  {
    label: "Hello AI", href: "#helloai", title: "AI Development Services", subtitle: "Next-Gen AI & ML Solutions", icon: Sparkles, color: "#A855F7",
    sidePanel: {
      headerTitle: "AI Excellence",
      headerSubtitle: "Cutting-Edge Technology",
      headerIcon: Brain,
      gradient: "linear-gradient(180deg,rgba(255, 181, 181, 1) 0%, rgba(255, 209, 209, 1) 50%, rgba(255, 255, 255, 1) 100%)",
      items: [
        { abbr: "GPT", label: "OpenAI Integration", abbrColor: "text-violet-500" },
        { abbr: "LLM", label: "Custom Models", abbrColor: "text-pink-500" },
        { abbr: "ML", label: "Deep Learning", abbrColor: "text-cyan-500" },
      ],
      ctaText: "Explore AI Services",
    },
    megaMenu: [
      { title: "AI Development", href: "/services/ai-development", icon: Sparkles, color: "#8B5CF6", color1: "#4C1D95" },
      { title: "AI Chatbot Development", href: "/services/ai-chatbot-development", icon: MessageSquare, color: "#EC4899", color1: "#831843" },
      { title: "Generative AI Development", href: "/services/generative-ai-development", icon: Brain, color: "#06B6D4", color1: "#164E63" },
      { title: "AI Agent Development", href: "/services/ai-agent-development", icon: Bot, color: "#10B981", color1: "#064E3B" },
      { title: "AI Integration", href: "/services/ai-integration", icon: Plug, color: "#F59E0B", color1: "#78350F" },
      { title: "ML Development", href: "/services/ml-development", icon: ChartColumn, color: "#6366F1", color1: "#312E81" },
      { title: "AI Product Development", href: "/services/ai-product-development", icon: Cpu, color: "#EF4444", color1: "#7F1D1D" },
      { title: "Machine Learning & Deep Learning", href: "/services/machine-learning-deep-learning", icon: Layers, color: "#3B82F6", color1: "#1E3A8A" },
    ]
  },

  {
    label: "Marketing", href: "#markating", title: "Marketing Services", subtitle: "Marketing Solutions", icon: SquarePercent, color: "#F97316",
    sidePanel: {
      headerTitle: "Marketing Mastery",
      headerSubtitle: "Scale Your Growth",
      headerIcon: Target,
      gradient: "linear-gradient(180deg, #FFEFD5 0%, #FFE4B5 50%, #FFFFFF 100%)",
      items: [
        { abbr: "SEO", label: "Search Optimization", abbrColor: "text-orange-500" },
        { abbr: "ADS", label: "Paid Campaigns", abbrColor: "text-red-500" },
        { abbr: "SMM", label: "Social Growth", abbrColor: "text-pink-500" }
      ],
      ctaText: "Explore Marketing",
    },
    megaMenu: [
      { title: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, color: "#E11D48", color1: "#881337" },
      { title: "Digital Marketing Strategy", href: "/services/digital-marketing-strategy", icon: Lightbulb, color: "#F59E0B", color1: "#78350F" },
      { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", icon: TrendingUp, color: "#10B981", color1: "#064E3B" },
      { title: "Trusted Influencer Marketing Agency", href: "/services/trusted-influencer-marketing-agency", icon: Users, color: "#D946EF", color1: "#701A75" },
      { title: "Search Engine Optimization", href: "/services/search-engine-optimization", icon: Search, color: "#3B82F6", color1: "#1E3A8A" },
      { title: "Lead Generation", href: "/services/lead-generation", icon: UserPlus, color: "#06B6D4", color1: "#164E63" },
      { title: "Brand Management", href: "/services/brand-management", icon: ShieldCheck, color: "#6366F1", color1: "#312E81" },
      { title: "Specialized eCommerce SEO Services", href: "/services/specialized-ecommerce-seo-services", icon: ShoppingCart, color: "#F97316", color1: "#7C2D12" },
      { title: "Google Ad Campaigns", href: "/services/google-ad-campaigns", icon: Megaphone, color: "#EF4444", color1: "#7F1D1D" },
      { title: "Content Marketing", href: "/services/content-marketing", icon: FileText, color: "#14B8A6", color1: "#0F766E" },
      { title: "Paid Advertising", href: "/services/paid-advertising", icon: Target, color: "#8B5CF6", color1: "#4C1D95" }
    ]
  },

  {
    label: "Development", href: "#development", title: "Development Services", subtitle: "Development Solutions", icon: CodeXml, color: "#0EA5E9",
    sidePanel: {
      headerTitle: "Dev Excellence",
      headerSubtitle: "High-Performance Apps",
      headerIcon: CodeXml,
      gradient: "linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 50%, #FFFFFF 100%)",
      items: [
        { abbr: "IOS", label: "Native Apple Apps", abbrColor: "text-blue-500" },
        { abbr: "WEB", label: "Modern Web Apps", abbrColor: "text-indigo-500" },
        { abbr: "CMS", label: "Manage Content", abbrColor: "text-sky-500" }
      ],
      ctaText: "Explore Development",
    },
    megaMenu: [
      { title: "Mobile App Development", href: "/services/mobile-app-development", icon: TabletSmartphone, color: "#3B82F6", color1: "#1E3A8A", },
      { title: "Ios App Development", href: "/services/ios-app-development", icon: TabletSmartphone, color: "#0EA5E9", color1: "#075985", },
      { title: "Android App Development", href: "/services/android-app-development", icon: TabletSmartphone, color: "#22D3EE", color1: "#164E63", },
      { title: "Web App Development", href: "/services/web-app-development", icon: MonitorSmartphone, color: "#6366F1", color1: "#312E81", },
      { title: "React Native Development", href: "/services/react-native-development", icon: Smartphone, color: "#6366F1", color1: "#312E81", },
      { title: "Wordpress Development", href: "/services/wordpress-development", icon: PanelsTopLeft, color: "#4F46E5", color1: "#3730A3", },
      { title: "Website Development", href: "/services/website-development", icon: MonitorSpeaker, color: "#06B6D4", color1: "#164E63", },
      { title: "React.js Development", href: "/services/react-js-development", icon: Globe, color: "#61DAFB", color1: "#20232A", },
      { title: "Next.js Development", href: "/services/next-js-development", icon: Triangle, color: "#000000", color1: "#404040", },
      { title: "Node.js Development", href: "/services/node-js-development", icon: Hexagon, color: "#339933", color1: "#1A4D1A", },
      { title: "Laravel Development", href: "/services/laravel-development", icon: Braces, color: "#FF2D20", color1: "#801610", },
      { title: "SaaS Development", href: "/services/saas-development", icon: Layers, color: "#FF2D20", color1: "#801610", },
      { title: "Shopify Development", href: "/services/shopify-development", icon: ShoppingCart, color: "#FF2D20", color1: "#801610", },
      { title: "Website Design", href: "/services/website-design", icon: MonitorSpeaker, color: "#FF2D20", color1: "#801610", },
    ]
  },

  {
    label: "Services",
    href: "#services",
    title: "Our Services",
    subtitle: "Our Services",
    icon: LaptopMinimalCheck,
    color: "#EC4899",
    sidePanel: {
      headerTitle: "Our Expertise",
      headerSubtitle: "Tailored Solutions",
      headerIcon: LaptopMinimalCheck,
      gradient: "linear-gradient(180deg, #F3E8FF 0%, #E9D5FF 50%, #FFFFFF 100%)",
      items: [
        { abbr: "UX", label: "Modern Design", abbrColor: "text-purple-500" },
        { abbr: "QA", label: "Quality Testing", abbrColor: "text-fuchsia-500" },
        { abbr: "DEV", label: "Agile Development", abbrColor: "text-violet-500" }
      ],
      ctaText: "View All Services",
    },
    megaMenu: [
      { title: "AI Engineering", href: "/services/ai-engineering", icon: Share2, color: "#8B5CF6", color1: "#4C1D95" },
      { title: "Digital Marketing", href: "/services/digital-marketing", icon: Lightbulb, color: "#F59E0B", color1: "#78350F" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", icon: TabletSmartphone, color: "#3B82F6", color1: "#1E3A8A" },
      { title: "Custom Web Development", href: "/services/custom-web-development", icon: CodeXml, color: "#10B981", color1: "#064E3B" },
      { title: "Software Development", href: "/services/software-development", icon: Layers, color: "#6366F1", color1: "#312E81" },
      { title: "Digital Transformation", href: "/services/digital-transformation", icon: Sparkles, color: "#EC4899", color1: "#831843" },
      { title: "E-commerce Development", href: "/services/ecommerce-development", icon: ShoppingCart, color: "#F97316", color1: "#7C2D12" },
      { title: "Blockchain Development", href: "/services/blockchain-development", icon: ShieldCheck, color: "#3B82F6", color1: "#1E3A8A" },
      { title: "Data Science & Analytics", href: "/services/data-science-analytics", icon: Megaphone, color: "#06B6D4", color1: "#164E63" },
    ]
  },

  {
    label: "Industry", href: "/Industry", title: "Industry", subtitle: "Industry", icon: Factory, color: "#10B981",
    sidePanel: {
      headerTitle: "Vertical Mastery",
      headerSubtitle: "Industry-Specific Tech",
      headerIcon: Factory,
      gradient: "linear-gradient(180deg, #DCFCE7 0%, #BBF7D0 50%, #FFFFFF 100%)",
      items: [
        { abbr: "FIN", label: "Financial Tech", abbrColor: "text-green-500" },
        { abbr: "HLT", label: "Health Systems", abbrColor: "text-emerald-500" },
        { abbr: "RET", label: "Retail Solutions", abbrColor: "text-teal-500" }
      ],
      ctaText: "View Industries",
    },
    megaMenu: [
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
    label: "Company", href: "#footer", title: "Our Company", subtitle: "Our Company Details", icon: Building2, color: "#6366F1",
    sidePanel: {
      headerTitle: "Global Impact",
      headerSubtitle: "Empowering Businesses",
      headerIcon: Building2,
      gradient: "linear-gradient(180deg, #EEF2FF 0%, #E0E7FF 50%, #FFFFFF 100%)",
      items: [
        { abbr: "WTM", label: "Who We Are", abbrColor: "text-indigo-500" },
        { abbr: "JOB", label: "Join the Team", abbrColor: "text-blue-500" },
        { abbr: "PRT", label: "Our Portfolio", abbrColor: "text-violet-500" }
      ],
      ctaText: "Work With Us",
    },
    megaMenu: [
      {
        title: "About Us",
        description: "Our story & mission",
        href: "/about-us",
        icon: Building2,
        color: "#00a63e",
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
      {
        title: "Contact Us",
        description: "Our story & mission",
        href: "/contact-us",
        icon: UserRoundSearch,
        color: "#ff00eb",
        color1: "#000000"
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
  const megaMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setOpenMegaMenu({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let Ticon = openMegaMenu?.icon;

  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white" : "bg-black/40"}`}>

    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 duration-300 bg-white shadow-sm shadow-gray-300`}
    >
      <div className={`${globalStyle?.container} max-w-full!`}>
        <div className="flex items-center justify-between h-16 w-[94%] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={1920} height={1080} className="w-50 h-auto lg:flex hidden" />
            <Image src={logo} alt="logo" width={1920} height={1080} className="w-50 h-auto lg:hidden flex" />
          </Link>

          {/* Desktop Nav */}
          <div ref={megaMenuRef} className="relative hidden lg:flex items-center gap-6">
            {navLinks.map((item: any, index: number) => {
              let Icon = item.icon
              return (
                <div
                  key={index}
                  className={`text-black hover:text-gray-600 cursor-pointer font-medium text-sm transition-colors duration-200 group`}
                  onMouseEnter={() => setOpenMegaMenu({ title: item?.title, subtitle: item?.subtitle, icon: item?.icon, data: item?.megaMenu, sidePanel: item?.sidePanel })}

                  onClick={() => setOpenMegaMenu({})}
                >
                  <div className="relative flex gap-1 z-11 font-medium text-sm">
                    <Icon className={`w-5 h-auto transition-transform group-hover:scale-110 duration-200`} style={{ color: item.color }} />
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
                  <div className={`w-[72%] max-h-[80vh] overflow-y-auto`}>
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
                  <div className="w-[28%] h-[-webkit-fill-available] z-10 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openMegaMenu?.sidePanel?.gradient || `linear-gradient(180deg,rgba(255, 181, 181, 1) 0%, rgba(255, 209, 209, 1) 50%, rgba(255, 255, 255, 1) 100%)`
                    }} >
                    <div className="flex items-center justify-center p-6">
                      <div
                        className="relative flex flex-col gap-5"
                      >
                        {/* Header */}
                        <div className="flex items-center gap-3 relative z-10">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: "linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(99,51,220,0.2) 100%)",
                              border: "1px solid rgba(139,92,246,0.3)",
                            }}
                          >
                            {(() => {
                              const SideIcon = openMegaMenu?.sidePanel?.headerIcon || Brain;
                              return <SideIcon size={20} className="text-white" />;
                            })()}
                          </div>
                          <div>
                            <h2 className="bg-clip-text text-transparent bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] font-bold text-base leading-tight tracking-wide">
                              {openMegaMenu?.sidePanel?.headerTitle || "AI Excellence"}
                            </h2>
                            <p className="text-violet-400 text-xs font-medium tracking-wider uppercase">
                              {openMegaMenu?.sidePanel?.headerSubtitle || "Cutting-Edge Technology"}
                            </p>
                          </div>
                        </div>

                        {/* Service Items */}
                        <div className="flex flex-col gap-3 relative z-10">
                          {(openMegaMenu?.sidePanel?.items || []).map(({ abbr, abbrColor, label }: any) => (
                            <div
                              key={abbr}
                              className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 cursor-pointer group bg-white/60 hover:bg-white/80"
                            >
                              <span
                                className={`font-extrabold text-xl w-12 shrink-0 tracking-tight ${abbrColor}`}
                              >
                                {abbr}
                              </span>
                              <span className="text-gray-600 text-sm font-medium">{label}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          className="relative bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] z-10 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm text-white transition-all duration-200 active:scale-95 shadow-lg"
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                          }}
                        >
                          <Sparkles size={15} className="shrink-0" />
                          {openMegaMenu?.sidePanel?.ctaText || "Explore AI Services"}
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
                  <div className="flex items-center gap-2 hover:text-black text-sm py-1 flex-1 font-medium">
                    {Icon && <Icon className="w-4.5 h-4.5" style={{ color: item.color }} />}
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
