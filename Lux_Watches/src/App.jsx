import React from 'react'
import Loginpage from './Components/Login/Loginpage'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Celeb from './Components/Celeb/Celeb'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Loginpage/> */}
      <Celeb/>
      <Footer/>
    </>
  )
}
