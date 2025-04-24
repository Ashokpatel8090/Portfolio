import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-start gap-6 p-8 shadow-xl bg-zinc-900 bg-opacity-70 rounded-xl 
                         transition-transform transform hover:scale-105 hover:shadow-2xl relative z-10">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-green-400 mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-5">{project.description}</p>
        
      </div>
    </div>
  );
};

export default ProjectCard;