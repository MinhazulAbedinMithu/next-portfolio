import Link from "next/link";
import React from "react";
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
const NavLink = ({ path, title, icon }) => {
  return (
    <li
      className={`border-x-[0.5px] md:border-x-0 w-full ${
        title === "About" ? "" : "md:border-t-[0.5px]"
      } border-gray-500`}
    >
      <Link
        href={path}
        className="hover:text-emerald-300 transition-all duration-300"
      >
        <div className="px-3 py-2 md:py-3 flex items-center justify-center flex-col">
          <div className="text-xl md:text-3xl">{icon}</div>
          <small className="font-mono text-md uppercase pt-1 font-thin">
            {title}{" "}
          </small>
        </div>
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-5">
      <ul className="hidden md:flex flex-row md:flex-col bg-[#0A192F] w-full rounded-md">
        <li className=" flex items-center justify-center flex-col">
          <button className="px-3 py-4 text-3xl">
            <CgMenuLeftAlt />
          </button>
        </li>
        <li className=" flex items-center justify-center flex-col">
          <button className="px-3 py-4 text-3xl">
            <MdLightMode />
          </button>
        </li>
      </ul>
      <ul className="flex items-center justify-evenly flex-row md:flex-col bg-[#0A192F] w-full rounded-md">
        <NavLink path="/" title="About" icon={<MdPermIdentity />} />
        <NavLink path="/resume" title="Resume" icon={<MdDeveloperBoard />} />
        <NavLink path="/works" title="Works" icon={<MdOutlineRemoveRedEye />} />
        <NavLink path="/blog" title="Blog" icon={<CiCreditCard2 />} />
        <NavLink path="/contact" title="Contact" icon={<BsSend />} />
      </ul>
    </div>
  );
};

export default NavigationBar;
