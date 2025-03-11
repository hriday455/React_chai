import React from 'react'
import Footer from './components/footers/Footer'
import Header from './components/headers/Header'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
