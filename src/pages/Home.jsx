import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios'

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
  return ( 
  <div>
    <ProductList products={productsToDisplay}/>
  </div>
  );
}
