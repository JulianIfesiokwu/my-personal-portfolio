import React from "react";
import Navbar from "../Navbar/Navbar.component";
import Footer from "../Footer/Footer.component";
import ScrollToTop from "../Scroll/ScrollToTop.component";
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes.component";

const SharedLayout = ({ setTheme, changeTheme, theme }) => {
  return (
    <div className={theme ? "dark" : "light"}>
      <Navbar setTheme={setTheme} changeTheme={changeTheme} theme={theme} />

      <AnimatedRoutes />

      <ScrollToTop showBelow={250} />
      <Footer />
    </div>
  );
};

export default SharedLayout;
