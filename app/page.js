import SectionTitle from "@/components/SectionTitle";
import SkillInfoTab from "@/components/SkillInfoTab";

const skillTabInfo = [
  {
    title: "Languages",
    description: {
      languages: ["Javascript (ES5/ ES6+)", "C", "Typescript", "HTML", "CSS"],
    },
  },
  {
    title: "Front-End Technologies",
    description: {
      frontend_Technologies: [
        "React JS",
        "Redux",
        "Next JS",
        "React Flow",
        "Mapbox GL",
        "PWA",
      ],
    },
  },
  {
    title: "UI Styling",
    description: {
      styling_Frameworks: [
        "Bootstrap",
        "Material UI",
        "Ant Design",
        "Carbon Design System",
        "Tailwind CSS",
        "SCSS",
      ],
    },
  },
  {
    title: "Backend Technologies",
    description: {
      backend_Technologies: ["Node JS", "Express JS", "Socket.IO [basic]"],
    },
  },
  {
    title: "Tools & Platforms",
    description: {
      tools: [
        "Git",
        "Webpack",
        "Firebase",
        "NPM",
        "Workflow Automation",
        "Mapbox / MapLibre GL",
      ],
      platforms: [
        "Github",
        "Bitbucket",
        "Zapier",
        "GoHighLevel",
        "Click Up",
        "Jira",
        "Slack",
        "Notion",
      ],
    },
  },
  {
    title: "Database",
    description: {
      database: ["MySQL", "MongoDB (mongoose)"],
    },
  },
];

export default function Home() {
  return (
    <main className="pl-4 py-4 h-full w-full ">
      {/* Intro  */}
      <div className="w-full">
        <SectionTitle title="about" />
        <h4 className="text-[18px] font-mono pt-4">
          Hello! I&apos;m Minhazul Abedin
        </h4>
        <p className="text-base font-mono py-2">
          I am a Programming lover and self-taught web developer practicing ES6,
          React, Node, MongoDB, Express, Typescript, Rest API, Material UI,
          SASS, JSON, and so on.
        </p>
        <p className="text-base font-mono py-2">
          I am very interested in learning new technologies and working with
          them. I always try to incorporate my acquired knowledge into real life
          projects and constantly and further develop my acquired knowledge.
        </p>
        <div className="flex items-center justify-start gap-8 font-mono flex-col sm:flex-row pt-4">
          <div>
            <div>
              <span>Age: </span>
              <span>26</span>
            </div>
            <div>
              <span>Status: </span>
              <span>Available</span>
            </div>
          </div>
          <div>
            <div>
              <span>Residence: </span>
              <span>Bangladesh</span>
            </div>
            <div>
              <span>Address: </span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills  */}
      <div className="py-6">
        <SectionTitle title="skills" />

        <SkillInfoTab data={skillTabInfo} />
      </div>
    </main>
  );
}
