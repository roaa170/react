import Rating from "Components/products/rating/Rating";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { addToCart } from "rtk/slices/Cart-slice";
import { fetchProducts } from "rtk/slices/products-slices";
import './product.css'
export default function Product(){
    
    const dipatch = useDispatch()
    const product = useSelector((state)=>state.products)
    console.log(product);
    useEffect(
        ()=>{
            dipatch(fetchProducts())
        }
        ,[])
return(
    <>
    
    <h1
    style={{
      backgroundColor:"#80808091",
      textAlign:"center",
      padding:"10px",
      borderRadius:"20px",
      margin:"10px"
    }}
    > our products</h1>
    <Container
    style={{backgroundColor:"rgb(210 215 223)"}}
    >
       <Row>
        {product.map((product)=>{
        return(

         <Col key={product.id} >
            <Card style={{ width: '18rem', marginBottom:"5px" }}>
              <Card.Img variant="top" src={product.image} style={{width:"100px" , height:"100px"}} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  {product.price} $
                <div>
                  <Rating/>
                </div>
                </Card.Text>
                <Button variant="primary" style={{width:"60%" } } onClick={()=>dipatch(addToCart(product))}>Add to card</Button>
              </Card.Body>
            </Card>
         </Col>
        )
        })}
       </Row>
    </Container>
   
   
    </>
)


}