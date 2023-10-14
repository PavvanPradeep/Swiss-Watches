import React from 'react'
import Watch from './Watch'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function WatchPage({backgroundColor}) {
  return (
    <div style={{backgroundColor}}>
      <Navbar navPosition={{position: 'absolute'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}}/>
      <Watch/>
      <Footer/>
    </div>

  )
}
