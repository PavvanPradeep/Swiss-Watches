import React, { useState } from 'react';
import './Cart.css';

import {CartImage, ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,
  patek_green,patek_teal,patek_blue
} from '../WatchCollection/images'

export default function CartCard() {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to remove this item from your cart?")
    if(confirmed){
      setIsDeleted(true);
      console.log('Item deleted.');
    }
  };

  if (isDeleted) {
    return null;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Code 11.59 by Audemars Piguet',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      console.log('Not supported');
    }
  };

  return (
    <>
      <div className='card1'>
        <CartImage pfp={carrera}/>
        <div className='watch-details text-xl'>
          <h1>Daydate by Rolex</h1>
          <p>Green</p>
          <div className='additionals flex justify-start'>
            <label htmlFor='quantity-select'>Quantity:  
              <select id='quantity-select' className='bg-white text-black mr-2'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label>
            <button onClick={handleDelete} className='underline ml-2 mr-2'>Delete</button>
            <button onClick={handleShare} className='underline ml-2'>Share</button>
          </div>

        </div>
        <div className='price flex justify-start'>
          <h1>$100k</h1>
        </div>
      </div>
    </>
  );
}
