import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
// import profilePhoto from "../assets/darshan.jpg"; // Add your photo in the assets folder

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-r from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row animate-fadeInRight">
        {/* Left side: Name, Profession, Buttons */}
        <div className="flex flex-col justify-center h-full text-center md:text-left md:items-start md:w-1/2">
          {/* Gradient effect on the name */}
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
            Darshan Pakhale
          </h2>
          {/* Gradient effect on the typed profession text */}
          <ReactTyped
            className="text-xl sm:text-2xl font-semibold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"
            strings={[
              "Software Developer",
              "MERN Stack Developer",
              "Problem Solver",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />

          {/* Resume and About Me buttons */}
          <div className="mt-8 space-x-4">
            <button
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-orange-500 transition-all ease-in-out hover:scale-105"
              aria-label="View my resume"
            >
              <a
                href="your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-green-500 transition-all ease-in-out hover:scale-105"
              aria-label="About me section"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Right side: Photo */}
        {/* Uncomment and add your photo when ready */}
        {/* <div className="mt-12 md:mt-0 md:ml-12 flex justify-center items-center w-full md:w-1/2">
          <img
            src={profilePhoto}
            alt="Darshan Pakhale"
            className="rounded-full w-60 h-60 md:w-72 md:h-72 shadow-lg hover:scale-105 transition-all ease-in-out"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
