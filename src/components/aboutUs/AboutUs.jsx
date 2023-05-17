import React from "react";
import "./aboutUs.css";
import { SimpleInfoItem } from "../SimpleInfoItem/SimpleInfoItem";

import { Accordion } from "../accordion/Accordion";

import AboutUsInfo from "../../helpers/AboutUsInfo";
import Items from "../../helpers/AccordionItemInfo";

export const AboutUs = () => {
  console.log("Abouts again");

  return (
    <>
    <SimpleInfoItem Items={AboutUsInfo} ItemTitle='SegurTec' ItemDescription='Acerca de Nosotros'/>
    <Accordion Items={Items} />
    </>
  );
};
