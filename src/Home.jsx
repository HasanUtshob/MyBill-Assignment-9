import React from "react";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="bg-base-300">
      <nav className="w-10/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main className=" min-h-[calc(100vh-116px)] w-10/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
