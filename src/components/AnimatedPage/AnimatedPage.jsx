import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  end: { opacity: 0, x: -200 },
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
