import React, { useState } from "react";

import "./navbar.css";
import items from "../../../helpers/items";
import { ListItem } from "./ListItem";


//import { Modal } from "bootstrap";
import { Modal2 } from "../../modal/modal2";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }


  console.log("TopNav again");

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav d-flex container-fluid justify-content-center">
          {items.map(({ linkTo, caption }, i) => (
            <ListItem 
            key={i}
            linkto={linkTo} 
            caption={caption} />
          ))}
          <button  activeclassname="active"  className="nav-link text-center text-danger border rounded" onClick={openModal}>Contacto</button>
          <Modal2 isOpen={isModalOpen} closeModal={closeModal}/>
        </ul>
      </div>
    </nav>
  );
};
