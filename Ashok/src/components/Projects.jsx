import React from "react";
import ProjectCard from "./ProjectCard";

import chatImg from "../assets/chatImg.png";
import Athlets from "../assets/AthletsWinner.png";
import EduHub from "../assets/Eduhub.png";


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Chat App",
      description:
        "A real-time chat application built with Node.js and React, featuring seamless messaging, authentication, and a responsive UI for a smooth user experience.",
      image: chatImg,
      demoLink: "https://chatapp-demo.com",
    },
    {
      id: 2,
      title: "Education Hub",
      description:
        "A responsive Education Hub website built with HTML and CSS, offering an intuitive and visually engaging platform for learning resources.",
      image: EduHub,
      demoLink: "https://educationhub-demo.com",
    },
    {
      id: 3,
      title: "Athletes Winner",
      description:
        "An Athletes Winner Details app built with React.js, showcasing real-time rankings, player statistics, and dynamic winner insights.",
      image: Athlets,
      demoLink: "https://athleteswinner-demo.com",
    },
  ];

  return (
    <div
      className="text-white px-6 md:px-20 py-24 md:py-40 flex flex-col items-center md:pt-20 md:pb-20"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-green-400 mb-16 h-20 pt-20 md:pt-20">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl justify-items-center">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl z-10 will-change-transform"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
