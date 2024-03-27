import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import CartCard from './CartCard';

export default function Cart() {
  const [watches, setWatches] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [isAllDeleted, setAllDeleted] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCartAndWatches = async () => {
      try {
        const cartResponse = await axios.get(import.meta.env.VITE_BACKEND_URL+"/auth/cart/");  //get cart information
        const watchesResponse = await axios.get(import.meta.env.VITE_BACKEND_URL+"/auth/watches/");  //get watch information


        const watchIds = cartResponse.data.map(item => item.watch_id).filter(id => typeof id === 'number');  //fetch watch ids
        const watchDetails = watchIds.map(watchId => watchesResponse.data.find(watch => watch.id === watchId));   //fetch watch details
        console.log("Cart response",cartResponse.data);
        const cartFinal = cartResponse.data;
        setFinalPrice(cartFinal[0].final_price);
        console.log("Final price",cartFinal[0].final_price);
        setWatches(watchDetails);
        setCartItems(cartResponse.data);
      } catch (error) {
        // navigate('/404');
      }
    };
    fetchCartAndWatches();
  }, [navigate]);
  
  
  const removeAllItems = () => {
    if (window.confirm("Are you sure you want to remove all items?")) {
      setAllDeleted(true);
    }
  };

  // Perform delete operation when 
  useEffect(() => {
    if(isAllDeleted){
      axios.delete(`http://127.0.0.1:8000/auth/watches/delete_all_items_in_cart/`)
        .then(response => {
          console.log('All items deleted:', response.data);
          setCartItems([]);
          setAllDeleted(false);
        })
        .catch(error => {
          console.error('Error deleting item:', error);
        })
        .finally(() => {
          // Reset isDeleting after the operation is complete
          setAllDeleted(false);
        });
    }
  },[isAllDeleted])

  // Update final price immediately when cart items change 
  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      const watch = watches.find(watch => watch.id === item.watch_id);
      return total + (watch.price * item.quantity);
    }, 0);
    setFinalPrice(total);
  }, [cartItems, watches]);
  


  // Fetch watch details by id
  const findWatchDetailsById = (watchId) => {
    return watches.find(watch => watch.id === watchId) || {};
  };

  return (
    <>
      <div className='container mb-20 flex flex-col lg:flex-row'>
        <div className='cart lg:w-3/5'>
          <div className='header'>
            <h1 className='heading text-xxl'>Cart</h1>
            <button className='remove' onClick={removeAllItems}>
              Remove all
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>You have nothing in your cart added yet</p>
          ) : (
            cartItems.map((item, index) => {
              const watchId = item.watch_id;
              const cartWatchDetails = findWatchDetailsById(watchId);
              console.log("Cart details",cartWatchDetails);
              return (
                <div className='contents' key={item.id}>
                  <CartCard
                    watchDetails={cartWatchDetails}
                    onItemDeleted={(deletedItemId) => {
                      setCartItems(prevItems => prevItems.filter(item => item.watch_id !== deletedItemId));
                    }}
                    
                  />
                </div>
              );
            })
          )}
          <button className='continue'>
            <a href='/collections'>Continue Shopping</a>
          </button>
        </div>

        <div className='summary mt-10 lg:mt-0 lg:w-2/5'>
          <div className='header'>
            <h1 className='heading text-xxl'>Order Summary</h1>
          </div>
          <div className='summary-contents flex flex-col justify-end mt-8'>
            <div className='details'>
              Shipping Free
            </div>
            <div className='subtotal mb-2'>
              Total: {`$${finalPrice}`}
            </div>
            <button className='order'>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
