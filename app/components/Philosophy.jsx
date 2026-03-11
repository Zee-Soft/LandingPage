"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TypewriterLine({ text, delay, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="cursor-blink inline-block w-[6px] h-[13px] bg-champagne/60 ml-[1px]" />
      )}
    </span>
  );
}

export default function Philosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".phil-window",
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-slate-dark overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-champagne/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-[13px] text-champagne/50 mb-8">
          $ cat README.md
        </div>

        {/* Terminal window */}
        <div className="phil-window border border-champagne/15 bg-obsidian/80 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-champagne/10 bg-slate-dark/40">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-ivory/30">
              ~/z-soft/README.md
            </span>
            <span className="ml-auto font-mono text-[10px] text-ivory/15">
              MARKDOWN
            </span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 scan-line relative">
            <div className="font-mono text-[13px] text-ivory/40 leading-relaxed mb-8">
              <TypewriterLine
                text="Other firms talk about agile. They plan sprints. They hold standups."
                delay={200}
              />
              <br />
              <TypewriterLine
                text="Months pass. Nothing ships."
                delay={2800}
                className="text-ivory/40"
              />
            </div>

            <div className="h-px bg-champagne/10 my-8" />

            <h2 className="font-mono text-3xl md:text-5xl font-bold text-ivory mb-2 leading-tight">
              We ship{" "}
              <span className="text-champagne text-glow">
                <TypewriterLine text="products" delay={4800} />
              </span>
              <span className="cursor-blink">_</span>
            </h2>

            <div className="w-24 h-px bg-champagne/30 my-8" />

            <div className="font-mono text-[12px] leading-relaxed text-ivory/40 max-w-2xl space-y-4">
              <p>
                Not decks. Not roadmaps. Working software that real people use.
              </p>
              <p>
                We&apos;ve built trading platforms, scaled real-time systems to
                millions of users, and shipped firmware for the world&apos;s
                largest automaker. We don&apos;t consult — we build, and we
                don&apos;t stop until it&apos;s live.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-ivory/5">
              {[
                { val: "50+", label: "projects shipped" },
                { val: "2020", label: "est." },
                { val: "99.9%", label: "uptime SLA" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-[20px] md:text-[28px] font-bold text-champagne text-glow-subtle">
                    {stat.val}
                  </div>
                  <div className="font-mono text-[10px] text-ivory/30 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
