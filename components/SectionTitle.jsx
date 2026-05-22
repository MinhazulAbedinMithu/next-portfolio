'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SectionTitle = ({ title }) => {
  const titleRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            tl.fromTo(
              entry.target,
              { opacity: 0, x: -40 },
              { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }
            );
            if (barRef.current) {
              tl.fromTo(
                barRef.current,
                { scaleX: 0, transformOrigin: "left center" },
                { scaleX: 1, duration: 0.5, ease: "power3.out" },
                "-=0.25"
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = titleRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <div className="pb-4 relative">
      <h2
        ref={titleRef}
        className="pl-3 relative text-[28px] font-bold before:content-[''] before:absolute before:bg-gradient-to-br before:from-purple-800 dark:before:from-[#00ffee] dark:before:via-emerald-400/5 before:via-emerald-400/5 before:to-white dark:before:to-gray-400 before:w-[40px] before:h-[40px] before:rounded-full before:-left-2 before:-top-1 tracking-widest"
        id="sectionTitle"
      >
        <span className="text-purple-800 dark:text-[#00ffee] uppercase">
          {title?.charAt(0)}
        </span>
        {title?.substring(1)}
      </h2>
      <div
        ref={barRef}
        className="absolute bottom-0 left-[-24px] h-[1px] w-full bg-white dark:bg-gray-400 origin-left"
      />
    </div>
  );
};

export default SectionTitle;
