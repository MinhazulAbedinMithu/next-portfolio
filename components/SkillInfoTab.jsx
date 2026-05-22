"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillInfoTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabContentRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(
        tabContentRef.current,
        { opacity: 0, y: 50, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.75)"
        }
      );
    }
  }, [activeTab]);

  return (
    <div className="w-full flex items-start justify-start flex-col sm:flex-row gap-6 pt-4">
      <div className="flex items-start justify-start flex-row sm:flex-col overflow-x-auto w-full sm:w-auto">
        {data.map((skillInfo, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:text-purple-800 dark:hover:text-[#00ffee] hover:bg-neutral-300 dark:hover:bg-[#131313] py-2 px-2 rounded-b-md ${index === activeTab ? "text-purple-800 dark:text-[#00ffee] bg-neutral-300 dark:bg-[#131313]" : ""
              }`}
            onClick={() => setActiveTab(index)}
          >
            <h4 className="whitespace-nowrap font-medium">{skillInfo.title}</h4>
          </div>
        ))}
      </div>
      <div className="pl-4 pt-2" ref={tabContentRef}>
        {Object.keys(data[activeTab].description).map((item, index) => (
          <div key={index}>
            <h4 className="text-purple-800 dark:text-[#00ffee] text-xl font-mono">
              @ <span className="capitalize">{item}</span>
            </h4>
            <ul className="py-4 px-2 list-none">
              {data[activeTab].description[item].map((listItem, listIndex) => (
                <li
                  key={listIndex}
                  className={`relative before:content-["▹"] before:absolute before:-left-4 before:text-purple-800 dark:before:text-[#00ffee] py-[5px] font-mono`}
                >
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInfoTab;
