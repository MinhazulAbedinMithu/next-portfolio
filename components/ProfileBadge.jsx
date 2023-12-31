import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import imgProfile from "@/public/images/minhaz.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";

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
    link: "https://facbook.com/MinhazulAbedinMithu",
  },
];

const ProfileBadge = () => {
  return (
    <div className="w-full ">
      <div className={`w-full h-full hidden sm:block`}>
        <div className="h-2/5 bg-green-800 w-full rounded-t-md"></div>
        <div className="h-3/5 bg-[#0A192F] w-full relative rounded-b-md">
          <div className=" w-40 h-40 rounded-full absolute top-[-60px] left-[50%] translate-x-[-50%]  shadow-lg drop-shadow-lg overflow-hidden bg-[#0A192F] border-[3px] border-emerald-500">
            <Image
              src={imgProfile}
              alt="Profile Photo"
              height="auto"
              width="auto"
            />
          </div>
          <div className="pt-[125px] w-full flex items-center flex-col">
            <h4 className="text-2xl font-bold">Minhazul Abedin</h4>
            <p className="text-md text-emerald-500 font-medium">
              Frontend Developer
            </p>

            {/* Social Icons  */}
            <div className="flex items-center justify-around gap-4 text-2xl pt-4">
              {socialIcons.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="text-white hover:text-emerald-400 hover:scale-110 hover:duration-200 transition-all"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            {/* Contact Buttons  */}
            <div className="flex items-center justify-center gap-4 py-4">
              <Link
                href="mailto:minhazulabedinmithu@gmail.com"
                target="_blank"
                className="bg-[#0d244b] hover:text-emerald-400 transition-all duration-200 font-bold border border-transparent hover:border-emerald-400 shadow-md px-3 py-2 rounded-md drop-shadow-md"
              >
                Contact me
              </Link>
              <Link
                href="https://drive.google.com/file/d/1T8wpZmBlrqIItsyKw81w1_XZVkZV7gQg/view?usp=drive_link"
                target="_blank"
                className="bg-[#0d244b] hover:text-emerald-400 transition-all duration-200 font-bold shadow-md px-3 py-2 border border-transparent hover:border-emerald-400 rounded-md drop-shadow-md"
              >
                Download cv
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-full">
        <div className="flex items-center justify-between">
          <div>
            <h4>Minhazul Abedin</h4>
            <span>Frontend Developer</span>
          </div>
          <ul className="flex items-center justify-end">
            <li className=" flex items-center justify-center flex-col">
              <button className="px-3 py-4 text-3xl">
                <MdLightMode />
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
