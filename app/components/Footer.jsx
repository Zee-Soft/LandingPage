export default function Footer() {
  return (
    <footer className="relative bg-slate-dark rounded-t-[4rem] pt-20 pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-ivory mb-3">ZSoft</h3>
            <p className="text-[14px] leading-relaxed text-ivory/50 max-w-sm">
              We build products that ship. From concept to production, trusted
              since 2020.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne/50 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {["Services", "Process", "Clients", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[14px] text-ivory/40 hover:text-champagne hover-lift transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-champagne/50 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/ZNackasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-ivory/40 hover:text-champagne hover-lift transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ZNackasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-ivory/40 hover:text-champagne hover-lift transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:info@z-soft.dev"
                className="text-[14px] text-ivory/40 hover:text-champagne hover-lift transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-ivory/30">
              System Operational
            </span>
          </div>

          <p className="font-mono text-[11px] text-ivory/20">
            &copy; 2020–2026 ZSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

