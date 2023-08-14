import EducationTab from "@/components/EducationTab";
import ExperienceItem from "@/components/ExperienceItem";
import SectionTitle from "@/components/SectionTitle";

const Resume = () => {
  return (
    <main className="pl-4 py-4 h-full">
      {/* Intro  */}
      <div>
        <SectionTitle title="Experience" />
        <div className="py-4">
          <ExperienceItem />
        </div>
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
