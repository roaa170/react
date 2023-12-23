import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import Header from "Components/header/Headers";

function Products(){
 
const [products , setProduct] =useState([])
  useEffect(()=>{
   // 
    getAll()
  },[])
 
const getAll=()=>{fetch("http://localhost:9000/products")
.then(res=>res.json())
.then((data)=>{console.log(data)
setProduct(data)
})}
  const Deleteproduct=(id)=>{
    swal("deleted successfully");
    fetch(`http://localhost:9000/products/${id}`,
    {
      method:   "DELETE"
    }).then(res=>res.json())
    .then((data)=>{ getAll()
    
    })
  }
    return(


        <>


           <Sidebar/>
            <Header/>
       

           <table className="table table-striped mt-5">
             <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>category</th>
                <th>Operations</th>
                </tr>   
             </thead>
                <tbody>
             {
              products.map((product)=>{
                return(
                <tr>
                    {product.data}
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                      <button className="btn btn-danger btn-sn" onClick={()=>Deleteproduct(product.id)}>Delete</button>
                      <Link to={`/products/${product.id}`} className="btn btn-info btn-sn">View</Link>
                      
                  </td>
                </tr>
                
                
                )})
              }
              </tbody>
            
           </table>
   
        </>

    );
}
export default Products;