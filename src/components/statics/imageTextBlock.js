import React from "react";

export const ImageTextBlock = ({ url, title, description }) => {
  return (
    <div className="image-text-block-container">
      <img src={require('../../photos/connection.png')} alt={ title } />
      <div className="image-text-block">
        <h2>{ description }</h2>
        <h4>{ title }</h4>
      </div>
    </div>
  );
};

