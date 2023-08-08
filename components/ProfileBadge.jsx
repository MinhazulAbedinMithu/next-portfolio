import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import imgProfile from "@/public/images/minhaz.png";

const socialIcons = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    link: "",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "",
  },
];

const ProfileBadge = () => {
  return (
    <div className="w-full ">
      <div className={`w-full h-full`}>
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
              Software Engineer
            </p>

            {/* Social Icons  */}
            <div className="flex items-center justify-around gap-4 text-2xl pt-4">
              {socialIcons.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.icon}
                </Link>
              ))}
            </div>
            {/* Contact Buttons  */}
            <div className="flex items-center justify-center gap-4 py-4">
              <button className="bg-[#0d244b] hover:text-emerald-400 transition-all duration-200 font-bold  shadow-md px-3 py-2 rounded-md drop-shadow-md">
                Contact me
              </button>
              <button className="bg-[#0d244b] hover:text-emerald-400 transition-all duration-200 font-bold shadow-md px-3 py-2 rounded-md drop-shadow-md">
                Download cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBadge;
