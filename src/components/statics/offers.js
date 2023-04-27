import React from "react";
import Slides from "../../helpers/getPhotos";
export const Offers = () => {
  return (
    
    <div className="static-offer">
      <div className="static-offer_top">
        <h1></h1>
      </div>




      <div className="static-offer_middle">
        <div className="static-offer_middle__left">
          <h2> TE OFRECEMOS</h2>
        </div>

        <div className="static-offer_middle__right">
            <div className="circle">
            <h1 className="circle-h1">KIT 100% CERTIFICADO</h1>
            </div>
         
        </div>
      </div>




      <div className="static-offer_bottom">
        <div>
          <img src={Slides[0].image} />
          <p>Cámaras de Seguridad</p>
        </div>
        <div>
          <img src={Slides[3].image}  />
          <p>Barreras perimetrales</p>
        </div>
        <div>
          <img src={Slides[2].image} />
          <p>Alarmas</p>
        </div>
        <div>
          <img src={Slides[1].image} />
          <p>Video Porteros</p>
        </div>
      </div>
    </div>
  );
};
