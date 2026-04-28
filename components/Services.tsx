import React from "react";
import { Code, Palette, Search, Smartphone } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Custom Design",
            description: "No templates. We build a unique digital home that matches your personal brand and aspirations perfectly.",
            icon: Palette,
        },
        {
            title: "Full Development",
            description: "Hand-coded with the latest technologies (Next.js, React) for blazing fast performance.",
            icon: Code,
        },
        {
            title: "Mobile Optimization",
            description: "Your website will look stunning on every device, from iPhones to high-res desktop monitors.",
            icon: Smartphone,
        },
        // {
        //     title: "SEO Ready",
        //     description: "We ensure you're discoverable by recruiters and search engines from day one.",
        //     icon: Search,
        // },
    ];

    return (
        <section id="services" className="py-24 mt-18 pb-50 bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Our Craft</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Solutions for <span className="gold-gradient">Ambitious</span> Students</h3>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We take the technical burden off your shoulders. You provide the vision, we provide the code. Our "By Us" model ensures you get a professional-grade website without needing to learn a single line of code.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Personalized Strategy Session", "Domain & Hosting Setup", "Ongoing Technical Support", "Portfolio Optimization"].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <div className="mr-3 h-2 w-2 bg-gold rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="glass-card p-8 rounded-2xl">
                                <service.icon className="h-10 w-10 text-gold mb-6" />
                                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
