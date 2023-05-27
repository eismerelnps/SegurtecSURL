import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import './slideshow.css';

const Slideshow = ({
  slides,
  interval,
  transition,
  captionPosition,
  width,
  height,
  alt,
  onError,
}) => {
  console.log("Slideshow again");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, slides.length]);

  const currentSlide = slides[index];

  return (
    <div
      className="slideshow mt-4"
      style={{
        width: width,
        height: height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, i) => (
        <img
          key={i}
          src={`${process.env.PUBLIC_URL}.${slide.image}`}
          alt={slide.alt || alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === i ? 1 : 0,
            transition: transition,
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          onError={onError}
        />
      ))}
      <div
        className="caption"
        style={{
          position: "absolute",
          bottom: captionPosition === "top" ? "auto" : 0,
          top: captionPosition === "top" ? 0 : "auto",
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
       
       
        <h2>{currentSlide.caption}</h2>
        <p>{currentSlide.description}</p>
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string,
      description: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
  transition: PropTypes.string,
  captionPosition: PropTypes.oneOf(["top", "bottom"]),
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  onError: PropTypes.func,
};

Slideshow.defaultProps = {
  interval: 3000,
  transition: "opacity 1s ease-in-out",
  captionPosition: "bottom",
  width: "100%",
  height: "500px",
  onError: () => {},
};

export default Slideshow;
