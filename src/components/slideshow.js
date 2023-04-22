import React from "react";
import Slides from "../helpers/getFotos";
import { useState, useEffect } from "react";

export const Slideshow = ({ Slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % Slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [index, Slides.length]);

  return (
    <div className="slideshow">
      <img src={Slides[index].image} alt={Slides[index].caption} />
      <p className="caption">{Slides[index].caption}</p>
    </div>
  );
};
export default Slideshow;