import React from "react";
import {
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPercentage,
  FaLinkedin,
  FaGithub,
  FaGg,
  FaHackerrank,
  FaTwitter,
} from "react-icons/fa"; // Import icons from FontAwesome

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-16 flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Education Section */}
        <div className="animate-fadeInRight flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8">
            Education
          </h2>
          <div className="space-y-12">
            {/* 10th Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> J. R. City High
                School
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Dhule,
                Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2017-2018
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 86.2% (10th
                Grade)
              </p>
            </div>

            {/* 12th Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> Jai Hind Junior
                College
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Dhule,
                Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2019-2020
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 80.62% (12th
                Science)
              </p>
            </div>

            {/* Graduation Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> PVG'sCOET & GKPIOM
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Pune,
                Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2020-2024
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 8.42 CGPA (B.E.
                in E&TC)
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Summary Card with Social Links */}
        <div className="animate-fadeInRight flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8">
            About Me
          </h2>

          {/* Summary Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 mb-8">
            <p className="text-xl font-semibold text-gray-300 mb-4">
              👋 I am Darshan Pakhale, a recent graduate with a Bachelor’s
              degree in Electronics and Telecommunication Engineering (2024)
              with a CGPA of 8.42. I am passionate about starting my career in
              software development and eager to make a positive impact in the
              tech industry.
              <br />
              <br />
              🌟 Let’s connect and explore how we can work together!
            </p>
            <h3 className="text-2xl font-semibold mb-2">Connect with me on:</h3>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/darshan-pakhale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-500 hover:text-white transition duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/darshanpakhale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-500 hover:text-white transition duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.geeksforgeeks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                aria-label="GeeksforGeeks"
              >
                <FaGg />
              </a>
              <a
                href="https://www.hackerrank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                aria-label="HackerRank"
              >
                <FaHackerrank />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-500 hover:text-white transition duration-300 transform hover:scale-125"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
