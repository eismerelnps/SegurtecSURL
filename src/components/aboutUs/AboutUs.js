import React from "react";
import "./aboutUs.css";
import { SimpleInfoItem } from "../SimpleInfoItem/SimpleInfoItem";

import { Accordion } from "../accordion/accordion";

import { RoadTextSideImage } from "../items/roadTextSideImage/RoadTextSideImage";
import AboutUsInfo from "../../helpers/AboutUsInfo";
import Items from "../../helpers/AccordionItemInfo";

const {image} = AboutUsInfo

export const AboutUs = () => {
  console.log("Abouts again");

  return (
    <>
    <RoadTextSideImage />
    <SimpleInfoItem Items={AboutUsInfo} ItemTitle='SegurTec' ItemDescription='Acerca de Nosotros'/>
    <Accordion items={Items} />
    </>
  );
};