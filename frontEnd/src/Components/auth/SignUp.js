import axios from "axios";
import { useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import swal from 'sweetalert';

export default function SignUp(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    //const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/signup", {email,password})
        .then(res=>{
            swal(res.data);
        console.log(res)
        // @ts-ignore

      //  navigate('/')
    })
        
        .catch(err=>console.log(err))

    }

return(
     
    <div className="login">

    <h1>Signup</h1>

    <>
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
      </FloatingLabel>
      <Button variant="success" type="submit" onClick={handleSubmit} > submit</Button>
    </>


    <br />
    <p>OR</p>
    <br />

    <Link className="btn btn-primary" to="/">Login Page</Link>

</div>
)
}
