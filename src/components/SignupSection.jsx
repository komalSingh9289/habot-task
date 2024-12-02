import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../assets/yt.jfif";
import { useState } from "react";
import youtube from "../assets/youtube.svg";

const SignupSection = () => {
  const places = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  const videoId = "https://www.youtube.com/watch?v=IZLp-TZyDkQ";
  const [activeTab, setActiveTab] = useState("Buyer");
  return (
    <div className="w-full mb-4 p-4 h-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/*Signup section */}
        <div className=" p-5">
          <h2 className="text-lg font-bold">Ready to dive into HABOT?</h2>
          <p className="text-xs text-black py-3 text-left">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button
            type="submit"
            className=" flex items-center text-xs w-auto bg-green-700 hover:bg-green-800 text-white px-4 py-2 mt-2 md:mt-0"
          >
            Sign up Today! <FaArrowRightLong className="ml-5" />
          </button>
        </div>

        {/* Places Section */}
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {places.map((place, index) => (
              <button
                key={index}
                className="border border-orange-500 text-black text-xs py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition"
              >
                {place}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Youtube Section */}
      <div className="bg-blue-950 p-12 m-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video Thumbnail */}
        <div className="p-2">
          <div
            className=" relative p-2 bg-cover bg-center flex items-center justify-center rounded-lg shadow-lg cursor-pointer aspect-[16/9] w-full"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=${videoId}`,
                "_blank"
              )
            }
          >
           <img src={youtube} className="absolute w-20 h-20" />
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 border-b border-gray-400">
            <button
              className={`px-4 py-2 text-xs sm:text-sm font-bold ${
                activeTab === "Buyer"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("Buyer")}
            >
              Buyer
            </button>
            <button
              className={`px-4 py-2 text-xs sm:text-sm font-bold ${
                activeTab === "Supplier"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("Supplier")}
            >
              Supplier
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-sm">
            {activeTab === "Buyer" && (
              <ul className="space-y-4">
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  Post your requirements.
                </li>
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  Sit back for multiple suppliers to contact you.
                </li>
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  Choose among the suppliers based on the ratings and reviews.
                </li>
              </ul>
            )}
            {activeTab === "Supplier" && (
              <ul className="space-y-4">
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  View posted requirements by buyers.
                </li>
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  Submit your proposals to buyers.
                </li>
                <li className="flex items-start text-xs sm:text-sm text-white">
                  <span className="text-green-500 mr-3">✔</span>
                  Build your profile with reviews and ratings.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
