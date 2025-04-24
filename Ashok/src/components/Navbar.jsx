import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4" >
      <div className="container mx-auto flex justify-between items-center h-10 shadow-lg shadow-gray-700/50 ">
        <Link to="/" className="text-white text-xl font-bold">
          Ashok Patel
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-6 gap-6">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-gray-200 p-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white hover:text-gray-200 p-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="block text-white hover:text-gray-200 p-2"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="block text-white hover:text-gray-200 p-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white hover:text-gray-200 p-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
