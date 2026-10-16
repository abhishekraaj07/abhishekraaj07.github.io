import React, { useRef, useState } from 'react';
import { Github, Star, ArrowUpRight, Code2 } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setCoords({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const getLangBadge = (lang) => {
    switch (lang) {
      case 'TypeScript':
        return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
      case 'Python':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Java':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default:
        return 'text-zinc-400 bg-white/5 border-white/10';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHoverSound}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.2s, box-shadow 0.2s'
      }}
      className="group relative rounded-2xl bg-[#08080e]/90 border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/5"
    >
      {/* Dynamic Proximity Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, rgba(56, 189, 248, 0.1), transparent 80%)`
        }}
      />

      {/* Top Meta */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${getLangBadge(project.language)}`}>
              {project.language}
            </span>
            {project.stars > 0 && (
              <span className="flex items-center gap-1 font-mono text-[11px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{project.stars}</span>
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {project.number} // 08
          </span>
        </div>

        <h3
          onClick={() => {
            playClickSound();
            onSelect(project);
          }}
          className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-1 cursor-pointer"
        >
          <ScrambleText text={project.title} />
        </h3>
        <p className="text-xs font-mono text-zinc-400 mb-3">{project.subtitle}</p>

        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer with Direct GitHub Link and Architecture Inspect */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            playClickSound();
          }}
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-500" />
        </a>

        <button
          onClick={() => {
            playClickSound();
            onSelect(project);
          }}
          className="flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors py-1.5 px-2 rounded-lg"
        >
          <span>Specs</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
