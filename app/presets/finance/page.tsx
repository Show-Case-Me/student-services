"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  FileText,
  Award,
  ChevronRight,
  ExternalLink,
  Code2,
  PieChart,
  BarChart3,
  Globe,
  ArrowLeft
} from "lucide-react";

const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-12"
  >
    <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-serif font-bold text-white">{title}</h2>
    <div className="flex-1 h-[1px] bg-white/10 ml-4" />
  </motion.div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`glass p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function FinancePortfolio() {
  const reports = [
    {
      title: "Global Textiles Analysis",
      description: "Evaluated capital structure and dividend policy using CAPM and WACC models to recommend optimal value-enhancing strategies.",
      tags: ["Financing", "Valuation", "Strategy"]
    },
    {
      title: "Consumer Goods Assessment",
      description: "Comprehensive financial assessment of industry leaders, analyzing statements to inform an optimized financing mix reducing capital costs.",
      tags: ["Financial Analysis", "Benchmarking", "Optimization"]
    },
    {
      title: "FinTech Transition Study",
      description: "Analyzed the shift to digital-first banking, identifying compliance gaps and proposing strategic models for modern financial conversion.",
      tags: ["FinTech", "Compliance", "Strategic Models"]
    },
    {
      title: "Commodity Financial Model",
      description: "Developed a full-scale model including IS/BS/CF forecasts, macro-driven assumptions, and intrinsic value derivation.",
      tags: ["Modelling", "Forecasting", "Equity Research"]
    }
  ];

  const experience = [
    {
      role: "Teaching Assistant - Financial Analytics",
      company: "Global Finance Institute",
      period: "August 2025 – Present",
      bullets: [
        "Develop and deliver lecture materials and assessments for over 120 undergraduate students.",
        "Oversee course operations, streamlining workflows for senior department faculty."
      ]
    },
    {
      role: "Audit Intern",
      company: "International Consulting Firm",
      period: "July 2025 – August 2025",
      bullets: [
        "Conducted financial statement tie-outs and variance checks for regional banking clients.",
        "Benchmarked disclosures against industry standards to enhance audit precision."
      ]
    }
  ];

  return (
    <div className="finance-theme flex flex-col min-h-screen bg-grid bg-[#050505]">
      {/* Back to Site Link */}
      <div className="fixed top-24 left-6 z-[60]">
        <Link href="/portfolio" className="flex items-center gap-2 px-4 py-2 glass rounded-full shadow-lg hover:bg-white/10 transition-all text-[#D4AF37] font-semibold border border-[#D4AF37]/20">
          <ArrowLeft className="w-4 h-4" /> Back to Presets
        </Link>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-serif font-bold tracking-tight text-gradient">A.T.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#education" className="hover:text-[#D4AF37] transition-colors">Education</a>
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors">Reports</a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">Skills</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full bg-[#D4AF37] text-black text-sm font-bold hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D4AF37]/20">
              BS Finance & Data | 2027 Candidate
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white">
              Alex <span className="text-gradient">Thompson</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-2xl">
              A finance enthusiast and analyst dedicated to creating value through meticulous
              financial modelling, audit precision, and strategic economic analysis.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#D4AF37]" />
                <span>alex.thompson@finance.edu</span>
              </div>
              <a href="#" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <LinkedInIcon size={16} className="text-[#D4AF37]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
        {/* Decorative Background */}
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10 -z-0"></div>
      </section>

      <main className="container mx-auto px-6 py-20 space-y-32">

        {/* Education Section */}
        <section id="education">
          <SectionHeader title="Academic Qualifications" icon={GraduationCap} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="text-[#D4AF37] font-bold mb-2">2023 - 2027</div>
              <h3 className="text-xl font-bold mb-1 text-white">BS Finance & Accounting</h3>
              <p className="text-white/50 text-sm mb-4">Global Institute of Finance</p>
              <div className="text-2xl font-serif font-bold text-gradient">3.8 CGPA</div>
            </Card>
            <Card>
              <div className="text-[#D4AF37] font-bold mb-2">2023</div>
              <h3 className="text-xl font-bold mb-1 text-white">Pre-University Program</h3>
              <p className="text-white/50 text-sm mb-4">Elite Academy</p>
              <div className="text-lg font-bold text-white">Distinction Honors</div>
            </Card>
            <Card>
              <div className="text-[#D4AF37] font-bold mb-2">2021</div>
              <h3 className="text-xl font-bold mb-1 text-white">Secondary Education</h3>
              <p className="text-white/50 text-sm mb-4">St. Jude&apos;s High School</p>
              <div className="text-lg font-bold text-white">High Honors</div>
            </Card>
          </div>
        </section>

        {/* Reports Section */}
        <section id="projects">
          <SectionHeader title="Strategic Reports" icon={FileText} />
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <Card key={index} className="group">
                <div className="flex justify-between items-start mb-6 text-white">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <BarChart3 className="text-[#D4AF37]" size={24} />
                  </div>
                  <ChevronRight size={20} className="text-white/20 group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{report.title}</h3>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">
                  {report.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {report.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeader title="Professional Experience" icon={Briefcase} />
          <div className="space-y-12 max-w-4xl mx-auto flex flex-col items-center">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center w-full"
              >
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="text-sm font-mono text-white/40 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                    {exp.period}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-[#D4AF37] font-medium text-lg">{exp.company}</p>
                  </div>
                </div>
                <ul className="space-y-3 max-w-2xl mx-auto">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-white/60 text-sm leading-relaxed flex flex-col items-center">
                      <span className="text-[#D4AF37] mb-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Technical Skills" icon={Code2} />
            <div className="grid gap-4">
              <Card className="flex items-center gap-4 py-4">
                <PieChart className="text-[#D4AF37]" />
                <div>
                  <h4 className="font-bold text-white">Financial Modelling</h4>
                  <p className="text-xs text-white/50">Forecasting, Valuation, Analysis</p>
                </div>
              </Card>
              <Card className="flex items-center gap-4 py-4">
                <Code2 className="text-[#D4AF37]" />
                <div>
                  <h4 className="font-bold text-white">Python Data Analysis</h4>
                  <p className="text-xs text-white/50">Pandas, NumPy, Matplotlib</p>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <SectionHeader title="Certifications" icon={Award} />
            <Card className="h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <Award className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Strategic Analytics</h3>
              <p className="text-white/50 mb-4">by Global Tech Leaders</p>
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs text-white/40">Verified Credential</span>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <SectionHeader title="Let&apos;s Connect" icon={Mail} />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-6 text-white">Ready to discuss your next <span className="text-gradient">financial venture?</span></h3>
              <p className="text-white/60 mb-10 leading-relaxed text-lg">
                I&apos;m always open to discussing financial modelling, audit strategies,
                or potential collaborations in the finance and accounting space.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest">Email Me</p>
                    <p className="text-xl font-bold text-white">alex.thompson@finance.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="flex flex-col items-center justify-center p-12 text-center h-full">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-8">
                <LinkedInIcon size={40} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Professional Network</h4>
              <p className="text-white/50 mb-8">Join me on LinkedIn for more updates and professional insights.</p>
              <a
                href="#"
                className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-[#D4AF37] transition-all"
              >
                View LinkedIn Profile
              </a>
            </Card>
          </div>
        </section>

      </main>

      <footer className="mt-20 py-12 border-t border-white/5 glass">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold mb-2 text-white">Alex <span className="text-[#D4AF37]">Thompson</span></h2>
            <p className="text-white/40 text-sm">Building the future of finance, one model at a time.</p>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Designed for Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
