import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
        console.log(res.data);
        setProduct(res.data);
    })
    .catch((err) => console.log(err));
    },[]);
  return <div>
    <ProductCard item={product} parent={"details"} />
  </div>;
}
