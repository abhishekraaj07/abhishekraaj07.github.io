import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#0d0d16] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-sky-400">
            <span>{project.category}</span>
            <span>•</span>
            <span className="text-zinc-500">{project.status}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="font-mono text-xs text-zinc-400 mt-1">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Architecture Specs */}
        <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
            Key Architecture & Engineering Highlights
          </h4>
          <ul className="space-y-2">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-zinc-200 bg-white/10 border border-white/10 px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Repository & Code</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
