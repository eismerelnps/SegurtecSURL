import React from "react";
import { Navbar } from "../navbar/navbar";

import './sidebar.css'

export const Sidebar = () => {
  return (
    <>
      <div className="offcanvas offcanvas-start  sidebar-container  bg-light" id="demo">
        <div className="sidebar-header offcanvas-header row">
          <img className="sidebar-logo" src="./assets/logo01.png" alt="App logo"/>
          {/* <h1 className="offcanvas-title text-danger text-center col-12">SegurTec</h1> */}
          <button
            type="button"
            className="btn-close text-reset text-center col-12"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="sidebar-items offcanvas-body ">
          <Navbar />
        </div>
      </div>
    </>
  );
};
