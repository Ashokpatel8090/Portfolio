import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-gray-900 text-white p-10 md:p-12 items-center"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-3">Contact me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl mt-6 md:mt-0">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <Link to="mailto:ashokpatel881095@gmail.com" target="_blank">
            Email
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={24} />
          <Link to="https://www.linkedin.com/in/ashok-patel-10861325a/">
            Linkedin
          </Link>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={24} />
          <Link to="https://github.com/Ashokpatel8090">Github</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
