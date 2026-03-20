"use client";

import Particles from "@tsparticles/react";

export default function BackgroundParticles() {
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        particles: {
          number: { value: 60 },
          color: { value: "#6b9cff" },
          links: {
            enable: true,
            color: "#6b9cff",
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}