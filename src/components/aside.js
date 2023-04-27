import React from "react";
import Slideshow from "./slideshow";
import slides from "../helpers/Slides";
import Products from "../helpers/Products";

export const Aside = () => {
  return (
    <div className="aside">
      <div className="card">
        <h2>Ofertas</h2>
        < Slideshow Slides={Products} />
      </div>
      <div className="card">
        <h3>Últimos productos</h3>
        < Slideshow Slides={slides} />
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
