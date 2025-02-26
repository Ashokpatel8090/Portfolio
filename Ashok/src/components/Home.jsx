import React from "react";
import pic from "../assets/CropImg.jpg";
import { Link } from "react-router";
import resume from '../assets/Ashok_CV.pdf'
import TextChange from "./TextChanger";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center shadow-2xl mx-4 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 text-center mt-[40px] gap-5 h-130">
      <div className="md:w-2/4 flex flex-col items-center text-center space-y-8">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight tracking-tighter mt-6">
          Hi There, <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          A versatile Full Stack Developer skilled in Front-end, Back-end, and Database technologies, building scalable and efficient web applications.
        </p>
<div className="mt-10"> {/* Added margin-top here */}
<Link to={resume} download target='_blank' className="mt-5 h-40">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-8 text-lg md:text-xl rounded-xl shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-green-400 hover:scale-110 hover:shadow-2xl font-bold">
  Download Resume
</button>
        </Link>
</div>
      </div>
      <div className="flex justify-center mt-6 md:mt-0 gap-0">
        <img
          className="w-40 h-60 md:w-100 md:h-100 rounded-full border-4 border-gray-500 
                     shadow-lg shadow-gray-700/50 
                     hover:shadow-[0px_10px_30px_rgba(255,255,255,0.5),0px_20px_40px_rgba(0,0,0,0.5)] 
                     transition-shadow duration-300 
                     animate-float"
          src={pic}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
