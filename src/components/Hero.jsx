import React, { useState } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const Hero = () => {
  const [service, setService] = useState(""); // State for service
  const [location, setLocation] = useState(""); // State for location

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service:", service);
    console.log("Location:", location);
  };
  return (
    <section
      className="relative w-full h-[28rem] md:h-[20rem] flex items-center justify-center bg-cover bg-center"
      id="hero-section"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center overflow-hidden">
          Are You a Supplier?
        </h1>
        <h2 className="text-lg md:text-2xl">Explore Matching Opportunities</h2>

        <form onSubmit={handleSubmit} // Add this to handle the form submission
      className="flex flex-col md:flex-row gap-4 mt-5 w-full md:w-auto"
    >
      <div className="flex items-center w-full md:w-auto bg-white rounded-md px-4 py-2">
        <HiMail className="text-orange-600 mr-2" />
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)} // Update the service state
          placeholder="Search your required service"
          className="w-full md:w-52 text-black bg-transparent text-xs md:text-sm outline-none placeholder-gray-500"
        />
      </div>

      <div className="flex items-center w-full md:w-auto bg-white rounded-md px-4 py-2">
        <RiMapPinLine className="text-orange-600 mr-2" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update the location state
          placeholder="Search your desired location"
          className="w-full md:w-52 bg-transparent text-black text-xs md:text-sm outline-none placeholder-gray-500"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>

        <div className="flex flex-wrap justify-center mt-3 gap-1">
          <p className="text-xs font-semibold">Are you a buyer?</p>
          <a
            href="#"
            className="text-xs underline text-gray-200 hover:text-gray-300"
          >
            Click here if you are looking to post a requirement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
