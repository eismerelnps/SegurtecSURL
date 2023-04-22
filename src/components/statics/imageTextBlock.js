import React from "react";

export const ImageTextBlock = ({ url, title, description }) => {
  return (
    <div className="image-text-block-container">
      <img src={url} alt="Nature" />
      <div className="image-text-block">
        <h2>{description}</h2>
        <h4>{title}</h4>
      </div>
    </div>
  );
};
//style="width:100%;"
