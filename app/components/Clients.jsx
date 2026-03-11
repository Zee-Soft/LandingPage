"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: "MyFundedFutures",
    industry: "Quantitative Trading",
    status: "SHIPPED",
    outcome:
      "Built their unified trading platform from the ground up — now powering prop, brokerage, and hedge fund operations.",
    logo: "/logos/mff.png",
  },
  {
    name: "Benzinga",
    industry: "Financial Media",
    status: "SHIPPED",
    outcome:
      "Turned Benzinga Pro into a top revenue-generating product — real-time data, scanners, and alerts serving thousands.",
    logo: "/logos/benzinga.png",
  },
  {
    name: "Intrepid Control Systems",
    industry: "Automotive",
    status: "SHIPPED",
    outcome:
      "Delivered core Vehicle Spy features and built WiVi, their next-gen web-based vehicle network platform.",
    logo: "/logos/intrepid.png",
  },
  {
    name: "General Motors",
    industry: "AI & Predictive Analytics",
    status: "DEPLOYED",
    outcome:
      "Designed a distributed sentiment analysis system for gas price prediction using NLP and big data infrastructure.",
    logo: "/logos/gm.png",
  },
  {
    name: "Keyboard.gg",
    industry: "Hardware / Firmware",
    status: "SHIPPED",
    outcome:
      "Designed the firmware for their Edge Guard device — low-level embedded systems engineering from prototype to production.",
    logo: "/logos/keyboard.png",
  },
  {
    name: "Nissan",
    industry: "Automotive",
    status: "DEPLOYED",
    outcome:
      "Built automotive testing tools to streamline vehicle diagnostics and validation workflows.",
    logo: "/logos/nissan.jpg",
  },
];

function StatusBadge({ value }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
      <span className="font-mono text-[10px] text-champagne/60 tracking-wider">
        {value}
      </span>
    </div>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".clients-section",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".clients-panel",
        { y: 50, opacity: 0, scale: 0.98 },
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

  const active = selected !== null ? clients[selected] : null;

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-champagne/[0.01] blur-[140px] pointer-events-none" />

      <div className="clients-section max-w-6xl mx-auto">
        <div className="font-mono text-[13px] text-champagne/50 mb-4">
          $ cat /var/log/clients.log
        </div>
        <h2 className="font-mono text-2xl md:text-4xl font-bold text-ivory mb-10">
          companies that{" "}
          <span className="text-champagne text-glow-subtle">trust</span> us
          <span className="cursor-blink">_</span>
        </h2>

        {/* htop-style dashboard */}
        <div className="clients-panel border border-champagne/15 bg-obsidian/80">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-champagne/10 bg-slate-dark/40">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-ivory/30">
              client-monitor — 14 engagements tracked
            </span>
            <span className="ml-auto font-mono text-[10px] text-ivory/15">
              F1:Help F10:Quit
            </span>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[2fr_1fr_100px] md:grid-cols-[2fr_1.2fr_100px] gap-2 px-4 py-2 border-b border-champagne/5 bg-champagne/[0.03] font-mono text-[10px] text-champagne/50 uppercase tracking-wider">
            <span>Client</span>
            <span className="hidden md:block">Industry</span>
            <span>Status</span>
          </div>

          {/* Rows */}
          <div>
            {clients.map((client, i) => (
              <button
                key={client.name}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`w-full text-left grid grid-cols-[2fr_1fr_100px] md:grid-cols-[2fr_1.2fr_100px] gap-2 px-4 py-3 border-b border-ivory/[0.03] transition-all duration-200 items-center ${
                  selected === i
                    ? "bg-champagne/5 border-l-2 border-l-champagne"
                    : "hover:bg-slate-dark/40 border-l-2 border-l-transparent"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={80}
                    height={20}
                    className="h-4 w-auto opacity-30 shrink-0 hidden sm:block"
                  />
                  <span
                    className={`font-mono text-[12px] font-bold truncate transition-colors ${
                      selected === i ? "text-champagne" : "text-ivory/50"
                    }`}
                  >
                    {client.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-ivory/25 truncate hidden md:block">
                  {client.industry}
                </span>
                <StatusBadge value={client.status} />
              </button>
            ))}

            {/* Redacted / NDA rows */}
            {[1, 2, 3].map((i) => (
              <div
                key={`redacted-${i}`}
                className="w-full grid grid-cols-[2fr_1fr_100px] md:grid-cols-[2fr_1.2fr_100px] gap-2 px-4 py-3 border-b border-ivory/[0.03] items-center select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-4 w-12 bg-ivory/[0.04] rounded shrink-0 hidden sm:block" />
                  <div
                    className="h-3 rounded bg-ivory/[0.06]"
                    style={{ width: `${60 + i * 15}px` }}
                  />
                </div>
                <div className="hidden md:block">
                  <div className="h-2.5 w-20 rounded bg-ivory/[0.04]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ivory/10" />
                  <span className="font-mono text-[10px] text-ivory/15 tracking-wider">
                    NDA
                  </span>
                </div>
              </div>
            ))}

            {/* More indicator */}
            <div className="px-4 py-2 text-center font-mono text-[10px] text-ivory/15 border-b border-ivory/[0.03]">
              + 5 additional engagements under NDA
            </div>
          </div>

          {/* Detail panel */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              active ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            {active && (
              <div className="p-5 border-t border-champagne/10 bg-slate-dark/20 scan-line relative">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-ivory/15 mb-2">
                      ENGAGEMENT LOG:
                    </div>
                    <p className="font-mono text-[12px] leading-relaxed text-ivory/40">
                      <span className="text-champagne/40">&gt;</span>{" "}
                      {active.outcome}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-mono text-[14px] font-bold text-champagne text-glow-subtle flex items-center gap-2 justify-end">
                      <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                      {active.status}
                    </div>
                    <div className="font-mono text-[9px] text-ivory/20 mt-1">
                      engagement status
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-champagne/5 bg-slate-dark/30 font-mono text-[10px] text-ivory/20">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                14 engagements
              </span>
            </div>
            <span>all systems nominal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
