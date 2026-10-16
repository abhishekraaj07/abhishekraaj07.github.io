import React, { useState } from 'react';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SkillsMatrix from './components/SkillsMatrix';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { playClickSound, playHoverSound } from './utils/audio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterLang, setFilterLang] = useState('ALL');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhishekraaj07@users.noreply.github.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects = filterLang === 'ALL'
    ? projects
    : projects.filter((p) => p.language.toUpperCase() === filterLang);

  return (
    <div className="min-h-screen bg-[#020204] text-zinc-100 selection:bg-sky-400 selection:text-black relative">
      {/* Precision Ambient Grid Background (No 3D globe) */}
      <Scene3D />

      {/* Floating Modern Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <div className="flex flex-col mb-10">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-sky-400" />
              Verified GitHub Repositories
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Featured Engineering Builds
              </h2>
              <div className="text-xs font-mono text-zinc-400">
                Directly linked to <a href="https://github.com/abhishekraaj07" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">@abhishekraaj07</a>
              </div>
            </div>
          </div>

          {/* Language Filter Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {['ALL', 'TYPESCRIPT', 'PYTHON', 'JAVA'].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  playClickSound();
                  setFilterLang(lang);
                }}
                onMouseEnter={playHoverSound}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all ${
                  filterLang === lang
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {lang} {lang === 'ALL' ? `(${projects.length})` : `(${projects.filter(p => p.language.toUpperCase() === lang).length})`}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        {/* Skills & Systems Matrix */}
        <SkillsMatrix />

        {/* Interactive Terminal */}
        <Terminal />

        {/* Contact Banner */}
        <Contact onCopyEmail={handleCopyEmail} copied={copied} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
