import React from "react";
import pic from "../assets/pic.jpg";
import { Link } from "react-router-dom"; // Fixed import
import resume from "../assets/Ashok_CV.pdf";
import TextChange from "./TextChanger";

const Home = () => {
  return (
    <div
      className="w-[99%] max-w-6xl mx-auto px-6 md:px-12 py-20 text-white rounded-xl border-gray-700 flex flex-col md:flex-row items-center justify-center
      shadow-2xl p-6 md:p-12 text-center 
      mt-20 space-y-25 gap-6"
      id="home"
    >
      {/* Left Content */}
      <div className="md:w-2/4 flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter">
          Hi There, <TextChange />
        </h1>
        <p className="text-md md:text-lg font-medium tracking-tight text-gray-300">
          A versatile Full Stack Developer skilled in Front-end, Back-end, and Database technologies, 
          building scalable and efficient web applications.
        </p>

        {/* Download Resume Button */}
        <div className="mt-6">
          <Link to={resume} download target="_blank">
            <button
  className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
  py-3 px-6 text-lg md:text-xl rounded-lg shadow-lg transition-all duration-300 
  hover:from-indigo-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl 
  hover:shadow-indigo-400/60 font-bold cursor-pointer border border-indigo-500 
  backdrop-blur-lg bg-opacity-80 before:absolute before:inset-0 
  before:bg-white/10 before:rounded-lg before:opacity-0 before:transition-opacity 
  before:duration-300 hover:before:opacity-100 animate-pulse"
>
  Download Resume
</button>
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center">
  <img
    className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4  shadow-gray-800/60 transition-shadow duration-300 
    hover:shadow-2xl hover:shadow-white/30 hover:scale-105 cursor-pointer animate-floating"
    src={pic}
    alt="Profile"
  />
</div>

    </div>
  );
};

export default Home;
