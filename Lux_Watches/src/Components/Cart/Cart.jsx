import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import CartCard from './CartCard';

export default function Cart() {
  const [watches, setWatches] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCartAndWatches = async () => {
      try {
        const cartResponse = await axios.get('http://127.0.0.1:8000/auth/cart/');
        const watchesResponse = await axios.get('http://127.0.0.1:8000/auth/watches/');
        const watchIds = cartResponse.data.map(item => item.watch_id).filter(id => typeof id === 'number');
        const watchDetails = watchIds.map(watchId => watchesResponse.data.find(watch => watch.id === watchId));
        console.log("Cart response",cartResponse.data);
        const cartFinal = cartResponse.data;
        setFinalPrice(cartFinal[0].final_price); // Add this line
        console.log("Final price",cartFinal[0].final_price);
        setWatches(watchDetails);
        setCartItems(cartResponse.data);
      } catch (error) {
        // navigate('/404');
      }
    };
    fetchCartAndWatches();
  }, [navigate]);

  // useEffect(() => {
  //   const total = cartItems.reduce((total, item) => total + item.total_price, 0);
  //   console.log(cartItems);
  //   setTotalPrice(total);
  //  }, [cartItems]);


  const removeAllItems = () => {
    if (window.confirm("Are you sure you want to remove all items?")) {
      setCartItems([]);
    }
  };

  const findWatchDetailsById = (watchId) => {
    return watches.find(watch => watch.id === watchId) || {};
  };

  return (
    <>
      <div className='container'>
        <div className='cart'>
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
                  />
                </div>
              );
            })
          )}
          <button className='continue'>
            <a href='/collections'>Continue Shopping</a>
          </button>
        </div>

        <div className='summary mt-10'>
          <div className='header'>
            <h1 className='heading text-xxl'>Order Summary</h1>
          </div>
          <div className='details'>
            Shipping Free
          </div>
          {/* <div className='tax'>
            Sales Tax: 10%
          </div> */}
          <div className='subtotal'>
            Total: {`$${finalPrice}`}
          </div>
          <button className='order'>Checkout</button>
        </div>
      </div>
    </>
  );
}
