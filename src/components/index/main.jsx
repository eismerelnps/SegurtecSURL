import React from "react";
import { Body } from "../body/body";
import { Aside } from "../body/aside";

export const Main = () => {
  return (
    <div className="row ">
      <div className="body2 col-12 col-xl-8">
        <Body />
      </div>
      <div className="aside2 col-12 col-xl-4">
        <Aside />
      </div>
    </div>
  );
};
