import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Protocol from "../components/Protocol";
import Clients from "../components/Clients";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeSelector from "../components/ThemeSelector";

export const metadata = {
  title: "ZSoft — Brutalist Signal",
};

/* Preset C — "Brutalist Signal" (Raw Precision) — LIGHT THEME
   Paper #E8E4DD (Primary), Signal Red #E63B2E (Accent),
   Off-white #F5F3EE (Background), Black #111111 (Text/Dark)
   Fonts: Space Grotesk, DM Serif Display Italic, Space Mono */
const themeVars = {
  "--color-obsidian": "#F5F3EE",
  "--color-champagne": "#E63B2E",
  "--color-champagne-light": "#F04D3F",
  "--color-ivory": "#111111",
  "--color-slate-dark": "#E8E4DD",
  "--color-slate-mid": "#D5D1C9",
  "--font-sans": "var(--font-space-grotesk), system-ui, sans-serif",
  "--font-display": "var(--font-dm-serif), Georgia, serif",
  "--font-mono": "var(--font-space-mono), 'Courier New', monospace",
};

export default function BrutalistPage() {
  return (
    <div style={themeVars} className="min-h-screen bg-[var(--color-obsidian)]">
      <style>{`
        /* Override body and scrollbar for light theme */
        body { background: #F5F3EE; color-scheme: light; }
        body::before { opacity: 0.02; }
        ::-webkit-scrollbar-track { background: #F5F3EE; }
        ::-webkit-scrollbar-thumb { background: #D5D1C9; }
        ::-webkit-scrollbar-thumb:hover { background: #E63B2E; }
        ::selection { background: #E63B2E; color: #F5F3EE; }
      `}</style>
      <main>
        <Navbar />
        <Hero />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
        </div>
        <Features />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
        </div>
        <Services />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
        </div>
        <Protocol />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
        </div>
        <Clients />
        <Philosophy />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
        </div>
        <Contact />
        <Footer />
        <ThemeSelector />
      </main>
    </div>
  );
}
