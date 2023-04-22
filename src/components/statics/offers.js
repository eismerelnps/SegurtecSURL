import React from "react";

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
          <img src="https://picsum.photos/100?random=1" />
          <p>Cámaras de Seguridad</p>
        </div>
        <div>
          <img src="https://picsum.photos/100?random=2" />
          <p>Barreras perimetrales</p>
        </div>
        <div>
          <img src="https://picsum.photos/100?random=3" />
          <p>Alarmas</p>
        </div>
        <div>
          <img src="https://picsum.photos/100?random=4" />
          <p>Video Porteros</p>
        </div>
      </div>
    </div>
  );
};
