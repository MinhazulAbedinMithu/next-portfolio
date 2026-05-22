"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { CiCreditCard2 } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import {
  MdDarkMode,
  MdLightMode,
  MdPermIdentity,
  MdDeveloperBoard,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const NavLink = ({ path, title, icon, isActive }) => {
  return (
    <li
      className={`border-x-[0.5px] md:border-x-0 w-full ${
        title === "About" ? "" : "md:border-t-[0.5px]"
      } border-gray-500 ${isActive ? 'text-purple-800 dark:text-[#00ffee]' : ''}`}
    >
      <Link
        href={path}
        className="hover:text-purple-800 dark:hover:text-[#00ffee] transition-all duration-300"
      >
        <div className="px-3 py-2 md:py-3 flex items-center justify-center flex-col">
          <div className="text-xl md:text-3xl">{icon}</div>
          <small className="font-mono text-md uppercase pt-1 font-thin">
            {title}
          </small>
        </div>
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

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
    <div className="flex items-center justify-center flex-col gap-y-5">
      <ul className="hidden md:flex flex-row md:flex-col bg-neutral-200 dark:bg-[#0c0c0c] w-full rounded-md">
        <li className="flex items-center justify-center flex-col">
          <button className="px-3 py-4 text-3xl">
            <CgMenuLeftAlt />
          </button>
        </li>
        <li className="flex items-center justify-center flex-col">
          <button onClick={toggleDarkMode} className="px-3 py-4 text-3xl">
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </li>
      </ul>
      <ul className="flex items-center justify-evenly flex-row md:flex-col bg-neutral-200 dark:bg-[#0c0c0c] w-full rounded-md">
        <NavLink path="/" title="About" icon={<MdPermIdentity />} isActive={pathname === "/"} />
        <NavLink path="/resume" title="Resume" icon={<MdDeveloperBoard />} isActive={pathname === "/resume"} />
        <NavLink path="/works" title="Works" icon={<MdOutlineRemoveRedEye />} isActive={pathname === "/works"} />
        <NavLink path="/blog" title="Blog" icon={<CiCreditCard2 />} isActive={pathname === "/blog"} />
        <NavLink path="/contact" title="Contact" icon={<BsSend />} isActive={pathname === "/contact"} />
      </ul>
    </div>
  );
};

export default NavigationBar;
