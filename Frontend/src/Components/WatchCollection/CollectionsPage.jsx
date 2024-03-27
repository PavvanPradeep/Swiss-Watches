import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import CardsCollection from "./CardsCollection"

export default function WatchesPage({ backgroundColor }) {
    return (
      <div style={{ backgroundColor }}>
        <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}} navCartIcon='public\cart-black.svg' navSearchIcon='search-black.svg'/>
        <CardsCollection/>
        <div className="mt-16">
          <Footer/>
        </div>
      </div>
    )
  }
  