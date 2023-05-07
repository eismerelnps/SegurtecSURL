import React from "react";
import Slides from "../../helpers/Slides";

export const ImageTextBlock = ({ url, title, description }) => {
  
  console.log("ImageTextBlok again");
  
  return (
    <div className="image-text-block-container">
      <img src={Slides[5].image} alt={ title } />
      <div className="image-text-block">
        <h2>{ description }</h2>
        <h4>{ title }</h4>
      </div>
    </div>
  );
};

