import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.component'

const SharedLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default SharedLayout