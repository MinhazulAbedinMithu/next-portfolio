"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    title: "DJ D-LYTE — Event Booking Platform & Client Portal",
    description:
      "Rebuilt a WordPress site into a fast, SEO-first booking platform for an Oahu DJ & event business, with a client portal and admin CRM.",
    stack:
      "Astro · TypeScript · Node.js · PostgreSQL · Stripe · Adobe Sign · Spotify & Apple Music APIs",
    links: {
      live: "https://djdlyte.com",
      github: null,
    },
    thumbnail: null,
    features: [
      "WordPress-to-Astro rebuild focused on speed and technical SEO",
      "Client portal and admin CRM for managing bookings",
      "Adobe Sign contracts built into the booking flow",
      "Stripe deposit payments",
      "Spotify + Apple Music playlist planner for events",
    ],
  },
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
    title: "RealHoms — Real Estate SaaS & Marketplace",
    description:
      "Multi-tier real estate ecosystem supporting buyers, agents, property owners, and administrators with role-based routing, advanced faceted search, and rich property detail showcases.",
    stack:
      "Next.js 16 · TypeScript · Node.js · MongoDB · Tailwind CSS · Stripe · Firebase",
    links: {
      live: "https://realhoms.com",
      github: null,
    },
    thumbnail: null,
    features: [
      "Role-based routing for buyers, agents, property owners, and admins",
      "Advanced faceted search and rich property detail pages",
      "Stripe-powered wallet with automated application fee routing",
      "Withdrawal ledger and KYC verification pipeline",
      "Multi-tenant administrative moderation dashboards",
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
