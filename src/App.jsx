import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom"

import "./App.css"

function App() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
 return  (
 <> 
   <Header 
     products={products} 
     setProducts={setProducts} 
     setProductsToDisplay={setProductsToDisplay} 
   />
   <Routes>
    <Route 
    path="/"
    element={
        <Home 
         setProducts={setProducts} 
         products={products}
         productsToDisplay={productsToDisplay}
         setProductsToDisplay={setProductsToDisplay}
       />
      }
    />
    <Route path="/product/details/:id" element={<Details />} />
    <Route 
    path="*" 
    element={
      <Home 
      setProducts={setProducts} 
      products={products}
      productsToDisplay={productsToDisplay}
      setProductsToDisplay={setProductsToDisplay}
    />
    }
    />
   </Routes>
  </>
 );
}

export default App
