import React from "react";

import "./services.css";

export const Services = () => {
  return (
    <div>
      <section class="services-header">
        <div class="services-overlay">
          <h1 class="services-title">SERVICIOS</h1>
        </div>
        <div class="services-content">
          <h1>Servicios</h1>
          <h2 class="services-subtitle">Servicios que ofrecemos</h2>
        </div>
      </section>

      <section className="services-section animate__backInLeft">
        <div className="">
          <img src="" alt="" />
          <h1>Subministro de equipos de seguridad</h1>
          <p>
            Subministro, instalación y puesta en marcha de equipos de seguridad.
          </p>
          <button className="services-button">VER DETALLES</button>
        </div>
      </section>

      <section className="services-section ">
        <div className="">
          <img src="" alt="" />
          <h1>Mantenimiento y Soporte </h1>
          <p>
            Brindamos servicios de reparación, mantenimiento, y soporte a equipos de seguridad.
          </p>
          <button className="services-button">VER DETALLES</button>
        </div>
      </section>

      <section className="services-section">
        <div className="">
          <img src="" alt="" />
          <h1>Mantenimiento y Soporte </h1>
          <p>
            Brindamos servicios de reparación, mantenimiento, y soporte a equipos de seguridad.
          </p>
          <button className="services-button">VER DETALLES</button>
        </div>
      </section>
    </div>
  );
};
