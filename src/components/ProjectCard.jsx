import React, { useRef, useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

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

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setCoords({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.2s, box-shadow 0.2s'
      }}
      className="group relative rounded-2xl bg-[#0b0b12]/80 border border-white/10 hover:border-white/25 p-7 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/5"
    >
      {/* Dynamic Proximity Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, rgba(56, 189, 248, 0.12), transparent 80%)`
        }}
      />

      {/* Top Meta */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-500">
            {project.number} // 06
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-zinc-400 mb-3">{project.subtitle}</p>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs text-zinc-400">{project.stats.metric} • {project.stats.label}</span>
        </div>

        <button className="flex items-center gap-1 text-xs font-semibold text-white group-hover:text-sky-400 transition-colors">
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
