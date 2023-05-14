import React from "react";
import { Offers } from "../statics/offers";
import Slides from "../../helpers/Slides";
import { MyModalComponent } from "../modal/modal";
import { Services } from "../services/Services";
import { AboutUs } from "../aboutUs/AboutUs";
import { Product } from "../products/product";
import  Slideshow  from "../SlideShow/Slideshow";
import Products from "../../helpers/Products";

export const Body = () => {
  console.log("Body again");

  const SLIDES= ({
    slides: Products,
    interval: 6000,
    transition: "opacity 1s ease-in-out",
    captionPosition: "bottom",
    width: "auto",
    height: "350px",
    alt: Products.caption,
    onError: () => {console.log("Error")},
  })
 return (
  
    <div className=" mt-xl-5">
      <MyModalComponent />
      <div className="card1">
        <Slideshow {...SLIDES} />
        <Product />
        <Services />
        <AboutUs />
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
