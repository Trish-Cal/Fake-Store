import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import axios from 'axios'

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios("https://fakestoreapi.com/products")
    .then((res) => {
        console.log(res.data);
        setProducts(res.data);
    })
    .catch((err) => console.log(err));
    }, []);
  return ( 
  <div>
    <ProductList products={products}/>
  </div>
  );
}
