import React from "react";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./components/index/main";
import Slideshow2 from "./components/SlideShow/Slideshow2";
import { ADS } from "./helpers/ADS";

export const SegurTecApp = () => {
  console.log("All app again");

  return (
    <>
      <Header />
      <Slideshow2 {...ADS} />

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
};
