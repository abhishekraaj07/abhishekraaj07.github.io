import React, { useState, useEffect } from 'react';
import { Terminal, Github, FolderGit2, Cpu, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-3 sm:gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-2xl ${
          scrolled
            ? 'bg-[#0d0d14]/80 backdrop-blur-xl border-white/15 shadow-black/80'
            : 'bg-[#0d0d14]/50 backdrop-blur-md border-white/10'
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-white group">
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
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Systems</span>
            </a>
          </li>
          <li>
            <a
              href="#terminal"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal</span>
            </a>
          </li>
        </ul>

        <div className="h-4 w-[1px] bg-white/10" />

        <a
          href="https://github.com/abhishekraaj07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all hover:scale-105 shadow-sm"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}
