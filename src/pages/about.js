import React from "react";
import Game from "../components/Game";
import Model from "../components/Model";
import { motion } from "framer-motion";
// import { animationOne, transition } from "./animation";

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 300,
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-screen flex flex-col justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">About Page</h1>
        <Game />
      </div>
      <div className="h-60 m-20 flex flex-row space-x-20 justify-center items-center bg-white">
        <Model />
        <button to="/github" className="github up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center">
          Github
        </button>
        <button to="/linkedin" className="LinkedIn up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center">
          LinkedIn
        </button>
      </div>
    </motion.div>
  );
}

export default About;
