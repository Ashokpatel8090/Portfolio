import React from "react";
import { DiCss3, DiHtml5, DiJava, DiPython } from "react-icons/di";
import { FaNode, FaReact, FaGithub } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiBootstrap, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiGraphql, SiRedux } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="text-white flex flex-col items-center shadow-2xl mx-4 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 mt-2"
    >
      <h1 className="text-2xl md:text-4xl font-bold h-20">Experience</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-25 py-10">
        {[
          { Icon: DiHtml5, title: "HTML5", color: "#E34F26", bg: "bg-blue-800" },
          { Icon: DiCss3, title: "CSS3", color: "#1572B6", bg: "bg-blue-200" },
          { Icon: MdJavascript, title: "JavaScript", color: "#F7DF1E", bg: "bg-yellow-300" },
          { Icon: SiBootstrap, title: "Bootstrap", color: "#563D7C", bg: "bg-blue-300" },
          { Icon: SiTailwindcss, title: "Tailwind CSS", color: "#38B2AC", bg: "bg-amber-100" },
          { Icon: FaReact, title: "React", color: "#61DAFB", bg: "bg-blue-800" },
          { Icon: SiRedux, title: "Redux", color: "#764ABC", bg: "bg-purple-400" },
          { Icon: FaNode, title: "Node.js", color: "#8CC84B", bg: "bg-emerald-800" },
          { Icon: SiExpress, title: "Express.js", color: "#F24E1E", bg: "bg-amber-300" },
          { Icon: SiMongodb, title: "MongoDB", color: "#47A248", bg: "bg-fuchsia-200" },
          { Icon: DiJava, title: "Java", color: "#007396", bg: "bg-amber-300" },
          { Icon: DiPython, title: "Python", color: "#3776AB", bg: "bg-amber-200" },
          { Icon: SiGit, title: "Git", color: "#F05032", bg: "bg-orange-200" },
          { Icon: FaGithub, title: "GitHub", color: "#181717", bg: "bg-gray-100" },
          { Icon: SiGraphql, title: "Data Structure", color: "#E10098", bg: "bg-purple-300" },
        ].map(({ Icon, title, color, bg }, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <span className={`p-6 bg-zinc-950 flex items-center justify-center rounded-full ${bg}`}>
              <Icon color={color} size={90} className="text-fuchsia-50 rounded-full" />
            </span>
            {/* Tooltip */}
            <span className="absolute bottom-[-30px] bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
