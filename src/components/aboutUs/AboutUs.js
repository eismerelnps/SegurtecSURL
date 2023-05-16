import React from "react";
import "./aboutUs.css";
import { SimpleInfoItem } from "../SimpleInfoItem/SimpleInfoItem";
import AboutUsInfo from "../../helpers/AboutUsInfo";

export const AboutUs = () => {
  console.log("Abouts again");

  return (
    <SimpleInfoItem Items={AboutUsInfo} ItemTitle='SegurTec' ItemDescription='Acerca de Nosotros'/>
  );
};
