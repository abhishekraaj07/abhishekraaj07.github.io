import React, { useState, useEffect } from 'react';

const ROLES = [
  'Zero-Knowledge Privacy Protocols',
  'Real-Time WebSockets & Streaming Audio',
  'Concurrent Java 21 Event Engines',
  'Automated Media Processing Daemons',
  'High-Performance Full-Stack Systems'
];

const GLYPHS = '!@#$<>{}[]_+-=/\\0101';

export default function RoleTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(ROLES[0]);

  useEffect(() => {
    const target = ROLES[currentIndex];
    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      setDisplayText(
        target
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return target[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= target.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 28);

    const switchTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ROLES.length);
    }, 3800);

    return () => {
      clearInterval(interval);
      clearTimeout(switchTimeout);
    };
  }, [currentIndex]);

  return (
    <div className="inline-flex items-center gap-3 py-1.5 px-3 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-sky-400">
      <span className="text-zinc-500 font-semibold">[{String(currentIndex + 1).padStart(2, '0')}/05]</span>
      <span className="text-white font-medium tracking-wide">
        {displayText}
      </span>
      <span className="w-2 h-4 bg-sky-400 animate-pulse inline-block" />
    </div>
  );
}
