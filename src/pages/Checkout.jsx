import React from 'react'
import "./Checkout.css"

export default function Checkout() {
  return (
      <form className='checkout-form'>
        <h2>Shipping Information</h2>
        <input type="text"  placeholder="First Name"  />
        <input type="text"  placeholder="Last Name"  />
        <input type="text"  placeholder="Street Address"  />
        <input type="text"  placeholder="Apt#"  />
        <input type="text"  placeholder="City, State Zip"  />
        <h2>Payment Information</h2>
        <input type="text"  placeholder="Cardholder's Name"  />
        <input type="text"  placeholder="Card number"  />
        <input type="text"  placeholder="Expiration "  />
        <input type="text"  placeholder="Security Code"  />
        <button>Submit</button>
      </form>
  )
}
