import React from 'react'
import Login from './Components/Login/Login'
import Navbar from './Components/Sidenav/Navbar'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
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
