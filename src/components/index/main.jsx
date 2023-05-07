import React from "react";
import { Body } from "../body/body";
import { Aside } from "../body/aside";

export const Main = () => {
  return (
    <div>
      <div className="body2">
        <Body />
      </div>
      <div className="aside2">
        <Aside />
      </div>
    </div>
  );
};
