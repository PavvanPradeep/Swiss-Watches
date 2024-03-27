import React, {useEffect} from 'react'
import Watch from './Watch'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function WatchPage({backgroundColor}) {


  return (
    <div style={{backgroundColor}}>
      <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}} navCartIcon='public\cart-black.svg' navSearchIcon='search-black.svg'/>
      <Watch/>
      <Footer/>
    </div>

  )
}
