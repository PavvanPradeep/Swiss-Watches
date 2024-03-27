import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Signup from './Signup'


export default function SignupPage({ backgroundColor }) {
  return (
    <>
      <div style={{ backgroundColor }}>
        <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}} navCartIcon='public\cart-black.svg' navSearchIcon='search-black.svg'/>
        <Signup/>
        <div className='mt-20'>
          <Footer/>
        </div>
        
      </div>
    </>
  )
}
