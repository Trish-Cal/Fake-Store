import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Cart.css"


export default function Cart({ cart, setCart }) {
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(()=>{
    setCartTotal(
      cart.reduce(
        (total, currItem) => total + currItem.price * currItem.quantity,
       0
      )
    );
  }, [cart]);

  console.log(cart);

  const handleRemoveItem = (item) => {
    console.log(item);
    const newCart = cart.filter(product=>product.id !== item.id);
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDecrease = (item) => {
    const temp = cartTotal;
    temp[index].quantity = temp[index].quantity + 1;
    setCartTotal(temp);
  }

  return (
    <div>
    {cart.map((item) => (
        <div key={item?.id} className='cart-item-row'>
            <img src={item?.image} alt={item?.title} />
            <p>{item?.title}</p>
            <p>Price:&nbsp;${item?.price.toFixed(2)}</p>
            <p>Qty:&nbsp;{item?.quantity}</p>
            <p>Total:&nbsp;${(item?.quantity * item?.price).toFixed(2)}</p>
            <button onClick={() => handleRemoveItem(item)}>Remove item</button>
        </div>
    ))}
    <p className='cart-total'>Cart Total:&nbsp;${cartTotal.toFixed(2)}</p>   
    

    <Link to="/checkout" className='checkout'>
      Checkout
      </Link>
    </div>
  );
}
