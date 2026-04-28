import React from "react";
import { Briefcase, GraduationCap, Share2, Rocket } from "lucide-react";

export default function Reasons() {
    const reasons = [
        {
            title: "Land Better Opportunities",
            description: "In today's competitive landscape, a CV isn't enough. A personal website showcases your projects, certifications, and personality to recruiters 24/7.",
            icon: Briefcase,
        },
        {
            title: "Digital Portfolio Authority",
            description: "Convert your academic achievements into a professional portfolio. Show, don't just tell, what you are capable of achieving.",
            icon: GraduationCap,
        },
        // {
        //     title: "Personal Branding",
        //     description: "Own your 'google search'. Control the narrative of your professional identity and stand out as a modern, forward-thinking professional.",
        //     icon: Share2,
        // },
        {
            title: "Future Proof Your Career",
            description: "Whether you're looking for internships or starting a side hustle, your website is the foundation of your digital presence.",
            icon: Rocket,
        },
    ];

    return (
        <section id="reasons" className="py-18 pt-18 relative overflow-hidden scroll-mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Why You Need This</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Career <span className="gold-gradient">Instantly</span></h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Stop blending in. A professional website is the single most effective way to validate your skills and secure your future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="glass-card p-8 rounded-3xl flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -z-10 group-hover:bg-gold/10 transition-colors" />
                            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <reason.icon className="h-8 w-8 text-gold" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{reason.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
