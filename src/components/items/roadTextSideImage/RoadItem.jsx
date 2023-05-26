import React from "react";

import './roadItem.css'

export const RoadItem = ({
    number,
    caption,
    description
}) => {
  return (
    <div className="item-container row px-5">
        <div className="col-4 d-flex flex-column align-items-center">
        <div className="road-number  circle h1">{number}</div>
        <div className="road-line bg-danger rounded-5 h-100"></div>
      </div>

      <div className="contenido col-8 pt-3">
        <h2 className="item-caption">{caption}</h2>
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
};
