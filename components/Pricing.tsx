import React from "react";
import { Settings, CreditCard, Sparkles } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-18 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Investment</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Tailored Pricing for <span className="gold-gradient">Your Vision</span></h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We don't believe in one-size-fits-all. Every project is unique, and our pricing reflects that.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel p-10 md:p-16 rounded-[3rem] relative overflow-hidden border-gold/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -z-10" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                                    <Settings className="h-8 w-8 text-gold" />
                                </div>
                                <h4 className="text-white font-bold">Custom Requirements</h4>
                                <p className="text-gray-500 text-sm">Fees adjusted based on the complexity of your features.</p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                                    <Sparkles className="h-8 w-8 text-gold" />
                                </div>
                                <h4 className="text-white font-bold">Design Depth</h4>
                                <p className="text-gray-500 text-sm">Pricing scaled to the level of visual polish required.</p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                                    <CreditCard className="h-8 w-8 text-gold" />
                                </div>
                                <h4 className="text-white font-bold">Flexible Budget</h4>
                                <p className="text-gray-500 text-sm">We work with you to find a solution that fits your pocket.</p>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/5 text-center">
                            <p className="text-2xl font-bold text-white mb-8">
                                We will adjust pricing according to <span className="text-gold italic">YOUR</span> requirements and design.
                            </p>
                            <button className="gold-button px-10 py-4 rounded-full text-lg font-bold">
                                Get a Personalized Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
