import React, { useState, useEffect } from "react";

import "./accordion.css";

export const Accordion = ({ Items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClick = (index) => {
      toggleAccordion(index);
    };

    const accordions = Array.from(document.getElementsByClassName("accordion"));

    accordions.forEach((accordion, index) => {
      accordion.addEventListener("click", () => handleClick(index));
    });

    //   let acc = document.getElementsByClassName("accordion");
    //   let i;

    //   for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function () {
    //       /* Toggle between adding and removing the "zzz" class,
    //       to highlight the button that controls the panel */
    //       this.classList.toggle("zzz");

    //       /* Toggle between hiding and showing the zzz panel */
    //       let panel = this.nextElementSibling;
    //       if (panel.style.display === "block") {
    //         panel.style.display = "none";
    //       } else {
    //         panel.style.display = "block";
    //       }
    //     });
    //   }

    return (
      <>
        {Items.map(({ caption, description }, index) => (
          <div key={index}>
            <button
              className={`accordion text-center text-danger border rounded-2 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {caption}
            </button>
            <div className="panel text-center">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </>
    );
  });
};
