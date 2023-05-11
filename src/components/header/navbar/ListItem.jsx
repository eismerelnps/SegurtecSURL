import React from "react";
import { NavLink } from "react-router-dom";

export const ListItem = ({ linkto, caption }) => {
  return (
    <li 
    className="nav-item border rounded p-2 span-lg-12 span-xl-3 mt-sm-3 mx-xl-2"
    >
      <NavLink 
      activeclassname="active" 
      to={ linkto } 
      className="nav-link text-center text-danger"
      >
        {caption}
      </NavLink>
    </li>
  );
};
