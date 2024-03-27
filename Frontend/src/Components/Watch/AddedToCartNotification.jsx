import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddedToCartNotification({ watchDetails }) {
  const navigate = useNavigate();

  return (
    <div className='added-to-cart-notification'>
      <div className='card1'>
        <img src={getImageByWatchName(watchDetails.name)} alt={watchDetails.name} />
        <div className='watch-details text-xl'>
          <h1>{watchDetails.name || 'Watch Title'}</h1>
        </div>
        <div className='price flex justify-start'>
          <h1>{`$${watchDetails.price || '0'}`}</h1>
        </div>
        <button className='view-cart-button'>
          View Cart
        </button>
      </div>
    </div>
  );
}
