"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, FileText, Layout, ArrowLeft, Copy, Check } from "lucide-react";

export default function SubmitRequest() {
  const [copied, setCopied] = useState(false);
  const email = "showcaseme00@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      title: "Email Us",
      description: "Send an email to showcaseme00@gmail.com to start your project. This is our official contact point for all new requests.",
      icon: Mail,
      details: "showcaseme00@gmail.com"
    },
    {
      title: "Include Your Details",
      description: "In your email, please attach your resume and provide any additional information you'd like to feature on your portfolio website.",
      icon: FileText,
      details: "Resume, Project links, Bio, etc."
    },
    {
      title: "Choose Your Design",
      description: "Tell us about your design preferences. You can list specific elements you want or choose from our presets available on our Portfolio and Presets page.",
      icon: Layout,
      link: {
        text: "View Presets",
        href: "/portfolio"
      }
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-dark/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-gold mb-12 transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Submit Your <span className="gold-gradient">Request</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Follow these simple steps to get your professional portfolio website up and running.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.03] transition-all">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-5 rounded-2xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gold font-bold text-sm tracking-widest uppercase">Step {index + 1}</span>
                    <h2 className="text-3xl font-bold text-white tracking-tight">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {step.details && (
                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gold-secondary font-mono text-sm">
                      {step.details}
                    </div>
                  )}

                  {step.link && (
                    <Link 
                      href={step.link.href}
                      className="inline-flex items-center text-gold hover:text-white font-bold transition-colors"
                    >
                      {step.link.text} <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-panel p-10 rounded-[3rem] text-center border border-gold/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start?</h3>
          <p className="text-gray-400 mb-8">Click the button below to copy our email address and reach out to us!</p>
          <button 
            onClick={handleCopy}
            className="gold-button px-10 py-4 rounded-full text-lg font-bold inline-flex items-center group min-w-[240px] justify-center transition-all"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5 animate-in zoom-in duration-300" />
                Copied Address!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Copy Email Address
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
