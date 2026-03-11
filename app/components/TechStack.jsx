"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  "TypeScript",
  "JavaScript",
  "Golang",
  "Rust",
  "Python",
  "C++",
  "C#",
  "C",
  "Java",
  "Lua",
  "Ruby",
  "Groovy",
];

const frameworks = [
  "React",
  "Next.js",
  "Angular",
  "Express",
  ".NET",
  "Micronaut",
  "Ruby on Rails",
  "Expo",
  "Qt",
  "OpenCV",
];

const infrastructure = [
  "Kubernetes",
  "Terraform",
  "CI/CD Pipelines",
  "Docker",
  "Event-Driven Architecture",
  "Distributed Systems",
  "Low-Latency Infrastructure",
  "Parallel Computing",
];

const domains = [
  "Quantitative Trading",
  "Real-Time Data Platforms",
  "Automotive Networking",
  "AI/ML Integration",
  "Computer Vision",
  "Firmware Engineering",
  "Data Mining",
  "Security Systems",
];

export default function TechStack() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-heading",
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
        ".tech-group",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const groups = [
    { title: "Languages", items: languages },
    { title: "Frameworks", items: frameworks },
    { title: "Infrastructure", items: infrastructure },
    { title: "Domains", items: domains },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-obsidian border-t border-white/[0.03]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="tech-heading mb-20">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-champagne block mb-4">
            Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-ivory">
            Technical
            <br />
            <span className="font-display italic text-champagne">
              expertise.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {groups.map((group) => (
            <div key={group.title} className="tech-group">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne/50 mb-6">
                {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[14px] text-ivory/50 hover:text-champagne hover-lift transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years Delivering" },
            { value: "12+", label: "Languages" },
            { value: "4", label: "Industries Served" },
            { value: "100%", label: "Delivery Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-[1.5rem] bg-slate-dark/20 border border-white/[0.03]"
            >
              <div className="text-3xl md:text-4xl font-bold text-champagne mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

