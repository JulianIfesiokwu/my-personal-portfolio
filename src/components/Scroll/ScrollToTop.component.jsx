import React from "react";
import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./ScrollToTop.styles.css";

const ScrollToTop = (showBelow) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) {
        setShow(true);
      } else {
        if (show) {
          setShow(false);
        }
      }
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0 });
  };

  return (
    <div
      className={showBelow ? "top-button" : "top-button hide"}
      onClick={handleClick}
    >
      {showBelow && <MdKeyboardArrowUp size="30" color="white" />}
    </div>
  );
};

export default ScrollToTop;
