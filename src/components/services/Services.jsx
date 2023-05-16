import React from "react";

import services from "../../helpers/services";

import "./services.css";
import "animate.css";
import { SimpleInfoItem } from "../SimpleInfoItem/SimpleInfoItem";

export const Services = () => {
  console.log("Services");

  return (
    <SimpleInfoItem
      Items={services}
      ItemTitle="SERVICIOS"
      ItemDescription="Servicios que ofrecemos"
    />
  );
};
