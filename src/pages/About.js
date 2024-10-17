import React from 'react';
import {
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPercentage,
  FaLinkedin,
  FaGithub,
  FaGg,
  FaHackerrank,
  FaTools,
} from 'react-icons/fa'; // Import icons from FontAwesome

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-gradient-to-r from-gray-800 to-black text-white flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Education Section */}
        <div className="animate-fadeInLeft flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mt-20 mb-8">
            Education
          </h2>
          <div className="space-y-12">
            {/* 10th Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-3xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> Janta Highschool, Dhule
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Dhule, Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2016-2017
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 89.2% (10th Grade)
              </p>
            </div>

            {/* 12th Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-3xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> H. R. Patel Junior College, Shirpur
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Shirpur, Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2018-2019
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 85.0% (12th Science)
              </p>
            </div>

            {/* Graduation Education */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-3xl font-semibold flex items-center">
                <FaSchool className="text-yellow-300 mr-2" /> Pune Vidyarthi Griha's College of Engineering
              </h3>
              <p className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> Pune, Maharashtra
              </p>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2 text-blue-500" /> 2019-2023
              </p>
              <p className="flex items-center mt-1">
                <FaPercentage className="mr-2 text-pink-500" /> 8.42 CGPA (B.E. in E&TC)
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Specialization: Electronics and Telecommunications Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Summary Card with Social Links */}
        <div className="animate-fadeInRight flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mt-20 mb-8">
            About Me
          </h2>
          
          {/* Summary Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 mb-8 flex flex-col">
            <p className="text-lg text-gray-300 mb-4">
              Hi! I'm Darshan Pakhale, a passionate Software Developer specializing in MERN stack development.
              I enjoy solving problems, building innovative web applications, and constantly learning new
              technologies. 
            </p>
            <h3 className="text-2xl font-semibold mb-2">Connect with me:</h3>
            {/* Social Links */}
            <div className="flex flex-col space-y-4">
              {/* LinkedIn */}
              <div className="relative group flex items-center">
                <a
                  href="https://linkedin.com/in/darshan-pakhale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-blue-500 hover:text-white transition duration-300 transform hover:scale-125"
                  aria-label="Visit my LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
                <span className="ml-4 text-lg text-white hidden group-hover:block transition duration-300">
                  LinkedIn
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group flex items-center">
                <a
                  href="https://github.com/darshanpakhale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-gray-500 hover:text-white transition duration-300 transform hover:scale-125"
                  aria-label="Visit my GitHub profile"
                >
                  <FaGithub />
                </a>
                <span className="ml-4 text-lg text-white hidden group-hover:block transition duration-300">
                  GitHub
                </span>
              </div>

              {/* GeeksforGeeks */}
              <div className="relative group flex items-center">
                <a
                  href="https://www.geeksforgeeks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                  aria-label="Visit GeeksforGeeks"
                >
                  <FaGg />
                </a>
                <span className="ml-4 text-lg text-white hidden group-hover:block transition duration-300">
                  GeeksforGeeks
                </span>
              </div>

              {/* HackerRank */}
              <div className="relative group flex items-center">
                <a
                  href="https://www.hackerrank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-green-500 hover:text-white transition duration-300 transform hover:scale-125"
                  aria-label="Visit HackerRank"
                >
                  <FaHackerrank />
                </a>
                <span className="ml-4 text-lg text-white hidden group-hover:block transition duration-300">
                  HackerRank
                </span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-3xl font-semibold flex items-center mb-4">
              <FaTools className="text-yellow-300 mr-2" /> Skills
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>C++, C, Java</li>
              <li>SQL, JavaScript</li>
              <li>React, Node.js, Express, MongoDB</li>
              <li>AWS Services (currently learning)</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
