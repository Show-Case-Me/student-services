"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only change visibility if we've scrolled more than 10 pixels (threshold)
          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 refractive-glass rounded-2xl transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Sparkles className="h-8 w-8 text-gold group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-2xl font-bold gold-gradient tracking-tighter">
                SHOW CASE ME
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-5">
              <Link href={isHome ? "#reasons" : "/#reasons"} className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Why You Need It</Link>
              <Link href={isHome ? "#services" : "/#services"} className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
              <Link href={isHome ? "#pricing" : "/#pricing"} className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio and Presets</Link>
              <Link href="/submit-request" className="gold-button px-6 py-2 rounded-full text-sm font-semibold transition-all">
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-gold-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden refractive-glass border-t border-white/10 animate-in slide-in-from-top duration-300 rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/portfolio" className="text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium transition-colors">Portfolio and Presets</Link>
            <Link href={isHome ? "#reasons" : "/#reasons"} className="text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium transition-colors">Why You Need It</Link>
            <Link href={isHome ? "#services" : "/#services"} className="text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium transition-colors">Services</Link>
            <Link href={isHome ? "#pricing" : "/#pricing"} className="text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium transition-colors">Pricing</Link>
            <Link href="/submit-request" className="gold-button block px-3 py-2 rounded-md text-base font-medium text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
