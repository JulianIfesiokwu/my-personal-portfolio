import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import './Navbar.styles.css'


const Navbar = () => {
  const [menu, setShowMenu] = useState(false)

  const showMenu = () => {
    setShowMenu(!menu)
  }

  return (
    <div className="navbar">
        <p className="logo">JulianIfesiokwu</p>

        <div className="navigation">
          {menu ?  <MdClose onClick={showMenu}  className="icon" size="40" /> : <MdMenu  onClick={showMenu} className="icon" size="40"/> }
          <ul className={menu ? "navlist active" : "navlist"}>
              <NavLink to="/" className="nav-item"><span className="index">01.</span> About</NavLink>
              <NavLink to="/" className="nav-item"><span className="index">02.</span> Projects</NavLink>
              <NavLink to="/" className="nav-item"><span className="index">03.</span> Contact</NavLink>
          </ul>
        </div>
    </div>
  )
}

export default Navbar