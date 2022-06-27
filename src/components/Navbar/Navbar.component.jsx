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
        <p className="logo">dev<span className='dev-name'>julian</span></p>

          {menu ?  <MdClose onClick={showMenu}  className="icon" size="40" /> : <MdMenu  onClick={showMenu} className="icon" size="40"/> }
          <ul className={menu ? "navlist show" : "navlist"}>
              <NavLink to="/" className="nav-item"><span className="index">01.</span> Home</NavLink>
              <NavLink to="/" className="nav-item"><span className="index">02.</span> About</NavLink>
              <NavLink to="/" className="nav-item"><span className="index">03.</span> Projects</NavLink>
              <NavLink to="/" className="nav-item"><span className="index">04.</span> Contact</NavLink>
          </ul>
    </div>
  )
}

export default Navbar