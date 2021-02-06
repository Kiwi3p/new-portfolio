import React from "react";
import Content from "../components/Content";
import ContentContainer from "../components/ContentContainer";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

function Home() {
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
      <Hero />
      <ContentContainer />
    </motion.div>
  );
}

export default Home;
