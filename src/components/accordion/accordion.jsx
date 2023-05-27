import React, { useState } from "react";


import "./accordion.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {items.map(({ caption, description }, index) => (
        <div key={index}>
          <div
            className={`accordion row d-flex align-items-center p-2 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-left text-danger fs-2 col-11">{caption}</p>
            <i
              className={` col-1 ${
                activeIndex === index
                  ? " fa-solid fa-arrow-up fa-bounce fa-xl text-danger"
                  : "fa-solid fa-arrow-down fa-xl "
              }`}
            ></i>
          </div>

          <div
            className={`panel text-center animate__animated animate__backInLeft p-3 ${
              activeIndex === index && "accordion-active"
            }`}
          >
            <p className="text-body fs-3">{description}</p>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};
