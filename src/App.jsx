
import './index.css'
import profileImg from './vaishnavi_img.png';

import  { useState } from 'react';
import { portfolioData } from './portfolioData';

export default function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const d = portfolioData;

  return (
    <div className="bg-[#0b0f19] text-gray-200 min-h-screen font-sans scroll-smooth">
      
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 bg-[#0b0f19]/90 backdrop-blur-md border-b border-gray-800 z-50 px-6 py-4 relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-wider text-white">{d.personalInfo.name}</span>
            <a href={d.personalInfo.resumeUrl} download="Resume.pdf" className="hidden sm:inline-flex bg-transparent border border-[#ff6b6b] text-[#ff6b6b] px-4 py-2 rounded text-sm hover:bg-[#ff6b6b] hover:text-white transition">Download Resume</a>
          </div>

          <button type="button" onClick={() => setMenuOpen(prev => !prev)} className="inline-flex items-center justify-center rounded border border-gray-700 p-2 text-gray-200 hover:border-[#ff6b6b] md:hidden">
            <span className="sr-only">Toggle navigation</span>
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18"></path>
                <path d="M3 6h18"></path>
                <path d="M3 18h18"></path>
              </svg>
            )}
          </button>

          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute right-6 top-full mt-2 w-48 bg-[#0b0f19] p-4 rounded-lg shadow-lg z-50 flex-col gap-4 text-sm font-medium md:static md:flex md:flex-row md:items-center md:gap-12 md:mt-0 md:w-auto md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#about" className="hover:text-[#ff6b6b] transition">About</a>
            <a href="#skills" className="hover:text-[#ff6b6b] transition">Skills</a>
            <a href="#experience" className="hover:text-[#ff6b6b] transition">Experience</a>
            <a href="#projects" className="hover:text-[#ff6b6b] transition">Projects</a>
            <a href="#contact" className="hover:text-[#ff6b6b] transition">Get in touch</a>
            <a href="#certifications" className="hover:text-[#ff6b6b] transition">Certifications</a>
            <a href={d.personalInfo.resumeUrl} download="Resume.pdf" className="inline-flex sm:hidden bg-transparent border border-[#ff6b6b] text-[#ff6b6b] px-4 py-2 rounded text-sm hover:bg-[#ff6b6b] hover:text-white transition">Download Resume</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p className="text-[#ff6b6b] tracking-[0.35em] uppercase text-sm">Hello.</p>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl text-gray-300">I’m {d.personalInfo.name}</p>
            <h1 className="text-5xl md:text-[5.5rem] leading-[0.88] font-extrabold text-white">{d.personalInfo.role}</h1>
          </div>
          <p className="max-w-xl text-gray-400 leading-relaxed">{d.personalInfo.aboutText}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-[#ff6b6b] px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(255,107,107,0.18)] hover:opacity-95 transition">Got a project?</a>
            <a href={d.personalInfo.resumeUrl} download="Resume.pdf" className="rounded-full border border-[#ff6b6b] px-7 py-3 text-sm font-semibold text-[#ff6b6b] hover:bg-[#ff6b6b]/10 transition">My resume</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[20rem] md:max-w-[30rem]">
          <div className="aspect-square w-full">
            <img src={profileImg} alt="Vaishnavi" className="h-full w-full rounded-full object-cover shadow-2xl" />
          </div>
        </div>
      </header>


      {/* 3. About & Future Goal Banner */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-white">About me</h2>
          {/* <p className="text-gray-400 leading-relaxed">{d.personalInfo.aboutText}</p> */}
          <p className="text-gray-400 leading-relaxed">{d.personalInfo.aboutText2}</p>
          

          stats
          <div className="flex gap-8 pt-4">
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.projects}</span><span className="text-xs text-gray-500">Completed Projects</span></div>
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.satisfaction}</span><span className="text-xs text-gray-500">Satisfaction</span></div>
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.internship}</span><span className="text-xs text-gray-500">Internship Positions</span></div>
          </div>
        </div>
        
        {/* Future Goal Banner */}
        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🚀 Currently Exploring</h3>
          <div className="flex flex-wrap gap-2">
            {d.currentlyExploring.map((item, i) => (
              <span key={i} className="bg-[#ff6b6b]/10 text-[#ff6b6b] text-xs px-3 py-1 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(d.skills).map(([category, skillList]) => (
            <div key={category} className="bg-[#121826] p-5 rounded-lg border border-gray-800">
              <h3 className="text-[#ff6b6b] font-semibold mb-3 text-sm tracking-wider uppercase">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Experience Section (Timeline) */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-10">Work Experience</h2>
        <div className="relative border-l-2 border-gray-800 ml-4 space-y-10">
          {d.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <span className="absolute -left-[11px] top-1 bg-[#ff6b6b] w-5 h-5 rounded-full flex items-center justify-center text-xs">{exp.logo}</span>
              <div className="bg-[#121826] p-6 rounded-xl border border-gray-800 space-y-2">
                <span className="text-xs text-[#ff6b6b] font-mono">{exp.duration}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-sm text-gray-400">{exp.company}</h4>
                <p className="text-gray-400 text-sm pt-2">{exp.description}</p>
                <div className="pt-2"><strong className="text-xs text-gray-300">Key Achievement:</strong> <span className="text-sm text-gray-400">{exp.achievements}</span></div>
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.technologies.map((tech, i) => <span key={i} className="text-[11px] bg-gray-800 px-2 py-0.5 rounded text-gray-400">{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.projects.slice(0, visibleProjects).map((proj, index) => (
            <div key={index} className="bg-[#121826] border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between">
              <div className="p-6 space-y-3">
                <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">{proj.category}</span>
                <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{proj.description}</p>
                <p className="text-xs text-gray-500"><strong className="text-gray-400">Features:</strong> {proj.features}</p>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1">
                  {proj.technologies.map((tech, i) => <span key={i} className="text-[10px] bg-gray-900 px-2 py-0.5 rounded text-gray-400">{tech}</span>)}
                </div>
                <div className="flex gap-4 text-sm font-medium border-t border-gray-800 pt-4">
                  <a href={proj.github} className="text-[#ff6b6b] hover:underline">GitHub</a>
                  <a href={proj.live} className="text-white hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {d.projects.length > visibleProjects && (
          <div className="text-center pt-10">
            <button onClick={() => setVisibleProjects(prev => prev + 3)} className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-6 py-2.5 rounded transition">View More Projects</button>
          </div>
        )}
      </section>

      {/* 7. Certifications & Achievements Section */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="space-y-4">
            {d.certifications.length === 0 ? <p className="text-gray-500 text-sm">Certifications coming soon.</p> : 
              d.certifications.map((cert, i) => (
                <div key={i} className="bg-[#121826] p-4 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-white text-sm">{cert.name}</h3>
                    <p className="text-xs text-gray-400">{cert.organization} • {cert.date}</p>
                  </div>
                  <a href={cert.link} className="text-xs text-[#ff6b6b] hover:underline">View</a>
                </div>
            ))}
          </div>
        </div>


        Achievement
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
          <div className="space-y-4">
            {d.achievements.map((ach, i) => (
              <div key={i} className="bg-[#121826] p-4 rounded-lg border border-gray-800">
                <h3 className="font-bold text-white text-sm">{ach.title}</h3>
                <p className="text-xs text-[#ff6b6b]">{ach.organization}</p>
                <p className="text-xs text-gray-400 mt-1">{ach.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Placeholders */}
      {/* Contact / Get in touch Section */}
      <section id="contact" className="bg-[#071018] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-sm text-[#ff6b6b] tracking-widest mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>Let's build something</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">Have a project, role, or idea you want to talk about? My inbox is open.</p>
          <div className="flex justify-center">
            <a href={`mailto:${d.personalInfo.email}`} className="bg-[#ff6b6b] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-95 transition inline-flex items-center gap-3" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8"/><rect x="3" y="5" width="18" height="14" rx="2" ry="2"/></svg>
              {d.personalInfo.email} 
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a href={`mailto:${d.personalInfo.email}`} className="p-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#ff6b6b]" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8"/><rect x="3" y="5" width="18" height="14" rx="2" ry="2"/></svg>
            </a>
            <a href={d.personalInfo.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#ff6b6b]" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.699-2.782.605-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.676-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.845c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.026 2.748-1.026.547 1.378.203 2.397.1 2.65.64.696 1.028 1.586 1.028 2.676 0 3.842-2.338 4.687-4.566 4.935.36.31.682.923.682 1.862 0 1.344-.012 2.427-.012 2.757 0 .269.18.58.688.482C19.137 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href={d.personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#ff6b6b]" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#070a12] border-t border-gray-900 py-8 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} {d.personalInfo.name}. All Rights Reserved.</p>
        <p className="mt-1 text-[10px]">Blog & Testimonials sections prepared for future deployment.</p>
      </footer>

    </div>
  );
}