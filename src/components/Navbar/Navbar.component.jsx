import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";

import './Navbar.styles.css'

const Navbar = ({changeTheme, theme}) => {
  const [menu, setShowMenu] = useState(false)

  const showMenu = () => {
    setShowMenu(!menu)
  }

  return (
    <div className="navbar">
        <p className="logo">dev<span className='logo-name'>julian</span></p>

          {menu ?  <MdClose onClick={showMenu}  className="icon theme-color" size="40" /> : <MdMenu  onClick={showMenu} className="icon theme-color" size="40"/> }
          <ul className={menu ? "navlist show" : "navlist"}>
              <NavLink to="/" className="nav-item" onClick={showMenu}><span className="index">01.</span> Home</NavLink>
              <NavLink to="/" className="nav-item" onClick={showMenu}><span className="index">02.</span> About</NavLink>
              <NavLink to="/projects" className="nav-item" onClick={showMenu}><span className="index">03.</span> Projects</NavLink>
              <NavLink to="/contact" className="nav-item" onClick={showMenu}><span className="index">04.</span> Contact</NavLink>
          </ul>
          {theme ? <MdLightMode size="30" onClick={changeTheme} className="theme-color"/> : <MdDarkMode size="30" onClick={changeTheme} className="theme-color" /> }
    </div>
  )
}

export default Navbar