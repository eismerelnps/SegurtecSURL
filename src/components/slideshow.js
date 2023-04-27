import React from "react";
import { useState, useEffect } from "react";


export const Slideshow = ({ Slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % Slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, Slides.length]);

  //desestructuring Slides object, now app will work just with image and caption words
  const { image, caption, description } = Slides[index]

  return (
    <div className="slideshow">
       <h1>
      {caption}
      </h1>
      <img 
      src= {`${process.env.PUBLIC_URL}.${image}`}                           
      alt={caption} 
      />
      <p className="caption">
      {description}
      </p>
    </div>
  );
};
export default Slideshow;