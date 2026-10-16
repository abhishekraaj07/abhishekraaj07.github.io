import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Copy, Check, Terminal, ShieldCheck, Activity, Cpu, Sparkles } from 'lucide-react';
import ScrambleText from './ScrambleText';
import RoleTicker from './RoleTicker';
import { playClickSound, playHoverSound } from '../utils/audio';

export default function Hero({ onCopyEmail, copied }) {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Kinetic Typography & Headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs w-fit mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wide">STATUS: ACTIVE & EXPLORING VENTURES</span>
          </div>

          {/* Dynamic Scrambled Developer Identity */}
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>// SOFTWARE ENGINEER & SYSTEMS BUILDER</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            <span className="cursor-pointer group">
              <ScrambleText text="ABHISHEK RAJ" className="text-white hover:text-sky-300 transition-colors" />
            </span>
          </h1>

          {/* Dynamic Role Ticker */}
          <div className="mb-6">
            <RoleTicker />
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-8">
            Specializing in high-throughput distributed architectures, zero-knowledge privacy protocols, and low-latency audio/streaming pipelines. Focused on clean craft, zero-slop engineering, and high reliability.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <span>Explore Selected Builds</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                playClickSound();
                onCopyEmail();
              }}
              onMouseEnter={playHoverSound}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all backdrop-blur-md hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Contact Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: High-Craft Live Systems Telemetry HUD (Replacing AI Slop Globe) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#08080e]/90 border border-white/10 p-6 backdrop-blur-xl shadow-2xl font-mono text-xs text-zinc-300 space-y-5 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>telemetry_node.v3</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Diagnostic Metrics */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-zinc-500">Target Environment</span>
                <span className="text-white font-semibold">Windows x64 / Linux Cloud</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-zinc-500">Runtime Telemetry</span>
                <span className="text-emerald-400 font-bold">{formatUptime(uptime)} UPTIME</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-zinc-500">Duplex WebSocket Latency</span>
                <span className="text-sky-400 font-bold">&lt; 28ms (Cloudflare Edge)</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-zinc-500">Core Languages</span>
                <span className="text-zinc-200">TypeScript • Java 21 • Python</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500">Security / Cryptography</span>
                <span className="text-violet-400 font-semibold">Zero-Knowledge / E2EE</span>
              </div>
            </div>

            {/* Live Terminal Command Echo */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-[11px] space-y-1">
              <div className="text-zinc-500">
                <span className="text-emerald-400 font-bold">$</span> curl -s https://api.abhishek.dev/status
              </div>
              <div className="text-zinc-300">
                {"{ status: 'healthy', projects: 6, open_to_work: true }"}
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500">
              <span>Host: New Delhi (IST)</span>
              <span className="text-sky-400 font-semibold">100% Type-Safe</span>
            </div>
          </div>
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
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Precision Grid</div>
          <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">Subtle HUD</div>
          <div className="text-xs text-zinc-400 mt-0.5">Mouse Radial Spotlight</div>
        </div>
      </div>
    </section>
  );
}
