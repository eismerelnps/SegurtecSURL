import React from "react";

import './roadItem.css'

export const RoadItem = ({
    number,
    caption,
    description
}) => {
  return (
    <div className="elemento-roadmap row">
        <div className="col-4">
        <div className="number  circle bg-danger text-light border-light">

        
        {number}
        </div>
        <div className="road-line bg-danger p-4 m-5"></div>
      </div>

      <div className="contenido col-8">
        <h3 className="">{caption}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
};
