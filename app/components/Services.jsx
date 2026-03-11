"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    cmd: "optimize",
    title: "Process Optimization",
    cat: "ops",
    description:
      "We analyze your existing workflows end-to-end — then redesign them for speed, clarity, and scale. Less friction, more output.",
  },
  {
    cmd: "standards",
    title: "Guidelines & Standards",
    cat: "ops",
    description:
      "We create engineering guidelines, coding standards, and operational playbooks that keep your team aligned and your codebase clean.",
  },
  {
    cmd: "diagnose",
    title: "Issue Identification",
    cat: "ops",
    description:
      "We dig into your systems to surface hidden bottlenecks, performance gaps, and architectural risks before they become costly problems.",
  },
  {
    cmd: "debug",
    title: "Root Cause Analysis",
    cat: "eng",
    description:
      "When things break, we don't patch — we trace the problem to its source, fix it permanently, and put safeguards in place so it never happens again.",
  },
  {
    cmd: "build",
    title: "Application Development",
    cat: "eng",
    description:
      "From greenfield builds to modernizing legacy systems — we design, develop, and ship production-grade software tailored to your business.",
  },
  {
    cmd: "integrate",
    title: "API Design & Integration",
    cat: "eng",
    description:
      "We design clean, versioned APIs and integrate third-party systems — connecting your platforms into a seamless, reliable data flow.",
  },
  {
    cmd: "infra",
    title: "Cloud & Infrastructure",
    cat: "infra",
    description:
      "We architect, migrate, and optimize your cloud environments — whether it's AWS, Azure, or GCP — so you get reliability at the right cost.",
  },
  {
    cmd: "pipeline",
    title: "DevOps & CI/CD",
    cat: "infra",
    description:
      "We build automated pipelines, containerized deployments, and infrastructure-as-code so your team ships faster with fewer fires.",
  },
  {
    cmd: "audit",
    title: "Security Audits",
    cat: "infra",
    description:
      "We assess your systems for vulnerabilities, enforce compliance requirements, and harden your infrastructure before attackers find the gaps.",
  },
  {
    cmd: "recruit",
    title: "Technical Hiring",
    cat: "team",
    description:
      "We help you build world-class engineering teams — from defining roles and vetting candidates to structuring interviews that actually work.",
  },
  {
    cmd: "train",
    title: "Training & Enablement",
    cat: "team",
    description:
      "We upskill your team through hands-on workshops, code reviews, and mentoring — covering modern frameworks, best practices, and engineering culture.",
  },
  {
    cmd: "evaluate",
    title: "Technical Due Diligence",
    cat: "team",
    description:
      "We evaluate codebases, architectures, and engineering teams for investors and acquirers — delivering clear, actionable risk assessments.",
  },
];

const categories = [
  { key: "all", label: "* (all)" },
  { key: "ops", label: "ops/" },
  { key: "eng", label: "eng/" },
  { key: "infra", label: "infra/" },
  { key: "team", label: "team/" },
];

export default function Services() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");
  const [hoveredCmd, setHoveredCmd] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-section",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".services-panel",
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

  const filtered =
    filter === "all" ? services : services.filter((s) => s.cat === filter);
  const active = hoveredCmd ? services.find((s) => s.cmd === hoveredCmd) : null;

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] rounded-full bg-champagne/[0.01] blur-[160px] pointer-events-none -translate-x-1/2" />

      <div className="services-section max-w-6xl mx-auto">
        <div className="font-mono text-[13px] text-champagne/50 mb-4">
          $ z-soft --help
        </div>
        <h2 className="font-mono text-2xl md:text-4xl font-bold text-ivory mb-4">
          <span className="text-champagne text-glow-subtle">services</span> we
          offer
          <span className="cursor-blink">_</span>
        </h2>
        <p className="max-w-2xl font-mono text-[13px] leading-relaxed text-ivory/40 mb-10">
          We embed with your team to solve the hard problems — whether
          that&apos;s shipping software, fixing broken processes, or building
          the engineering culture you need to scale.
        </p>

        {/* Man page style terminal */}
        <div className="services-panel border border-champagne/15 bg-obsidian/80">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-champagne/10 bg-slate-dark/40">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-ivory/30">
              man z-soft-services
            </span>
            <span className="ml-auto font-mono text-[10px] text-ivory/15">
              Z-SOFT(1)
            </span>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-champagne/5 bg-slate-dark/20 overflow-x-auto">
            <span className="font-mono text-[10px] text-ivory/20 mr-2 shrink-0">
              FILTER:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-3 py-1 font-mono text-[10px] border transition-all duration-200 shrink-0 ${
                  filter === cat.key
                    ? "border-champagne/30 text-champagne bg-champagne/5"
                    : "border-transparent text-ivory/25 hover:text-ivory/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto font-mono text-[10px] text-ivory/15 shrink-0">
              {filtered.length} results
            </span>
          </div>

          {/* Split pane: list + detail */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] min-h-[420px]">
            {/* Left: command list */}
            <div className="border-b lg:border-b-0 lg:border-r border-champagne/5 overflow-y-auto max-h-[420px]">
              {filtered.map((service, i) => (
                <button
                  key={service.cmd}
                  onMouseEnter={() => setHoveredCmd(service.cmd)}
                  onClick={() => setHoveredCmd(service.cmd)}
                  className={`w-full text-left px-4 py-3 border-b border-champagne/[0.03] transition-all duration-150 group flex items-center gap-3 ${
                    hoveredCmd === service.cmd
                      ? "bg-champagne/5 border-l-2 border-l-champagne"
                      : "hover:bg-slate-dark/40 border-l-2 border-l-transparent"
                  }`}
                >
                  <span className="font-mono text-[10px] text-ivory/15 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-mono text-[12px] font-bold transition-colors ${
                      hoveredCmd === service.cmd
                        ? "text-champagne"
                        : "text-ivory/50 group-hover:text-ivory/70"
                    }`}
                  >
                    {service.cmd}
                  </span>
                  <span className="ml-auto font-mono text-[9px] text-ivory/15 uppercase">
                    {service.cat}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: detail pane */}
            <div className="p-6 md:p-8 bg-slate-dark/10 scan-line relative flex flex-col justify-center">
              {active ? (
                <div>
                  <div className="font-mono text-[10px] text-ivory/15 mb-5">
                    NAME
                  </div>
                  <div className="font-mono text-[10px] text-ivory/30 mb-1 pl-4">
                    z-soft-{active.cmd} — {active.title}
                  </div>

                  <div className="font-mono text-[10px] text-ivory/15 mt-6 mb-2">
                    SYNOPSIS
                  </div>
                  <div className="font-mono text-[12px] text-champagne pl-4 mb-6">
                    $ z-soft {active.cmd}{" "}
                    <span className="text-ivory/30">
                      [--scope=&lt;target&gt;]
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-ivory/15 mb-2">
                    DESCRIPTION
                  </div>
                  <p className="font-mono text-[12px] leading-relaxed text-ivory/40 pl-4">
                    {active.description}
                  </p>

                  <div className="mt-8 pt-4 border-t border-ivory/5 flex items-center gap-3">
                    <span className="px-2 py-0.5 font-mono text-[9px] border border-champagne/20 text-champagne/50">
                      {active.cat}
                    </span>
                    <span className="font-mono text-[9px] text-ivory/15">
                      v2.0 — Z-SOFT Services Manual
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="font-mono text-[12px] text-ivory/20 mb-2">
                    Select a command to view details
                  </div>
                  <div className="font-mono text-[10px] text-champagne/30">
                    ← hover or tap a service
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-champagne/5 bg-slate-dark/30 font-mono text-[10px] text-ivory/20">
            <span>Manual page z-soft-services(1)</span>
            <span>line 1/{filtered.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

