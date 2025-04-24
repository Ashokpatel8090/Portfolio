import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="w-[99%] max-w-6xl mx-auto px-6 md:px-12 py-20 text-white  shadow-xl"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* About Me Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-teal-400 border-b-4 border-teal-500 w-fit">
          About Me
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="flex flex-col items-start gap-6 p-6 md:p-8 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-400"
            >
              <IoArrowForward size={36} className="text-teal-400" />
              <div>
                <h1 className="text-2xl font-bold text-teal-300">{title}</h1>
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
