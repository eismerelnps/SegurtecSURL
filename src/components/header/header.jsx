import React from "react";
import Slides from "../../helpers/Slides";

import "./header.css";

import { Sidebar } from "./sidebar/sidebar";

// import { useState, useEffect, useCallback } from "react";
import { useScreen } from "../../hooks/useScreen";
import { Navbar } from "./navbar/navbar";

export const Header = () => {
  const isMobile = useScreen();

  function makeX(x) {
    x.className("change");
  }

  console.log(JSON.stringify(isMobile));

  console.log("Header again");

  return (
    <div>
      <header className="header">
        <img
          className="company-img"
          src={`${Slides[1].image}`}
          alt="Company Logo"
        />

        <div className="header-overlay">
          <div className="header-content">
            <div className="header-texts">
              <span className="header-text header-text-1">Suministro</span>
              <span className="header-text header-text-2">Instalación</span>
              <span className="header-text header-text-3">Mantenimiento</span>
            </div>
            <h3 className="header-subtitle">
              NO DEJES QUE{" "}
              <b className="bold-text">LA INSEGURIDAD TE PREOCUPE</b>
            </h3>
            <h3 className="header-title">
              <b className="bold-text">DEJANOS PROTEGER</b> LO QUE MÁS TE
              IMPORTA
            </h3>
            <p className="header-description">
              Proteja su hogar o negocio con nuestros servicios ¡Contáctenos hoy
              mismo!
            </p>
          </div>
        </div>

        {isMobile ? (
          <>
          <Sidebar />
            <div className="row navbar-container">
              
              <div className="col text-end">
                <button
                  className="fa fa-bars btn text-danger"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#demo"
                ></button>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-container">
            <Navbar />
          </div>
          
        )}
      </header>
    </div>
  );
};
