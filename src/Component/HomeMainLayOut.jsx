import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import UserReview from "./UserReview";
import CustomerCare from "./CustomerCare";
import OurSecurity from "./OurSecurity";
import { ToastContainer } from "react-toastify";

const HomeMainLayOut = () => {
  return (
    <>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Feature></Feature>
      </div>
      <div>
        <UserReview></UserReview>
      </div>
      <div>
        <CustomerCare></CustomerCare>
      </div>
      <div>
        <OurSecurity></OurSecurity>
      </div>
      <ToastContainer />
    </>
  );
};

export default HomeMainLayOut;
