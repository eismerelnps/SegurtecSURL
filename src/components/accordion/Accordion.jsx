import React, { useState } from "react";

import "./accordion.css";
import 'animate.css';

export const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {items.map(({ caption, description }, index) => (

        <div key={index}>
          <button
            className={`accordion text-center text-danger fs-2 border rounded-2 p-4 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
            
          >
            {caption}
          </button>


          <div className={`panel text-center animate__animated animate__backInLeft p-3 ${activeIndex === index && "accordion-active" }`}>
            <p className="text-body fs-3">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
