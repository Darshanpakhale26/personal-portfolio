import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaCode,
  FaTools,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-darkbrown py-8">
      <div className="container mx-auto px-4 flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between items-center">
        {/* Left Section: Name, Location, and Navbar Links */}
        <div className="flex flex-col space-y-4 text-white">
          <div>
            <h2 className="text-lg font-semibold">Darshan Pakhale</h2>
            <p className="text-sm">Dhule, Maharashtra</p>
          </div>
          <nav className="flex flex-col space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/darshan261002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-600 transition-colors duration-200"
          >
            <FaLinkedin className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a
            href="https://github.com/Darshanpakhale26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-gray-600 transition-colors duration-200"
          >
            <FaGithub className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a
            href="https://www.instagram.com/darshan26_10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram className="hover:shadow-lg transition-shadow duration-200" />
          </a>
          <a
            href="https://www.facebook.com/darshan.pakhale.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-700 transition-colors duration-200"
          >
            <FaFacebook className="hover:shadow-lg transition-shadow duration-200" />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="container mx-auto px-4 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <FaCode className="text-yellow-400" />
              <span>HTML, CSS, JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-500" />
              <span>React.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-green-500" />
              <span>Node.js, Express</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTools className="text-gray-300" />
              <span>Git & GitHub</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-purple-500" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-orange-400" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-red-500" />
              <span>AWS Services (Learning)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-600" />
              <span>C++, Java</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Subscribe to My Newsletter</h3>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg w-full md:w-1/2 mb-2 md:mr-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
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
