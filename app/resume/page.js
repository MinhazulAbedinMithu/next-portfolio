import EducationTab from "@/components/EducationTab";
import ExperienceItem from "@/components/ExperienceItem";
import SectionTitle from "@/components/SectionTitle";
import imgTaskeasy from "@/public/images/taskeasy.png";
import imgBariKoi from "@/public/images/barikoi.jpg";

const experienceItemInfo = [
  {
    startDate: "Apr 2024",
    endDate: "Present",
    companyName: "Fiverr",
    companyWebsite: "https://www.fiverr.com/",
    companyPhoto: null,
    position: "Freelance Full-Stack Developer",
    majorWorks: [
      {
        text: "Built RKE Companion — an AI-powered research compliance and grant management platform for universities, researchers, and research support teams.",
        link: false,
      },
      {
        text: "Built Pumppad — a crypto token launchpad letting users create, launch, and manage meme and community-based cryptocurrency tokens.",
        link: false,
      },
      {
        text: "Delivered Luvis, a service-booking SaaS in Next.js + TypeScript, simplifying complex appointment scheduling through optimized global state management.",
        link: false,
      },
    ],
  },
  {
    startDate: "Nov 2022",
    endDate: "Dec 2023",
    companyName: "TaskEasy IT Solutions",
    companyWebsite: "https://www.taskeasy.io/",
    companyPhoto: imgTaskeasy,
    position: "Software Engineer",
    majorWorks: [
      {
        text: "Engineered a Zapier-style automation engine in Node.js / Express.js — low-latency event-driven integrations across 10+ third-party APIs with background job processing.",
        link: {
          href: "https://workflow.taskeasy.io/",
          title: "TaskEasy Workflow",
        },
      },
      {
        text: "Architected a bidirectional Obsidian plugin syncing data live between Obsidian, Google Sheets, and Google Docs via REST APIs, eliminating all manual data transfer.",
        link: {
          href: "https://github.com/MinhazulAbedinMithu/obsidian-test-template",
          title: "Repo",
        },
      },
      {
        text: "Automated end-to-end marketing and CRM pipelines in GoHighLevel — funnels, surveys, and lead workflows — reducing operational overhead significantly.",
        link: false,
      },
    ],
  },
  {
    startDate: "Aug 2022",
    endDate: "Oct 2022",
    companyName: "BariKoi",
    companyWebsite: "https://www.barikoi.com/",
    companyPhoto: imgBariKoi,
    position: "Front-End Developer Intern",
    majorWorks: [
      {
        text: "Implemented interactive map UIs handling large geodata sets in React.js, improving location accuracy for BariKoi's mapping platform.",
        link: false,
      },
      {
        text: "Built logistics-tracking dashboards for the Rapido delivery system, giving dispatchers clearer visibility across live delivery routes.",
        link: {
          href: "https://www.rapido.com.bd/",
          title: "Rapido",
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
