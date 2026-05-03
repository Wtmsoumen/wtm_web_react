"use client"
import { useEffect, useRef } from "react";

// Brand color palette
const COLORS = [
  { r: 29,  g: 116, b: 207 }, // #1D74CF blue
  { r: 147, g: 51,  b: 234 }, // #9333ea purple
  { r: 219, g: 39,  b: 119 }, // #db2777 pink
  { r: 208, g: 68,  b: 37  }, // #D04425 orange-red
  { r: 99,  g: 102, b: 241 }, // indigo
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: { r: number; g: number; b: number };
  alpha: number;
  pulse: number;
  pulseSpeed: number;
  isHub: boolean;
}

interface DataPulse {
  fromIdx: number;
  toIdx: number;
  t: number;       // 0..1 progress
  speed: number;
  color: { r: number; g: number; b: number };
}

interface HexCell {
  cx: number; cy: number; size: number;
}

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    let particles: Particle[] = [];
    let pulses: DataPulse[] = [];
    let hexCells: HexCell[] = [];

    // ─── Resize ───────────────────────────────────────────────────
    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      buildHexGrid();
    };

    // ─── Hex grid (very subtle) ─────────────────────────────────
    const buildHexGrid = () => {
      hexCells = [];
      const size = 52;
      const colW  = size * 1.732;
      const rowH  = size * 1.5;
      for (let row = -1; row * rowH < H + rowH; row++) {
        for (let col = -1; col * colW < W + colW; col++) {
          const cx = col * colW + (row % 2 === 0 ? 0 : colW / 2);
          const cy = row * rowH;
          hexCells.push({ cx, cy, size });
        }
      }
    };

    // ─── Particles ───────────────────────────────────────────────
    const init = () => {
      const COUNT = Math.floor((W * H) / 14000);
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        const isHub = i < 8;
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: isHub ? 4.5 + Math.random() * 3 : 1.8 + Math.random() * 2.2,
          color: c,
          alpha: isHub ? 0.7 + Math.random() * 0.3 : 0.35 + Math.random() * 0.35,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.018 + Math.random() * 0.022,
          isHub,
        });
      }
      pulses = [];
    };

    // ─── Spawn a data pulse between two connected nodes ──────────
    const maybeSpawnPulse = () => {
      if (pulses.length > 18 || Math.random() > 0.04) return;
      const a = Math.floor(Math.random() * particles.length);
      const b = Math.floor(Math.random() * particles.length);
      if (a === b) return;
      const pa = particles[a], pb = particles[b];
      const dx = pa.x - pb.x, dy = pa.y - pb.y;
      if (Math.sqrt(dx*dx + dy*dy) > 180) return;
      pulses.push({
        fromIdx: a, toIdx: b,
        t: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    // ─── Hex path helper ────────────────────────────────────────
    const hexPath = (cx: number, cy: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const ang = (Math.PI / 180) * (60 * i - 30);
        const x = cx + size * Math.cos(ang);
        const y = cy + size * Math.sin(ang);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    // ─── Draw ────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // — Hex grid —
      hexCells.forEach(({ cx, cy, size }) => {
        hexPath(cx, cy, size);
        ctx.strokeStyle = "rgba(99,120,246,0.055)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // — Connection lines between nearby particles —
      const MAX_DIST = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pa = particles[i], pb = particles[j];
          const dx = pa.x - pb.x, dy = pa.y - pb.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist > MAX_DIST) continue;
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          const c = pa.color;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // — Data pulses traveling along connections —
      pulses = pulses.filter(p => p.t <= 1);
      pulses.forEach(pulse => {
        const pa = particles[pulse.fromIdx];
        const pb = particles[pulse.toIdx];
        if (!pa || !pb) return;
        const x = pa.x + (pb.x - pa.x) * pulse.t;
        const y = pa.y + (pb.y - pa.y) * pulse.t;
        const c = pulse.color;

        // Glow trail
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 9);
        grad.addColorStop(0, `rgba(${c.r},${c.g},${c.b},0.80)`);
        grad.addColorStop(0.4, `rgba(${c.r},${c.g},${c.b},0.30)`);
        grad.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},0.95)`;
        ctx.fill();

        pulse.t += pulse.speed;
      });

      // — Particles —
      particles.forEach(p => {
        p.pulse += p.pulseSpeed;
        const pulseFactor = 0.85 + 0.15 * Math.sin(p.pulse);
        const r = p.radius * pulseFactor;
        const c = p.color;

        if (p.isHub) {
          // Outer glow ring
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
          glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${p.alpha * 0.5})`);
          glow.addColorStop(0.5, `rgba(${c.r},${c.g},${c.b},${p.alpha * 0.15})`);
          glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // Ring outline
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${p.alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Core dot
        const dotGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        dotGrad.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${p.alpha})`);
        dotGrad.addColorStop(1, `rgba(${c.r},${c.g},${c.b},${p.alpha * 0.4})`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = dotGrad;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;
      });

      maybeSpawnPulse();
      animId = requestAnimationFrame(draw);
    };

    // ─── Boot ────────────────────────────────────────────────────
    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}