import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaReact, FaBars, FaTimes } from 'react-icons/fa';  // Importing icons for React, Hamburger, and Close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage mobile menu open/close

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-black to-darkbrown py-8 text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Portfolio Name with React Icon */}
        <div className="flex items-center space-x-2">
          <FaReact className="text-3xl text-blue-500 animate-spin-slow" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            Portfolio
          </h1>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Switch between hamburger and close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black`}>
        <ul className="space-y-4 px-4 py-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}  // Close menu on item click
                className="block text-white hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
