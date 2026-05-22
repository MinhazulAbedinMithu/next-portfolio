'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const aura = auraRef.current;
    const cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(aura, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      gsap.to(cursor, { duration: 0.1, x: cursorPos.x, y: cursorPos.y });
      gsap.to(aura, { duration: 0.3, x: cursorPos.x, y: cursorPos.y, ease: 'power2.out' });
    };

    const animateAura = () => {
      gsap.to(aura, {
        duration: 1.5,
        scale: 1.5,
        opacity: 0,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    };

    window.addEventListener('mousemove', moveCursor);
    animateAura();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-white dark:bg-teal-600 rounded-full pointer-events-none z-50"
        style={{ mixBlendMode: 'difference' }}
      ></div>
      <div
        ref={auraRef}
        className="fixed top-0 left-0 w-20 h-20 border-2 border-teal-600 rounded-full pointer-events-none z-40"
        style={{
          borderColor: 'rgba(0, 150, 136, 0.5)',
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </>
  );
};

export default CustomCursor;


