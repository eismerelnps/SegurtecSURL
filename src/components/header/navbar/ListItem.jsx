import React from "react";
import { NavLink } from "react-router-dom";

export const ListItem = ({ linkto, caption }) => {
  return (
    <li 
    className="nav-item border rounded p-2 span-12 m-2"
    >
      <NavLink 
      activeclassname="active" 
      to={ linkto } 
      className="nav-link "
      >
        {caption}
      </NavLink>
    </li>
  );
};
