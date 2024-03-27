import React from 'react'
import Login from './Login'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Loginpage({ backgroundColor }) {
  return (
    <>
      <div style={{ backgroundColor }}>
        <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}} navCartIcon='public\cart-black.svg' navSearchIcon='search-black.svg'/>
        <Login/>
        <Footer/>
      </div>
    </>
  )
}
