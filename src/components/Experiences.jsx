import React from "react";
import { DiCss3, DiHtml5, DiJava, DiPython } from "react-icons/di";
import { FaNode, FaReact, FaGithub } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiBootstrap, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiGraphql, SiRedux } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-[99%] max-w-6xl mx-auto px-6 md:px-12 py-20 text-white  shadow-xl"
                 
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-teal-400 border-b-4 border-teal-500 w-fit">
          Experience
        </h2>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full justify-items-center">
        {[
          { Icon: DiHtml5, title: "HTML5", color: "#E34F26" },
          { Icon: DiCss3, title: "CSS3", color: "#1572B6" },
          { Icon: MdJavascript, title: "JavaScript", color: "#F7DF1E" },
          { Icon: SiBootstrap, title: "Bootstrap", color: "#563D7C" },
          { Icon: SiTailwindcss, title: "Tailwind CSS", color: "#38B2AC" },
          { Icon: FaReact, title: "React", color: "#61DAFB" },
          { Icon: SiRedux, title: "Redux", color: "#764ABC" },
          { Icon: FaNode, title: "Node.js", color: "#8CC84B" },
          { Icon: SiExpress, title: "Express.js", color: "#000000" },
          { Icon: SiMongodb, title: "MongoDB", color: "#47A248" },
          { Icon: DiJava, title: "Java", color: "#007396" },
          { Icon: DiPython, title: "Python", color: "#3776AB" },
          { Icon: SiGit, title: "Git", color: "#F05032" },
          { Icon: FaGithub, title: "GitHub", color: "#181717" },
          { Icon: SiGraphql, title: "Data Structure", color: "#E10098" },
        ].map(({ Icon, title, color }, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center 
                       hover:scale-110 transition-transform duration-300"
          >
            <div
              className="p-6 flex items-center justify-center rounded-full shadow-lg border-2 border-transparent transition-all duration-300 hover:border-indigo-400 hover:shadow-indigo-500"
              style={{ backgroundColor: color }}
            >
              <Icon color="#FFFFFF" size={80} className="rounded-full" />
            </div>
            <span className="absolute bottom-[-30px] bg-gray-900 text-white text-xs font-semibold 
                             px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
