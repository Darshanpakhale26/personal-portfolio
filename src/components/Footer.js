import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-darkbrown py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section: Name, Location, and Navbar Links */}
        <div className="flex flex-col space-y-4 text-white">
          <div>
            <h2 className="text-lg font-semibold">Darshan Pakhale</h2>
            <p className="text-sm">Dhule, Maharashtra</p>
          </div>
          <nav className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-600 transition-colors duration-200">
            <FaLinkedin className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gray-600 transition-colors duration-200">
            <FaGithub className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400 transition-colors duration-200">
            <FaTwitter className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-pink-500 transition-colors duration-200">
            <FaInstagram className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-700 transition-colors duration-200">
            <FaFacebook className="hover:shadow-lg transition-shadow duration-200" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-white opacity-75">
        <p>&copy; {new Date().getFullYear()} Darshan Pakhale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
