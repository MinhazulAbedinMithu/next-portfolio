"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectItem = ({ info }) => {
  const [isExpand, setIsExpand] = useState(true);
  const { title, description, links, thumbnail, images, features } = info;
  return (
    <div
      className={`w-full p-4 bg-[#0e213d] rounded-md shadow-md drop-shadow-md text-left text-base overflow-hidden ${
        isExpand ? "h-full" : "h-[160px]"
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
        <Link href={links.live}>Live</Link>
        <Link href={links.github}>Code</Link>
      </div>
      <h4 className="text-lg font-medium pt-2">Features: </h4>
      <ol className="pl-4">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {/* <div className="w-full bg-black/50">{isExpand ? "Hide" : "Expand"}</div> */}
    </div>
  );
};

export default ProjectItem;
