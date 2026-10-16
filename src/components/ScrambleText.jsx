import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEF0123456789!@#$%^&*<>[]{}~/\\';

export default function ScrambleText({ text, className = '', hover = true, delay = 0 }) {
  const [output, setOutput] = useState(text);
  const intervalRef = useRef(null);

  const trigger = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setOutput(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 25);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      trigger();
    }, delay);
    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={() => {
        if (hover) trigger();
      }}
    >
      {output}
    </span>
  );
}
