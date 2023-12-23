import Header from "Components/header/Headers";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Sidebar from "./Sidebar";
import axios from "axios";


export default function AddProduct(){
const[title,setTitle]=useState()
const[price,setPrice]=useState()
const[description,setDescription]=useState()
const[img,setImg]=useState()
const[category,setCategory]=useState()

const formSubmit = (e)=>{
    e.preventDefault()
    console.log(title);

    axios.post("http://localhost:9000/products",{
        title,
        price,
        description,
        image:img,
        category
    }).then(e=>console.log(e))
    
}

return (<>
    
        <Sidebar/>
       
    <h1> Add new product</h1>
    <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label className="form-label"/>title
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=>setTitle(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label"/>description
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setDescription(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label"/>price
    <input type="text" className="form-control" id="exampleInputPassword2"
    onChange={(e)=>setPrice(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label"/>image
    <input type="text" className="form-control" id="exampleInputPassword3"
    onChange={(e)=>setImg(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label"/>Category
    <input type="text" className="form-control" id="exampleInputPassword3"
    
    />
  </div>
  <select className="form-select" aria-label="Default select example"
  onSelectCapture={(e)=>setCategory(e.target.value)}
  onChange={(e)=>setCategory(e.target.value)}>
  <option selected> category</option>
  <option value="men">men</option>
  <option value="women">women</option>
  <option value="electronics">electronics</option>
</select>

 <Button type="submit" onClick={()=>formSubmit}>Save </Button>
</form>
       
      
   
    
    </>)
}