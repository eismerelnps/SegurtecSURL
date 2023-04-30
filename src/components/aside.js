import React from "react";
import Slideshow from "./SlideShow/Slideshow";
import slides from "../helpers/Slides";
import Products from "../helpers/Products";
import { AboutUs } from "./aboutUs/AboutUs";

export const Aside = () => {


  const Product= ({
    slides: Products,
    interval: 3000,
    transition: "opacity 1s ease-in-out",
    captionPosition: "bottom",
    width: "100%",
    height: "500px",
    alt: Products.caption,
    onError: () => {console.log("Error")},
  })

  return (
    <div className="aside">
      <div className="card card-offer">
        <h2>Ofertas</h2>

        
        < Slideshow {...Product} />


      </div>
      <div className="card">
        <h3>Últimos productos</h3>
       
        <div className="fakeimg">
          <p>Image</p>
        </div>
        <div className="fakeimg">
          <p>Image</p>
        </div>
        <div className="fakeimg">
          <p>Image</p>
        </div>
      </div>
      <div className="card">
        <h3>Siguenos</h3>
        <p>Suministro 🛒, Reparación 🚑, Mantenimientos, sistemas de seguridad 📹🚨, equipos de oficina 🖨️🖥️⌨️🖱️💻, redes de datos , entre otros 👍. </p>
      </div>
    </div>
  );
};
