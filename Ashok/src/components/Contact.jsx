import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5fls4bd', 'template_8zajtmf', form.current, {
        publicKey: '1Hb4mhPDGNAvaPCMo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center md:min-h-100 bg-gray-950">
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="bg-gray-800 shadow-lg rounded-lg p-6 md:p-10 w-full max-w-3xl"
      >
        <h2 className="text-2xl text-white font-bold text-center mb-6">Contact Us</h2>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea 
            name="message" 
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
            required
          />
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="w-full md:w-2/4 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Send
          </button>
        </div>

        {isSent && (
          <div className="mt-4 p-2 text-center text-green-400 bg-gray-700 rounded">
            Email sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
