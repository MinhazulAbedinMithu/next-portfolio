"use client";
import React, { useState } from "react";

const tabInfo = [
  {
    title: "Academic",
    body: [
      {
        title: "Bsc",
        body: {
          institution: "Green University of Bangladesh",
          department: "Computer Science & Engineering",
          year: "2022",
          result: "3.24",
        },
      },
      {
        title: "Hsc",
        body: {
          institution: "Ullapara Science College",
          section: "Science",
          year: "2016",
          result: "4.50",
        },
      },
      {
        title: "SSC",
        body: {
          institution: "Karatoa Multimedia School",
          section: "Science",
          year: "2014",
          result: "5.00",
        },
      },
    ],
  },
  {
    title: "Professional",
    body: [
      {
        title: "Responsive Web Design",
        body: {
          institution: "Programming Hero",
          technology: "JavaScript, MERN",
          batch: "2021",
        },
      },
      {
        title: "Complete Web Development",
        body: {
          institution: "Creative IT Institute",
          technology: "HTML, CSS, JQuery, Bootstrap",
          batch: "WEB-1822",
        },
      },
    ],
  },
];

const EducationTab = () => {
  const [activeTabInfo, setActiveTabInfo] = useState({
    rootIndex: 0,
    childIndex: 1,
  });
  return (
    <div className="py-4">
      <div className="flex items-center justify-center gap-4 w-full py-1 border-b border-gray-700">
        {tabInfo.map((rootItem, rootIndex) => (
          <div
            key={rootIndex}
            className={`cursor-pointer hover:text-emerald-300 hover:bg-[#0e213d] drop-shadow-md py-2 px-2 rounded-b-md ${
              rootIndex === activeTabInfo.rootIndex &&
              "text-emerald-400 bg-[#0e213d] shadow-lg"
            }`}
            onClick={() =>
              setActiveTabInfo({
                ...activeTabInfo,
                rootIndex: rootIndex,
                childIndex: 0,
              })
            }
          >
            {rootItem.title}
          </div>
        ))}
      </div>
      <div className="flex items-start justify-start gap-6 pt-4">
        <div className={`${activeTabInfo.rootIndex === 0 && "w-1/4"}`}>
          {tabInfo[activeTabInfo.rootIndex].body.map(
            (childItem, childIndex) => (
              <div
                key={childIndex}
                className={`cursor-pointer hover:text-emerald-300 capitalize hover:bg-[#0e213d] py-2 px-2 rounded-b-md ${
                  childIndex === activeTabInfo.childIndex &&
                  "text-emerald-400 bg-[#0e213d]"
                }`}
                onClick={() =>
                  setActiveTabInfo({ ...activeTabInfo, childIndex: childIndex })
                }
              >
                {childItem.title}
              </div>
            )
          )}
        </div>
        <div>
          <h4 className="text-emerald-300 text-xl font-mono">
            @{" "}
            <span className="capitalize">
              {
                tabInfo[activeTabInfo.rootIndex].body[activeTabInfo.childIndex]
                  .title
              }
            </span>
          </h4>
          <div>
            {Object.keys(
              tabInfo[activeTabInfo.rootIndex].body[activeTabInfo.childIndex]
                .body
            ).map((childKey, index) => (
              <div className="flex items-start justify-between gap-6 pt-4 w-full">
                <div className="capitalize">{childKey}: </div>{" "}
                <div>
                  {
                    tabInfo[activeTabInfo.rootIndex].body[
                      activeTabInfo.childIndex
                    ].body[childKey]
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
