"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    title: "AussieDuo Cleaning Services",
    description:
      "Multi-location booking platform with headless Strapi CMS, SSR, and structured data — driving lead generation through optimized Core Web Vitals and SEO.",
    stack: "Next.js · Strapi CMS · Tailwind CSS · GraphQL",
    links: {
      live: "https://aussieduocleaningservice.com.au",
      github: null,
    },
    thumbnail: null,
    features: [
      "Headless CMS integration with Strapi and GraphQL",
      "Server-Side Rendering (SSR) for fast initial page loads",
      "Structured data markup for enhanced search visibility",
      "Multi-location booking flow with optimized UX",
      "Core Web Vitals tuned for top SEO performance",
    ],
  },
  {
    title: "Prinon E-Commerce Platform",
    description:
      "Full-stack marketplace with JWT/RBAC auth, dynamic product catalogs, promotional deal engine, and MongoDB aggregation for rapid faceted retrieval.",
    stack: "Next.js · Node.js · Express.js · MongoDB · Tailwind CSS",
    links: {
      live: "https://prinonbd.com",
      github: null,
    },
    thumbnail: null,
    features: [
      "JWT-based authentication with Role-Based Access Control (RBAC)",
      "Dynamic product catalog with faceted search via MongoDB aggregation",
      "Promotional deal engine with time-based offer management",
      "Admin dashboard for inventory, orders, and user management",
      "Fully responsive UI built with Tailwind CSS",
    ],
  },
  {
    title: "Somali Red",
    description:
      "Pixel-perfect, accessibility-first web app using Next.js App Router and modular React architecture — flawless across all devices with top Core Web Vitals.",
    stack: "Next.js · React.js · Tailwind CSS · Vercel",
    links: {
      live: "https://somali-red.vercel.app",
      github: null,
    },
    thumbnail: null,
    features: [
      "Next.js App Router with modular, reusable React components",
      "Accessibility-first design (WCAG-compliant markup)",
      "Pixel-perfect implementation from design spec",
      "Top-tier Core Web Vitals scores (LCP, CLS, FID)",
      "Fully responsive across all screen sizes",
    ],
  },
];

const ProjectsWrapper = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };
  return (
    <div className="py-4 px-3 w-full flex items-center flex-col justify-center gap-4">
      {projectsData.map((item, index) => (
        <ProjectItem
          key={index}
          info={item}
          index={index}
          isExpanded={expandedCard === index}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
};

export default ProjectsWrapper;
