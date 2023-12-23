import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Appnav(){
    return (
        <>
        
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">cart app</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/product">product</Link>
            <Link to="/cart">cart</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}