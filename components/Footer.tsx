import React from "react";
import { Instagram, Twitter, Linkedin, Github, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 relative overflow-hidden border-t border-white/5 bg-transparent">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center space-x-2 text-white">
                        <Sparkles className="h-6 w-6 text-gold" />
                        <span className="text-xl font-bold tracking-tighter uppercase gold-gradient">Show Case Me</span>
                    </div>

                    {/* <div className="flex space-x-8">
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Github className="h-5 w-5" /></a>
                    </div> */}

                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Show Case Me. All rights reserved.
                    </div>
                </div>

                {/* <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h5>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gold transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Portfolios</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Integrations</a></li>
                        </ul>
                    </div> */}
                {/* <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Company</h5>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
                        </ul>
                    </div> */}
                {/* <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h5>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Support</a></li>
                        </ul>
                    </div> */}
                {/* <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h5>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gold transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div> */}
                {/* </div> */}
            </div>
        </footer>
    );
}
