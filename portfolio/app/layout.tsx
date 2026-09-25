import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riski Eka Nanda — KimerAI | Coding & AI Speaker",
  description: "Teknik Informatika UMK • Builder of FreeLLMAPI (200+ models), 9Router (198 models), Hermes Agent (118+ skills). I teach teams to ship AI that actually works.",
  openGraph: {
    title: "Riski Eka Nanda — KimerAI",
    description: "Builder • Speaker • AI Engineer — FreeLLMAPI • 9Router • Hermes Agent",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-white selection:bg-[#00e5ff] selection:text-[#0a0a0f]">
        {children}
      </body>
    </html>
  );
}
