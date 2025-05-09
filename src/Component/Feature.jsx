import React from "react";
import Electricity from "../assets/steptodown.com388744.jpg";
import Water from "../assets/3.jpg";
import Gas from "../assets/steptodown.com923590.jpg";
import Internet from "../assets/steptodown.com784506.jpg";
import { Link } from "react-router";

const Feature = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Bill Management
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Our Bill Management Feature.
          </h2>
          <p className="text-center text-gray-500 md:text-lg">
            paying bills such as electricity, water, internet, rent, and other
            utilities. It ensures that payments are made on time, helps avoid
            late fees, and maintains a clear record of expenses. In modern
            systems, bill management is often done through web or mobile
            applications that provide reminders, auto-pay options, and digital
            records.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={Electricity}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={Water}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={Gas}
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={Internet}
            alt=""
          />
        </div>
        <div className="flex items-center sm:justify-center">
          <Link
            to="/reg"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
