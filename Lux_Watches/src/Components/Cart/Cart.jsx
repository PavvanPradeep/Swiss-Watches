import React, { useState } from 'react'
import './Cart.css'
import CartCard from './CartCard'

export default function Cart() {
    const [cartItems, setCartItems] = useState([1, 2, 3]);
    const [showMessage, setShowMessage] = useState(false);
  
    const removeAllItems = () => {
      const confirmed = window.confirm("Are you sure you want to remove all items?")
      if(confirmed){
        setCartItems([]);
        setShowMessage(true);
      }
    }
  
    const handleItemDeleted = () => {
      setShowMessage(true);
    }

  const cartStyle = {
    height: showMessage ? '80vh' : 'auto',
    minHeight: '80vh',
    maxHeight: 'auto',
  };

  return (
    <>
      <div className='container'>
        <div className='cart' style={cartStyle}>
          <div className='header'>
            <h1 className='heading text-xxl'>Cart</h1>
            {!showMessage && (
              <button className='remove' onClick={removeAllItems}>
                Remove all
              </button>
            )}
          </div>
            {cartItems.length === 0 ? (
                <p>You have nothing in your cart added yet</p>
            ) : (
                cartItems.map(item => (
                <div className='contents' key={item}>
                    <CartCard onItemDeleted={handleItemDeleted} />
                </div>
                ))
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
          <div className='tax'>
            Sales Tax: 10%
          </div>
          <div className='subtotal'>
            Total: 1/2 a ticket
          </div>
          <button className='order'>Checkout</button>
        </div>
      </div>
    </>
  )
}
