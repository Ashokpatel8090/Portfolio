import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-3 bg-gray-900 shadow-md shadow-white/30 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-10 px-4 md:px-10">
        
        {/* Logo */}
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-white text-2xl font-extrabold tracking-wide cursor-pointer hover:text-indigo-400 transition duration-300"
        >
          Ashok Patel
        </ScrollLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} className="cursor-pointer" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center">
          <ul className="md:flex md:space-x-8 text-white font-semibold">
            {["home", "about", "projects", "experience", "contact"].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-lg hover:text-indigo-400 hover:underline transition duration-300 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`absolute top-14 left-0 w-full bg-black shadow-lg shadow-white/30 rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"
        } transform origin-top`}
      >
        <ul className="flex flex-col text-white font-medium p-4 space-y-2">
          {["home", "about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-lg hover:text-indigo-400 hover:bg-gray-800 rounded-md transition duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
