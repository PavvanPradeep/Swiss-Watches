import React, { useState } from 'react'
import './Cart.css'
import CartCard from './CartCard'

export default function Cart() {
  const [cartItems, setCartItems] = useState([1, 2, 3]);
  const [showMessage, setShowMessage] = useState(false);

  const removeAllItems = () => {
    setCartItems([]);
    setShowMessage(true);
  }

  const cartStyle = {
    height: showMessage ? '100vh' : 'auto',
    maxHeight: '100vh',
  };

  return (
    <>
        <div className='container'>
            <div className='cart' style={cartStyle}>
                <div className='header'>
                    <h3 className='heading'>Cart</h3>

                { !showMessage &&(
                    <button className='remove' onClick={removeAllItems}>
                        Remove all
                    </button>
                )            
                }
                </div>
                { showMessage ? (
                    <p>You have nothing in your cart added yet</p>
                ) : (
                    cartItems.map(item => (
                    <div className='contents' key={item}>
                        <CartCard/>
                    </div>
                    ))
                )}
                <button>
                    <a href='/collections'>Continue Shopping</a>
                </button>
            </div>
        </div>
    </>
  )
}
