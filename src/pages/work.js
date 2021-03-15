import React from "react";
import ContentContainer from "../components/ContentContainer";
import { motion } from "framer-motion";

function Work() {
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
      <ContentContainer />
    </motion.div>
  );
}

export default Work;
