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
  title: "ZSoft — Vapor Clinic",
};

/* Preset D — "Vapor Clinic" (Sensory Lab) — DARK THEME
   Deep Void #0A0A14 (Primary), Plasma #7B61FF (Accent),
   Ghost #F0EFF4 (Background/text), Graphite #18181B (Text/Dark)
   Fonts: Sora, Instrument Serif, Fira Code */
const themeVars = {
  "--color-obsidian": "#0A0A14",
  "--color-champagne": "#7B61FF",
  "--color-champagne-light": "#9580FF",
  "--color-ivory": "#F0EFF4",
  "--color-slate-dark": "#18181B",
  "--color-slate-mid": "#222230",
  "--font-sans": "var(--font-sora), system-ui, sans-serif",
  "--font-display": "var(--font-instrument), Georgia, serif",
  "--font-mono": "var(--font-fira-code), 'Courier New', monospace",
};

export default function VaporPage() {
  return (
    <div style={themeVars} className="min-h-screen bg-[var(--color-obsidian)]">
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
