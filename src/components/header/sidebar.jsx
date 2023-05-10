import React from "react";
import { Navbar } from "./navbar/navbar";

import './sidebar.css'

export const Sidebar = () => {
  return (
    <>
      <div className="offcanvas offcanvas-start  sidebar-container  bg-light" id="demo">
        <div className="sidebar-header offcanvas-header">
          <h1 className="offcanvas-title text-danger">SegurTec</h1>
          <button
            type="button"
            className="btn-close text-reset text-center"
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
