import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { PRESETS } from "@/constants/presets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio and Presets",
  description: "Explore our collection of premium portfolio presets for students and researchers. Choose a design that fits your professional identity.",
};

export default function Portfolio() {
  const presets = PRESETS;

  // const projects = [
  // ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-gold mb-12 transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Portfolio and <span className="gold-gradient">Presets</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Choose from our professional presets or browse our custom portfolio of unique digital identities.
          </p>
        </div>

        {/* Presets Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-gold rounded-full" /> Our Presets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presets.map((preset, index) => (
              <div key={index} className="glass-card rounded-[2rem] overflow-hidden group border border-gold/20">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={preset.image}
                    alt={preset.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <Link
                    href={preset.link}
                    target="_blank"
                    className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-gold hover:text-black transition-all transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
                <div className="p-8">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{preset.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{preset.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{preset.description}</p>
                  <Link href={preset.link} target="_blank" className="text-sm font-semibold text-gold hover:text-white flex items-center transition-colors">
                    Preview Preset <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        {/* <section>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-white/20 rounded-full" /> Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card rounded-[2rem] overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <Link
                    href={project.link}
                    className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-gold hover:text-black transition-all transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
                <div className="p-8">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <Link href={project.link} className="text-sm font-semibold text-gray-400 hover:text-white flex items-center transition-colors">
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}