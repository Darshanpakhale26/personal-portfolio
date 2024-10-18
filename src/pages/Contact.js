import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ulxqju8", 'template_bi0syc6', form.current, 'L-ibtMIu30XnCJHvC')  // Where to find the User ID? Check the next step! 
    // The User ID is the one you copied from the EmailJS Dashboard earlier in Step 3 (Refer to the image in Step 3)

      .then((result) => {
        console.log(result.text);
        setSent(true);  // Set flag to true if successful
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className="bg-gradient-to-r from-gray-800 to-black min-h-screen flex justify-center items-center p-5">
      
      <div className="bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg animate-fadeInRight hover:shadow-2xl transition-shadow duration-500 ease-in-out relative">
      <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8 animate-fadeInRight text-center">
          Contact Me
        </h2>
      

        {sent ? (
          <div className="text-center text-green-600">
            <p>Your message has been sent successfully!</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white font-bold">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-500 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-500 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-500 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
