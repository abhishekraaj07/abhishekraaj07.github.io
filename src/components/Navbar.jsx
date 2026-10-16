import React, { useState, useEffect } from 'react';
import { Terminal, Github, FolderGit2, Cpu, Volume2, VolumeX } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playClickSound, playHoverSound } from '../utils/audio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClickSound();
  };

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-2 sm:gap-5 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-2xl ${
          scrolled
            ? 'bg-[#0d0d14]/85 backdrop-blur-xl border-white/15 shadow-black/80'
            : 'bg-[#0d0d14]/60 backdrop-blur-md border-white/10'
        }`}
      >
        <a
          href="#"
          onMouseEnter={playHoverSound}
          className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-white group"
        >
          <div className="w-6 h-6 rounded-md bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xs text-sky-400 group-hover:border-sky-400/50 transition-colors">
            AR
          </div>
          <span className="hidden sm:inline">Abhishek Raj</span>
        </a>

        <div className="h-4 w-[1px] bg-white/10" />

        <ul className="flex items-center gap-1 sm:gap-2">
          <li>
            <a
              href="#projects"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Systems</span>
            </a>
          </li>
          <li>
            <a
              href="#terminal"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal</span>
            </a>
          </li>
        </ul>

        <div className="h-4 w-[1px] bg-white/10" />

        {/* Audio FX Toggle */}
        <button
          onClick={toggleSound}
          onMouseEnter={playHoverSound}
          title={soundOn ? 'Mute Sci-Fi Audio FX' : 'Enable Sci-Fi Audio FX'}
          className={`p-1.5 rounded-full border transition-colors ${
            soundOn
              ? 'bg-sky-500/20 text-sky-400 border-sky-500/30'
              : 'text-zinc-500 hover:text-zinc-300 border-white/5 hover:border-white/15'
          }`}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

        <a
          href="https://github.com/abhishekraaj07"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all hover:scale-105 shadow-sm"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}
