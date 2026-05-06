"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const offices = [
  { name: "United Kingdom", label: "UK", coordinates: [-1.5, 53.0] },
  { name: "Ireland", label: "Ireland", coordinates: [-8.2, 53.4] },
  { name: "Poland", label: "Poland", coordinates: [19.1, 52.2] },
  { name: "Dubai", label: "UAE", coordinates: [55.3, 25.2] },
  { name: "Delhi", label: "India", coordinates: [77.1, 28.6] },
  { name: "Kolkata", label: "India", coordinates: [88.3, 22.5] },
  { name: "Australia", label: "Australia", coordinates: [134.0, -25.5] },
];

export default function CustomMapColor() {
  const [tooltip, setTooltip] = useState<{ name: string; label: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <div className="relative w-full" style={{ background: "transparent" }}>
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes pinDrop {
          0% { transform: translateY(-12px); opacity: 0; }
          60% { transform: translateY(2px); opacity: 1; }
          80% { transform: translateY(-2px); }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .marker-pulse {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .marker-pin {
          animation: pinDrop 0.5s ease forwards;
          transform-origin: bottom center;
        }
        .marker-group:hover .marker-pin path {
          filter: brightness(1.3);
        }
      `}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 140, center: [20, 15] }}
        width={800}
        height={420}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#0079d0" />
            <stop offset="32%"  stopColor="#9e52d8" />
            <stop offset="84%"  stopColor="#da365c" />
            <stop offset="100%" stopColor="#d04901" />
          </linearGradient>
          <linearGradient id="mapGradHover" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2090e0" />
            <stop offset="32%"  stopColor="#b468e8" />
            <stop offset="84%"  stopColor="#ea4870" />
            <stop offset="100%" stopColor="#e05a10" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ZoomableGroup zoom={1} center={[20, 15]} minZoom={1} maxZoom={1}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#mapGrad)"
                  stroke="#fff"
                  strokeWidth={0.4}
                  strokeOpacity={0.3}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "url(#mapGradHover)", outline: "none", cursor: "default" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {offices.map((office, i) => (
            <Marker
              key={office.name}
              coordinates={office.coordinates as [number, number]}
              onMouseEnter={(e) => {
                setTooltip({ name: office.name, label: office.label });
                setTooltipPos({ x: (e as any).clientX, y: (e as any).clientY });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              <g className="marker-group" style={{ cursor: "pointer" }}>
                {/* Pulse ring */}
                <circle
                  className="marker-pulse"
                  r={5}
                  fill="rgba(220, 50, 80, 0.35)"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />

                {/* Pin shape */}
                <g
                  className="marker-pin"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  filter="url(#glow)"
                >
                  {/* Pin body */}
                  <path
                    d="M0,-14 C-5,-14 -8,-10 -8,-6 C-8,0 0,8 0,8 C0,8 8,0 8,-6 C8,-10 5,-14 0,-14 Z"
                    fill="#DC3250"
                    stroke="#fff"
                    strokeWidth={1.2}
                  />
                  {/* Pin inner dot */}
                  <circle r={2.8} cy={-6} fill="#fff" opacity={0.9} />

                  {/* Label box */}
                  <g transform="translate(10, -14)">
                    <rect
                      x={0}
                      y={0}
                      width={office.name.length * 5.8 + 10}
                      height={18}
                      rx={4}
                      fill="white"
                      opacity={0.95}
                      filter="drop-shadow(0 1px 3px rgba(0,0,0,0.25))"
                    />
                    <text
                      x={5}
                      y={7}
                      fontSize={6}
                      fontWeight="700"
                      fill="#1a1a2e"
                      fontFamily="sans-serif"
                      dominantBaseline="middle"
                    >
                      {office.name.toUpperCase()}
                    </text>
                    <text
                      x={5}
                      y={14}
                      fontSize={5}
                      fill="#888"
                      fontFamily="sans-serif"
                      dominantBaseline="middle"
                    >
                      {office.label}
                    </text>
                  </g>
                </g>
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-lg text-sm font-semibold text-white shadow-lg"
          style={{
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 36,
            background: "linear-gradient(135deg, #DC3250, #D04425)",
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}



// ----------Image MAp--------
// import Image from "next/image";

// export default function CustomMapColor() {
//   return (
//     <div className="relative w-full">
//       <Image
//         src="/images/map_color.png"
//         alt="WebTechnoMind Global Offices Map"
//         width={1456}
//         height={816}
//         className="w-full h-auto"
//         priority
//       />
//     </div>
//   );
// }


// --------chat gpt map code-----------

// 'use client';

// import { motion } from 'framer-motion';
// import clsx from 'clsx';

// type Location = {
//   name: string;
//   country: string;
//   x: number;
//   y: number;
// };

// const locations: Location[] = [
//   { name: 'United Kingdom', country: 'UK', x: 48, y: 20 },
//   { name: 'Ireland', country: 'Ireland', x: 45, y: 26 },
//   { name: 'Poland', country: 'Poland', x: 56, y: 26 },
//   { name: 'Dubai', country: 'UAE', x: 58, y: 55 },
//   { name: 'Delhi', country: 'India', x: 66, y: 42 },
//   { name: 'Kolkata', country: 'India', x: 72, y: 52 },
//   { name: 'Australia', country: 'Australia', x: 82, y: 78 },
// ];

// const Pin = ({ x, y, name, country }: Location) => {
//   return (
//     <motion.div
//       initial={{ scale: 0, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="absolute"
//       style={{ left: `${x}%`, top: `${y}%` }}
//     >
//       {/* Glow pulse */}
//       <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-500 opacity-75 animate-ping"></span>

//       {/* Dot */}
//       <div className="relative w-5 h-5 rounded-full bg-red-600 border-4 border-white shadow-xl" />

//       {/* Tooltip */}
//       <div className="mt-2 ml-2 backdrop-blur-md bg-white/70 px-3 py-1 rounded-xl shadow-lg text-xs">
//         <div className="font-semibold text-gray-900">{name}</div>
//         <div className="text-gray-600">{country}</div>
//       </div>
//     </motion.div>
//   );
// };

// export default function CustomMapColor() {
//   return (
//     <section className="relative w-full py-20 overflow-hidden">

//       {/* 🌈 Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200" />

//       {/* Glow overlays */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-400 opacity-30 blur-[120px] top-[-100px] left-[-100px]" />
//       <div className="absolute w-[500px] h-[500px] bg-orange-400 opacity-30 blur-[120px] bottom-[-100px] right-[-100px]" />

//       <div className="relative max-w-7xl mx-auto h-[600px]">

//         {/* 🌍 SVG Map */}
//         <motion.svg
//           viewBox="0 0 1000 500"
//           className="w-full h-full drop-shadow-2xl"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Simplified continents (replace with real SVG for exact design) */}

//           <defs>
//             <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%">
//               <stop offset="0%" stopColor="#6C5CE7" />
//               <stop offset="50%" stopColor="#E84393" />
//               <stop offset="100%" stopColor="#FD7E14" />
//             </linearGradient>
//           </defs>

//           {/* World blob (stylized) */}
//           <path
//             d="M50,250 Q200,50 500,150 T950,250 Q800,450 500,350 T50,250"
//             fill="url(#mapGradient)"
//             opacity="0.9"
//           />
//         </motion.svg>

//         {/* 📍 Pins */}
//         {locations.map((loc, i) => (
//           <Pin key={i} {...loc} />
//         ))}

//       </div>
//     </section>
//   );
// }