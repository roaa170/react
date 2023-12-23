import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails(){
    let {id} = useParams()
    const [products , setProduct] =useState([])
    useEffect(()=>{
        // 
         fetch(`http://localhost:9000/products/${id}`)
         .then(res=>res.json())
         .then((data)=>{console.log(data)
         setProduct(data)
         })
       },[])
       
    return(
        <>

     <h1>{products.title}</h1>
     <p> {products.description}</p>
     <img src={products.image} style={{width:"200px" , height:"200px"}}/>
     <p>{products.price}</p>
     
        </>
    )
}