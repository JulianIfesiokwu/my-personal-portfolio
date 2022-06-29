import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.component'
import Footer from '../Footer/Footer.component'

const SharedLayout = ({setTheme, changeTheme, theme}) => {
  return (
    <div className={theme ? "dark" : "light"}>
        <Navbar setTheme={setTheme} changeTheme={changeTheme} theme={theme} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout