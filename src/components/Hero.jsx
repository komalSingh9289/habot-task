import React from "react";
import { RiMapPinLine } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[28rem] md:h-[20rem] flex items-center justify-center bg-cover bg-center"
      id="hero-section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Headings */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center overflow-hidden">
          Are You a Supplier?
        </h1>
        <h2 className="text-lg md:text-2xl">Explore Matching Opportunities</h2>

        {/* Form */}
        <form className="flex flex-col md:flex-row gap-4 mt-5 w-full md:w-auto">
          {/* Email Input */}
          <div className="flex items-center w-full md:w-auto bg-white rounded-md px-4 py-2">
            <HiMail className="text-orange-600 mr-2" />
            <input
              type="email"
              placeholder="Search your required service"
              className="w-full md:w-52 bg-transparent text-xs md:text-sm outline-none placeholder-gray-500"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center w-full md:w-auto bg-white rounded-md px-4 py-2">
            <RiMapPinLine className="text-orange-600 mr-2" />
            <input
              type="text"
              placeholder="Search your desired location"
              className="w-full md:w-52 bg-transparent text-xs md:text-sm outline-none placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>

        {/* Link Section */}
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
