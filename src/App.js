import  { useState } from 'react';
import { portfolioData } from './portfolioData';

export default function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const d = portfolioData;

  return (
    <div className="bg-[#0b0f19] text-gray-200 min-h-screen font-sans scroll-smooth">
      
      {/* 1. Navigation Bar */}
      <nav className="sticky top-0 bg-[#0b0f19]/90 backdrop-blur-md border-b border-gray-800 z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wider text-white">{d.personalInfo.name}</span>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-[#ff6b6b] transition">About</a>
          <a href="#skills" className="hover:text-[#ff6b6b] transition">Skills</a>
          <a href="#experience" className="hover:text-[#ff6b6b] transition">Experience</a>
          <a href="#projects" className="hover:text-[#ff6b6b] transition">Projects</a>
          <a href="#certifications" className="hover:text-[#ff6b6b] transition">Certifications</a>
        </div>
        <a href={d.personalInfo.resumeUrl} download className="bg-transparent border border-[#ff6b6b] text-[#ff6b6b] px-4 py-2 rounded text-sm hover:bg-[#ff6b6b] hover:text-white transition">My Resume</a>
      </nav>

      {/* 2. Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-4">
          <p className="text-[#ff6b6b] font-mono">Hello • I'm {d.personalInfo.name.split(' ')[0]}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">{d.personalInfo.role}</h1>
          <div className="pt-4 flex gap-4">
            <button className="bg-[#ff6b6b] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition">Got a project?</button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 rounded-full border-4 border-[#ff6b6b]/30 absolute animate-pulse"></div>
          <div className="w-64 h-64 bg-gray-700 rounded-full overflow-hidden border-2 border-[#ff6b6b] flex items-center justify-center text-6xl">
            👨‍💻
          </div>
        </div>
      </header>

      {/* 3. About & Future Goal Banner */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-white">About me</h2>
          <p className="text-gray-400 leading-relaxed">{d.personalInfo.aboutText}</p>
          
          <div className="flex gap-8 pt-4">
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.projects}</span><span className="text-xs text-gray-500">Completed Projects</span></div>
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.satisfaction}</span><span className="text-xs text-gray-500">Client Satisfaction</span></div>
            <div><span className="text-3xl font-bold text-[#ff6b6b] block">{d.personalInfo.stats.experience}</span><span className="text-xs text-gray-500">Years Experience</span></div>
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
      <footer className="bg-[#070a12] border-t border-gray-900 py-8 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} {d.personalInfo.name}. All Rights Reserved.</p>
        <p className="mt-1 text-[10px]">Blog & Testimonials sections prepared for future deployment.</p>
      </footer>

    </div>
  );
}