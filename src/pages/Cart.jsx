import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom';

export default function Cart({ cart }) {
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(()=>{
    setCartTotal(
      cart.reduce((total, currItem) => total + currItem.price * currItem.quantity,
       0
      )
    );
  }, [cart])
  return (
    <div>
    {cart.map((item) => (
        <div key={item?.id} className='cart-item-row'>
            <img src={item?.image} alt={item?.title} />
            <p>{item?.title}</p>
            <p>Price:&nbsp;${item?.price.toFixed(2)}</p>
            <p>Qty:&nbsp;{item?.quantity}</p>
            <p>Total:&nbsp;${(item?.quantity * item?.price).toFixed(2)}</p>
            <button>Remove item</button>
        </div>
    ))}
    <p className='cart-total'>Cart Total:&nbsp;${cartTotal.toFixed(2)}</p>    
    </div>
  );
}
