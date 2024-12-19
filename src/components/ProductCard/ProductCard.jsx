import React from 'react'
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ item, parent, token }) {
  return (
    <Link to={`/product/details/${item?.id}`} className='product-card'> 
        <h2>{item?.title}</h2> 
        {parent === "details" ? ( 
          <img src={item?.image} alt={item?.title} height={"500px"} />
        ) : ( 
        <img src={item?.image} alt={item?.title} />
        )}
        <p>{item?.price.toFixed(2)}</p>
        {parent==="details" && <p>{item?.description}</p>}
        {parent === "details" && token ? <button>Add to Cart</button> : <Link to='/login'>Login to Add to Cart</Link>}
    </Link>
  )
}
