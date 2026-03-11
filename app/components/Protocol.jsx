"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    cmd: "assess",
    title: "Assess",
    description:
      "We start by understanding your business, tech landscape, and pain points — mapping out what's working, what's broken, and where the biggest opportunities are.",
    output: [
      "Scanning codebase...",
      "Analyzing architecture...",
      "Profiling team structure...",
      "✓ Assessment complete",
    ],
  },
  {
    number: "02",
    cmd: "strategize",
    title: "Strategize",
    description:
      "We define the roadmap — prioritizing quick wins and long-term goals, setting clear milestones, and aligning your team around a plan that actually ships.",
    output: [
      "Loading priorities...",
      "Mapping dependencies...",
      "Setting milestones...",
      "✓ Strategy locked",
    ],
  },
  {
    number: "03",
    cmd: "execute",
    title: "Execute",
    description:
      "We take full ownership — building, fixing, and optimizing in rapid cycles. Whether it's code, processes, or teams, we deliver working results, not slide decks.",
    output: [
      "Compiling modules...",
      "Running test suite...",
      "Deploying to staging...",
      "✓ Build shipped",
    ],
  },
  {
    number: "04",
    cmd: "optimize",
    title: "Optimize",
    description:
      "We measure what matters, identify what's slowing you down, and continuously refine — improving performance, reducing costs, and eliminating waste.",
    output: [
      "Benchmarking...",
      "Profiling bottlenecks...",
      "Tuning config...",
      "✓ 3.2x faster",
    ],
  },
  {
    number: "05",
    cmd: "transfer",
    title: "Transfer",
    description:
      "We don't create dependency. We document everything, train your team, and hand off a system that your people can own, run, and evolve on their own.",
    output: [
      "Generating docs...",
      "Recording workshops...",
      "Handoff checklist...",
      "✓ Ownership transferred",
    ],
  },
];

function StepCard({
  step,
  index,
  isActive,
  progress,
  paused,
  onContinue,
  animKey,
}) {
  return (
    <div
      className={`protocol-step group relative transition-all duration-500 ${isActive ? "z-10" : ""}`}
    >
      <div
        className={`border transition-all duration-500 ${
          isActive
            ? "border-champagne/30 bg-champagne/[0.03]"
            : "border-ivory/5 bg-slate-dark/20"
        }`}
      >
        {/* Step header */}
        <div
          className={`flex items-center gap-3 px-4 py-2.5 border-b transition-colors duration-300 ${
            isActive
              ? "border-champagne/15 bg-champagne/[0.02]"
              : "border-ivory/5"
          }`}
        >
          <span
            className={`font-mono text-[20px] font-bold transition-colors duration-300 ${
              isActive ? "text-champagne text-glow-subtle" : "text-ivory/20"
            }`}
          >
            {step.number}
          </span>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[11px] text-champagne/50">
              $ make {step.cmd}
            </div>
            <h3
              className={`font-mono text-[14px] font-bold transition-colors duration-300 ${
                isActive ? "text-ivory" : "text-ivory/40"
              }`}
            >
              {step.title}
            </h3>
          </div>
          <span
            className={`font-mono text-[10px] shrink-0 px-2 py-0.5 border transition-all duration-300 ${
              isActive
                ? "border-champagne/30 text-champagne"
                : progress > index
                  ? "border-champagne/10 text-champagne/40"
                  : "border-ivory/5 text-ivory/25"
            }`}
          >
            {isActive ? "RUNNING" : progress > index ? "DONE" : "PENDING"}
          </span>
        </div>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 border-b md:border-b-0 md:border-r border-ivory/5">
              <p className="font-mono text-[11px] leading-relaxed text-ivory/50">
                {step.description}
              </p>
            </div>
            <div className="p-5 bg-slate-dark/20 font-mono text-[10px]">
              <div className="text-ivory/25 mb-2">OUTPUT:</div>
              {step.output.map((line, i) => (
                <div
                  key={i}
                  className={`leading-5 ${
                    line.startsWith("✓") ? "text-champagne" : "text-ivory/35"
                  }`}
                >
                  {line}
                </div>
              ))}
              {/* Progress bar */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 h-1 bg-ivory/5 overflow-hidden">
                  <div
                    key={animKey}
                    className={`h-full bg-champagne/60 ${paused ? "" : "animate-[progress-fill_4s_ease-in-out_forwards]"}`}
                    style={{ width: paused ? "100%" : undefined }}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContinue();
                  }}
                  className="font-mono text-[10px] text-champagne/50 hover:text-champagne transition-colors cursor-pointer shrink-0 opacity-0 group-hover:opacity-100"
                >
                  continue ▸
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Protocol() {
  const ref = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [activeStep]);

  /* Auto-advance steps (loops back to 1 after reaching 5) */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, activeStep]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".protocol-section",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".protocol-step",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="relative bg-obsidian py-24 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-champagne/[0.015] blur-[120px] pointer-events-none" />

      <div className="protocol-section max-w-6xl mx-auto">
        <div className="font-mono text-[13px] text-champagne/50 mb-4">
          $ cat ./PIPELINE.md
        </div>
        <h2 className="font-mono text-2xl md:text-4xl font-bold text-ivory mb-4">
          how we{" "}
          <span className="text-champagne text-glow-subtle">operate</span>
          <span className="cursor-blink">_</span>
        </h2>

        {/* Pipeline progress indicator */}
        <div className="flex items-center gap-1 mb-10">
          {steps.map((s, i) => (
            <button
              key={s.number}
              onClick={() => {
                pausedRef.current = true;
                setActiveStep(i);
                setPaused(true);
              }}
              className="flex items-center gap-1 group"
            >
              <div
                className={`w-8 h-1 transition-all duration-500 ${
                  i <= activeStep ? "bg-champagne/60" : "bg-ivory/10"
                }`}
              />
              {i < steps.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-ivory/10" />
              )}
            </button>
          ))}
          <span className="ml-3 font-mono text-[10px] text-ivory/30">
            step {activeStep + 1}/{steps.length}
          </span>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-2">
          {steps.map((step, i) => (
            <div
              key={step.number}
              onClick={() => {
                pausedRef.current = true;
                setActiveStep(i);
                setPaused(true);
              }}
              className="cursor-pointer"
            >
              <StepCard
                step={step}
                index={i}
                isActive={i === activeStep}
                progress={activeStep}
                paused={paused && i === activeStep}
                animKey={animKey}
                onContinue={() => {
                  pausedRef.current = false;
                  setActiveStep((prev) => (prev + 1) % steps.length);
                  setPaused(false);
                }}
              />
            </div>
          ))}
        </div>

        {/* Final output */}
        <div
          className={`mt-6 font-mono text-[12px] transition-all duration-500 ${
            activeStep === steps.length - 1
              ? "text-champagne text-glow-subtle"
              : "text-ivory/25"
          }`}
        >
          {activeStep === steps.length - 1
            ? "✓ Pipeline complete. All 5 stages passed."
            : `▸ Running stage ${activeStep + 1} of ${steps.length}...`}
        </div>
      </div>
    </section>
  );
}
