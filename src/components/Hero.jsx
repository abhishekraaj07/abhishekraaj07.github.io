import React from 'react';
import { ArrowDownRight, Copy, Check, Terminal, Compass, Sparkles } from 'lucide-react';
import Interactive3DViewer from './Interactive3DViewer';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function Hero({ onCopyEmail, copied }) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs w-fit mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium tracking-wide">AVAILABLE FOR HIGH-IMPACT ROLES & CONTRACTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Architecting <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">3D Web Systems</span> & <span className="text-zinc-400 font-normal">Resilient Code.</span>
          </h1>

          {/* Bio */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-8">
            I'm <strong className="text-white font-semibold">Abhishek Raj</strong>, a full-stack engineer building end-to-end distributed applications, zero-knowledge privacy protocols, and low-latency audio/streaming architectures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                playClickSound();
                onCopyEmail();
              }}
              onMouseEnter={playHoverSound}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all backdrop-blur-md hover:-translate-y-0.5"
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

          {/* Quick Telemetry Pill */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              TypeScript / Astro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Java 21 / Loom
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              Python 3.12
            </span>
          </div>
        </div>

        {/* Right Column: 3D Interactive Viewport Centerpiece */}
        <div className="lg:col-span-5 flex justify-center">
          <Interactive3DViewer />
        </div>
      </div>

      {/* Realtime Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-16 pt-8 border-t border-white/10">
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
