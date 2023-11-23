import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/product-list" element={<ProductList/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/sig-in" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/" element={<Home/>}/>

</Routes>
</BrowserRouter>
  
   
   </>
  );
}

export default App;
