import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Signup from './Signup'


export default function SignupPage() {
  return (
    <>
      <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'white'}} navBGColor='white' navIcon={{background: 'black'}}/>
      <Signup/>
      <Footer/>
    </>
  )
}
