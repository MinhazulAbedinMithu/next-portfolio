"use client";
import React, { useState } from "react";

const SkillInfoTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex items-start justify-start gap-6 pt-4">
      <div className="">
        {data.map((skillInfo, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:text-emerald-300 hover:bg-[#0e213d] py-2 px-2 rounded-b-md ${
              index === activeTab && "text-emerald-400 bg-[#0e213d]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <h4>{skillInfo.title}</h4>
          </div>
        ))}
      </div>
      <div className="pl-4 pt-2">
        {Object?.keys(data[activeTab].description)?.map((item, index) => (
          <div key={index}>
            <h4 className="text-emerald-300 text-xl font-mono">
              @ <span className="capitalize">{item}</span>
            </h4>
            <ul className="py-4 px-2 list-none">
              {data[activeTab]?.description[item]?.map(
                (listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className={`relative before:content-["▹"] before:absolute before:-left-4 before:text-emerald-300 py-[5px] font-mono`}
                  >
                    {listItem}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInfoTab;
