import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";

import "./Navbar.styles.css";

const Navbar = ({ changeTheme, theme }) => {
  const [menu, setShowMenu] = useState(false);

  const showMenu = () => {
    setShowMenu(!menu);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <p className="logo">
          developer<span className="logo-name">julian</span>
        </p>
      </Link>

      {menu ? (
        <MdClose onClick={showMenu} className="menu theme-color" size="40" />
      ) : (
        <MdMenu onClick={showMenu} className="menu theme-color" size="40" />
      )}
      <ul className={menu ? "navlist show" : "navlist"}>
        <NavLink to="/" className="nav-item" onClick={showMenu}>
          <span className="index">01.</span> Home
        </NavLink>
        <a href="#about" rel="noreferrer">
          <span className="index">02.</span> About
        </a>
        <Link to="/#about" className="nav-item" onClick={showMenu}>
          <span className="index">02.</span> About
        </Link>
        <NavLink to="/projects" className="nav-item" onClick={showMenu}>
          <span className="index">03.</span> Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item" onClick={showMenu}>
          <span className="index">04.</span> Contact Me
        </NavLink>
      </ul>
      {theme ? (
        <MdLightMode
          size="30"
          onClick={changeTheme}
          className="theme-color icon"
        />
      ) : (
        <MdDarkMode
          size="30"
          onClick={changeTheme}
          className="theme-color icon"
        />
      )}
    </div>
  );
};

export default Navbar;
