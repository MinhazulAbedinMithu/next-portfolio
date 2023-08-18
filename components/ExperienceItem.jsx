import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceItem = ({ info }) => {
  return (
    <div
      className={`pb-4 pl-3 pt-1 pr-4 border-s border-[#054461] relative after:absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[#054461] after:rounded-full after:-left-2 after:-top-2 after:z-10 before:absolute before:content-[""] before:w-[25px] before:h-[30px] before:bg-[#0f5677] before:rounded-full before:-left-2 before:-top-2 before:z-20`}
    >
      <div className="p-4 bg-[#0e213d] rounded-md shadow-md drop-shadow-md">
        <div className="text-sm font-mono">
          {info.startDate} - {info.endDate}
        </div>
        <div className="flex items-start justify-between py-2">
          <div>
            <Link
              href={info.companyWebsite}
              className="text-lg font-bold text-[#10b981]"
            >
              {info.companyName}
            </Link>
            <p className="text-md font-medium text-[#d9eaf1c4]">
              {info.position}
            </p>
          </div>
          <Image
            src={info.companyPhoto}
            alt="Taskeasy"
            width="150"
            height="60"
            className=" rounded-lg h-[50px]"
          />
        </div>
        <ul className="p-2">
          {info.majorWorks.map((item, index) => (
            <li
              key={index}
              className={`relative before:content-["▹"] before:absolute before:-left-4 before:text-emerald-300 py-[5px] font-mono`}
            >
              <span>{item.text}</span>
              {item.link && (
                <span className="pl-4 font-bold text-[#1ea377]">
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
