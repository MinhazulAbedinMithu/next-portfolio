import ProjectsWrapper from "@/components/ProjectsWrapper";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Works = () => {
  return (
    <main className="pl-4 py-4 h-full">
      {/* Projects  */}
      <div>
        <SectionTitle title="Works" />
        <ProjectsWrapper />
      </div>
    </main>
  );
};

export default Works;
