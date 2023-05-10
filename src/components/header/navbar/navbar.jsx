import React from "react";

import "./navbar.css";
import items from "../../../helpers/items";
import { ListItem } from "./ListItem";



export const Navbar = () => {
  console.log("TopNav again");



  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav d-flex col-sm-12">

          {items.map(({ linkTo, caption }) => (
            <ListItem  
            linkto={linkTo}
            caption={caption}
            />
          ))}

        </ul>
      </div>
    </nav>
  );
};