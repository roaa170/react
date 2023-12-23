
import { t } from "i18next";
import { Link } from "react-router-dom";
import "./header.css"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
export default function Header3(){
  
   

    return (<>
  



<nav className="navbar navbar-expand-lg bg-light nn" >
  <div className="container-fluid hh">
    <Link className="navbar-brand" to="#"> {t("best where to shopping ")}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"   > 
        <li className="nav-item" id="link">
        <Link to={"/home"} id="l" style={{textDecoration:"none" , color:"black", marginRight:"10px"  }}>{t("Home")}</Link>
        </li>
        <li className="nav-item" id="link">
        <Link to={"/about"} style={{textDecoration:"none" , color:"black"  }} id="l">{t("About")}</Link>

        </li>
        <li className="nav-item" >
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t("User Account")}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/cart">{t("orders")}</Link></li>
            <li><Link className="dropdown-item" to="#"> {t("order details")}</Link></li>
           
           
          </ul>
        </li>

        </li>
        <li className="nav-item">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t("Vendor Account")}
          </Link>
          <ul className="dropdown-menu">
            <li>
                 
              
              
              </li>
            <li><Link className="dropdown-item" to="/dashbord">dashbord</Link></li>
           
            <li><Link  className="dropdown-item" to="/order">Products</Link></li>
          </ul>
        </li>

        </li>
        
        
        
        
      </ul>
      
    </div>
  </div>
</nav>







  



    
    
    
    </>)
}