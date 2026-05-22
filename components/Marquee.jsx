'use client'
import React, { useState, useEffect } from 'react';

const STATIC_ITEMS = [
  "Available for Work",
  "Next.js · React · Node.js · TypeScript",
  "Dhaka, Bangladesh · Open to Remote",
  "Full Stack Specialist",
];

const Marquee = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [...STATIC_ITEMS, time].filter(Boolean);
  // Duplicate for seamless loop
  const display = [...items, ...items];

  return (
    <div className="overflow-hidden bg-purple-800 dark:bg-[#00ffee] py-1 rounded-b-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {display.map((item, i) => (
          <span
            key={i}
            className="text-white dark:text-black font-bold text-sm px-6 shrink-0"
          >
            {item}
            <span className="mx-4 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
