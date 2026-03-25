"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  yOffset?: number;
  duration?: number;
}

export default function ScrollReveal({ children, yOffset = 50, duration = 0.6 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
