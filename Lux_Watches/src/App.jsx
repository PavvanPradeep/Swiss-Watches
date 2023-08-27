import React from 'react'
import Login from './Components/Login/Login'
import Navbar from './Components/Sidenav/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Collections from './Components/Collections/Collections'

export default function App() {
  return (
    <>
      <Hero/>
      {/* <Collections/> */}
      {/* <Login/> */}
      <Navbar/>
      <Footer/>
    </>
  )
}
