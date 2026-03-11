import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Protocol from "./components/Protocol";
import Clients from "./components/Clients";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function TerminalDivider() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-16 lg:px-24 py-2 overflow-hidden">
      <div className="flex items-center gap-2 font-mono text-[10px] text-champagne/10">
        <span>─</span>
        <span className="flex-1 border-t border-dashed border-champagne/[0.06]" />
        <span className="text-champagne/15">EOF</span>
        <span className="flex-1 border-t border-dashed border-champagne/[0.06]" />
        <span>─</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TerminalDivider />
      <Services />
      <TerminalDivider />
      <Protocol />
      <TerminalDivider />
      <Features />
      <TerminalDivider />
      <Clients />
      <TerminalDivider />
      <Philosophy />
      <TerminalDivider />
      <Contact />
      <Footer />
    </main>
  );
}

