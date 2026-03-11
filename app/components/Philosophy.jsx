"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-label",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );

      gsap.fromTo(
        ".philosophy-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 60%" },
        },
      );

      const words = gsap.utils.toArray(".philosophy-word");
      gsap.fromTo(
        words,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 55%" },
        },
      );

      gsap.fromTo(
        ".philosophy-body",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 45%" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const mainWords = "We ship";

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 px-6 md:px-16 lg:px-24 bg-slate-dark overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-champagne/[0.03] blur-[140px] pointer-events-none"
        style={{ animation: "float 14s ease-in-out infinite" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="philosophy-label font-mono text-[11px] tracking-[0.3em] uppercase text-champagne/60 mb-12">
          The Difference
        </div>

        <p className="philosophy-sub text-xl md:text-2xl text-ivory/50 mb-8 leading-relaxed">
          Other firms talk about agile. They plan sprints. They hold standups.
          Months pass. Nothing ships.
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-[-0.02em] leading-[1.15]">
          {mainWords.split(" ").map((word, i) => (
            <span
              key={i}
              className="philosophy-word inline-block mr-[0.3em] text-ivory"
            >
              {word}
            </span>
          ))}
          <span className="philosophy-word inline-block font-display italic text-champagne">
            products.
          </span>
        </h2>

        <div className="philosophy-body mt-16 max-w-2xl">
          <div className="w-16 h-px bg-champagne/40 mb-8" />
          <p className="text-[15px] leading-relaxed text-ivory/50">
            Not decks. Not roadmaps. Working software that real people use.
            We&apos;ve built trading platforms, scaled real-time systems to
            millions of users, and shipped firmware for the world&apos;s largest
            automaker. We don&apos;t consult — we build, and we don&apos;t stop
            until it&apos;s live.
          </p>
        </div>
      </div>
    </section>
  );
}

