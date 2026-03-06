import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
