import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section id="contact" className="py-38 mb-28 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-dark/10 blur-[100px] -z-10" />

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        Ready to Claim Your <br />
                        <span className="gold-gradient">Digital Throne?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Join 500+ students who have already accelerated their careers with a premium personal website.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/submit-request" className="gold-button px-12 py-5 rounded-full text-xl font-bold flex items-center">
                            Get Started Now
                        </Link>
                    </div>

                    <p className="mt-10 text-gray-500 flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" /> showcaseme00@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
}
