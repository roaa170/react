import { useState } from "react";
import {  Link, Outlet,useNavigate } from "react-router-dom";
import axios from "axios"
import { Button, FloatingLabel, Form } from "react-bootstrap";
export default function Login(){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    //console.log(email)
    const navigate = useNavigate()
    axios.defaults.withCredentials= true
    async function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/", {email,password})
        .then(res=>{
        console.log(res)
             navigate('/home')
         
    })
        
        .catch(err=>console.log(err))

    }
    return(
        <>
        
        <div className="outlet">
        <Outlet />
        <div className="login">

<h1>Login</h1>
</div>
</div>
 



      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" 
        onChange={(e) => { setEmail(e.target.value) }}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" 
        onChange={(e) => { setPassword(e.target.value) }} 
        />
        <Button variant="success" type="submit" onClick={submit} > submit</Button>
      </FloatingLabel>
    



<br />
<p>OR</p>
<br />

<Link className="btn btn-primary" to="/signup">Signup Page</Link>
 
        </>
        
    )
    }
    