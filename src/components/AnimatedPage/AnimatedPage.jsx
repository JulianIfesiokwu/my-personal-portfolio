import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  end: { opacity: 0, transition: { duration: 0.5 } },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      end="end"
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
