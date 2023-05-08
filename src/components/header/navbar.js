import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import { Modal } from "bootstrap";
import { MyModalComponent } from "../modal/modal";

export const Navbar = () => {
  console.log("TopNav again");

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav d-flex">
          <li className="nav-item border rounded p-2 span-3 m-2">
            <NavLink
              activeclassname="active"
              to={`index`}
              className="nav-link "
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item border rounded p-2 span-3 m-2">
            <NavLink
              activeclassname="active"
              to={`about`}
              className="nav-link "
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li className="nav-item border rounded p-2 span-3 m-2">
            <NavLink
              activeclassname="active"
              to={`services`}
              className="nav-link "
            >
              Servicios
            </NavLink>
          </li>

          <li
            type="button "
            className="nav-item nav-link border rounded p-2 span-3 m-2"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Contactanos
          </li>
        </ul>
      </div>
    </nav>
  );
};
