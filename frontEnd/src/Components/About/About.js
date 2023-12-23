import { Outlet } from "react-router-dom";
import Header1 from "../header/Header1";
import Header2 from "../header/Header2";
import Header3 from "../header/Header3";
import "./About.css"
export default function About(){

    return(
        <>
        <Header1/>
        <Header2/>
         <Header3/>
       
        <h1>About </h1>
        <section className="about my-5 overflow-hidden">
        <div className="container">
          <div className="row py-md-5 py-3 align-items-center m-0">
            {/* <div className="row m-0">
             
            </div> */}
            <div className="row flex-sm-column-reverse flex-md-row box-imgre m-0 align-items-center">
              <div className="col-sm-12 col-md-6">
                <div className="heading mx-3 ">
                  <p className="fs-2 fw-bold main-hed text-light">About Us </p>
                  {/* <p className="fs-2 fw-bold main-hed text-dark">
                    للمقــــــــــــــــــــاولات العامة
                  </p> */}
                </div>
                <p className="text-justify p-descr mx-sm-0 mx-md-3 text-light ">
                  lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
                  loremlorem lorem lorem lorem lorem lorem loremlorem lorem
                  lorem lorem lorem lorem loremlorem lorem lorem
                </p>
                <button className="btn btn-info w-100">Read More</button>
              </div>
              <div className="col-sm-12 col-md-6 imge-box">
                <div className="d-flex justify-content-center ">
                  <img
                    src="/imgs/png-2629072_640.png"
                    alt="man"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-sm-12  col-md-6 "></div> */}
          </div>
        </div>
      </section>
  
        <Outlet/>
        </>
    )
    }
    