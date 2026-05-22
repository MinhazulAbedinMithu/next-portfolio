'use client'
import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_zqh06af', 
      'template_yy41t4f', 
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'wdnrsBIrYueyiu-KT' 
    ).then((response) => {
      alert('Email sent successfully!');
    }).catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
  };

  return (
    <div className="h-full w-full py-6 px-4 flex items-center justify-start flex-col gap-4">
      <div className="max-w-[500px] w-full text-center">
      <div className="relative">
        <h2 className="absolute translate-y-[100%] text-2xl md:text-4xl font-extrabold w-full after:content-[''] after:absolute after:-bottom-2 after:w-[25%] after:bg-gradient-to-tr after:from-neutral-200 dark:after:from-[#0b3532] after:via-purple-800 dark:after:via-[#00ffee] after:to-neutral-200 dark:after:to-[#0b3532] after:h-[3px] after:left-[50%] after:translate-x-[-50%] after:rounded-md uppercase text-black dark:text-white">
          Get in touch
        </h2>
        <h1 className="text-[75px] md:text-[100px] font-extrabold text-black/10 dark:text-white/10 leading-none">Contact</h1>
        </div>
        <p className="text-base pt-6">
          My inbox is always open. Whether you have a question or just want to
          say hello, I&apos;ll try my best to get back to you! Feel free to mail
          me about any relevant job updates.
        </p>
        <div className="pt-10 pb-4">
        <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <input type="name" name="name" className="w-full bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md focus:border focus:border-purple-800 dark:focus:border-[#00ffee] focus:outline-none focus:ring-none" placeholder="Full name" onChange={handleChange} />
        <input type="email" name="email" className="w-full bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md focus:border focus:border-purple-800 dark:focus:border-[#00ffee] focus:outline-none focus:ring-none" placeholder="Email address" onChange={handleChange} />
        </div>
        <textarea rows={5} name="message" className="w-full bg-neutral-300 dark:bg-neutral-800 p-2 rounded-md focus:border focus:border-purple-800 dark:focus:border-[#00ffee] focus:ring-none focus:outline-none resize-none" placeholder="Message" onChange={handleChange} />
          <button
          type="submit"
            className="bg-purple-800 dark:bg-[#00ffee] text-white dark:text-black transition-all duration-200 font-bold hover:shadow-pp-link-dark dark:hover:shadow-pp-link px-3 py-2 border border-purple-800 dark:border-[#00ffee] hover:text-white dark:hover:text-black hover:bg-purple-800 dark:hover:bg-[#00ffee] rounded-md drop-shadow-md"
            >
            Send Message
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
