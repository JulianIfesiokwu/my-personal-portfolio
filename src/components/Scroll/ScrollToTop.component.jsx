import React from "react";
import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./ScrollToTop.styles.css";

const ScrollToTop = ({ showBelow }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > showBelow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0 });
  };

  return (
    <div
      className={isVisible ? "top-button" : "top-button hide"}
      onClick={handleClick}
    >
      {showBelow && <MdKeyboardArrowUp size="30" color="white" />}
    </div>
  );
};

export default ScrollToTop;
