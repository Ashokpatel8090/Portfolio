import React from "react";
import ProjectCard from "./ProjectCard";

import chatImg from "../assets/chatImg.png";
import Athlets from "../assets/AthletsWinner.png";
import JobPortal from "../assets/JobPortal.png";
import vidAthlets from '../assets/videos/Athlets-Winner.mp4'
import vidChat from '../assets/videos/Chat-App.mp4'
import Job from '../assets/videos/Job.mp4'

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Chat App",
      description:
        "A real-time chat application built with Node.js and React, featuring seamless messaging, authentication, and a responsive UI for a smooth user experience.",
      image: chatImg,
      demoLink: vidChat,
      livelink:'https://deploy-job-portal-3.onrender.com/'
    },
    {
      id: 2,
      title: "Job Portal",
      description:
        "Developed a MERN-based job portal with secure authentication, job alerts, saved searches, and smart recommendations inspired by Naukri and Indeed.",
      image: JobPortal,
      demoLink: Job,
      livelink:'https://deploy-job-portal-3.onrender.com/'
    },
    {
      id: 3,
      title: "Athletes Winner",
      description:
        "An Athletes Winner Details app built with React.js, showcasing real-time rankings, player statistics, and dynamic winner insights.",
      image: Athlets,
      demoLink: vidAthlets,
      livelink:'https://athletswinnerapraj.netlify.app/'
    },
  ];

  return (
    <div
      id="projects"
      className="w-[99%] max-w-7xl mx-auto px-6 md:px-12 py-20 text-white"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-teal-400 border-b-4 border-teal-600 w-fit">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-start gap-6 p-6 md:p-8 bg-gray-800 bg-opacity-90 rounded-3xl shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-400 hover:bg-gray-700"
            >
              <ProjectCard project={project} />
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
  <a
    href={project.demoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl transition-transform duration-300 hover:scale-110 text-center"
  >
    View Demo
  </a>
  <a
    href={project.livelink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl transition-transform duration-300 hover:scale-110 text-center"
  >
    View Live
  </a>
</div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


