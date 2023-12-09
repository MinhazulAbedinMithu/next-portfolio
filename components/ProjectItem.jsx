"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdCheck,
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const ProjectItem = ({ info, index, isExpanded, onExpand }) => {
  const { id, title, description, links, thumbnail, images, features } = info;
  return (
    <div className="relative w-full rounded-md shadow-md drop-shadow-md">
      <div
        className={` w-full p-4 bg-[#0e213d] rounded-md shadow-md drop-shadow-md text-left text-base overflow-hidden ${
          isExpanded ? "h-[100%] pb-10" : "h-[160px]"
        }`}
      >
        <Image
          src={thumbnail}
          width={200}
          height={120}
          loading="lazy"
          className="float-right m-1 rounded-md"
        />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="py-1">{description}</p>
        <div className="flex items-center justify-start gap-x-4 text-emerald-400 font-semibold">
          <Link href={links.live} target="_blank">
            Live
          </Link>
          <Link href={links.github} target="_blank">
            Code
          </Link>
        </div>
        <h4 className="text-lg font-medium pt-2">Features: </h4>
        <ol className="pl-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center justify-start gap-2">
              <MdCheck className="text-emerald-600" />
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div
        className={`w-full bg-gradient-to-b from-black/40 via-black/60 to-black hover:bg-black hover:text-emerald-400 absolute  left-0 flex items-center justify-center p-1 font-bold cursor-pointer bottom-0`}
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
