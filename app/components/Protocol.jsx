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

function StepCard({ step, index, isActive, progress }) {
  return (
    <div
      className={`protocol-step relative transition-all duration-500 ${isActive ? "z-10" : ""}`}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute left-1/2 top-full w-px h-8 -translate-x-1/2 z-0 overflow-hidden">
          <div
            className="w-full bg-champagne/40 transition-all duration-700"
            style={{ height: isActive ? "100%" : "0%" }}
          />
          <div className="w-full h-full bg-ivory/5" />
        </div>
      )}

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
              isActive ? "text-champagne text-glow-subtle" : "text-ivory/10"
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
                isActive ? "text-ivory" : "text-ivory/30"
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
                  : "border-ivory/5 text-ivory/15"
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
              <p className="font-mono text-[11px] leading-relaxed text-ivory/40">
                {step.description}
              </p>
            </div>
            <div className="p-5 bg-slate-dark/20 font-mono text-[10px]">
              <div className="text-ivory/15 mb-2">OUTPUT:</div>
              {step.output.map((line, i) => (
                <div
                  key={i}
                  className={`leading-5 ${
                    line.startsWith("✓") ? "text-champagne" : "text-ivory/25"
                  }`}
                >
                  {line}
                </div>
              ))}
              {/* Progress bar */}
              <div className="mt-3 h-1 bg-ivory/5 overflow-hidden">
                <div
                  className="h-full bg-champagne/60 animate-[progress-fill_2s_ease-in-out_infinite]"
                  style={{ width: "100%" }}
                />
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

  /* Auto-advance steps */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
              onClick={() => setActiveStep(i)}
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
          <span className="ml-3 font-mono text-[10px] text-ivory/20">
            step {activeStep + 1}/{steps.length}
          </span>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-2">
          {steps.map((step, i) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(i)}
              className="cursor-pointer"
            >
              <StepCard
                step={step}
                index={i}
                isActive={i === activeStep}
                progress={activeStep}
              />
            </div>
          ))}
        </div>

        {/* Final output */}
        <div
          className={`mt-6 font-mono text-[12px] transition-all duration-500 ${
            activeStep === steps.length - 1
              ? "text-champagne text-glow-subtle"
              : "text-ivory/15"
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

