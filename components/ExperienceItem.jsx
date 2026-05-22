"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const ExperienceItem = ({ info }) => {
  const itemRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    gsap.to(cardRef.current, {
      rotateX: ((y - cy) / cy) * -6,
      rotateY: ((x - cx) / cx) * 6,
      scale: 1.01,
      duration: 0.25,
      ease: "power2.out",
      transformPerspective: 900,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={itemRef}
      className={`pb-4 pl-3 pt-1 pr-4 border-s border-[#5f1daa9d] dark:border-[#136964] relative after:absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[#4d1269] dark:after:bg-[#1b978f] after:rounded-full after:-left-2 after:-top-2 after:z-10 before:absolute before:content-[""] before:w-[25px] before:h-[30px] before:bg-purple-800 dark:before:bg-[#00ffee] before:rounded-full before:-left-2 before:-top-2 before:z-20`}
    >
      <div
        ref={cardRef}
        className="p-4 bg-neutral-400/40 dark:bg-[#131313] rounded-md shadow-md dark:shadow-ep-shadow"
        style={{ willChange: "transform" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-sm font-mono">
          {info.startDate} - {info.endDate}
        </div>
        <div className="flex items-start justify-between py-2">
          <div>
            <Link
              href={info.companyWebsite}
              className="text-lg font-bold text-purple-800 dark:text-[#00ffee]"
            >
              {info.companyName}
            </Link>
            <p className="text-md font-medium text-[#d9eaf1c4]">
              {info.position}
            </p>
          </div>
          {info.companyPhoto && (
            <Image
              src={info.companyPhoto}
              alt={info.companyName}
              width="150"
              height="60"
              className="rounded-lg h-[50px]"
            />
          )}
        </div>
        <ul className="p-2">
          {info.majorWorks.map((item, index) => (
            <li
              key={index}
              className={`relative before:content-["▹"] before:absolute before:-left-4 before:text-emerald-300 py-[5px] font-mono`}
            >
              <span>{item.text}</span>
              {item.link && (
                <span className="pl-4 font-bold text-purple-800 dark:text-[#00ffee] hover:underline">
                  [
                  <Link target="_blank" href={item.link.href}>
                    {item.link.title}
                  </Link>
                  ]
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
