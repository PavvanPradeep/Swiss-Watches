import React from 'react'
import WatchesPage from './Components/WatchCollection/CollectionsPage'
import WatchPage from './Components/Watch/WatchPage'
import Hero from './Components/Hero/Hero'
import Loginpage from './Components/Login/Loginpage'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import CartPage from './Components/Cart/CartPage'


export default function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/collections' element={<WatchesPage backgroundColor="#fff" />}/>
          <Route path='/watch' element={<WatchPage backgroundColor="#fff"  />}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/cart' element={<CartPage backgroundColor="#fff"/>}/>
        </Routes>
      </Router>
    </>
  )
}
