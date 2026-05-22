'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-200 dark:bg-[#0c0c0c]">
      <div ref={loaderRef} className="w-16 h-16 border-t-4 border-purple-800 dark:border-[#00ffee] border-solid rounded-full"></div>
    </div>
  );
};

export default Loading;
