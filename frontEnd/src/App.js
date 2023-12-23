

import './App.css';


import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from 'react-router-dom';
import Home from 'Components/auth/Home';
import About from 'Components/About/About';

import Login from 'Components/auth/Login';
import SignUp from 'Components/auth/SignUp';
import Dashboard from 'Components/auth/Dashboard';
import Product from 'test/Product';
import Cart from 'test/Cart';
import Appnav from 'test/Navbar';
import Header2 from 'Components/header/Header2';
import CartSlice from 'rtk/slices/Cart-slice';
import Products from 'Components/Dashbord/product-page';
import AddProduct from 'Components/Dashbord/AddProduct';
import ProductDetails from 'Components/Dashbord/ProductDetails';
import Search from 'Components/Dashbord/Cat';
//import Typography from "@mui/material/Typography";


function App() {
 

  const [ colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
       
   <Routes>
      <Route path='/' element={ <Login/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='dashbord' element={<Dashboard/>} />
    
</Routes>

       
 <Routes>
  <Route path='home' element={<Home/>} />
  <Route path='about' element={<About/>}/>
  <Route path='cart' element={<Cart/>}/>
  
 </Routes>
 <Routes>
 <Route path='products' element={<Products/>} />
 <Route path='add' element={<AddProduct/>} />
 
 </Routes>
 <Routes>
  <Route path='products/:id' element={<ProductDetails/>} />
  <Route path='products/cat' element={<Search/>} />
  
 </Routes>

 
  

    
  
 </ColorModeContext.Provider>
   

  );
}

export default App;
 /*
          <Routes>
      <Route path='/' element={ <Login/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='dashbord' element={<Dashboard/>} />
    
</Routes>

       
 <Routes>
  <Route path='home' element={<Home/>} />
  <Route path='about' element={<About/>}/>
 </Routes>
 
 
 
  <Header2/>
          <Appnav/>
          <Routes>
    <Route path="/" element ={<Home/>}/>

    <Route path="product" element ={<Product/>}/>
    <Route path="cart" element ={<Cart/>}/>
   </Routes>

 */