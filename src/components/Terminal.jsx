import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Initializing Abhishek Raj Workstation Shell v3.2...' },
    { type: 'output', text: "Type 'help' to view available commands." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const COMMANDS = {
    help: "Available commands:\n• bio       - Overview & engineering focus\n• projects  - Core production builds\n• stack     - Languages & architecture\n• contact   - Get in touch\n• clear     - Clear terminal buffer",
    bio: "Abhishek Raj is a software engineer specializing in high-throughput full-stack architectures, zero-knowledge privacy protocols, WebSockets, and audio streaming systems.",
    projects: "1. Private Chat App (E2EE/Astro/Capacitor)\n2. Spotify Web Audio Engine (Web Audio API/Queue)\n3. YouTube Stream Pipeline (Python/FFmpeg daemon)\n4. Nexus Java Engine (Concurrent Loom workers)\n5. MiroFish Swarm Simulation (Emergence physics)",
    stack: "• Languages: TypeScript, JavaScript, Java 21, Python 3.12, SQL\n• Frameworks: Astro, React 18, Tailwind CSS, Three.js\n• Infrastructure: Cloudflare Workers, Docker, SQLite, Git",
    contact: "• Email: abhishekraaj07@users.noreply.github.com\n• GitHub: https://github.com/abhishekraaj07\n• Location: New Delhi, India (IST)",
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim().toLowerCase();
      setInputVal('');
      if (!trimmed) return;

      if (trimmed === 'clear') {
        setHistory([]);
        return;
      }

      const newHistory = [...history, { type: 'input', text: trimmed }];

      if (COMMANDS[trimmed]) {
        newHistory.push({ type: 'output', text: COMMANDS[trimmed] });
      } else {
        newHistory.push({
          type: 'error',
          text: `Command not recognized: '${trimmed}'. Type 'help' for options.`
        });
      }

      setHistory(newHistory);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-16 relative z-10">
      <div className="flex flex-col mb-8">
        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5" />
          Interactive Workstation
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Developer Terminal
        </h2>
      </div>

      <div className="rounded-2xl bg-[#08080d] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
        {/* Header Bar */}
        <div className="bg-[#101018] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-zinc-500 font-medium">guest@abhishek-workstation: ~</span>
          <span className="text-zinc-600">bash</span>
        </div>

        {/* Terminal Body */}
        <div className="p-5 min-h-[220px] max-h-[380px] overflow-y-auto space-y-2 leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'input' && (
                <div className="text-emerald-400 font-semibold">
                  <span className="text-zinc-500 mr-2">guest@abhishek:~$</span>
                  {item.text}
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-zinc-300 whitespace-pre-line pl-4 border-l border-white/10">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-red-400 pl-4 border-l border-red-500/30">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt Input */}
        <div className="px-5 py-3.5 bg-[#0b0b12] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold shrink-0">guest@abhishek:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'bio', 'projects', 'stack', 'contact'..."
            className="w-full bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-zinc-600"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </section>
  );
}
