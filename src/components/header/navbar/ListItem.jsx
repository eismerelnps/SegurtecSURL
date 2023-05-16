import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export const ListItem = ({ linkto, caption }) => {
  return (
    <li 
    className="nav-item  span-lg-12 span-xl-3 mt-3 mx-lg-2" 
    >
      <NavLink 
      activeclassname="active" 
      to={ linkto } 
      className="nav-link text-center text-danger border rounded"
      >
        {caption}
      </NavLink>
    </li>
  );
};
