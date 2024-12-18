import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import "./Header.css"

export default function Header({ 
  products, 
  setProducts, 
  setProductsToDisplay,
 }) {
  const location = useLocation();

  const handleSearch = (e) => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtered);
  setProductsToDisplay(filtered);
  };
  
  return (
    <header className="header-cont">
       <Link to="/" className='logo'>
       FAKESTORE
       </Link>

       {location.pathname === "/" ? (
        <input 
       type='text' 
       placeholder="Search for items" 
       onChange={handleSearch} 
       />
   ) : (
   <Link to="/" className='login'>Search for Items</Link>
 )}
       <div className="button-cont">
        <p className='login'>Login</p>
       </div>
    </header>
  );
}
