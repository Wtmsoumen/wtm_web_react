import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AOSProvider } from "./components/AOSProvider";

export const metadata: Metadata = {
  title: "Wtm Technologies - Next-gen AI & On-Demand Solutions",
  description:
    "We deliver next-gen on-demand solutions powered by AI. 10+ years, 350+ products, 96% satisfaction rate across 12+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AOSProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
