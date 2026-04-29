import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Show Case Me | Premium Portfolio Websites for Students",
    template: "%s | Show Case Me"
  },
  description: "Accelerate your career with a professional personal website. We craft unique digital identities for students and young professionals. Premium designs, zero technical knowledge required.",
  keywords: ["portfolio website", "student portfolio", "personal branding", "web design for students", "career growth", "digital identity", "CV website"],
  authors: [{ name: "Show Case Me Team" }],
  creator: "Show Case Me",
  metadataBase: new URL("https://Show-Case-Me.github.io/student-services/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Show-Case-Me.github.io/student-services/",
    title: "Show Case Me | Professional Portfolio Websites",
    description: "Empowering students to showcase their talent with world-class personal websites.",
    siteName: "Show Case Me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Show Case Me | Professional Portfolio Websites",
    description: "Empowering students to showcase their talent with world-class personal websites.",
  },
  robots: {
    index: true,
    follow: true,
  }
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
        {children}
      </body>
    </html>
  );
}
