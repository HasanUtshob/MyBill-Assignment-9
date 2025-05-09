import React from "react";
import HeroImage from "../assets/hero.jpg";
import HeroGiff from "../assets/Utility-Billing-System.gif";

const Hero = () => {
  return (
    <div className="flex justify-between  items-center mt-5  bg-base-100 p-5 shadow-lg rounded-2xl">
      <div className="w-[550px] space-y-5">
        <h1 className="text-5xl font-bold text-green-700 ">
          Seamless Bill Management Solution
        </h1>
        <p className="text-gray-400">
          Bill Management refers to the process of organizing, tracking, and
          paying bills such as electricity, water, internet, rent, and other
          utilities.
        </p>
      </div>
      <div className="w-[550px] p-3 ">
        <img className="w-full" src={HeroGiff} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
