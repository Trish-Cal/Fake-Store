import React from 'react'
import "./Cart.css"

export default function Checkout() {
  return (
    <div className='checkout-container'>
      <form className='checkout-form'>
        <div className='payment-info'>
        <h2>Shipping Information</h2>
        <label for="fname">First Name:</label>
        <input type="text"  placeholder="First Name"  />
        <input type="text"  placeholder="Last Name"  />
        <input type="text"  placeholder="First Name"  />
        <input type="text"  placeholder="First Name"  />
        
        </div>
        <div className='payment-info'>
        <h2>Payment Information</h2>
        </div>
        


    
      </form>
        
    </div>
  )
}
