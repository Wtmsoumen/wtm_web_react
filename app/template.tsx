"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // We are registering GSAP plugins if needed here in the future
  // gsap.registerPlugin(ScrollTrigger);
  
  // Here we use GSAP just to ensure it's integrated correctly and can add some nuanced effects
  // For example, a slight stagger or secondary animation can be added here.
  useGSAP(() => {
    // Basic GSAP setup example that runs on every page change
    // This could be used for more complex timelines
  }, { dependencies: [pathname], scope: containerRef });

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}
