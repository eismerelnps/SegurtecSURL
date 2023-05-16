import React from "react";
import Products from "../../helpers/Products";
import Slideshow from "../SlideShow/Slideshow";
import { FilterableProductTable } from "../products/FilterableProductTable";


export const Aside = () => {


  console.log("Aside again");

  const Product= ({
    slides: Products,
    interval: 3000,
    transition: "opacity 1s ease-in-out",
    captionPosition: "bottom",
    width: "auto",
    height: "350px",
    alt: Products.caption,
    onError: () => {console.log("Error")},
  })

  return (
    <div >
      <div className="card card-offer mt-4">
        <h2 className="text-center text-danger">Ofertas</h2>
        < Slideshow {...Product} />
      </div>

      <div className="card">
        
      </div>

      <div className="card">
        <h3>Últimos productos</h3>
        <FilterableProductTable products={Products} />
        <products />
      </div>
      <div className="card">
        <h3>Siguenos</h3>
        <p>Suministro 🛒, Reparación 🚑, Mantenimientos, sistemas de seguridad 📹🚨, equipos de oficina 🖨️🖥️⌨️🖱️💻, redes de datos , entre otros 👍. </p>
      </div>
    </div>
  );
};
