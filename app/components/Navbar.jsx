"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setScrolled(rect.bottom < 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-8 px-4 md:px-8 py-3 rounded-[2rem] transition-all duration-700 ease-out ${
        scrolled
          ? "bg-ivory/70 backdrop-blur-2xl border border-slate-dark/10 shadow-2xl shadow-black/10"
          : "bg-white/5 backdrop-blur-sm border border-white/10"
      }`}
    >
      <a
        href="#"
        className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
          scrolled ? "text-obsidian" : "text-ivory"
        }`}
      >
        ZSoft
      </a>

      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-[13px] font-medium tracking-wide uppercase hover-lift transition-colors duration-300 ${
              scrolled
                ? "text-slate-dark hover:text-champagne"
                : "text-ivory/70 hover:text-champagne"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-[1.5px] transition-all duration-300 ${
            scrolled ? "bg-obsidian" : "bg-ivory"
          } ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
        />
        <span
          className={`block w-5 h-[1.5px] transition-all duration-300 ${
            scrolled ? "bg-obsidian" : "bg-ivory"
          } ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-[1.5px] transition-all duration-300 ${
            scrolled ? "bg-obsidian" : "bg-ivory"
          } ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
        />
      </button>

      <a
        href="#contact"
        className="hidden md:inline-flex btn-magnetic rounded-full px-5 py-2 text-[13px] font-semibold bg-champagne text-obsidian"
      >
        <span className="btn-slide bg-champagne-light rounded-full" />
        <span className="relative z-10">Start a Project</span>
      </a>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-3 rounded-[1.5rem] p-6 flex flex-col gap-4 md:hidden ${
            scrolled
              ? "bg-ivory/90 backdrop-blur-2xl border border-slate-dark/10"
              : "bg-obsidian/90 backdrop-blur-2xl border border-white/10"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium tracking-wide uppercase ${
                scrolled
                  ? "text-slate-dark hover:text-champagne"
                  : "text-ivory/70 hover:text-champagne"
              } transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-magnetic rounded-full px-5 py-2.5 text-[13px] font-semibold bg-champagne text-obsidian text-center mt-2"
          >
            <span className="btn-slide bg-champagne-light rounded-full" />
            <span className="relative z-10">Start a Project</span>
          </a>
        </div>
      )}
    </nav>
  );
}

