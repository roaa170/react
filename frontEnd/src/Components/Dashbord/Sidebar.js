import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
 
function Sidebar(){
  const navigate = useNavigate()
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Launch
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
        <ul className="list-unstyled">
               <li>
                  <Link to={'/Products'} >get All Prodects</Link>
               </li>
               <li>
                  <a href="g">get All Categories</a>
               </li>
           </ul>
      
      <Button variant="success" style={{width:"150px" ,padding:"2px"}}
           onClick={()=>navigate("/add")}>
            Add new product
            </Button>
      </Offcanvas.Body>
    </Offcanvas>
  </>
);
      
}
export default Sidebar;