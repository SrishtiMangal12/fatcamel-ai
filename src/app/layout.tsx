import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Fatcamel AI — Deploy AI Agents That Eliminate 70% of Manual Work",
  description:
    "Fatcamel AI builds and deploys production-grade AI agents for sales, support, operations, and outreach — cutting manual work by up to 70% for enterprise teams.",
  metadataBase: new URL("https://www.fatcamel.ai"),
  openGraph: {
    title: "Fatcamel AI — Autonomous Agents for the Enterprise",
    description:
      "We design, build, and deploy AI agent fleets that run your busywork so your team runs the business.",
    url: "https://www.fatcamel.ai",
    siteName: "Fatcamel AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-base text-slate-200 antialiased">
        <div className="relative min-h-screen overflow-x-hidden bg-grid-glow">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
