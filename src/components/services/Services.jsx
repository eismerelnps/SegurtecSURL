import React from "react";

import "./services.css";
import services from "../../helpers/services";

export const Services = () => {
console.log("Services");

const {caption, description} = services;


  return (
    <div className="container-fluid-xl ">
      <section className="container-fluid p-4 services-header">
        <div className="services-overlay">
          <h1 className="services-title text-light">SERVICIOS</h1>
        </div>
        <div className="services-content">
          <h2 className="services-subtitle ">Servicios que ofrecemos</h2>
        </div>
      </section>


{services.map(services => 
  <div className="row bg-light align-center services-body">
        <section className="col-xl-2 m-3 p-3 border rounded services-section ">
          <div className="services-item">
            <div className="services-item-link">
              <img src="" alt="" />
              <h1 className="text-danger mb-4 h1">{caption} </h1>
              <p className="text-secondary h4">
                  {services.description}
              </p>
            </div>
            <button className="btn btn-outline-dark ">VER DETALLES</button>
          </div>
        </section>
      </div>
  )}
      
    </div>
  );
};
