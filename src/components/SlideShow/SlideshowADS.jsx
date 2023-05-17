import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useWindowSize from "../../hooks/useWindowSize";


import "./slideshowADS.css";

const SlideshowADS = ({
  slides,
  interval,
  transition,
  captionPosition,
  alt,
  onError,
}) => {
  const [index, setIndex] = useState(0);
  const windowSize = useWindowSize(); // Get the window size

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, slides.length]);

  const handlePrevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const getWidthAndHeight = () => {
    // Adjust width and height based on screen size
    if (windowSize.width < 375 ) {
      return {
        width: "100%",
        height: "75px",
      };
    }
    else if (windowSize.width >= 375 && windowSize.width < 576) {
      return {
        width: "100%",
        height: "125px",
      };
    } else if (windowSize.width >= 576 && windowSize.width < 992) {
      return {
        width: "100%",
        height: "200px",
      };
    } else if (windowSize.width >= 992 && windowSize.width < 1200) {
      return {
        width: "100%",
        height: "250px",
      };
    } 
    else {
      return {
        width: "100%",
        height: "350px",
      };
    }
  };

  const { width, height } = getWidthAndHeight(); // Get adjusted width and height


  return (
    <div
    className='slideshow mt-1 '
    style={{
      width,
      height,
      position: "relative",
      overflow: "hidden",
    }}
  >
      {slides.map((slide, i) => (
        <img
        className=""
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
            width,
            height,
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
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'current' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <a className="prev"  onClick={handlePrevSlide}>
        &#10094;
      </a>
      <a className="next"  onClick={handleNextSlide}>
        &#10095;
      </a>
    </div>
  );
};

SlideshowADS.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      description: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
  transition: PropTypes.string,
  captionPosition: PropTypes.oneOf(["top", "bottom"]),
  // width: PropTypes.string,
  // height: PropTypes.string,
  alt: PropTypes.string,
  onError: PropTypes.func,
};

SlideshowADS.defaultProps = {
  interval: 3000,
  transition: "opacity 1s ease-in-out",
  captionPosition: "bottom",
  width: "100%",
  height: "500px",
  onError: () => {},
};

export default SlideshowADS;
