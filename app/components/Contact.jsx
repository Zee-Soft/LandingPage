"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TerminalPrompt() {
  const [step, setStep] = useState(0);
  const lines = [
    { type: "cmd", text: "$ ssh z-soft@start-project" },
    { type: "info", text: "Connecting to z-soft.dev..." },
    { type: "ok", text: "Connection established." },
    { type: "info", text: "" },
    { type: "cmd", text: "$ describe-project --type=yours" },
    { type: "prompt", text: "Tell us what you're building →" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < lines.length) return prev + 1;
        return prev;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="font-mono text-[11px] leading-6 text-left max-w-md mx-auto mb-10">
      {lines.slice(0, step).map((line, i) => (
        <div
          key={i}
          className={
            line.type === "cmd"
              ? "text-ivory/50"
              : line.type === "ok"
                ? "text-champagne"
                : line.type === "prompt"
                  ? "text-champagne text-glow-subtle font-bold mt-2"
                  : "text-ivory/30"
          }
        >
          {line.text}
        </div>
      ))}
      {step < lines.length && (
        <span className="cursor-blink inline-block w-[7px] h-[14px] bg-champagne" />
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-section",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        ".contact-cta",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne/[0.02] blur-[160px] pointer-events-none" />

      <div className="contact-section max-w-6xl mx-auto text-center">
        {/* Terminal window */}
        <div className="contact-cta max-w-3xl mx-auto border border-champagne/15 bg-obsidian/80 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-champagne/10 bg-slate-dark/40">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-ivory/30">
              z-soft — start project
            </span>
          </div>

          <div className="p-8 md:p-12 scan-line relative">
            <TerminalPrompt />

            <h2 className="font-mono text-3xl md:text-5xl font-bold text-ivory mb-4">
              ready to <span className="text-champagne text-glow">ship</span>?
              <span className="cursor-blink">_</span>
            </h2>

            <p className="font-mono text-[13px] leading-relaxed text-ivory/50 max-w-xl mx-auto mb-10">
              Tell us what you&apos;re building, where you&apos;re stuck, and
              when it needs to be live. We&apos;ll tell you exactly how
              we&apos;d build it and when it ships.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@z-soft.dev"
                className="glow-pulse inline-flex items-center gap-2 px-8 py-4 font-mono text-[13px] font-bold bg-champagne text-obsidian hover:bg-champagne-light transition-colors duration-300"
              >
                <span>$</span> start_project --now
              </a>

              <a
                href="mailto:info@z-soft.dev"
                className="inline-flex items-center gap-2 px-8 py-4 font-mono text-[13px] text-ivory/50 border border-ivory/10 hover:border-champagne/30 hover:text-ivory transition-all duration-300"
              >
                info@z-soft.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
