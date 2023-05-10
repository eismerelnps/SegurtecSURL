import React from "react";
import "./aboutUs.css";

export const AboutUs = () => {

  console.log("Abouts again");

  return (
    <div className="about-us bg-light text-center align-item-center p-5">
      <div className="about-us_header">
        <h1 className="text-center text-danger about-title">SegurTec</h1>
        <h4 className="text-center text-primary-dark">“Seguridad Tecnológica”</h4>
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
