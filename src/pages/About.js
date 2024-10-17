import React from 'react';
import { FaSchool, FaMapMarkerAlt, FaCalendarAlt, FaPercentage } from 'react-icons/fa'; // Import icons from FontAwesome

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-gradient-to-r from-gray-800 to-black text-white flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8 animate-fadeInRight">
          About Me
        </h2>
        <div className="overflow-y-auto h-[70vh] animate-fadeInRight">
          {/* 10th Education */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold flex items-center">
              <FaSchool className="text-yellow-300 mr-2" /> Janta Highschool, Dhule
            </h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" /> Dhule, Maharashtra
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" /> 2016-2017
            </p>
            <p className="flex items-center">
              <FaPercentage className="mr-2 text-pink-500" /> 89.2% (10th Grade)
            </p>
          </div>

          {/* 12th Education */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold flex items-center">
              <FaSchool className="text-yellow-300 mr-2" /> H. R. Patel Junior College, Shirpur
            </h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" /> Shirpur, Maharashtra
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" /> 2018-2019
            </p>
            <p className="flex items-center">
              <FaPercentage className="mr-2 text-pink-500" /> 85.0% (12th Science)
            </p>
          </div>

          {/* Graduation Education */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold flex items-center">
              <FaSchool className="text-yellow-300 mr-2" /> Pune Vidyarthi Griha's College of Engineering
            </h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" /> Pune, Maharashtra
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" /> 2019-2023
            </p>
            <p className="flex items-center">
              <FaPercentage className="mr-2 text-pink-500" /> 8.42 CGPA (B.E. in E&TC)
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Specialization: Electronics and Telecommunications Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
