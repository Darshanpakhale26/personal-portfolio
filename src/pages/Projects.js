import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import FontAwesome icons

const projects = [
  {
    id: 1,
    name: 'Razorpay Clone',
    image: 'https://wptravel.io/wp-content/uploads/2023/12/Razorpay.png', // Replace with actual image link
    github: 'https://github.com/Darshanpakhale26/Razorpay', // Replace with actual GitHub link
    live: 'https://live-link.com/razorpay-clone', // Replace with actual Live link
  },
  {
    id: 2,
    name: 'E-commerce Website',
    image: 'https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg', // Google image link for E-commerce
    github: 'https://github.com/Darshanpakhale26/ecommerce-web',
    live: 'https://live-link.com/ecommerce',
  },
  {
    id: 3,
    name: 'React Product Catalog',
    image: 'https://therichpost.com/wp-content/uploads/2021/02/Reactjs-Ecommerce-Template-with-Json-API-Data.png', // Replace with actual image link
    github: 'https://github.com/Darshanpakhale26/product-catalog',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 4,
    name: 'Food Delivery App',
    image: 'https://themindstudios.com/blog/content/images/2022/03/UX-Design.jpg', // Replace with actual image link
    github: 'https://github.com/Darshanpakhale26/Food-Delivery-App',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 5,
    name: 'BMI Calculator',
    image: 'https://i.ytimg.com/vi/a4qFLUiAEDY/maxresdefault.jpg', // Replace with actual image link
    github: 'https://github.com/Darshanpakhale26/bmi-calculator',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 6,
    name:  'Personal Portfolio',
    image: 'https://static.vecteezy.com/system/resources/previews/016/208/610/non_2x/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg', // Replace with actual image link
    github: 'https://github.com/Darshanpakhale26/react-tailwind-website',
    live: 'https://live-link.com/product-catalog',
  },
  


  // Add more projects here as needed
];

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-gradient-to-r from-gray-800 to-black text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8 text-center animate-fadeInRight">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInRight">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {project.name}
                </h3>
                <div className="flex justify-center space-x-4">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={30} />
                  </a>
                  {/* Live Demo Link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
