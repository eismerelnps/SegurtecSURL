import React from "react";
import "./aboutUs.css";

export const AboutUs = () => {

  console.log("Abouts again");

  return (

    <div className="about-us bg-light text-center align-item-center mt-4 mb-4">
      <div className="container-fluid-xl services-header-container stiky-top-0">
        <section className="container-fluid p-4 services-header bg-danger" key={'header'}>
          <div className="services-overlay">
            <h1 className="services-title text-light ">Segurtec</h1>
          </div>

          <div className="services-content">
            <h2 className="services-subtitle text-light ">Acerca de nosotros</h2>
          </div>
        </section>
      </div>

      <div className="row  justify-content-center">
        <section className="about-section text-center rounded  col-10 col-xl-5 p-5 m-3 animate__bounce ">
          <h1 className=" text-danger h1 p-5 m-3 about-title">NUESTRA MISION</h1>
          <h3 className="text-secondary">
            Fomentar y fortalecer la cultura de seguridad en los hogares,
            comercios, industrias e instituciones, con sistemas y servicios de
            seguridad electrónica integrales certificados por las entidades
            gubernamentales pertinentes y apoyados en nuestro personal altamente
            calificado y profesional.
          </h3>
        </section>






        <section className="about-section text-center rounded  col-10 col-xl-5 p-5 m-3 animate__bounce ">
          <h1 className=" text-danger h1 p-5 m-3 about-title">NUESTRA VISION</h1>
          <h3 className="text-secondary">
          Ser una de las empresas no estatal, líderes en innovación de
            sistemas y servicios integrales en seguridad y automatización a
            nivel nacional, así como introducir el uso de energías renovables y
            la actualización de sistemas de infraestructura de redes de datos y
            comunicaciones dentro de nuestra cartera de negocios. Venta de
            equipo, partes y piezas electrónicos y de telecomunicaciones, así
            como las reparaciones integrales de ordenadores y equipos
            periféricos
          </h3>
        </section>
      </div>
    </div>
  );
};
