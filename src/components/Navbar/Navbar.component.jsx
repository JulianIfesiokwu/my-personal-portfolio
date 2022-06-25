import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <p className="logo">JulianIfesiokwu</p>
        <ul className="navlist">
            <NavLink to="/" className="nav-item">01.About</NavLink>
            <NavLink to="/" className="nav-item">02.Projects</NavLink>
            <NavLink to="/" className="nav-item">03.Contact</NavLink>
        </ul>
    </div>
  )
}

export default Navbar