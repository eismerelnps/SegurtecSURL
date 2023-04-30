import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Slideshow from "../components/Slideshow/Slideshow";

const mockSlides = [
  {
    image: "/slide1.jpg",
    caption: "Slide 1",
    description: "Description for Slide 1",
    alt: "Alt text for Slide 1",
  },
  {
    image: "/slide2.jpg",
    caption: "Slide 2",
    description: "Description for Slide 2",
    alt: "Alt text for Slide 2",
  },
];

describe("Slideshow", () => {
  it("renders without crashing", () => {
    render(<Slideshow slides={mockSlides} />);
  });

  it("renders the correct number of slides", () => {
    const { getAllByRole } = render(<Slideshow slides={mockSlides} />);
    const slides = getAllByRole("img");
    expect(slides.length).toBe(mockSlides.length);
  });

  it("displays the first slide initially", () => {
    const { getByAltText } = render(<Slideshow slides={mockSlides} />);
    const firstSlide = getByAltText(mockSlides[0].alt);
    expect(firstSlide).toBeInTheDocument();
  });
});
