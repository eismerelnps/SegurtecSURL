import React from "react";

import "./navbar.css";
import items from "../../../helpers/items";
import { ListItem } from "./ListItem";

export const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};
