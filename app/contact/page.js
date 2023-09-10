import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="h-full w-full py-6 px-4 flex items-center justify-start flex-col gap-4">
      <div className="max-w-[500px] w-full text-center">
        <h2 className=" text-4xl font-bold relative w-full after:content-[''] after:absolute after:-bottom-2 after:w-[25%] after:bg-gradient-to-tr after:from-emerald-700 after:via-emerald-400 after:to-emerald-700 after:h-[3px] after:left-[50%] after:translate-x-[-50%] after:rounded-md">
          Contact With Me
        </h2>
        <p className="text-base pt-6">
          My inbox is always open. Whether you have a question or just want to
          say hello, I&apos;ll try my best to get back to you! Feel free to mail
          me about any relevant job updates.
        </p>
        <div className="pt-14 pb-4">
          <Link
            href="mailto:minhazulabedinmithu@gmail.com"
            className="bg-transparent border border-emerald-400 px-4 py-2 rounded-md text-emerald-400"
          >
            @ Send Mail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
