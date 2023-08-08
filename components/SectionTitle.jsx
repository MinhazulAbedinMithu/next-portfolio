import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2
      className="pl-3 relative text-[28px] font-bold before:content-[''] before:absolute  before:bg-gradient-to-br before:from-emerald-400 before:via-emerald-400/5 before:to-gray-400 before:w-[40px] before:h-[40px] before:rounded-full before:-left-2 before:-top-1 pb-4 after:content-[''] after:absolute after:left-[-24px] after:bottom-0 after:h-[1px] after:bg-gray-400 after:w-full tracking-widest"
      id="sectionTitle"
    >
      <span className="text-emerald-400 uppercase">{title?.charAt(0)}</span>
      {title?.substring(1)}
    </h2>
  );
};

export default SectionTitle;
