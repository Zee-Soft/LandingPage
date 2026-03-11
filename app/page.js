import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Protocol from "./components/Protocol";
import Clients from "./components/Clients";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";

export default function Home() {
  return (
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
  );
}

