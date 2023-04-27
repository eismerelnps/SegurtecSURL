import React from "react";
import Slides from "../helpers/Slides";






export const Header = () => {
  return (
    <div className="header">
      <img 
      className="company-img" 
      src={ Slides[4].image } 
      alt="Company Logo" 
      />
    </div>
  );
};
