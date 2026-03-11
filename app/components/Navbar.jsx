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
    { label: "services", href: "#services" },
    { label: "process", href: "#process" },
    { label: "output", href: "#output" },
    { label: "clients", href: "#clients" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-sm border-champagne/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-champagne">
          <span className="text-ivory/40">~/</span>z-soft
          <span className="cursor-blink text-champagne">_</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[13px] text-ivory/50 hover:text-champagne transition-colors duration-200"
            >
              <span className="text-champagne/50">./</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-mono text-[13px] text-champagne"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "[x]" : "[=]"}
        </button>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-[13px] px-4 py-2 border border-champagne/40 text-champagne hover:bg-champagne/10 transition-all duration-200"
        >
          $ start_project
        </a>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-champagne/10 bg-obsidian/95 backdrop-blur-sm px-6 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-[13px] text-ivory/50 hover:text-champagne py-2 transition-colors"
            >
              <span className="text-champagne/50">$ cd </span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block font-mono text-[13px] text-champagne py-2 mt-2 border-t border-champagne/10 pt-4"
          >
            $ start_project
          </a>
        </div>
      )}
    </nav>
  );
}

