"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      className="relative py-40 md:py-56 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/[0.03] blur-[160px] pointer-events-none" />
      <div className="contact-content max-w-[1100px] mx-auto text-center">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-8">
          Let&apos;s Go
        </span>

        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-[-0.03em] text-ivory mb-6">
          Ready to{" "}
          <span className="font-display italic text-champagne">ship?</span>
        </h2>

        <p className="text-[16px] md:text-[18px] leading-relaxed text-ivory/50 max-w-xl mx-auto mb-12">
          Tell us what you&apos;re building, where you&apos;re stuck, and when
          it needs to be live. We&apos;ll tell you exactly how we&apos;d build
          it and when it ships.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@z-soft.dev"
            className="cta-glow btn-magnetic inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-semibold bg-champagne text-obsidian"
          >
            <span className="btn-slide bg-champagne-light rounded-full" />
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="mailto:info@z-soft.dev"
            className="hover-lift inline-flex items-center gap-2 rounded-full px-8 py-5 text-sm font-medium text-ivory/50 border border-white/10 hover:border-champagne/30 hover:text-ivory transition-all duration-300"
          >
            info@z-soft.dev
          </a>
        </div>
      </div>
    </section>
  );
}

