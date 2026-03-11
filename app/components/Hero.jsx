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
  const [bootLines, setBootLines] = useState([]);
  const [showMain, setShowMain] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [typedCmd, setTypedCmd] = useState("");
  const [logoLines, setLogoLines] = useState(0);
  const cmdText = "cat /etc/motd";

  const asciiLogo = [
    "███████╗    ███████╗ ██████╗ ███████╗████████╗",
    "╚══███╔╝    ██╔════╝██╔═══██╗██╔════╝╚══██╔══╝",
    "  ███╔╝ ─── ███████╗██║   ██║█████╗     ██║   ",
    " ███╔╝      ╚════██║██║   ██║██╔══╝     ██║   ",
    "███████╗    ███████║╚██████╔╝██║        ██║   ",
    "╚══════╝    ╚══════╝ ╚═════╝ ╚═╝        ╚═╝   ",
  ];

  const bootSequence = useRef([
    {
      text: "Z-SOFT SYSTEMS v4.2.0 — Engineering Solutions",
      cls: "text-ivory/50",
      delay: 400,
    },
    {
      text: `Copyright (c) 2020-${new Date().getFullYear()} Z-Soft. All rights reserved.`,
      cls: "text-ivory/30",
      delay: 550,
    },
    { text: "", delay: 700 },
    {
      text: "[ BOOT ] Initializing kernel modules............ [OK]",
      cls: "",
      delay: 800,
    },
    {
      text: "[ BOOT ] Loading engineering protocols........... [OK]",
      cls: "",
      delay: 1000,
    },
    {
      text: "[ BOOT ] Mounting /dev/clients................... [OK]",
      cls: "",
      delay: 1200,
    },
    {
      text: "[ BOOT ] Starting process optimizer.............. [OK]",
      cls: "",
      delay: 1400,
    },
    {
      text: "[ BOOT ] Verifying deployment pipelines.......... [OK]",
      cls: "",
      delay: 1600,
    },
    {
      text: "[ BOOT ] Running security audit.................. [OK]",
      cls: "",
      delay: 1800,
    },
    { text: "", delay: 2000 },
    {
      text: "All systems operational. Welcome to Z-Soft.",
      cls: "text-champagne font-bold",
      delay: 2100,
    },
    { text: "", delay: 2300 },
  ]).current;

  useEffect(() => {
    // Animate logo lines first
    const logoTimeouts = asciiLogo.map((_, i) =>
      setTimeout(() => setLogoLines(i + 1), i * 60),
    );

    const timeouts = [];
    bootSequence.forEach((line, i) => {
      const t = setTimeout(() => {
        setBootLines((prev) => [...prev, line]);
        if (i === bootSequence.length - 1) {
          setTimeout(() => {
            let idx = 0;
            const typeInterval = setInterval(() => {
              if (idx <= cmdText.length) {
                setTypedCmd(cmdText.slice(0, idx));
                idx++;
              } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                  setShowCursor(false);
                  setShowMain(true);
                }, 400);
              }
            }, 60);
          }, 300);
        }
      }, line.delay);
      timeouts.push(t);
    });
    return () => {
      logoTimeouts.forEach(clearTimeout);
      timeouts.forEach(clearTimeout);
    };
  }, [bootSequence]);

  useEffect(() => {
    if (!showMain) return;
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
  }, [showMain]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-dvh w-full bg-obsidian flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16 overflow-hidden"
    >
      <MatrixRain />

      {/* Vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Terminal window chrome */}
        <div className="border border-champagne/15 bg-obsidian/90 backdrop-blur-sm scan-line">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-champagne/10 bg-slate-dark/50">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-[10px] text-ivory/25">
              z-soft@main:~
            </span>
            <span className="ml-auto font-mono text-[10px] text-ivory/15">
              bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-8 font-mono text-[10px] md:text-[12px] leading-relaxed">
            {/* ASCII Logo */}
            {logoLines > 0 && (
              <pre className="text-champagne text-glow-subtle leading-none text-[10px] md:text-[12px] mb-3">
                {asciiLogo.slice(0, logoLines).join("\n")}
              </pre>
            )}

            {bootLines.map((line, i) => (
              <div key={i} className={line.text === "" ? "h-3" : ""}>
                {line.text && (
                  <span
                    className={
                      line.cls
                        ? line.cls
                        : line.text.includes("[OK]")
                          ? "text-champagne/60"
                          : "text-ivory/35"
                    }
                  >
                    {line.text}
                  </span>
                )}
              </div>
            ))}

            {/* Typing command line */}
            {bootLines.length >= bootSequence.length && (
              <div className="text-ivory/60">
                <span className="text-champagne/60">z-soft@main</span>
                <span className="text-ivory/30">:</span>
                <span className="text-blue-400/60">~</span>
                <span className="text-ivory/30">$ </span>
                <span className="text-ivory/70">{typedCmd}</span>
                {showCursor && (
                  <span className="cursor-blink inline-block w-[7px] h-[14px] bg-champagne ml-[1px] translate-y-[2px]" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main content — appears after boot */}
        {showMain && (
          <div className="mt-10">
            <h1 className="font-mono mb-6">
              <span className="hero-title-1 block text-3xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.1] tracking-tight">
                Your product,
              </span>
              <span className="hero-title-2 block text-4xl md:text-6xl lg:text-7xl font-bold text-champagne text-glow leading-[1.1] tracking-tight mt-2">
                shipped.
                <span className="cursor-blink">_</span>
              </span>
            </h1>

            <p className="hero-desc font-mono text-[13px] md:text-[14px] leading-relaxed text-ivory/45 mb-10 max-w-xl">
              Stop burning runway on products that never launch. Z-Soft takes
              your vision from concept to production — real software, real
              users, real revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="hero-btn glow-pulse inline-flex items-center gap-2 px-6 py-3 font-mono text-[13px] font-bold bg-champagne text-obsidian hover:bg-champagne-light transition-colors duration-200"
              >
                $ start_project --now
              </a>
              <a
                href="#services"
                className="hero-btn inline-flex items-center gap-2 px-6 py-3 font-mono text-[13px] border border-champagne/25 text-champagne/70 hover:border-champagne/60 hover:text-champagne transition-all duration-200"
              >
                $ man z-soft
              </a>
            </div>

            <div className="hero-status">
              <StatusBar />
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {showMain && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ivory/15 text-center z-10">
          <span className="text-champagne/30 block animate-bounce">▼</span>
          scroll
        </div>
      )}
    </section>
  );
}
