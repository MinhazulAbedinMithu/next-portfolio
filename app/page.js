import SectionTitle from "@/components/SectionTitle";
import SkillInfoTab from "@/components/SkillInfoTab";

const skillTabInfo = [
  {
    title: "Core Stack",
    description: {
      languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
      frontend: ["React.js", "Next.js 14", "Redux Toolkit", "shadcn/ui"],
      backend: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
  },
  {
    title: "Databases",
    description: {
      databases: ["MongoDB / Mongoose", "Supabase", "Firebase"],
    },
  },
  {
    title: "UI & Styling",
    description: {
      styling: ["Tailwind CSS", "SCSS", "shadcn/ui"],
    },
  },
  {
    title: "Tools & Infra",
    description: {
      deployment: ["DigitalOcean", "Vercel"],
      services: ["Cloudinary", "Meilisearch"],
      workflow: ["Git / GitHub", "Jira", "ClickUp", "Zapier"],
      cms: ["Strapi CMS", "GoHighLevel"],
    },
  },
  {
    title: "Expertise",
    description: {
      architecture: [
        "SSR / SSG Architecture",
        "JWT / RBAC Auth",
        "SaaS Architecture",
        "E-Commerce Platforms",
        "Spec-Driven Development (SDD)",
      ],
      specializations: [
        "Technical SEO & Core Web Vitals",
        "Performance Optimization",
        "Headless CMS Integration",
      ],
    },
  },
];

export default function Home() {
  return (
    <main className="pl-4 py-4 h-full w-full">
      {/* Intro  */}
      <div className="w-full">
        <SectionTitle title="about" />
        <h4 className="text-[18px] font-mono pt-4">
          Hello! I&apos;m Minhazul Abedin
        </h4>
        <p className="text-base font-mono py-2">
          Results-oriented Full Stack Specialist proficient in architecting and
          deploying high-performance web platforms, specializing in the Next.js,
          React, and Node.js ecosystem.
        </p>
        <p className="text-base font-mono py-2">
          Proven expertise in delivering complex solutions — from scalable SaaS
          and E-commerce marketplaces to real-time AI/automation and data
          synchronization engines. I combine deep technical proficiency with a
          strong focus on clean architecture, technical SEO, and exceptional
          user experience.
        </p>
        <div className="flex items-start md:items-center justify-start gap-8 font-mono flex-col sm:flex-row pt-4">
          <div>
            <div>
              <span>Role: </span>
              <span>Full Stack Specialist</span>
            </div>
            <div>
              <span>Status: </span>
              <span>Available</span>
            </div>
          </div>
          <div>
            <div>
              <span>Location: </span>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div>
              <span>Email: </span>
              <span>minhazulabedinmithu@gmail.com</span>
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
