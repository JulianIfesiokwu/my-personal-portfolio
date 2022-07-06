import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.component";
import Footer from "../Footer/Footer.component";
import ScrollToTop from "../Scroll/ScrollToTop.component";

const SharedLayout = ({ setTheme, changeTheme, theme }) => {
  return (
    <div className={theme ? "dark" : "light"}>
      <Navbar setTheme={setTheme} changeTheme={changeTheme} theme={theme} />
      <Outlet />
      <ScrollToTop showBelow={250} />
      <Footer />
    </div>
  );
};

export default SharedLayout;
