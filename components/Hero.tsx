import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-dark/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    {/* <div className="inline-flex items-center px-4 py-2 rounded-full glass-gold-panel text-gold-secondary text-sm font-medium mb-8 animate-pulse">
                        <Zap className="h-4 w-4 mr-2" />
                        Launch Your Digital Identity in 24 Hours
                    </div> */}

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 bg-clip-text">
                        Build Your <span className="gold-gradient">Future</span>,<br />
                        Not Just a Website.
                    </h1>

                    <p className="max-w-2xl mx-auto text-l text-gray-400 mb-10 leading-relaxed">
                        We empower non-technical students to showcase their talent, projects, and potential with world-class, premium websites. Crafted by experts, owned by you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/submit-request" className="gold-button px-10 py-4 rounded-full text-lg font-bold flex items-center group">
                            Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/portfolio" className="px-10 py-4 rounded-full text-lg font-semibold text-white glass-panel hover:bg-white/10 transition-all">
                            View Portfolio
                        </Link>
                    </div>

                    {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { label: "Client Satisfaction", value: "99%", icon: Shield },
                            { label: "Global Reach", value: "24/7", icon: Globe },
                            { label: "Project Delivery", value: "24h", icon: Zap },
                            { label: "Expert Craftsmanship", value: "100%", icon: ArrowRight },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center p-6 rounded-2xl glass-card">
                                <stat.icon className="h-6 w-6 text-gold mb-2" />
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest text-[10px]">{stat.label}</span>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}
