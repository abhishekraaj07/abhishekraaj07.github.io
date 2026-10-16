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
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abhishekraaj07@users.noreply.github.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030305] text-zinc-100 selection:bg-sky-400 selection:text-black relative">
      {/* 3D WebGL Three.js Background Canvas */}
      <Scene3D />

      {/* Floating Modern Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <div className="flex flex-col mb-12">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-sky-400" />
              Engineering Portfolio
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Featured Builds
              </h2>
              <p className="text-sm font-mono text-zinc-400">
                Click any project for deep-dive architecture specs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
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
