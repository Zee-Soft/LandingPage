"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We start by understanding your business, tech landscape, and pain points — mapping out what's working, what's broken, and where the biggest opportunities are.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We define the roadmap — prioritizing quick wins and long-term goals, setting clear milestones, and aligning your team around a plan that actually ships.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We take full ownership — building, fixing, and optimizing in rapid cycles. Whether it's code, processes, or teams, we deliver working results, not slide decks.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We measure what matters, identify what's slowing you down, and continuously refine — improving performance, reducing costs, and eliminating waste.",
  },
  {
    number: "05",
    title: "Transfer",
    description:
      "We don't create dependency. We document everything, train your team, and hand off a system that your people can own, run, and evolve on their own.",
  },
];

export default function Protocol() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".protocol-heading",
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
        ".process-step",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-grid", start: "top 75%" },
        },
      );

      // Animate connecting line
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".process-grid", start: "top 70%" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="relative bg-obsidian py-32 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-champagne/[0.02] blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <div className="protocol-heading mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-ivory">
            How we
            <br />
            <span className="font-display italic text-champagne">operate.</span>
          </h2>
        </div>

        <div className="process-grid relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connecting line (desktop only) */}
          <div className="process-line hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent origin-left" />
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`process-step card-glow card-shimmer group relative p-8 md:p-10 rounded-[2rem] bg-slate-dark/30 border border-white/8 hover:border-champagne/25 transition-all duration-500 hover:translate-y-[-2px] ${i >= 3 ? "md:col-span-1 md:last:col-start-2" : ""}`}
            >
              <span className="font-mono text-[48px] md:text-[56px] font-bold text-champagne/10 leading-none block mb-4 group-hover:text-champagne/20 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-ivory mb-3 tracking-[-0.02em] group-hover:text-champagne transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-ivory/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

