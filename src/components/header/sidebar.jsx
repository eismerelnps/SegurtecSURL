import React from "react";
import { Navbar } from "./navbar";

export const Sidebar = () => {
  return (
    <>
      <div className="offcanvas offcanvas-start " id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">SegurTec</h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Navbar />
        </div>
      </div>
    </>
  );
};
