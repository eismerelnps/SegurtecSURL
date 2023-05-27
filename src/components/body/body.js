import React from "react";
import { Offers } from "../statics/offers";
import Slides from "../../helpers/Slides";
import { MyModalComponent } from "../modal/modal";
import { Services } from "../services/Services";
import { AboutUs } from "../aboutUs/AboutUs";

// import Slideshow from "../SlideShow/Slideshow";
// import Products from "../../helpers/Products";
import { useFetch } from "../../hooks/useFetch";


export const Body = () => {
  console.log("Body again");

  
 const handdleFetch = (() => {
 

 })



 return (
  
    <div className=" mt-xl-5">
      <button onClick={handdleFetch} className="btn "> FETCH </button>
      <MyModalComponent />

      <div className="card card1 text-center mx-2 my-0">
      
       
       
      </div>

      <div className="card card2">
        
      <AboutUs />
        
      </div>

      <div className="card card3">
        
        <Services />
       
        
      </div>

      <div className="card">
        <h2>Articulo 2</h2>
        <h5>Titulo descripcion, ABR 21, 2023</h5>
        <img src={Slides[5].image} alt={Slides[5].caption} />

        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
      <div className="card">
        <Offers />
      </div>
    </div>
  );
};
