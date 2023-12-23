
 
import Header1 from "Components/header/Header1";
import Header2 from "Components/header/Header2";
import Header3 from "Components/header/Header3";
//import { Outlet } from "react-router-dom";
import MyPage from "Components/MyPage";

import Footer from '../footer/Footer';
import Appnav from "test/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "test/Product";
import Cart from "test/Cart";
 /* header1 ,2 ,3 , mypage , footer*/

 
export default function Home(){

 
 
    return(
        <>
       
       <Header1/>
       <Header2/>
       <Header3/>
       <MyPage/>
       <Product/>
       <Footer/>
   



     
     
      
        </>
    )
    }
    