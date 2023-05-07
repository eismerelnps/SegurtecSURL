import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  console.log("TopNav again");

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink activeclassname="active" to={`index`} className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname="active" to={`about`} className="nav-link">
              Sobre Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              to={`services`}
              className="nav-link"
            >
              Servicios
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeclassname="active"
              to={`contact`}
              className="nav-link"
            >
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
