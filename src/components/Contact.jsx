import React from 'react';
import { Mail, Github, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact({ onCopyEmail, copied }) {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-14 text-center overflow-hidden backdrop-blur-2xl shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[100px] pointer-events-none" />

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          Let's build something iconic.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Open for engineering roles, technical architecture collaborations, and ambitious software builds.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:-translate-y-0.5"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>abhishekraaj07@users.noreply.github.com</span>
              </>
            )}
          </button>

          <a
            href="https://github.com/abhishekraaj07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
