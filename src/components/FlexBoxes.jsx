import React from "react";
import addUser from "../assets/addUser.svg";
import post from "../assets/post.svg";
import connect from "../assets/connect.svg";
import contact from "../assets/contact.svg";
import editProfile from "../assets/editProfile.svg";
import review from "../assets/review.svg";

const FlexBoxes = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-0">
      <div class="bg-emerald-100 display">
        <img src={addUser} className="icons" />
        <p className="para">Select Your Role and Signup</p>
      </div>

      <div class="bg-white display">
        <img src={post} className="icons" />
        <p className="para">Buyers Post Your requirements</p>
      </div>

      <div class="bg-emerald-100 display">
        <img src={review} className="icons" />
        <p className="para">Review,Select, and Contact the Best Suppliers</p>
      </div>

      <div class="bg-white display">
        <img src={editProfile} className="icons" />
        <p className="para">
          Suppliers Complete Your Profile and get notified for opportunities
        </p>
      </div>

      <div class="bg-emerald-100 display">
        <img src={contact} className="icons" />
        <p className="para">
          Contact to Buyers and Share your Quote for the service
        </p>
      </div>

      <div class="bg-white display">
        <img src={connect} className="icons"/>
        <p className="para">
          Both the Parties can Connect and Make Business Leave a Feedback
        </p>
      </div>
    </div>
  );
};

export default FlexBoxes;
