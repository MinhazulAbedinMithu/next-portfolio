import EducationTab from "@/components/EducationTab";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Resume = () => {
  return (
    <main className="pl-4 py-4 h-full">
      {/* Intro  */}
      <div>
        <SectionTitle title="Experience" />
      </div>

      {/* Skills  */}
      <div className="py-6">
        <SectionTitle title="Education" />
        <EducationTab />
      </div>
    </main>
  );
};

export default Resume;
