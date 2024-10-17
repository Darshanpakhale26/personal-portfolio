import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import FontAwesome icons

const projects = [
  {
    id: 1,
    name: 'Razorpay Clone',
    image: '/path/to/razorpay-image.png', // Replace with actual image path
    github: 'https://github.com/username/razorpay-clone', // Replace with actual GitHub link
    live: 'https://live-link.com/razorpay-clone', // Replace with actual Live link
  },
  {
    id: 2,
    name: 'E-commerce Website',
    image: '/path/to/ecommerce-image.png',
    github: 'https://github.com/username/ecommerce',
    live: 'https://live-link.com/ecommerce',
  },
  {
    id: 3,
    name: 'React Product Catalog',
    image: '/path/to/product-catalog-image.png',
    github: 'https://github.com/username/product-catalog',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 3,
    name: 'React Product Catalog',
    image: '/path/to/product-catalog-image.png',
    github: 'https://github.com/username/product-catalog',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 3,
    name: 'React Product Catalog',
    image: '/path/to/product-catalog-image.png',
    github: 'https://github.com/username/product-catalog',
    live: 'https://live-link.com/product-catalog',
  },
  {
    id: 3,
    name: 'React Product Catalog',
    image: '/path/to/product-catalog-image.png',
    github: 'https://github.com/username/product-catalog',
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
