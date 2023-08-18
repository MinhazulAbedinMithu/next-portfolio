import EducationTab from "@/components/EducationTab";
import ExperienceItem from "@/components/ExperienceItem";
import SectionTitle from "@/components/SectionTitle";

const experienceItemInfo = [
  {
    startDate: "Nov 2022",
    endDate: "Present",
    companyName: "TaskEasy IT Solutions",
    companyWebsite: "https://www.taskeasy.io/",
    companyPhoto: "",
    postion: "Frontend Developer",
    majorWorks: [
      {
        text: "Build Automation Web App like Zapier",
        link: {
          href: "https://workflow.taskeasy.io/",
          title: "TaskEasy Workflow",
        },
      },
      {
        text: "Built Matrimonial Application",
        link: {
          href: "https://digitalghotok.com/",
          title: "Digital Ghotok",
        },
      },
      {
        text: "GoHighLevel: Automation, Surveys, Funnels, Website",
        link: false,
      },
      {
        text: "AI Holiday Travel Planner. Applying Prompt Engineering",
        link: {
          href: "https://rutugo.travel/",
          title: "Rutogo",
        },
      },
      {
        text: "Built Obsidian Plugin. Which is send and receive data between obsidian, google sheet and google docs via api. Build with Node JS.",
        link: {
          href: "https://github.com/MinhazulAbedinMithu/obsidian-test-template",
          title: "Beta Repo",
        },
      },
    ],
  },
  {
    startDate: "Aug 2022",
    endDate: "Oct 2022",
    companyName: "BariKoi",
    companyWebsite: "https://www.barikoi.com/",
    companyPhoto: "",
    postion: "Frontend Developer Intern",
    majorWorks: [
      {
        text: "Buld & Impletement Map Functionalities",
        link: false,
      },
      {
        text: "Building Delivery Management System",
        link: {
          href: "https://www.rapido.com.bd/",
          title: "Rapido",
        },
      },
    ],
  },
  {
    startDate: "Nov 2021",
    endDate: "Feb 2022",
    companyName: "Tangle Labs",
    companyWebsite: "https://tanglelabs.io/",
    companyPhoto: "",
    postion: "Frontend Developer Builder",
    majorWorks: [
      {
        text: "Build 3 Landing Pages with react, ts, including their current Website",
        link: false,
      },
      {
        text: "Design nft marketplace Web App",
        link: {
          href: "https://inspyrd.io/",
          title: "Inspyrd",
        },
      },
    ],
  },
];

const Resume = () => {
  return (
    <main className="pl-4 py-4 h-full">
      {/* Intro  */}
      <div>
        <SectionTitle title="Experience" />
        <div className="py-4">
          {experienceItemInfo.map((item, index) => (
            <ExperienceItem key={index} info={item} />
          ))}
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
