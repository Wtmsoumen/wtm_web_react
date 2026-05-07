"use client";

import Image from "next/image";

const RADIUS = 255;
const DURATION = 22;

const services = [
  {
    angle: -90,
    title: "SaaS Platforms",
    desc: "Donec vitae elementum vel",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      </svg>
    ),
  },
  {
    angle: -18,
    title: "360° Digital Marketing",
    desc: "Donec vitae elementum vel",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    angle: 54,
    title: "Performance Marketing",
    desc: "Donec vitae elementum vel",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="3 7 12 2 21 7" />
      </svg>
    ),
  },
  {
    angle: 126,
    title: "Custom Software",
    desc: "Donec vitae elementum vel",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    angle: 198,
    title: "Full Stack Development",
    desc: "Donec vitae elementum vel",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const orbs = [
  { x: 18, y: 12, size: 18, delay: 0,   dur: 3.2 },
  { x: 72, y: 8,  size: 14, delay: 0.8, dur: 4.0 },
  { x: 84, y: 32, size: 20, delay: 1.5, dur: 3.6 },
  { x: 8,  y: 42, size: 16, delay: 0.4, dur: 4.4 },
  { x: 14, y: 72, size: 12, delay: 1.2, dur: 3.0 },
  { x: 88, y: 68, size: 18, delay: 0.6, dur: 3.8 },
  { x: 78, y: 88, size: 14, delay: 1.8, dur: 4.2 },
  { x: 30, y: 90, size: 10, delay: 0.2, dur: 3.4 },
];

// Card is ~60px tall. At the top of orbit, card center is at (centerY - RADIUS).
// So the card top edge is at (centerY - RADIUS - 30).
// We need that to be > 0 inside the orbit square.
// centerY = half of orbit square = 290. Top edge = 290 - 255 - 30 = 5px — too tight.
// Fix: add padding inside the orbit square via a larger square, or use an outer wrapper.
// We use an outer wrapper with paddingTop for navbar clearance, and add extra top space
// inside the orbit square by making it taller with paddingTop to shift the center down.

// Orbit square size
const SQUARE = 580;
// Extra top space inside the square so the top card clears the top edge with room to spare
const TOP_PAD = 60;
// Total container height
const TOTAL_H = SQUARE + TOP_PAD;
// Center Y inside TOTAL_H container
const CENTER_Y = TOP_PAD + SQUARE / 2; // 60 + 290 = 350
// Center X
const CENTER_X = SQUARE / 2; // 290

export default function HeroOrbit() {
  return (
    /*
      Outer wrapper: provides navbar clearance.
      Cards at top of orbit will go (CENTER_Y - RADIUS - 30) = 350 - 255 - 30 = 65px
      from the top of this inner container, which is safely inside.
    */
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: SQUARE,
        height: TOTAL_H,
        margin: "0 auto",
        // overflow hidden would clip cards - keep visible
      }}
    >
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: translateX(${RADIUS}px) translateY(-50%) rotate(0deg); }
          to   { transform: translateX(${RADIUS}px) translateY(-50%) rotate(-360deg); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .orbit-wrapper {
          position: absolute;
          /* Center is at CENTER_X, CENTER_Y inside the container */
          top: ${CENTER_Y}px;
          left: ${CENTER_X}px;
          width: 0;
          height: 0;
          animation: orbit ${DURATION}s linear infinite;
        }
        .orbit-card {
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(${RADIUS}px) translateY(-50%);
          animation: counter-orbit ${DURATION}s linear infinite;
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border-radius: 14px;
          padding: 10px 14px 10px 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
          white-space: nowrap;
          min-width: 190px;
          border: 1px solid rgba(255,255,255,0.9);
          cursor: default;
          transition: box-shadow 0.2s;
        }
        .orbit-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
        }
        .orbit-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f97316, #ef4444);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(239,68,68,0.4);
        }
        .orbit-text-title {
          font-size: 12px;
          font-weight: 800;
          color: #111;
          line-height: 1.2;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .orbit-text-desc {
          font-size: 10px;
          color: #999;
          margin-top: 2px;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
      `}</style>

      {/* ── Floating orbs (positioned within the 580×580 orbit square area) ── */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            // orbs positioned relative to the orbit square area (offset by TOP_PAD)
            left: `${orb.x}%`,
            top: `calc(${TOP_PAD}px + ${orb.y}% * ${SQUARE / TOTAL_H})`,
            width: orb.size,
            height: orb.size,
            borderRadius: i % 3 === 0 ? "4px" : "50%",
            background: i % 3 === 0
              ? "linear-gradient(135deg,#7c3aed,#a855f7)"
              : "radial-gradient(circle at 35% 35%, #c084fc, #7c3aed)",
            boxShadow: "0 2px 12px rgba(124,58,237,0.5)",
            animation: `float-orb ${orb.dur}s ease-in-out ${orb.delay}s infinite`,
            opacity: 0.85,
            transform: i % 3 === 0 ? "rotate(20deg)" : "none",
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Dashed orbit ring — centered at CENTER_X, CENTER_Y ── */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
        viewBox={`0 0 ${SQUARE} ${TOTAL_H}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={RADIUS}
          stroke="#e91e8c"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          opacity="0.25"
        />
      </svg>

      {/* ── Center image — pinned to CENTER_X, CENTER_Y ── */}
      <div
        style={{
          position: "absolute",
          top: CENTER_Y,
          left: CENTER_X,
          transform: "translate(-50%, -50%)",
          width: "70%",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/hero_laptop.png"
          alt="WebTechnoMind Platform"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </div>

      {/* ── Orbiting cards — pivot from CENTER_X, CENTER_Y ── */}
      {services.map((s) => {
        const delay = -((s.angle / 360) * DURATION);
        return (
          <div
            key={s.title}
            className="orbit-wrapper"
            style={{ animationDelay: `${delay}s` }}
          >
            <div
              className="orbit-card"
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="orbit-icon">{s.icon}</div>
              <div>
                <div className="orbit-text-title">{s.title}</div>
                <div className="orbit-text-desc">{s.desc}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}