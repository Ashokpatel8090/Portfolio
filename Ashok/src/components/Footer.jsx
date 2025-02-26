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
      className="flex justify-around bg-gray-900 text-white p-10 md:p-12 items-center"
    >
      <div className="items-center justify-center">
        <h1 className="text-2xl md:text-6xl font-bold">Contact me</h1>
        <h3 className="text-sm md:text-2xl font-normal items-center justify-center">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <Link to="mailto:ashokpatel881095@gmail.com" target="_blank">ashokpatel881095@gmail.com</Link>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <Link to="https://www.linkedin.com/in/ashok-patel-10861325a/">Linkedin</Link>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <Link to="https://github.com/Ashokpatel8090">Github</Link>
        </li>
        <li className="flex gap-1 items-center">
          <SiLeetcode />
          <Link to="https://leetcode.com/u/ashokpatelraj/">LeetCode</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;