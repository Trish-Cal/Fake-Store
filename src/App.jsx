import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
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
   <Home 
     setProducts={setProducts} 
     products={products}
     productsToDisplay={productsToDisplay}
     setProductsToDisplay={setProductsToDisplay}
   />
  </>
 );
}

export default App
