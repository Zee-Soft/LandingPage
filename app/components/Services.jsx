"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Workflow,
  BookOpen,
  Search,
  Bug,
  Code2,
  Users,
  GraduationCap,
  Cloud,
  GitBranch,
  ShieldCheck,
  ClipboardCheck,
  Cable,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Workflow,
    title: "Process Optimization",
    description:
      "We analyze your existing workflows end-to-end — then redesign them for speed, clarity, and scale. Less friction, more output.",
  },
  {
    icon: BookOpen,
    title: "Guidelines & Standards",
    description:
      "We create engineering guidelines, coding standards, and operational playbooks that keep your team aligned and your codebase clean.",
  },
  {
    icon: Search,
    title: "Issue Identification",
    description:
      "We dig into your systems to surface hidden bottlenecks, performance gaps, and architectural risks before they become costly problems.",
  },
  {
    icon: Bug,
    title: "Root Cause Analysis",
    description:
      "When things break, we don't patch — we trace the problem to its source, fix it permanently, and put safeguards in place so it never happens again.",
  },
  {
    icon: Code2,
    title: "Application Development",
    description:
      "From greenfield builds to modernizing legacy systems — we design, develop, and ship production-grade software tailored to your business.",
  },
  {
    icon: Users,
    title: "Technical Hiring",
    description:
      "We help you build world-class engineering teams — from defining roles and vetting candidates to structuring interviews that actually work.",
  },
  {
    icon: GraduationCap,
    title: "Training & Enablement",
    description:
      "We upskill your team through hands-on workshops, code reviews, and mentoring — covering modern frameworks, best practices, and engineering culture.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "We architect, migrate, and optimize your cloud environments — whether it's AWS, Azure, or GCP — so you get reliability at the right cost.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "We build automated pipelines, containerized deployments, and infrastructure-as-code so your team ships faster with fewer fires.",
  },
  {
    icon: ShieldCheck,
    title: "Security Audits",
    description:
      "We assess your systems for vulnerabilities, enforce compliance requirements, and harden your infrastructure before attackers find the gaps.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Due Diligence",
    description:
      "We evaluate codebases, architectures, and engineering teams for investors and acquirers — delivering clear, actionable risk assessments.",
  },
  {
    icon: Cable,
    title: "API Design & Integration",
    description:
      "We design clean, versioned APIs and integrate third-party systems — connecting your platforms into a seamless, reliable data flow.",
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
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
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 75%" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

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
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-obsidian overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-champagne/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="services-heading mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-4">
            How We Help
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-ivory">
            More than
            <br />
            <span className="font-display italic text-champagne">code.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ivory/50">
            We embed with your team to solve the hard problems — whether
            that&apos;s shipping software, fixing broken processes, or building
            the engineering culture you need to scale.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card card-glow card-shimmer group relative p-8 rounded-[2rem] bg-slate-dark/30 border border-white/8 hover:border-champagne/20 transition-all duration-500 hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-champagne/10 group-hover:bg-champagne/20 transition-colors duration-300">
                  <service.icon
                    className="w-5 h-5 text-champagne"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-ivory group-hover:text-champagne transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-ivory/50">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
