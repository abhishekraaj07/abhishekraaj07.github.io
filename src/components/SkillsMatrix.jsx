import React from 'react';
import { skillsData } from '../data/skills';
import { Layout, Server, Database } from 'lucide-react';

export default function SkillsMatrix() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      default: return null;
    }
  };

  return (
    <section id="capabilities" className="py-24 relative z-10">
      <div className="flex flex-col mb-12">
        <span className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-sky-400" />
          Technical Domains
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Capabilities & Systems Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#0b0b12]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                {getIcon(cat.icon)}
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-tight">
                {cat.category}
              </h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((s, sIdx) => (
                <div key={sIdx} className="group">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors">{s.name}</span>
                    <span className="font-mono text-zinc-500">{s.level}</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {s.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
