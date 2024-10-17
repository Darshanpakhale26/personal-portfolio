import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaReact } from 'react-icons/fa';  // Importing the React icon

const Navbar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-black to-darkbrown py-8 text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Portfolio Name with React Icon */}
        <div className="flex items-center space-x-2">
          <FaReact className="text-3xl text-blue-500 animate-spin-slow" />  {/* React icon */}
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
          Portfolio
          </h1>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onSetActive={() => setActive(item.to)}
              className={`cursor-pointer hover:text-yellow-500 transition-colors duration-300 ${
                active === item.to ? "text-yellow-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
