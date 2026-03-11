import {
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Space_Grotesk,
  Lora,
  DM_Serif_Display,
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Space_Mono,
  Sora,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://z-soft.dev"),
  title: {
    default: "Z-Soft — Senior Engineers, On Demand",
    template: "%s | Z-Soft",
  },
  description:
    "Z-Soft embeds senior engineers directly into your team — shipping production code from week one. Technical contracting for startups, scale-ups, and enterprise.",
  keywords: [
    "software engineering",
    "contract engineers",
    "senior developers",
    "staff augmentation",
    "technical contracting",
    "freelance engineers",
    "React",
    "Node.js",
    "Go",
    "Kubernetes",
    "cloud infrastructure",
    "Z-Soft",
  ],
  authors: [{ name: "Z-Soft" }],
  creator: "Z-Soft",
  openGraph: {
    title: "Z-Soft — Senior Engineers, On Demand",
    description:
      "Z-Soft embeds senior engineers directly into your team — shipping production code from week one.",
    url: "https://z-soft.dev",
    siteName: "Z-Soft",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z-Soft — Senior Engineers, On Demand",
    description:
      "Z-Soft embeds senior engineers directly into your team — shipping production code from week one.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://z-soft.dev",
  },
};

const fontClasses = [
  inter,
  playfair,
  jetbrains,
  spaceGrotesk,
  lora,
  dmSerif,
  jakarta,
  cormorant,
  ibmPlex,
  spaceMono,
  sora,
  instrumentSerif,
]
  .map((f) => f.variable)
  .join(" ");

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${fontClasses} antialiased`}>{children}</body>
    </html>
  );
}
