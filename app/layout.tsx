import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Show Case Me",
  description: "Accelerate your career with a professional personal website. Crafting digital identities for non-technical students. Own your future today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white relative`}
      >
        <CursorFollower />
        
        {/* Background Blobs for Glassmorphism Effect */}
        <div className="bg-blob top-[-10%] left-[-10%] bg-[#D4AF37] opacity-20" />
        <div className="bg-blob bottom-[-10%] right-[-10%] bg-[#C5A021] opacity-20 [animation-delay:-5s]" />
        <div className="bg-blob top-[40%] right-[10%] bg-[#FFD700] opacity-10 [animation-delay:-10s]" />
        
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
