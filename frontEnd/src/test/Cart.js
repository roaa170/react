import Header1 from "Components/header/Header1";
import Header2 from "Components/header/Header2";
import Header3 from "Components/header/Header3";
import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart, removeOneFromCart } from "rtk/slices/Cart-slice";

export default function Cart(){
    const cart = useSelector(state=>state.cart)
    const conter = 0
    const dispatch = useDispatch()
    console.log("carts" , cart);
    let total =0
    
    
    return(
        <>
        <Header1/>
        <Header2/>
        <Header3/>
        <h1>cart </h1>
       
        <Button variant="primary" onClick={()=>dispatch(clearCart())} > clear cart </Button>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Img</th>
          <th>title</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {
            cart.map(product=>(
                <tr key={product.id}>
                <td>{conter+1}</td>
                <td> <Image src= {product.image} alt={product.title} style={{width:"100px" , height:"100px"}} />   </td>
                <td>{product.title} </td>
                <td>{product.price} </td>
                
                <td> 
                  <Button variant="light" onClick={()=>dispatch(removeOneFromCart(product))}> -</Button>
                   <span className="qnty"> {product.quantity} </span> 
                  <Button variant="danger"  onClick={()=> dispatch(addToCart(product))}> +</Button>

                   </td>
                   <td>
                  <Button variant="dark"   onClick={()=>dispatch(removeFromCart(product))} > delete </Button>
                   </td>
                  
                   <span style={{display: "none"}}> {total +=product.price*product.quantity}</span> 
              </tr>
            ))
           
        }
       <h5>{total.toFixed(2)}</h5>
        
      </tbody>
    </Table>
        </>
    )
    
    
    }