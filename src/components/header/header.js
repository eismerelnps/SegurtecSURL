import React from "react";
import Slides from "../../helpers/Slides";

import './header.css';
import { Navbar } from "./navbar";




export const Header = () => {

  console.log("Header again");

  return (
    <div>

    
    <header className="header">
       <img 
      className="company-img" 
      src={ `.${Slides[0].image}` } 
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
          NO DEJES QUE <b className="bold-text">LA INSEGURIDAD TE PREOCUPE</b>
        </h3>
        <h3 className="header-title">
          <b className="bold-text">DEJANOS PROTEGER</b>  LO QUE MÁS TE IMPORTA
        </h3>
        <p className="header-description">
        Proteja su hogar o negocio con nuestros servicios ¡Contáctenos hoy mismo!
        </p>
       
      </div>
      
    </div>
    <div className="navbar-container">
    <Navbar />
  </div>
  </header>
  
 
  </div>
  );
};
