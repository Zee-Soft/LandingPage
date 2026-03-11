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
  title: "ZSoft — Organic Tech",
};

/* Preset A — "Organic Tech" (Clinical Boutique)
   Moss #2E4036 (Primary), Clay #CC5833 (Accent),
   Cream #F2F0E9 (Background/text), Charcoal #1A1A1A (Dark bg)
   Fonts: Plus Jakarta Sans, Cormorant Garamond Italic, IBM Plex Mono */
const themeVars = {
  "--color-obsidian": "#1A1A1A",
  "--color-champagne": "#CC5833",
  "--color-champagne-light": "#D9714F",
  "--color-ivory": "#F2F0E9",
  "--color-slate-dark": "#2E4036",
  "--color-slate-mid": "#3A5245",
  "--font-sans": "var(--font-jakarta), system-ui, sans-serif",
  "--font-display": "var(--font-cormorant), Georgia, serif",
  "--font-mono": "var(--font-ibm-plex), 'Courier New', monospace",
};

export default function OrganicPage() {
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
