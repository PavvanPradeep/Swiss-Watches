import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import { CartImage, ap_1159, cactus_jack, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,
 patek_green, patek_teal, patek_blue
} from '../WatchCollection/images';

export default function CartCard({ watchDetails, onItemDeleted }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    console.log("Delete button clicked",isDeleting)
    const confirmed = window.confirm("Are you sure you want to remove this item from your cart?");

    if (confirmed) {
      // Set isDeleting to true immediately after confirmation
      setIsDeleting(true);
    }
  };

  useEffect(() => {
    // useEffect will be triggered when isDeleting becomes true
    if (isDeleting) {
      axios.delete(`http://127.0.0.1:8000/auth/cart/item/${watchDetails.id}/`)
        .then(response => {
          console.log('Item deleted:', response.data);
          console.log('Deleted state',isDeleting)
          // After successful deletion, you can perform additional actions if needed
          if (onItemDeleted) {
            onItemDeleted(watchDetails.id);
          }
        })
        .catch(error => {
          console.error('Error deleting item:', error);
        })
        .finally(() => {
          // Reset isDeleting after the operation is complete
          setIsDeleting(false);
        });
    }
  }, [isDeleting, watchDetails.id, onItemDeleted]);

  if (isDeleting) {
    return <p>Deleting...</p>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: watchDetails.name || 'Watch Title',
        url: window.location.href
      })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      console.log('Not supported');
    }
  };

 const getImageByWatchName = (name) => {
   const nameToVariableMap = {
     "Code 11.59 by Audemars Piguet": ap_1159,
     "Royal Oak Cactus Jack": cactus_jack,
     "Royal Oak Perpetual Calendar": royaloak_perpetual,
     "Carrera Date": carrera_date,
     "Carrera Chronosprint x Porsche": carrera_porsche,
     "Carrera": carrera,
     "Day-Date 36 Everose Gold Green Dial": daydate_green,
     "Day-Date 36 Gold": daydate_gold,
     "Day-Date 36 White Gold Light Blue Dial": daydate_blue,
     "Patek Philippe Grand Complications 6300G-001": patek_green,
     "Patek Philippe Grand Complications 5531R-001": patek_teal,
     "Patek Philippe Grand Complications 5905R-010": patek_blue,
   };

   const selectedImage = nameToVariableMap[name] || carrera_date; // Use 'carrera' as a default image if not found
   console.log('Name to variable map:', name)
   console.log('Selected image:', selectedImage);
   return selectedImage;
 };

 console.log('Watch Details CartCard.jsx:', watchDetails);

 return (
  <>
    {isDeleting ? (
      <p>This component has been deleted.</p>
    ) : (
      <div className='card1'>
        <CartImage pfp={getImageByWatchName(watchDetails.name)} />
        <div className='watch-details text-xl'>
          <h1>{watchDetails.name || 'Watch Title'}</h1>
          <div className='additionals flex justify-start'>
            {/* <label htmlFor='quantity-select'>Quantity:
              <select id='quantity-select' className='bg-white text-black mr-2'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label> */}
            <button onClick={handleDelete} className='underline mr-2'>Delete</button>
            <button onClick={handleShare} className='underline ml-2'>Share</button>
          </div>
        </div>
        <div className='price flex justify-start'>
          <h1>{`$${watchDetails.price || '0'}`}</h1>
        </div>
      </div>
    )}
  </>
);
}
