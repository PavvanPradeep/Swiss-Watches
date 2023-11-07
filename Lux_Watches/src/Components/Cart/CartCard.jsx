import React from 'react'
import './Cart.css'

export default function CartCard() {
  return (
    <>
        <div className='card'>
                <img className="watch-image" src="src\assets\watches\royal_oak_minute_repeater_supersonnerie.png" alt="" />
                <div className='watch-details'>
                    <h1>Watch 1</h1>
                    <p>Black</p>
                </div>
                <div className='price'>
                    <h1>$100k</h1>
                </div>
        </div>
    </>
  )
}
