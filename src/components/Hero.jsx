import React from 'react';
import { ArrowDownRight, Copy, Check, Radio } from 'lucide-react';

export default function Hero({ onCopyEmail, copied }) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative z-10">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs w-fit mb-8 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-medium tracking-wide">AVAILABLE FOR HIGH-IMPACT ROLES & CONTRACTS</span>
      </div>

      {/* Main Hero Headline */}
      <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
        Architecting <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">3D Web Systems</span> & <span className="text-zinc-400 font-normal">Resilient Code.</span>
      </h1>

      {/* Subtitle / Bio */}
      <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
        I'm <strong className="text-white font-semibold">Abhishek Raj</strong>, a full-stack engineer building end-to-end distributed applications, zero-knowledge privacy protocols, and low-latency audio/streaming architectures.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
        >
          <span>Explore Projects</span>
          <ArrowDownRight className="w-4 h-4" />
        </a>

        <button
          onClick={onCopyEmail}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all backdrop-blur-md hover:-translate-y-0.5"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Email Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-zinc-400" />
              <span>Copy Contact Email</span>
            </>
          )}
        </button>
      </div>

      {/* Realtime Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-20 pt-8 border-t border-white/10">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Architecture</div>
          <div className="text-2xl font-bold font-mono text-white mt-1">Full-Stack</div>
          <div className="text-xs text-zinc-400 mt-0.5">Distributed & Reactive</div>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Privacy Model</div>
          <div className="text-2xl font-bold font-mono text-sky-400 mt-1">Zero-Log</div>
          <div className="text-xs text-zinc-400 mt-0.5">End-to-End Cryptography</div>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Type Safety</div>
          <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">100%</div>
          <div className="text-xs text-zinc-400 mt-0.5">TypeScript & Java 21</div>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Visual Rendering</div>
          <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">WebGL 3D</div>
          <div className="text-xs text-zinc-400 mt-0.5">Custom Three.js Scene</div>
        </div>
      </div>
    </section>
  );
}
