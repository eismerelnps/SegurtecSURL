import React from "react";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./components/index/main";

export const SegurTecApp = () => {
  console.log("All app again");

  return (
    <>
      <Header />

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
};
