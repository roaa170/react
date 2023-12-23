import Rating from "Components/products/rating/Rating"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function Search(){
    let cat =  "jewelery"
const [category , setCategory] =useState([])

useEffect(()=>{
    // 
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>{console.log(json)
            setCategory(json)
            console.log("cats" , category);
            })
}
     
   ,[])


    return(
        <>
        <h1> </h1>
        {
            category.map(e=>{
                return(
                    <>
                    <h5>{e.title}</h5>
                    <img src={e.image} style={{width:"100px"}} />
                    <p>{e.description}</p>
                    <h1>{e.price}</h1>
                    <br></br>
                    <hr/>

                    </>
                )
            })
        }
        </>)
    
}