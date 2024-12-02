import React from "react";
import FlexBoxes from "./FlexBoxes";

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="bg-emerald-100 flex flex-col md:flex-row items-center justify-around h-auto md:h-32 mb-4 px-4 py-4 md:py-0 space-y-4 md:space-y-0">
        {/* Text Section */}
        <h2 className="font-bold text-center md:text-left text-lg sm:text-xl">
          Let Suppliers{" "}
          <span className="inline-flex border-b-2 border-orange-600">
            Find You
          </span>
        </h2>

        {/* Button Section */}
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center text-xs sm:text-sm font-semibold bg-orange-700 hover:bg-orange-800 text-white px-4 py-2"
        >
          Get verified
        </button>
      </div>

      <div className=" m-12 p-4 flex items-center flex-col justify-center">
        <h2 className="font-bold">How It Works?</h2>
        <p className="text-xs sm:text-sm p-2 px-4 sm:px-12 md:px-28 text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>

        <div class=" p-8">
          <FlexBoxes />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
