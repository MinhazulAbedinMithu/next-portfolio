'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import imgProfile from "@/public/images/minhaz.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import DotParticles from "./DotParticles";
import Marquee from "./Marquee";

const socialIcons = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/MinhazulAbedinMithu",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/01848321597",
  },
  // {
  //   name: "Discord",
  //   icon: <FaDiscord />,
  //   link: "",
  // },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/minhazulabedinmithu/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://facebook.com/MinhazulAbedinMithu",
  },
];

const ProfileBadge = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme");
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
      setIsInitialLoad(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
    }
  };

  if (isInitialLoad) {
    return null;
  }
  return (
    <div className="w-full">
      <div className={`w-full h-full hidden sm:block`}>
        <div className="relative h-2/5 bg-[#220037] dark:bg-[#00201e] w-full rounded-t-md overflow-hidden">
          <DotParticles />
          {/* Skills overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-4 z-10 pointer-events-none select-none">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/80 font-semibold mb-1 font-mono">
              ⟨ My Tech Stack ⟩
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 px-4">
              {[
                { name: "React", img: "/images/react.png" },
                { name: "Next.js", img: "/images/nextjs.png" },
                { name: "Node.js", img: "/images/nodejs.png" },
                { name: "MongoDB", img: "/images/mongodb.png" },
                { name: "Tailwind", img: "/images/tailwind.png" },
                { name: "Typescript", img: "/images/typescript.png" },
                { name: "Strapi", img: "/images/strapi.png" },
                { name: "DigitalOcean", img: "/images/digital-ocean.png" },
                { name: "Supabase", img: "/images/supabase.png" },
              ].map((skill, i) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="skill-badge flex items-center gap-1.5 px-2.5 py-1 rounded-full
                    bg-white/10 border border-white/20 backdrop-blur-md
                    text-white text-[11px] font-semibold font-mono
                    shadow-[0_2px_12px_rgba(0,0,0,0.25)]
                    animate-badge-in"
                >
                  <img src={skill.img} alt={skill.name} className="w-4 h-4 object-contain drop-shadow" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-3/5 bg-neutral-200 dark:bg-[#0c0c0c] w-full relative rounded-b-md">
          <div className=" w-40 h-40 rounded-full absolute top-[-60px] left-[50%] translate-x-[-50%] overflow-hidden shadow-pp-dark-shadow dark:shadow-pp-shadow bg-purple-800 dark:bg-[#1b928a] border-[3px] border-purple-800 dark:border-[#00ffee]">
            <Image
              src={imgProfile}
              alt="Profile Photo"
              height="auto"
              width="auto"
            />
          </div>
          <div className="pt-[125px] w-full flex items-center flex-col">
            <h4 className="text-2xl font-bold">Minhazul Abedin</h4>
            <p className="text-md text-purple-800 dark:text-[#00ffee] font-medium">
              Full Stack Specialist
            </p>

            {/* Social Icons  */}
            <div className="flex items-center justify-around gap-4 text-2xl pt-4">
              {socialIcons.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="hover:text-purple-800 dark:hover:text-[#00ffee] hover:scale-110 hover:duration-500 transition-all hover:rotate-[360deg]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            {/* Contact Buttons  */}
            <div className="flex items-center justify-center gap-4 py-4 text-black">
              <Link
                href="mailto:minhazulabedinmithu@gmail.com"
                target="_blank"
                className="bg-purple-800 dark:bg-[#00ffee] text-white dark:text-black transition-all duration-200 font-bold hover:shadow-pp-link-dark dark:hover:shadow-pp-link hover:scale-[1.05] px-3 py-2 rounded-md border border-purple-800 dark:border-[#00ffee]"
              >
                Contact me
              </Link>
              <Link
                href="https://drive.google.com/file/d/1T8wpZmBlrqIItsyKw81w1_XZVkZV7gQg/view?usp=drive_link"
                target="_blank"
                className="bg-transparent text-purple-800 dark:text-[#00ffee] transition-all duration-200 font-bold pp-link-shadow px-3 py-2 border border-purple-800 dark:border-[#00ffee] hover:text-white dark:hover:text-black hover:bg-purple-800 dark:hover:bg-[#00ffee] rounded-md hover:shadow-pp-link-dark dark:hover:shadow-pp-link hover:scale-[1.05]"
              >
                Download cv
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-full">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 ml-4">
            <Image
              src={imgProfile}
              alt="Profile Photo"
              height="auto"
              width="auto"
            />
          </div>
          <div>
            <h4>Minhazul Abedin</h4>
            <span>Full Stack Specialist</span>
          </div>
          <ul className="flex items-center justify-end">
            <li className=" flex items-center justify-center flex-col">
              <button onClick={toggleDarkMode} className="px-3 py-4 text-3xl">
                {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </li>
            <li className=" flex items-center justify-center flex-col">
              <button className="px-3 py-4 text-3xl">
                <CgMenuLeftAlt />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileBadge;
