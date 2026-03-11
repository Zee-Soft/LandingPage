"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Live telemetry feed ── */
function TelemetryFeed() {
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
          setLines((prev) => [...prev.slice(-5), msg]);
          setCurrentLine("");
          setLineIndex((prev) => prev + 1);
        }, 1200);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [lineIndex, messages]);

  return (
    <div className="font-mono text-[11px] leading-6 flex flex-col justify-end overflow-hidden min-h-[160px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-champagne/50">
          live telemetry
        </span>
      </div>
      {lines.map((line, i) => (
        <div key={`${lineIndex}-${i}`} className="text-ivory/25">
          <span className="text-champagne/30 mr-2">│</span>
          {line}
        </div>
      ))}
      <div className="text-ivory/60">
        <span className="text-champagne mr-2">│</span>
        {currentLine}
        <span className="cursor-blink inline-block w-[7px] h-[14px] bg-champagne ml-[2px]" />
      </div>
    </div>
  );
}

/* ── Process queue animation ── */
function ProcessQueue() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const labels = [
    "strategy.init()",
    "build.compile()",
    "test.validate()",
    "deploy.ship()",
  ];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.push(next.shift());
        return next;
      });
      setProgress(0);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fill = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, 50);
    return () => clearInterval(fill);
  }, [order]);

  return (
    <div className="font-mono text-[11px] min-h-[160px] flex flex-col justify-center gap-1.5">
      <div className="text-[10px] text-champagne/50 uppercase tracking-widest mb-2">
        task queue
      </div>
      {order.map((idx, pos) => (
        <div
          key={labels[idx]}
          className={`relative flex items-center gap-3 px-3 py-1.5 border transition-all duration-700 overflow-hidden ${
            pos === 0
              ? "border-champagne/30 text-champagne"
              : "border-ivory/5 text-ivory/25"
          }`}
        >
          {pos === 0 && (
            <div
              className="absolute inset-y-0 left-0 bg-champagne/10 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          )}
          <span className="relative z-10 w-4 text-center">
            {pos === 0 ? "▶" : pos === 1 ? "◻" : "·"}
          </span>
          <span className="relative z-10 flex-1">{labels[idx]}</span>
          <span className="relative z-10 text-[9px] text-ivory/20">
            {pos === 0 ? `${progress}%` : pos === 1 ? "next" : "queued"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Deploy simulation ── */
function DeploySimulation() {
  const [step, setStep] = useState(0);
  const steps = [
    { cmd: "$ git push origin main", type: "cmd" },
    { cmd: "remote: Compressing objects: 100%", type: "info" },
    { cmd: "remote: Building container image...", type: "info" },
    { cmd: "remote: Running test suite.......... 47/47 PASS", type: "ok" },
    { cmd: "remote: Deploying to us-east-1...", type: "info" },
    { cmd: "remote: Health check................. ✓", type: "ok" },
    { cmd: "remote: DNS propagation.............. ✓", type: "ok" },
    { cmd: "✓ Live at https://app.client.com", type: "success" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % (steps.length + 3));
    }, 1400);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="font-mono text-[11px] min-h-[160px] flex flex-col justify-end overflow-hidden">
      {steps.slice(0, Math.min(step, steps.length)).map((s, i) => (
        <div
          key={i}
          className={
            s.type === "success"
              ? "text-champagne text-glow-subtle font-bold"
              : s.type === "ok"
                ? "text-champagne/70"
                : s.type === "cmd"
                  ? "text-ivory/60"
                  : "text-ivory/30"
          }
        >
          {s.cmd}
        </div>
      ))}
      {step < steps.length && (
        <span className="cursor-blink inline-block w-[7px] h-[14px] bg-champagne mt-1" />
      )}
    </div>
  );
}

/* ── Main Features Section ── */
export default function Features() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-section",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".features-terminal",
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const tabs = [
    {
      label: "systems",
      title: "Production Systems",
      desc: "Every project ships a production-grade system — task queues, background workers, job orchestration. Not prototypes. Not MVPs. Software that runs.",
      Component: ProcessQueue,
    },
    {
      label: "observability",
      title: "Built-in Observability",
      desc: "Real-time telemetry, structured logging, and alerting come standard. You see exactly what your system is doing — latency, throughput, error rates — from day one.",
      Component: TelemetryFeed,
    },
    {
      label: "pipelines",
      title: "Automated Pipelines",
      desc: "CI/CD baked into every repo. Push to main, tests run, containers build, health checks pass, traffic shifts. Your team deploys in minutes, not meetings.",
      Component: DeploySimulation,
    },
  ];

  const ActiveComponent = tabs[activeTab].Component;

  return (
    <section
      id="output"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-champagne/[0.015] blur-[140px] pointer-events-none" />

      <div className="features-section max-w-6xl mx-auto">
        <div className="font-mono text-[13px] text-champagne/50 mb-4">
          $ ls ./deliverables/
        </div>
        <h2 className="font-mono text-2xl md:text-4xl font-bold text-ivory mb-12">
          what{" "}
          <span className="text-champagne text-glow-subtle">ships</span>
          <span className="cursor-blink">_</span>
        </h2>

        {/* IDE-style terminal with tabs */}
        <div className="features-terminal border border-champagne/15 bg-obsidian/80">
          {/* Tab bar */}
          <div className="flex items-center border-b border-champagne/10 bg-slate-dark/40 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 font-mono text-[11px] border-r border-champagne/5 transition-all duration-200 shrink-0 ${
                  i === activeTab
                    ? "text-champagne bg-obsidian/80 border-b-2 border-b-champagne"
                    : "text-ivory/30 hover:text-ivory/50 hover:bg-slate-dark/30"
                }`}
              >
                {i === activeTab && <span className="mr-1">●</span>}
                {tab.label}.log
              </button>
            ))}
            <div className="flex-1" />
            <span className="px-3 font-mono text-[10px] text-ivory/15 shrink-0">
              UTF-8 │ LF │ Bash
            </span>
          </div>

          {/* Content area — split pane */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
            {/* Left: Description */}
            <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-champagne/5">
              <div className="font-mono text-[10px] text-ivory/20 mb-4">
                # {tabs[activeTab].label} — included in every engagement
              </div>
              <h3 className="font-mono text-xl md:text-2xl font-bold text-ivory mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="font-mono text-[12px] leading-relaxed text-ivory/40 mb-6">
                {tabs[activeTab].desc}
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 font-mono text-[10px] border border-champagne/20 text-champagne/50">
                  production-ready
                </span>
                <span className="px-3 py-1 font-mono text-[10px] border border-ivory/10 text-ivory/25">
                  delivered
                </span>
              </div>
            </div>

            {/* Right: Live animation */}
            <div className="p-6 md:p-8 bg-slate-dark/20 scan-line relative">
              <div className="font-mono text-[10px] text-ivory/15 mb-4">
                LIVE PREVIEW
              </div>
              <ActiveComponent />
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-champagne/5 bg-slate-dark/30 font-mono text-[10px] text-ivory/20">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                running
              </span>
              <span>pid: {2847 + activeTab}</span>
            </div>
            <span>exit: 0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

