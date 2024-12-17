import React from 'react'
import "./Header.css"

export default function Header({ 
  products, 
  setProducts, 
  setProductsToDisplay,
 }) {
  const handleSearch = (e) => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtered);
  setProductsToDisplay(filtered);
  };
  
  return (
    <header className="header-cont">
       <p className='logo'>FAKESTORE</p>
       <input 
       type='text' 
       placeholder='search for items' 
       onChange={handleSearch} 
       />
       <div className="button-cont">
        <p className='login'>Login</p>
       </div>
    </header>
  );
}
