import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiCplusplus  } from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className="bg-gradient-to-r from-gray-800 to-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500  animate-fadeInRight text-center mt-12 mb-12">My Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4">Frontend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* HTML */}
            <div className="group">
              <FaHtml5 className="text-6xl text-orange-500 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-orange-500 transition-colors duration-200">HTML5</p>
            </div>
            {/* CSS */}
            <div className="group">
              <FaCss3Alt className="text-6xl text-blue-500 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-blue-500 transition-colors duration-200">CSS3</p>
            </div>
            {/* JavaScript */}
            <div className="group">
              <FaJs className="text-6xl text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-yellow-400 transition-colors duration-200">JavaScript</p>
            </div>
            {/* React */}
            <div className="group">
              <FaReact className="text-6xl text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-cyan-400 transition-colors duration-200">React</p>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4">Backend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Node.js */}
            <div className="group">
              <FaNodeJs className="text-6xl text-green-500 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-green-500 transition-colors duration-200">Node.js</p>
            </div>
            {/* Express.js */}
            <div className="group">
              <SiExpress className="text-6xl text-gray-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-gray-400 transition-colors duration-200">Express.js</p>
            </div>
            {/* MongoDB */}
            <div className="group">
              <SiMongodb className="text-6xl text-green-600 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-green-600 transition-colors duration-200">MongoDB</p>
            </div>
            {/* MySQL */}
            <div className="group">
              <SiMysql className="text-6xl text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-blue-600 transition-colors duration-200">MySQL</p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Git */}
            <div className="group">
              <FaGitAlt className="text-6xl text-orange-600 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-orange-600 transition-colors duration-200">Git</p>
            </div>
            {/* GitHub */}
            <div className="group">
              <FaGithub className="text-6xl text-gray-600 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-gray-600 transition-colors duration-200">GitHub</p>
            </div>
            {/* AWS */}
            <div className="group">
              <FaAws className="text-6xl text-yellow-500 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-yellow-500 transition-colors duration-200">AWS</p>
            </div>
            {/* Tailwind CSS */}
            <div className="group">
              <SiTailwindcss className="text-6xl text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-cyan-400 transition-colors duration-200">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-white mb-4">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* C++ */}
            <div className="group">
              <SiCplusplus className="text-6xl text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-blue-600 transition-colors duration-200">C++</p>
            </div>
            {/* Java */}
            <div className="group">
              <FaJava className="text-6xl text-red-500 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-red-500 transition-colors duration-200">Java</p>
            </div>
            {/* JavaScript */}
            <div className="group">
              <FaJs className="text-6xl text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-yellow-400 transition-colors duration-200">JavaScript</p>
            </div>
            {/* Python */}
            <div className="group">
              <FaPython className="text-6xl text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <p className="mt-4 text-lg text-white group-hover:text-yellow-400 transition-colors duration-200">Python</p>

            </div>
        </div>
      </div>
      </div>

    </section>

  );
};

export default Skills;
