import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.component'

const SharedLayout = ({setTheme, changeTheme, theme}) => {
  return (
    <div className={theme ? "dark" : "light"}>
        <Navbar setTheme={setTheme} changeTheme={changeTheme} theme={theme} />
        <Outlet />
    </div>
  )
}

export default SharedLayout