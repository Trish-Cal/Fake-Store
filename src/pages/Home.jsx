import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios'
import "./Home.css"

export default function Home({
  products, 
  setProducts, 
  productsToDisplay, 
  setProductsToDisplay, 
}) {
    useEffect(() => {
    axios("https://fakestoreapi.com/products")
    .then((res) => {
        setProducts(res.data);
        setProductsToDisplay(res.data);
    })
    .catch((err) => console.log(err));
    }, []);

    const handleCategoryClick = (category) => {
      if(category === "") {
        setProductsToDisplay(products);
      } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category
      );
      console.log(filtered);
      setProductsToDisplay(filtered);
    }
};
    
  return ( 
  <div>
    <div className='filter-menu'>
      <span>Filter by Category:</span>
      <div className='filter-buttons'>
        <p 
        onClick={() => {
          handleCategoryClick("men's clothing");
          }}
          >Men's Clothing</p>
        <p 
        onClick={() => {
          handleCategoryClick("women's clothing");
          }}
          >Women's Clothing</p>
        <p 
        onClick={() => {
          handleCategoryClick("electronics");
          }}
          >Electronics</p>
        <p 
        onClick={() => {
          handleCategoryClick("jewelery");
          }}
          >Jewelry</p>
        <p 
        onClick={() => {
          handleCategoryClick("");
          }}
          >Reset</p>
      </div>
    </div>
    <ProductList products={productsToDisplay}/>
  </div>
  );
}
