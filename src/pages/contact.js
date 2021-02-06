import React from "react";
import Email from "../components/Email";
import { motion } from "framer-motion";

function Contact() {
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
      <div>
        <div className=" flex justify-center items-center bg-yellow-500">
          <h1 className="text-9xl uppercase font-black">Contact Me</h1>
        </div>
        <Email />
      </div>
    </motion.div>
  );
}

export default Contact;
