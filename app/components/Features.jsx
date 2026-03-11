"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Zap, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   Card 1: Diagnostic Shuffler
   ───────────────────────────────────────────── */
function ShufflerCard() {
  const [order, setOrder] = useState([0, 1, 2]);
  const labels = ["Product Strategy", "Full-Stack Build", "Launch & Scale"];

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 flex items-center justify-center">
      {order.map((cardIdx, stackPos) => (
        <div
          key={labels[cardIdx]}
          className="absolute w-52 px-5 py-4 rounded-2xl border font-mono text-[12px] text-ivory/80 bg-slate-dark/60 border-white/10"
          style={{
            transform: `translateY(${stackPos * 16}px) scale(${1 - stackPos * 0.04})`,
            opacity: 1 - stackPos * 0.25,
            zIndex: 3 - stackPos,
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${
              stackPos === 0 ? "bg-champagne" : "bg-white/20"
            }`}
          />
          {labels[cardIdx]}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card 2: Telemetry Typewriter
   ───────────────────────────────────────────── */
function TypewriterCard() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  const messages = useRef([
    "Processing 2.4M events/sec...",
    "Latency: 0.3ms p99 ✓",
    "WebSocket connections: 14,208",
    "Order throughput: nominal",
    "Cache hit ratio: 99.2%",
    "All systems operational.",
  ]).current;

  useEffect(() => {
    let charIndex = 0;
    const msg = messages[lineIndex % messages.length];

    const typeInterval = setInterval(() => {
      if (charIndex <= msg.length) {
        setCurrentLine(msg.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLines((prev) => [...prev.slice(-4), msg]);
          setCurrentLine("");
          setLineIndex((prev) => prev + 1);
        }, 1200);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [lineIndex, messages]);

  return (
    <div className="font-mono text-[11px] leading-6 h-48 flex flex-col justify-end overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-green-400/70">
          Live Feed
        </span>
      </div>
      {lines.map((line, i) => (
        <div key={`${lineIndex}-${i}`} className="text-ivory/30">
          <span className="text-champagne/40 mr-2">›</span>
          {line}
        </div>
      ))}
      <div className="text-ivory/70">
        <span className="text-champagne mr-2">›</span>
        {currentLine}
        <span className="inline-block w-[6px] h-[14px] bg-champagne ml-[2px] animate-pulse" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card 3: Cursor Protocol Scheduler
   ───────────────────────────────────────────── */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function SchedulerCard() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [activeDays, setActiveDays] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const [pressing, setPressing] = useState(false);
  const [saved, setSaved] = useState(false);
  const cancelRef = useRef(false);

  const runSequence = useCallback(async () => {
    cancelRef.current = false;
    const step = async (fn) => {
      if (cancelRef.current) throw new Error("cancelled");
      fn();
      await delay(500);
    };

    try {
      // Reset
      setActiveDays([]);
      setSaved(false);

      await step(() => setCursorPos({ x: 30, y: 60, visible: true }));
      // Move to Wednesday
      await step(() => setCursorPos({ x: 128, y: 40, visible: true }));
      // Click
      setPressing(true);
      await delay(150);
      setPressing(false);
      setActiveDays([3]);
      await delay(400);

      // Move to Friday
      await step(() => setCursorPos({ x: 200, y: 40, visible: true }));
      setPressing(true);
      await delay(150);
      setPressing(false);
      setActiveDays([3, 5]);
      await delay(400);

      // Move to Save
      await step(() => setCursorPos({ x: 128, y: 110, visible: true }));
      setPressing(true);
      await delay(150);
      setPressing(false);
      setSaved(true);
      await delay(800);

      // Fade out
      setCursorPos((p) => ({ ...p, visible: false }));
      await delay(2500);

      if (!cancelRef.current) runSequence();
    } catch {
      /* cancelled */
    }
  }, []);

  useEffect(() => {
    runSequence();
    return () => {
      cancelRef.current = true;
    };
  }, [runSequence]);

  return (
    <div className="relative h-48 overflow-hidden">
      {/* Day grid */}
      <div className="flex gap-2 mb-4 justify-center pt-4">
        {days.map((day, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-mono transition-all duration-300 ${
              activeDays.includes(i)
                ? "bg-champagne text-obsidian scale-95"
                : "bg-white/5 text-ivory/40"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Save button */}
      <div className="flex justify-center mt-6">
        <div
          className={`px-6 py-2 rounded-full text-[11px] font-mono transition-all duration-300 ${
            saved
              ? "bg-champagne text-obsidian"
              : "bg-white/5 text-ivory/40 border border-white/10"
          }`}
        >
          {saved ? "✓ Scheduled" : "Confirm Deploy"}
        </div>
      </div>

      {/* Animated cursor */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          opacity: cursorPos.visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <g
          transform={`translate(${cursorPos.x}, ${cursorPos.y})`}
          style={{ transition: "transform 0.5s ease-out" }}
        >
          <path
            d="M0 0 L0 16 L4.5 12.5 L8 18 L10 17 L6.5 11 L12 10 Z"
            fill={pressing ? "#C9A84C" : "#FAF8F5"}
            style={{
              transform: pressing ? "scale(0.85)" : "scale(1)",
              transformOrigin: "6px 9px",
              transition: "all 0.15s ease",
            }}
          />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Features Section
   ───────────────────────────────────────────── */
export default function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".feature-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  // Mouse tracking for card glow effect
  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".card-glow");
    if (!cards) return;

    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    };

    cards.forEach((card) => card.addEventListener("mousemove", handleMove));
    return () =>
      cards.forEach((card) =>
        card.removeEventListener("mousemove", handleMove),
      );
  }, []);

  const features = [
    {
      icon: Activity,
      title: "Idea to Launch",
      description:
        "You have the vision — we build the product. From architecture to deployment, we take full ownership and get your software into users' hands fast.",
      Component: ShufflerCard,
    },
    {
      icon: Zap,
      title: "Built to Scale",
      description:
        "We don't build prototypes that crumble. Every product we ship handles real-world load — millions of events, real-time data, global traffic. Battle-tested from day one.",
      Component: TypewriterCard,
    },
    {
      icon: Calendar,
      title: "Relentless Velocity",
      description:
        "Other shops spend months in discovery. We ship working software in weeks, iterate in days, and never stop until your product is live and generating value.",
      Component: SchedulerCard,
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-champagne/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-champagne/[0.015] blur-[120px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <div className="features-heading mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-ivory">
            Products we
            <br />
            <span className="font-display italic text-champagne">build.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card card-glow card-shimmer group p-8 rounded-[2rem] bg-slate-dark/30 border border-white/8 hover:border-champagne/20 transition-all duration-500 hover:translate-y-[-2px]"
            >
              <feature.icon
                className="w-5 h-5 text-champagne mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ivory mb-2">
                {feature.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ivory/50 mb-8">
                {feature.description}
              </p>
              <feature.Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

