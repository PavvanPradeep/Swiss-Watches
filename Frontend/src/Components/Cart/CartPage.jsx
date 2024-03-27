import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cart from './Cart'
import Footer from '../Footer/Footer'

export default function CartPage({ backgroundColor }) {
  return (
    <div style={{ backgroundColor }}>
        <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}} navCartIcon='public\cart-black.svg' navSearchIcon='search-black.svg'/>
        <Cart/>
        <Footer/>
    </div>
  )
}
