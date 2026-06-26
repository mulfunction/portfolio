"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let animationFrame: number;

    const scramble = () => {
      setDisplayText((current) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      iteration += 1 / 3; // Controls speed
      animationFrame = requestAnimationFrame(scramble);
    };

    animationFrame = requestAnimationFrame(scramble);

    return () => cancelAnimationFrame(animationFrame);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
