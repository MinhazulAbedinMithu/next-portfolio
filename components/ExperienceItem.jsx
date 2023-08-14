import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgTaskeasy from "@/public/images/taskeasy.png";

const ExperienceItem = () => {
  return (
    <div
      className={`pb-4 pl-3 pt-1 pr-4 border-s border-[#054461] relative after:absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[#054461] after:rounded-full after:-left-2 after:-top-2 after:z-10 before:absolute before:content-[""] before:w-[25px] before:h-[30px] before:bg-[#0f5677] before:rounded-full before:-left-2 before:-top-2 before:z-20`}
    >
      <div className="p-4 bg-[#0e213d] rounded-md shadow-md drop-shadow-md">
        <div className="text-sm font-mono">Nov 2022 - Present</div>
        <div className="flex items-start justify-between py-2">
          <div>
            <h4 className="text-lg font-bold">TaskEasy IT Solutions</h4>
            <p className="text-md font-medium text-[#d9eaf1c4]">
              Frontend Developer
            </p>
          </div>
          <Image
            src={imgTaskeasy}
            alt="Taskeasy"
            width="150"
            height="auto"
            className="bg-[#59f9ff4f] rounded-lg"
          />
        </div>
        <div>
          <ul>
            <li>
              <span>Built Automation Web App like Zapier.</span>
              <Link href="">TaskEasy Workflow</Link>
            </li>
            <li>
              <span>Built Automation Web App like Zapier.</span>
              <Link href="">TaskEasy Workflow</Link>
            </li>
            <li>
              <span>Built Automation Web App like Zapier.</span>
              <Link href="">TaskEasy Workflow</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
