import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs
      .sendForm("service_5fls4bd", "template_8zajtmf", form.current, {
        publicKey: "1Hb4mhPDGNAvaPCMo",
      })
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setError("Failed to send email. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="w-[99%] max-w-6xl mx-auto px-6 md:px-12 py-20 text-white rounded-xl shadow-xl border-gray-700"
    >
      <div className="w-full flex flex-col items-center justify-center ">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-teal-400 border-b-4 border-teal-500 w-fi">
        Contact Us
      </h2>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 gap-8 p-8 bg-gradient-to-br from-gray-900 to-black  bg-opacity-90 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl hover:border-indigo-500 transition-all duration-300"
      >
        <div>
          <label htmlFor="name" className="block text-indigo-600 font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-indigo-600 font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-indigo-600 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm h-32"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full md:w-2/4 text-white font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 transition-all duration-300 shadow-lg ${isLoading ? "bg-indigo-300 cursor-not-allowed" : "hover:shadow-2xl"}`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {isSent && (
          <div className="mt-4 p-3 text-center text-green-600 bg-green-100 border border-green-400 rounded">
            Email sent successfully!
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 text-center text-red-600 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
