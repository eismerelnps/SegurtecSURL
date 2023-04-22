import React from "react";
import Slideshow from "./slideshow";
import slides from "../helpers/getPhotos";

export const Aside = () => {
  return (
    <div class="aside">
      <div class="card">
        <h2>Ofertas de la semana</h2>
        < Slideshow Slides={slides} />
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div class="card">
        <h3>Últimos productos</h3>
        < Slideshow Slides={slides} />
        <div class="fakeimg">
          <p>Image</p>
        </div>
        <div class="fakeimg">
          <p>Image</p>
        </div>
        <div class="fakeimg">
          <p>Image</p>
        </div>
      </div>
      <div class="card">
        <h3>Siguenos</h3>
        <p>Suministro 🛒, Reparación 🚑, Mantenimientos, sistemas de seguridad 📹🚨, equipos de oficina 🖨️🖥️⌨️🖱️💻, redes de datos , entre otros 👍. </p>
      </div>
    </div>
  );
};
