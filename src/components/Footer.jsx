import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setIstTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-[#040407]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} Abhishek Raj. Engineered with Three.js & Modern React.
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>New Delhi, India — {istTime} IST</span>
        </div>
      </div>
    </footer>
  );
}
