"use client";

import { useEffect, useState } from "react";

function Uptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const h = pad(Math.floor(seconds / 3600));
  const m = pad(Math.floor((seconds % 3600) / 60));
  const s = pad(seconds % 60);

  return (
    <span>
      {h}:{m}:{s}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-dark border-t border-champagne/10 overflow-hidden">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto pt-14 pb-8 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-lg font-bold text-champagne mb-3">
              ~/z-soft<span className="cursor-blink">_</span>
            </h3>
            <p className="font-mono text-[12px] leading-relaxed text-ivory/40 max-w-sm">
              We build products that ship. From concept to production, trusted
              since 2020.
            </p>
            {/* Ascii art mini */}
            <div className="mt-4 font-mono text-[9px] text-champagne/15 leading-tight hidden md:block">
              <pre className="leading-tight">{"┌──────────────────────┐\n│  Z - S O F T  v4.2.0 │\n└──────────────────────┘"}</pre>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] text-champagne/50 mb-4">
              # navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["Services", "Process", "Clients", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-mono text-[12px] text-ivory/30 hover:text-champagne transition-colors duration-300 group"
                >
                  <span className="text-champagne/30 mr-1 group-hover:text-champagne transition-colors">
                    $
                  </span>
                  cd ./{link.toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[11px] text-champagne/50 mb-4">
              # connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:5862229099"
                className="font-mono text-[12px] text-ivory/30 hover:text-champagne transition-colors duration-300"
              >
                tel://586-222-9099
              </a>
              <a
                href="mailto:info@z-soft.dev"
                className="font-mono text-[12px] text-ivory/30 hover:text-champagne transition-colors duration-300"
              >
                mailto://info@z-soft.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal status bar */}
      <div className="border-t border-champagne/5 bg-obsidian/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 font-mono text-[10px] text-ivory/20">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              all systems operational
            </span>
            <span className="hidden md:inline">│</span>
            <span className="hidden md:inline">
              session: <Uptime />
            </span>
            <span className="hidden md:inline">│</span>
            <span className="hidden md:inline">pid: 1</span>
          </div>

          <p className="font-mono text-[10px] text-ivory/15">
            &copy; 2020–{new Date().getFullYear()} Z-Soft — exit code: 0
          </p>
        </div>
      </div>
    </footer>
  );
}

