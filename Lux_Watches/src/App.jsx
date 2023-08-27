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
      {/* <div className='video-container'>
        <video autoPlay loop muted>
          <source src='src\assets\The new Rolex Explorer.mp4' type='video/mp4'/>
        </video>
      </div> */}
      <Login/>
      <Navbar/>
      <Footer/>
    </>
  )
}
