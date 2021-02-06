import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="up bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="up lg:text-9xl md:text-7xl sm:text-7xl sm:text-5xl text-3xl font-black mb-14">
        JACK TRANSUE
      </h1>
      <h1 className="up lg:text-7xl md:text-5xl sm:text-5xl sm:text-5xl text-3xl font-medium mb-14">
        Full Stack Developer
      </h1>

      <Link to="/about" className="up py-4 px-10 text-white bg-yellow-500 rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center...">
        About Me
      </Link>
      {/* <div
        data-aos="fade-up"
        className="orange-slice-right bg-yellow-500"
      ></div> */}
    </div>
  );
}

export default Hero;
