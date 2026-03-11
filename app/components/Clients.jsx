"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: "MyFundedFutures",
    industry: "Quantitative Trading",
    outcome:
      "Built their unified trading platform from the ground up — now powering prop, brokerage, and hedge fund operations.",
    logo: "/logos/mff.png",
  },
  {
    name: "Benzinga",
    industry: "Financial Media",
    outcome:
      "Turned Benzinga Pro into a top revenue-generating product — real-time data, scanners, and alerts serving thousands.",
    logo: "/logos/benzinga.png",
  },
  {
    name: "Intrepid Control Systems",
    industry: "Automotive",
    outcome:
      "Delivered core Vehicle Spy features and built WiVi, their next-gen web-based vehicle network platform.",
    logo: "/logos/intrepid.png",
  },
  {
    name: "General Motors",
    industry: "AI & Predictive Analytics",
    outcome:
      "Designed a distributed sentiment analysis system for gas price prediction using NLP and big data infrastructure.",
    logo: "/logos/gm.png",
  },
  {
    name: "Keyboard.gg",
    industry: "Hardware / Firmware",
    outcome:
      "Designed the firmware for their Edge Guard device — low-level embedded systems engineering from prototype to production.",
    logo: "/logos/keyboard.png",
  },
  {
    name: "Nissan",
    industry: "Automotive",
    outcome:
      "Built automotive testing tools to streamline vehicle diagnostics and validation workflows.",
    logo: "/logos/nissan.jpg",
  },
];

export default function Clients() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".clients-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".client-card",
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  // Mouse tracking for card glow
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

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-champagne/[0.02] blur-[140px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <div className="clients-heading mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-ivory">
            Companies that
            <br />
            <span className="font-display italic text-champagne">
              bet on us.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="client-card card-glow card-shimmer group relative p-8 md:p-10 rounded-[2rem] bg-slate-dark/30 border border-white/8 hover:border-champagne/25 transition-all duration-500 hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={32}
                  className="h-8 w-auto opacity-50 group-hover:opacity-80 transition-opacity duration-300 shrink-0"
                />
                <h3 className="text-lg md:text-xl font-bold text-ivory group-hover:text-champagne transition-colors duration-300">
                  {client.name}
                </h3>
                <span className="ml-auto font-mono text-[10px] tracking-wider uppercase text-champagne/50 shrink-0">
                  {client.industry}
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-ivory/50">
                {client.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

