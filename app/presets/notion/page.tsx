'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronRight, Hash, Sun, Moon, ArrowLeft } from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  github: string;
  icon: string;
  link?: string;
}

interface Category {
  category: string;
  items: Project[];
}

// --- Dummy Data ---
const PROJECTS: Category[] = [
  {
    category: "Web Development",
    items: [
      {
        title: "EcoTracker",
        description: "A full-stack application built with React and Node.js that helps users monitor and reduce their daily carbon footprint through intuitive data visualization.",
        github: "https://github.com",
        link: "https://example.com",
        icon: "🌱"
      },
      {
        title: "SwiftCart",
        description: "A high-performance e-commerce frontend focused on speed and accessibility. Built with Next.js and Tailwind CSS for optimal user experience.",
        github: "https://github.com",
        icon: "🛒"
      }
    ]
  },
  {
    category: "Open Source",
    items: [
      {
        title: "DevConnect",
        description: "A networking platform for developers to find collaborators for their side projects. Features include real-time chat and project matching.",
        github: "https://github.com",
        link: "https://example.com",
        icon: "🤝"
      }
    ]
  }
];

// --- Simple Theme Toggle Component ---
const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-notion-light-gray transition-colors text-notion-gray hover:text-notion-text"
      title="Toggle Theme"
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};

// --- Main Page Component ---
export default function NotionPreset() {
  const [copied, setCopied] = useState(false);
  const email = 'alex.rivera@example.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'TechFlow Solutions',
      duration: 'Jun 2025 – Present',
      points: [
        'Developed and maintained responsive web applications using React and TypeScript.',
        'Collaborated with the design team to implement pixel-perfect UI components.',
        'Optimized database queries in PostgreSQL, reducing load times by 25%.',
      ],
    },
    {
      role: 'Junior Web Developer',
      company: 'Creative Spark Agency',
      duration: 'Jan 2024 – May 2025',
      points: [
        'Built 10+ custom WordPress themes and plugins for diverse clients.',
        'Managed site deployments and maintained server-side configurations.',
        'Improved SEO scores for client websites by an average of 40%.',
      ],
    },
  ];

  const leadership = [
    {
      title: 'Vice President — Coding Club',
      org: 'State University of Technology',
      duration: 'Aug 2024 – May 2025',
    },
    {
      title: 'Student Tech Ambassador',
      org: 'Global Software Corp',
      duration: 'Sep 2023 – Jun 2024',
    },
  ];

  const certifications = [
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera • Meta',
      link: '#',
    },
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      link: '#',
    },
  ];

  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Git', 'Docker', 'AWS'];

  return (
    <div className="min-h-screen bg-notion-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Back to Home Link */}
        <div className="pt-8 pb-2">
          <Link href="/portfolio" className="text-xs text-notion-gray hover:text-notion-text flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Portfolio and Presets
          </Link>
        </div>

        {/* Notion-style Header/Toolbar */}
        <nav className="flex justify-between items-center py-4 sticky top-0 bg-notion-bg text-notion-text z-50 border-b border-notion-border/50 transition-colors">
          <div className="flex items-center gap-2 text-sm text-notion-gray">
            <span className="hover:bg-notion-light-gray px-2 py-1 rounded cursor-pointer transition-colors text-notion-text">Alex Rivera</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium">Portfolio</span>
          </div>
          <ThemeToggle />
        </nav>

        {/* Hero Section */}
        <header className="mt-16 mb-12">
          <div className="relative mb-8 group">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-4xl shadow-md transform transition-transform group-hover:scale-105">
              🚀
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 text-notion-text">
            Alex Rivera
          </h1>

          <p className="text-lg text-notion-gray mb-6 leading-relaxed max-w-2xl">
            Computer Science Student passionate about <span className="text-blue-600 dark:text-blue-400 font-medium">Software Development</span>, <span className="text-purple-600 dark:text-purple-400 font-medium">Web Technologies</span>, and <span className="text-orange-600 dark:text-orange-400 font-medium">Cloud Computing</span>. Building scalable solutions and learning something new every day.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium text-notion-text">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium text-notion-text">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium text-notion-text">
              <Mail className="w-4 h-4" /> {copied ? 'Copied!' : 'Email'}
            </button>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 transition-colors text-sm font-medium">
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>
        </header>

        <hr className="border-notion-border mb-12" />

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-notion-text">
            <span className="text-blue-500">#</span> Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-notion-border hover:border-blue-400 transition-colors">
                <div className="absolute w-3 h-3 bg-notion-bg border-2 border-blue-500 rounded-full -left-[7.5px] top-1.5" />
                <h3 className="text-lg font-bold text-notion-text">{exp.role}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{exp.company} • {exp.duration}</p>
                <ul className="space-y-2 text-sm text-notion-gray">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-2">
                      <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-notion-text">
            <span className="text-purple-500">#</span> Projects
          </h2>

          <div className="space-y-12">
            {PROJECTS.map((category, idx) => {
              const colors = [
                'border-blue-500/40 dark:border-blue-500/20 md:border-blue-500/20 md:hover:border-blue-500/50 dark:md:border-blue-500/10 dark:md:hover:border-blue-500/30',
                'border-purple-500/40 dark:border-purple-500/20 md:border-purple-500/20 md:hover:border-purple-500/50 dark:md:border-purple-500/10 dark:md:hover:border-purple-500/30',
              ];
              const cardBg = [
                'bg-blue-50/40 dark:bg-blue-500/10 md:bg-transparent md:group-hover:bg-blue-50/30 dark:md:group-hover:bg-blue-500/5',
                'bg-purple-50/40 dark:bg-purple-500/10 md:bg-transparent md:group-hover:bg-purple-50/30 dark:md:group-hover:bg-purple-500/5',
              ];
              const colorIdx = idx % colors.length;

              return (
                <div key={idx}>
                  <h3 className="text-xs uppercase tracking-widest text-notion-gray font-bold mb-4 border-b border-notion-border pb-1 flex justify-between items-center">
                    {category.category}
                    <span className={`w-2 h-2 rounded-full ${['bg-blue-500', 'bg-purple-500'][colorIdx]}`} />
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((project, pIdx) => (
                      <div key={pIdx} className={`group p-5 rounded-xl border ${colors[colorIdx]} transition-all duration-300 shadow-sm hover:shadow-md flex flex-col ${cardBg[colorIdx]}`}>
                        <div className="text-2xl mb-3 filter grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all">{project.icon}</div>
                        <h4 className="text-lg font-bold mb-2 text-notion-text transition-colors">{project.title}</h4>
                        <p className="text-sm text-notion-gray mb-4 leading-relaxed line-clamp-3 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex gap-3 mt-auto">
                          {project.github && (
                            <a href={project.github} target="_blank" className="text-xs font-medium flex items-center gap-1.5 text-notion-gray hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              <Github className="w-3.5 h-3.5" /> Source
                            </a>
                          )}
                          {project.link && (
                            <a href={project.link} target="_blank" className="text-xs font-medium flex items-center gap-1.5 text-notion-gray hover:text-green-600 dark:hover:text-green-400 transition-colors">
                              <ExternalLink className="w-3.5 h-3.5" /> Demo
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-notion-text">
            <span className="text-green-500">#</span> Leadership & Teaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-notion-border bg-notion-light-gray/20 hover:border-green-500/30 transition-colors">
                <h3 className="font-semibold text-notion-text text-sm">{item.title}</h3>
                <p className="text-xs text-notion-gray mt-1">{item.org} • {item.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-notion-text">
            <span className="text-orange-500">#</span> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-notion-light-gray/50 text-sm font-medium text-notion-text border border-notion-border hover:border-orange-500/30 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-notion-text">
            <span className="text-blue-500">#</span> Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} className="flex items-center justify-between p-4 rounded-lg border border-notion-border hover:bg-notion-light-gray/40 hover:border-blue-500/30 transition-all group">
                <div>
                  <h3 className="font-semibold text-notion-text group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-notion-gray">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-notion-gray group-hover:text-notion-text transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-notion-border text-center">
          <p className="text-sm text-notion-gray">
            © {new Date().getFullYear()} Alex Rivera
          </p>
        </footer>

        {/* Floating Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-notion-bg border border-notion-border shadow-lg text-notion-gray hover:text-notion-text hover:border-blue-500/50 transition-all hover:-translate-y-1 z-40"
        >
          <Hash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
