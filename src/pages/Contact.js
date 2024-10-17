import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSent(true);  // Set flag to true if successful
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className="bg-gradient-to-r from-gray-800 to-black min-h-screen flex justify-center items-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg animate-fadeInRight">
        <h2 className="text-3xl font-bold text-center mb-6 gradient-text">Contact Me</h2>

        {sent ? (
          <div className="text-center text-green-600">
            <p>Your message has been sent successfully!</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
