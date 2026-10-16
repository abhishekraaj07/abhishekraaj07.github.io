import { useState, useEffect, useRef } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________010101';

export function useTextScramble(targetText, speed = 30) {
  const [displayText, setDisplayText] = useState(targetText);
  const frameRef = useRef(0);

  const scramble = () => {
    let iteration = 0;
    clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      setDisplayText(() =>
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(frameRef.current);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(frameRef.current);
  }, [targetText]);

  return { displayText, scramble };
}
