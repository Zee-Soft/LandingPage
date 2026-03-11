"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3 },
      )
        .fromTo(
          ".hero-line-1",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          ".hero-line-2",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          "-=0.6",
        )
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-scroll",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.2",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-dvh w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 to-transparent" />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-champagne/[0.03] blur-[120px]"
          style={{
            top: "10%",
            right: "10%",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-champagne/[0.04] blur-[100px]"
          style={{
            bottom: "20%",
            left: "5%",
            animation: "float 16s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute w-[250px] h-[250px] rounded-full bg-ivory/[0.02] blur-[80px]"
          style={{
            top: "40%",
            left: "40%",
            animation: "float 10s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-[1400px]">
        <div className="hero-label font-mono text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-champagne mb-6">
          We Build Products That Ship
        </div>

        <h1 className="mb-6">
          <span className="hero-line-1 block text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.03em] text-ivory leading-[1.05]">
            Your product,
          </span>
          <span className="hero-line-2 block text-5xl md:text-7xl lg:text-[7rem] font-display italic text-champagne leading-[1.05] mt-1">
            shipped.
          </span>
        </h1>

        <p className="hero-desc max-w-xl text-[15px] md:text-[17px] leading-relaxed text-ivory/60 mb-10">
          Stop burning runway on products that never launch. ZSoft takes your
          vision from concept to production — real software, real users, real
          revenue.
        </p>

        <div className="hero-cta">
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold bg-champagne text-obsidian"
          >
            <span className="btn-slide bg-champagne-light rounded-full" />
            <span className="relative z-10">Start a Project</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-ivory/30">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-ivory/30 animate-bounce" />
      </div>
    </section>
  );
}

