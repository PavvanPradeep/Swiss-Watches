import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import CardsCollection from "./CardsCollection"

export default function WatchesPage({ backgroundColor }) {
    return (
      <div style={{ backgroundColor }}>
        <Navbar navPosition={{position: 'relative'}} navTextStyle={{color: 'black'}} navBGColor='black' navIcon={{background: 'black'}}/>
        <CardsCollection/>
        <Footer/>
      
      </div>
    )
  }
  