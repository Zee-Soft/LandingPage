import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Protocol from "./components/Protocol";
import Clients from "./components/Clients";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Z-Soft",
  url: "https://z-soft.dev",
  email: "info@z-soft.dev",
  description:
    "Z-Soft embeds senior engineers directly into your team — shipping production code from week one. Technical contracting for startups, scale-ups, and enterprise.",
  serviceType: "Software Engineering & Technical Contracting",
  areaServed: "Worldwide",
  knowsAbout: [
    "React",
    "Node.js",
    "Go",
    "Kubernetes",
    "Cloud Infrastructure",
    "Full-Stack Development",
    "DevOps",
    "System Architecture",
  ],
};

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <TerminalDivider />
        <Services />
        <TerminalDivider />
        <Protocol />
        <TerminalDivider />
        <Clients />
        <TerminalDivider />
        <Philosophy />
        <TerminalDivider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
