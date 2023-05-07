import React from "react";
import "./aboutUs.css";

export const AboutUs = () => {

  console.log("Abouts again");

  return (
    <div className="about-us">
      <div className="about-us_header">
        <h1>SegurTec</h1>
        <h4>“Seguridad Tecnológica”</h4>
      </div>
      <div className="about-us_body">
        <div className="about-us_left">
          <h1>NUESTRA MISION</h1>
          <h3>
            Fomentar y fortalecer la cultura de seguridad en los hogares,
            comercios, industrias e instituciones, con sistemas y servicios de
            seguridad electrónica integrales certificados por las entidades
            gubernamentales pertinentes y apoyados en nuestro personal altamente
            calificado y profesional.
          </h3>
        </div>
        <div className="about-us_right">
          <h1>NUESTRA VISIÓN</h1>
          <h3>
            Ser una de las empresas no estatal, líderes en innovación de
            sistemas y servicios integrales en seguridad y automatización a
            nivel nacional, así como introducir el uso de energías renovables y
            la actualización de sistemas de infraestructura de redes de datos y
            comunicaciones dentro de nuestra cartera de negocios. Venta de
            equipo, partes y piezas electrónicos y de telecomunicaciones, así
            como las reparaciones integrales de ordenadores y equipos
            periféricos
          </h3>
        </div>
      </div>
    </div>
  );
};
