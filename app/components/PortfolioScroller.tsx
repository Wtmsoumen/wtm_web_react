"use client";

import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const portfolioItems = [
  {
    id: 1,
    title: "StickyBiz",
    category: "E-Commerce",
    image: "/images/portfolio/transform_chic_more.webp",
    color: "from-gray-100 to-gray-200",
  },
  {
    id: 2,
    title: "Cheap Business Class",
    category: "Travel",
    image: "/images/portfolio/transform_mart.webp",
    color: "from-teal-400 to-blue-500",
  },
  {
    id: 3,
    title: "Chicken and More",
    category: "Food & Restaurant",
    image: "/images/portfolio/transform_stickybiz.webp",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "StickyBiz Pro",
    category: "E-Commerce",
    image: "/images/portfolio/transform_chic_more.webp",
    color: "from-gray-100 to-gray-300",
  },
  {
    id: 5,
    title: "Wanderlust Tours",
    category: "Travel",
    image: "/images/portfolio/transform_mart.webp",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    id: 6,
    title: "Urban Bites",
    category: "Food & Restaurant",
    image: "/images/portfolio/transform_chic_more.webp",
    color: "from-amber-400 to-red-500",
  },
];

// Duplicate for infinite loop
const items = [...portfolioItems, ...portfolioItems];

export default function PortfolioScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const isPaused = useRef(false);
  const SPEED = 0.6;
  const CARD_WIDTH = 380;
  const GAP = 24;
  const TOTAL_WIDTH = portfolioItems.length * (CARD_WIDTH + GAP);

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!isPaused.current && !isDragging.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= TOTAL_WIDTH) {
          offsetRef.current -= TOTAL_WIDTH;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [TOTAL_WIDTH]); // Added dependency

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    let newOffset = dragStartOffset.current + delta;
    if (newOffset < 0) newOffset += TOTAL_WIDTH;
    if (newOffset >= TOTAL_WIDTH) newOffset -= TOTAL_WIDTH;
    offsetRef.current = newOffset;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.touches[0].clientX;
    let newOffset = dragStartOffset.current + delta;
    if (newOffset < 0) newOffset += TOTAL_WIDTH;
    if (newOffset >= TOTAL_WIDTH) newOffset -= TOTAL_WIDTH;
    offsetRef.current = newOffset;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <ScrollReveal>
      <section className="w-full overflow-hidden select-none">
        {/* Track */}
        <div
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          data-aos="zoom-in"
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ width: `${items.length * (CARD_WIDTH + GAP)}px` }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 relative group rounded-2xl overflow-hidden"
                style={{ width: CARD_WIDTH, height: 240 }}
                onMouseEnter={() => {
                  isPaused.current = true;
                  setHoveredId(item.id);
                }}
                onMouseLeave={() => {
                  isPaused.current = false;
                  setHoveredId(null);
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  draggable={false}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

                {/* Hover info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Our Portfolio pill button */}
        <div className="flex justify-center mt-12" data-aos="fade-up">
          <button className="px-8 py-3 rounded-full text-white font-semibold text-sm tracking-wide
            bg-linear-to-r from-[#a855f7] to-[#ec4899]
            hover:from-[#9333ea] hover:to-[#db2777]
           
            hover:shadow-[0_0_48px_rgba(168,85,247,0.6)]
            transition-all duration-300 hover:scale-105 active:scale-95">
            Our Portfolio
          </button>
        </div>
      </section>
    </ScrollReveal>
  );
}