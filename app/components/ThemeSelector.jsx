"use client";

import { useState } from "react";

const themes = [
  {
    name: "Midnight Luxe",
    href: "/",
    colors: ["#0D0D12", "#C9A84C", "#FAF8F5"],
  },
  {
    name: "Organic Tech",
    href: "/neon",
    colors: ["#1A1A1A", "#CC5833", "#F2F0E9"],
  },
  {
    name: "Brutalist Signal",
    href: "/arctic",
    colors: ["#F5F3EE", "#E63B2E", "#111111"],
  },
  {
    name: "Vapor Clinic",
    href: "/ember",
    colors: ["#0A0A14", "#7B61FF", "#F0EFF4"],
  },
];

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      {open && (
        <div className="mb-3 flex flex-col gap-2 items-end">
          {themes.map((theme) => (
            <a
              key={theme.name}
              href={theme.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 group"
            >
              <div className="flex gap-1">
                {theme.colors.map((c) => (
                  <span
                    key={c}
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="text-[12px] font-mono tracking-wide text-ivory/70 group-hover:text-ivory transition-colors">
                {theme.name}
              </span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 hover:border-champagne/30 transition-all duration-300"
        aria-label="Switch theme"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-champagne"
        >
          <circle
            cx="4"
            cy="4"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle
            cx="12"
            cy="4"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle
            cx="4"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <span className="text-[12px] font-mono tracking-wider text-ivory/60">
          Styles
        </span>
      </button>
    </div>
  );
}

