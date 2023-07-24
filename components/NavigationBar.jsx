import Link from "next/link";
import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
// import { AiOutlineUser } from "react-icons/ai";
import {
  MdDarkMode,
  MdLightMode,
  MdPermIdentity,
  MdDeveloperBoard,
} from "react-icons/md";
const NavLink = ({ path, title, icon }) => {
  return (
    <li>
      <Link href={path}>
        {title} {icon}
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  return (
    <div className="bg-indigo-500">
      <ul>
        <li>
          <button>
            <CgMenuLeftAlt />
          </button>
        </li>
        <li>
          <button>
            <MdLightMode />
          </button>
        </li>
      </ul>
      <ul className="flex flex-row md:flex-col">
        <NavLink path="/" title="About" icon={<MdPermIdentity />} />
        <NavLink path="/resume" title="Resume" icon={<MdDeveloperBoard />} />
        <NavLink path="/works" title="Works" />
        <NavLink path="/blog" title="Blog" />
        <NavLink path="/contact" title="Contact" />
      </ul>
    </div>
  );
};

export default NavigationBar;
