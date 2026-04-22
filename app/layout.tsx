import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AOSProvider } from "./components/AOSProvider";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "../public/images/whatsapp.svg"

export const metadata: Metadata = {
  title: "Webtechnomind IT Solutions Private Limited | AI Solutions, Software Development Digital Marketing India",
  description:
    "We deliver next-gen on-demand solutions powered by AI. 13+ years, 350+ products, 96% satisfaction rate across 12+ countries, Meta Ads, Google Ads, SEO, SMM, Content Marketing, Lead Generation, Brand Management, Specialized eCommerce SEO Services, Google Ad Campaigns, Content Marketing, Paid Advertising",
  icons: {
    icon: [
      {
        url: "/images/icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/images/icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AOSProvider />
        <Navbar />
        {children}
        <Footer />

        <div className="animate-ping bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 fixed bottom-6.5 right-6.5 z-50" />
        <Link href="https://api.whatsapp.com/send?phone=918777639601" target="_blank" className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-500 w-15 h-15 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <Image src={whatsapp} alt="whatsapp" width={30} height={30} />
          </div>
        </Link>
      </body>
    </html>
  );
}
