'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, ExternalLink, Award, BookOpen, User, Star } from 'lucide-react';

const researchData = {
  published: [
    {
      title: "Comparative analysis of outcomes in minimally invasive thoracic procedures",
      authors: "Mitchell S, Williams T, Chen L, et al.",
      journal: "Journal of Thoracic Surgery. 2024;19(1):120-135.",
      link: "#"
    },
    {
      title: "Case report: Atypical presentation of pulmonary vascular malformation",
      authors: "Mitchell S, Thompson J, Rivera A.",
      journal: "Medical Case Reports Weekly. 2024;18(3):45-52.",
      link: "#"
    }
  ],
  bookChapters: [
    {
      title: "Advances in Chronic Respiratory Disease Management",
      book: "Modern Clinical Pulmonology",
      publisher: "Global Health Press",
      authors: "Sarah Mitchell, Robert Vance, Maria Garcia",
      status: "In Press"
    }
  ],
  conferencePapers: [
    {
      title: "Evaluation of lung function in diverse demographic populations",
      authors: "Mitchell S, Lee K, Patel R, et al.",
      source: "International Respiratory Congress Proceedings 2023.",
      link: "#"
    }
  ],
  submitted: [
    {
      title: "Metabolic pathways in adipose tissue during acute cellular stress",
      authors: "Mitchell S, Green B, Wilson D.",
      journal: "Journal of Cellular Physiology",
      status: "Under Review"
    }
  ],
  oralPresentations: [
    {
      title: "Optimizing Postoperative Recovery in Thoracic Surgery",
      presenter: "Sarah Mitchell (Presenting Author)",
      event: "Academic Surgical Conference, February 2024."
    }
  ],
  posterPresentations: [
    {
      title: "Clinical characteristics of bronchiectasis in urban populations",
      event: "National Chest Conference 2024."
    },
    {
      title: "Relationship between BMI and pulmonary function: A multi-center study",
      event: "Annual Medical Research Symposium 2024."
    }
  ],
  grants: [
    {
      title: "Investigating genetic markers in fungal respiratory infections",
      type: "Student Research Initiative Grant",
      institution: "Global Medical University",
      awarded: "2023",
      amount: "$5,000",
      status: "Completed"
    }
  ],
  otherExperiences: [
    {
      title: "Academic Peer Reviewer",
      organization: "Student Research Journal 2024",
      desc: "Evaluated research abstracts and manuscripts for student-led publications."
    },
    {
      title: "Clinical Research Module",
      organization: "University Medical Center",
      project: "Genetic Polymorphisms in Preeclampsia",
      details: [
        "Conducted DNA extraction and purification using standard laboratory protocols.",
        "Performed PCR amplification and analysis for specific gene markers.",
        "Presented findings as a formal research poster and scientific essay.",
        "Maintained rigorous laboratory documentation and safety standards."
      ]
    }
  ]
};

const electives = [
  {
    specialty: "Pulmonary & Critical Care",
    mentor: "Dr. Elizabeth Stone",
    role: "Professor of Medicine",
    institution: "Metro Health System",
    details: [
      "Participated in multidisciplinary ICU rounds and patient care planning.",
      "Attended specialty clinics for Interstitial Lung Disease.",
      "Observed advanced procedures including bronchoscopy and intubation."
    ]
  },
  {
    specialty: "Cardiology",
    mentor: "Dr. Michael Chen",
    role: "Director of Interventional Cardiology",
    institution: "St. Jude's Medical Center",
    details: [
      "Observed cardiac catheterization and interventional procedures.",
      "Conducted patient assessments in the outpatient cardiology clinic.",
      "Assisted with Electronic Medical Record updates and progress notes."
    ]
  }
];

export default function ResearcherPreset() {
  return (
    <div className="researcher-theme bg-[#EDF6F9] min-h-screen font-sans text-[#2D3436]">
      {/* Back to Site Link */}
      <div className="fixed top-20 left-6 z-[1100]">
        <Link href="/portfolio" className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:shadow-md transition-all text-[#006D77] font-semibold border border-[#83C5BE]/30">
          <ArrowLeft className="w-4 h-4" /> Back to Presets
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[1000] bg-white/80 backdrop-blur-md border-b border-black/5 px-[5%] py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="text-xl font-extrabold text-[#006D77] tracking-tight uppercase">SARAH MITCHELL</div>
          <div className="hidden md:flex gap-6 font-semibold text-sm">
            <a href="#licensing" className="hover:text-[#006D77] transition-colors">Licensing</a>
            <a href="#education" className="hover:text-[#006D77] transition-colors">Education</a>
            <a href="#awards" className="hover:text-[#006D77] transition-colors">Awards</a>
            <a href="#electives" className="hover:text-[#006D77] transition-colors">Electives</a>
            <a href="#research" className="hover:text-[#006D77] transition-colors">Research</a>
            <a href="#contact" className="hover:text-[#006D77] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center px-[5%] bg-gradient-to-r from-[#EDF6F9]/95 to-[#EDF6F9]/40 relative overflow-hidden">
        <div className="animate-fade-in max-w-[850px] relative z-10">
          <span className="badge-primary mb-4">MBBS Candidate @ Global Medical University</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#2D3436] mb-6 leading-[1.1] tracking-tighter">
            Sarah Mitchell
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#006D77] font-bold mb-6">Physician | Researcher | Academic Leader</h2>
          <p className="text-lg text-[#636E72] mb-10 max-w-[700px] leading-relaxed">
            Final year medical student passionate about clinical excellence and scientific advancement. Dedicated to improving patient outcomes through evidence-based practice and innovative research.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Connect Now</a>
            <a href="#research" className="px-8 py-3.5 rounded-full font-bold border-2 border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white transition-all">Research Portfolio</a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 text-[#2D3436] font-bold">
            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#006D77]" /> Metro City, USA</div>
            <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-[#006D77]" /> sarah.mitchell@med.edu</div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#83C5BE] rounded-full blur-[120px] opacity-20 -z-0"></div>
      </section>

      {/* Licensing & Exams */}
      <section id="licensing" className="section-container bg-white rounded-[3rem] my-10 shadow-sm">
        <h2 className="text-4xl font-black mb-12 text-center text-[#2D3436]">Licensing & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4 text-[#006D77]"><Star className="w-6 h-6" /> <h3 className="font-bold text-xl">USMLE</h3></div>
            <p className="text-sm"><strong>Step 1:</strong> PASS (2024)</p>
            <p className="text-sm"><strong>Step 2 CK:</strong> 260+ (2025)</p>
          </div>
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4 text-[#006D77]"><User className="w-6 h-6" /> <h3 className="font-bold text-xl">Language</h3></div>
            <p className="text-sm"><strong>English:</strong> Native</p>
            <p className="text-sm"><strong>Spanish:</strong> Conversational</p>
          </div>
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4 text-[#006D77]"><Award className="w-6 h-6" /> <h3 className="font-bold text-xl">OET</h3></div>
            <p className="text-sm"><strong>Reading:</strong> 450+</p>
            <p className="text-sm"><strong>Listening:</strong> 450+</p>
          </div>
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4 text-[#006D77]"><BookOpen className="w-6 h-6" /> <h3 className="font-bold text-xl">Certifications</h3></div>
            <ul className="text-xs space-y-2">
              <li>BLS/ACLS Certified</li>
              <li>Biomedical Research Ethics</li>
              <li>Patient Safety Foundations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-container">
        <h2 className="text-4xl font-black mb-12 text-center text-[#2D3436]">Academic Journey</h2>
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#83C5BE]">
          {[
            { 
              school: "Global Medical University", 
              degree: "MBBS | Doctor of Medicine", 
              period: "2021 - Present", 
              details: "Academic Honor Roll. Honors in Physiology, Biochemistry, and Clinical Medicine." 
            },
            { 
              school: "Pre-Medical Academy", 
              degree: "Associate of Science", 
              period: "2018 - 2020", 
              details: "Graduated with High Honors. Focused on biological and chemical sciences." 
            }
          ].map((edu, i) => (
            <div key={i} className="pl-12 relative group">
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#006D77] border-4 border-white shadow-sm transition-transform group-hover:scale-125"></div>
              <h3 className="text-2xl font-bold text-[#2D3436] mb-1">{edu.school}</h3>
              <div className="text-[#006D77] font-bold text-sm mb-2">{edu.degree} | {edu.period}</div>
              <p className="text-[#636E72]">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="bg-[#006D77] text-white py-24 px-[5%] rounded-[4rem] mx-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Awards & Accomplishments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { year: "2024", title: "Medical Excellence Award", desc: "Top 5% of graduating class for clinical rotations." },
              { year: "2024", title: "Best Poster Presentation", desc: "National Research Symposium in Cardiology." },
              { year: "2023", title: "Research Merit Scholarship", desc: "Awarded for significant contributions to student research." },
              { year: "2022", title: "Distinction in Pharmacology", desc: "Highest score in the pharmacological sciences module." }
            ].map((award, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-3xl font-black mb-2 opacity-50">{award.year}</div>
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Electives */}
      <section id="electives" className="section-container">
        <h2 className="text-4xl font-black mb-16 text-center text-[#2D3436]">Clinical Electives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {electives.map((elec, index) => (
            <div key={index} className="glass-card border-t-8 border-[#006D77]">
              <h3 className="text-[#006D77] text-2xl font-black mb-2">{elec.specialty}</h3>
              <div className="text-[#2D3436] font-bold text-lg mb-4">{elec.institution}</div>
              <p className="italic text-[#636E72] mb-6 text-sm">Mentored by {elec.mentor} ({elec.role})</p>
              <ul className="space-y-3 text-sm">
                {elec.details.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#006D77] font-bold">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-white py-24 px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-black mb-20 text-center text-[#2D3436]">Scientific Research Portfolio</h2>

          {/* Published */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-10 border-l-8 border-[#006D77] pl-4 text-[#2D3436]">Published Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {researchData.published.map((pub, index) => (
                <div key={index} className="glass-card bg-[#EDF6F9]/50">
                  <h4 className="text-xl font-bold mb-4">{pub.title}</h4>
                  <p className="text-sm text-[#636E72] mb-3">{pub.authors}</p>
                  <p className="text-sm font-bold text-[#006D77] mb-6">{pub.journal}</p>
                  <a href={pub.link} className="btn-primary py-2 px-6 text-sm inline-flex items-center gap-2">
                    Access Publication <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Presentations */}
            <div>
              <h3 className="text-2xl font-black mb-8 text-[#2D3436]">Presentations</h3>
              <div className="space-y-6">
                {researchData.oralPresentations.map((oral, i) => (
                  <div key={i} className="p-6 bg-[#EDF6F9] rounded-2xl border-l-4 border-[#006D77]">
                    <h4 className="font-bold text-lg mb-2">{oral.title}</h4>
                    <p className="text-xs text-[#636E72] uppercase tracking-wider">{oral.event}</p>
                  </div>
                ))}
                {researchData.posterPresentations.map((poster, i) => (
                  <div key={i} className="p-4 border-b border-black/5 last:border-0">
                    <h4 className="font-bold text-sm mb-1">{poster.title}</h4>
                    <p className="text-xs italic text-[#636E72]">{poster.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grants & Experience */}
            <div>
              <h3 className="text-2xl font-black mb-8 text-[#2D3436]">Grants & Experience</h3>
              <div className="space-y-8">
                {researchData.grants.map((grant, i) => (
                  <div key={i} className="glass-card border-none bg-[#006D77]/5 p-8">
                    <h4 className="text-[#006D77] font-black text-xl mb-2">{grant.title}</h4>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span>{grant.institution}</span>
                      <span className="text-[#006D77]">{grant.amount}</span>
                    </div>
                  </div>
                ))}
                {researchData.otherExperiences.map((exp, i) => (
                  <div key={i} className="glass-card bg-[#EDF6F9]/50">
                    <h4 className="font-black text-lg mb-1">{exp.title}</h4>
                    <div className="text-sm font-bold text-[#006D77] mb-4">{exp.organization}</div>
                    {exp.details && (
                      <ul className="text-xs space-y-2">
                        {exp.details.map((d, idx) => <li key={idx} className="flex gap-2"><span>-</span> {d}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-container">
        <h2 className="text-4xl font-black mb-16 text-center text-[#2D3436]">Expertise & Personal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { cat: "Technical", items: ["SPSS Statistics", "STATA", "Medical Data Analysis"] },
            { cat: "Languages", items: ["English (Native)", "Spanish (Advanced)", "French (Basic)"] },
            { cat: "Interests", items: ["Medical History", "Classical Literature", "Swimming"] },
            { cat: "Soft Skills", items: ["Academic Leadership", "Collaborative Research", "Patient Advocacy"] }
          ].map((skill, i) => (
            <div key={i} className="glass-card bg-white text-center">
              <h3 className="font-black text-[#006D77] mb-4">{skill.cat}</h3>
              <ul className="text-sm space-y-2">
                {skill.items.map((item, idx) => <li key={idx} className="text-[#636E72]">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-container bg-[#006D77] text-white rounded-[4rem] mx-4 text-center">
        <h2 className="text-5xl font-black mb-8">Let&apos;s Connect</h2>
        <p className="text-xl mb-12 opacity-80">Interested in collaboration or have questions about my research?</p>
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div className="space-y-2">
            <div className="flex justify-center mb-2"><Mail className="w-8 h-8" /></div>
            <div className="font-bold">Email</div>
            <a href="mailto:sarah.mitchell@med.edu" className="text-2xl hover:underline">sarah.mitchell@med.edu</a>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center mb-2"><MapPin className="w-8 h-8" /></div>
            <div className="font-bold">Location</div>
            <div className="text-2xl">Metro City, USA</div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[#636E72] text-sm">
        © {new Date().getFullYear()} Sarah Mitchell. All rights reserved.
      </footer>
    </div>
  );
}
