import React from "react";
import ContentContainer from "../../components/ContentContainer";
import { motion } from "framer-motion";
import LinkDes from "./descriptions/LinksDes";
import HeroDes from "./descriptions/HeroDes";

function Cohab() {
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
      <HeroDes />
      <ContentDes />
      <ContentContainer />
    </motion.div>
  );
}

export default Cohab;
