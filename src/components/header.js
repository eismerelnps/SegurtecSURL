import React from "react";
import slides from "../helpers/getPhotos";





export const Header = () => {
  return (
    <div className="header">
      <img 
      className="company-img" 
      src={ slides[4] } 
      alt="Company Logo" 
      />
    </div>
  );
};
