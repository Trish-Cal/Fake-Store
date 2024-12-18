import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom"

import "./App.css"

function App() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(()=>{
    const localToken = localStorage.getItem("token");
    if(localToken) {
      setToken(localToken);
    }
  }, [])
 return  (
 <> 
   <Header 
     products={products} 
     setProducts={setProducts} 
     setProductsToDisplay={setProductsToDisplay} 
     token={token}
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
    <Route path="/login" 
    element={<Login setToken={setToken} token={token} />} 
    />
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
