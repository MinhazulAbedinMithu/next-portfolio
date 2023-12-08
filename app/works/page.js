import ProjectItem from "@/components/ProjectItem";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const projectsData = [
  {
    title: "Pictures Gallery",
    description: "It's an amazing Pictures Gallery",
    links: {
      live: "https://picturesgallery.vercel.app/",
      github: "https://github.com/MinhazulAbedinMithu/pictures-gallery",
    },
    thumbnail:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5pNHN3dWd0c3BzcW56dW12NWlxeWozeHZkdGtnY21yN3Awd3hoYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U9gftKdpHWftkHe4Lb/giphy.gif",
    images: {
      largeScreen: "",
      smallScreen: "",
    },
    features: [
      "User can add new image from device.",
      "Allow users to rearrange the order of images in the gallery",
      "Drag-and-drop functionality for reordering and Featured image",
      "Allow users to select multiple images and delete them.",
      "Smooth and responsive user experience",
      "It's an optimized Progressive Web Application(PWA)",
    ],
  },
  {
    title: "Nitexx : LandingPage",
    description: "It's a Landing page",
    links: {
      live: "",
      github: "",
    },
    thumbnail:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJxeXlxZWtqNnN2aXYwYzllZTA4OHFyNWYxdWczcnBja2ozZzN2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fMnjabd4c5MJEMzWEB/giphy.gif",
    images: {
      largeScreen: "",
      smallScreen: "",
    },
    features: [
      "Responsive Landing Page",

      "It's an optimized Progressive Web Application(PWA)",
    ],
  },
];

const Works = () => {
  return (
    <main className="pl-4 py-4 h-full">
      {/* Projects  */}
      <div>
        <SectionTitle title="Works" />
        <div className="py-4 px-3 w-full flex items-center flex-col justify-center gap-4">
          {projectsData.map((item, index) => (
            <ProjectItem key={index} info={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Works;
