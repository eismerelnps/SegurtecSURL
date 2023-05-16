import React from "react";

import services from "../../helpers/services";

import "./services.css";
import 'animate.css';


export const Services = () => {
  console.log("Services");



  return (
    <>
      <div className="services-header-container container-fluid-xl  stiky-top-0">
        <section className="container-fluid p-4 services-header bg-danger" key={'header'}>
          <div className="services-overlay">
            <h1 className="services-title text-light ">SERVICIOS</h1>
          </div>

          <div className="services-content">
            <h2 className="services-subtitle text-light ">Servicios que ofrecemos</h2>
          </div>
        </section>
      </div>

      <div className="row bg-light justify-content-center">
        {services.map(({image, caption, description}) => (
          <section className="services-section text-center rounded  col-10 col-xl-5 p-5 m-3 animate__bounce ">
            <div className="services-item ">
              <div className="services-item-link mb-4 justify-content-center">
              <i class={`${image} text-center`} aria-hidden="true"></i>
                <h1 className="text-danger h1">{caption}</h1>
                <p className="text-secondary h4">{description}</p>
              </div>
              <button className="btn btn-outline-danger services-btn">VER DETALLES</button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
