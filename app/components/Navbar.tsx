"use client";

import { ChevronDown, CodeXml, Sparkles, SquarePercent } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png"
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Hello AI", href: "#helloai", icon: "helloai" },
  { label: "Marketing", href: "#markating", icon: "markating" },
  { label: "Development", href: "#development", icon: "development" },
  { label: "Services", href: "#services", icon: "services" },
  { label: "On-Demand", href: "#ondemand", icon: "ondemand" },
  { label: "Industry", href: "#industry", icon: "industry" },
  { label: "Company", href: "#footer", icon: "footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState("")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-white" : "bg-black/40"}`}>
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={1920} height={1080} className="w-50 h-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="relative hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className={`${scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-red-300"} cursor-pointer font-medium text-sm transition-colors duration-200 group`}
                onMouseEnter={() => setOpenMegaMenu(item.icon)}
                onClick={() => setOpenMegaMenu("")}
              >
                <div className="relative flex gap-1 z-11">
                  {item.icon === "helloai" ? <Sparkles className="w-4.5 h-auto text-red-500" /> : item.icon === "markating" ? <SquarePercent className="w-4 h-auto text-amber-400" /> : item.icon === "development" ? <CodeXml className="w-4 h-auto text-sky-400" /> : ""}
                  {item.label}
                  <ChevronDown className="w-4.5 h-auto group-hover:rotate-180 duration-300" />
                </div>
                {/* <div className="w-full h-12 absolute top-0 bg-black z-10" /> */}
              </div>
            ))}

            {openMegaMenu !== "" ? <div className="absolute top-11 bg-white w-full rounded-3xl p-5!">
              <p className="text-black" onMouseLeave={() => setOpenMegaMenu("")}>
                {openMegaMenu}
              </p>
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
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-white text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
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
