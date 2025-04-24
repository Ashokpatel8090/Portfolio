import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center md:justify-center shadow-2xl mx-4 md:mx-20 bg-opacity-40 rounded-lg p-6 md:p-12 mt-20"
    >
      <div className="w-full md:w-3/4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center md:text-left mb-16 text-green-400 just h-15">
          About me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {[
            {
              title: "Frontend Developer",
              description:
                "A creative and detail-oriented Frontend Developer crafting responsive, user-friendly web experiences with modern technologies like React, JavaScript, and CSS.",
            },
            {
              title: "Database Developer",
              description:
                "A skilled Database Developer with expertise in designing, implementing, and optimizing database solutions to ensure data integrity and performance.",
            },
            {
              title: "Backend Developer",
              description:
                "An experienced Backend Developer focused on building robust and scalable server-side applications with Node.js, Express, and database management.",
            },
          ].map(({ title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 p-8 shadow-xl bg-zinc-900 bg-opacity-70 rounded-xl 
                         transition-transform transform hover:scale-105 hover:shadow-2xl relative z-10"
            >
              <IoArrowForward size={36} className="text-green-400" />
              <div>
                <h1 className="text-2xl font-bold text-green-300">{title}</h1>
                <p className="text-md leading-relaxed text-gray-300 mt-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
