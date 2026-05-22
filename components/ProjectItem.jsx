"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  MdCheck,
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const ProjectItem = ({ info, index, isExpanded, onExpand }) => {
  const { id, title, description, stack, links, thumbnail, images, features } = info;
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    tiltRef.current.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
    tiltRef.current.style.transition = "transform 0.15s ease";
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    tiltRef.current.style.transition = "transform 0.5s ease";
  };

  return (
    <div
      ref={tiltRef}
      className="relative w-full rounded-md shadow-md drop-shadow-md"
      style={{ willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full p-4 bg-neutral-400/40 dark:bg-[#131313] rounded-md shadow-md drop-shadow-md text-left text-base overflow-hidden transition-[border-color] duration-300 border border-transparent hover:border-purple-800/30 dark:hover:border-[#00ffee]/20 ${
          isExpanded ? "h-[100%] pb-10" : "h-[160px]"
        }`}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            width={200}
            height={120}
            loading="lazy"
            className="float-right m-1 rounded-md"
            alt="projects"
          />
        )}
        <h2 className="text-2xl font-bold">{title}</h2>
        {stack && (
          <p className="text-xs font-mono text-purple-800 dark:text-[#00ffee] pb-1">
            {stack}
          </p>
        )}
        <p className="py-1">{description}</p>
        <div className="flex items-center justify-start gap-x-4 text-purple-800 dark:text-[#00ffee] font-semibold">
          {links.live && (
            <Link
              href={links.live}
              target="_blank"
              className="hover:underline underline-offset-2"
            >
              Live ↗
            </Link>
          )}
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              className="hover:underline underline-offset-2"
            >
              Code ↗
            </Link>
          )}
        </div>
        <h4 className="text-lg font-medium pt-2">Features:</h4>
        <ol className="pl-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <MdCheck className="text-purple-800 dark:text-[#00ffee] shrink-0" />
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div
        className={`w-full bg-gradient-to-b from-white/40 dark:from-black/40 via-white/60 dark:via-black/60 to-white dark:to-black hover:bg-white dark:hover:bg-black hover:text-purple-800 dark:hover:text-[#00ffee] absolute left-0 flex items-center justify-center p-1 font-bold cursor-pointer bottom-0`}
        onClick={() => onExpand(index)}
      >
        {isExpanded ? (
          <div className="flex items-center justify-center gap-2 font-medium">
            <span>Collapse</span>
            <MdKeyboardDoubleArrowUp />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 font-medium">
            <span>Expand</span>
            <MdKeyboardDoubleArrowDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
