"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/* ── Matrix rain background ── */
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(201, 168, 76, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
    />
  );
}

/* ── Status bar with live metrics ── */
function StatusBar() {
  const [uptime, setUptime] = useState(0);
  const [mem, setMem] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((p) => p + 1);
      setMem(Math.floor(38 + Math.random() * 12));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 font-mono text-[10px] text-ivory/25 mt-8">
      <span>
        <span className="text-champagne/40">UPTIME</span> {fmt(uptime)}
      </span>
      <span>
        <span className="text-champagne/40">MEM</span> {mem}%
      </span>
      <span>
        <span className="text-champagne/40">LOAD</span> 0.
        {Math.floor(Math.random() * 9) + 1}2
      </span>
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
        <span className="text-champagne/40">ONLINE</span>
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-title-1",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
      )
        .fromTo(
          ".hero-title-2",
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          ".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          ".hero-btn",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
          "-=0.2",
        )
        .fromTo(
          ".hero-status",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.2",
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-dvh w-full bg-obsidian flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden"
    >
      <MatrixRain />

      {/* SEO: server-visible H1 for crawlers (hidden visually) */}
      <h1 className="sr-only">
        Z-Soft — Senior Engineers, On Demand. Production-grade software
        development and technical contracting.
      </h1>

      {/* Vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div aria-hidden="true" className="font-mono mb-4">
          <span className="hero-title-1 block text-3xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.1] tracking-tight">
            Senior Engineers,
          </span>
          <span className="hero-title-2 block text-4xl md:text-6xl lg:text-7xl font-bold text-champagne text-glow leading-[1.1] tracking-tight mt-2">
            On Demand.
            <span className="cursor-blink">_</span>
          </span>
        </div>

        <p className="hero-desc font-mono text-[14px] md:text-[16px] leading-relaxed text-ivory/60 mb-3 max-w-xl">
          We embed into your team and ship production software — from week one.
        </p>
        <p className="hero-desc font-mono text-[12px] md:text-[13px] leading-relaxed text-ivory/45 mb-10 max-w-xl">
          Full-stack, infrastructure, firmware, trading systems — whatever you
          need built, we build it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="hero-btn glow-pulse inline-flex items-center gap-2 px-6 py-3 font-mono text-[13px] font-bold bg-champagne text-obsidian hover:bg-champagne-light transition-colors duration-200"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="hero-btn inline-flex items-center gap-2 px-6 py-3 font-mono text-[13px] border border-champagne/25 text-champagne/70 hover:border-champagne/60 hover:text-champagne transition-all duration-200"
          >
            See What We Do
          </a>
        </div>

        <div className="hero-status">
          <StatusBar />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ivory/15 text-center z-10">
        <span className="text-champagne/30 block animate-bounce">▼</span>
        scroll
      </div>
    </section>
  );
}
