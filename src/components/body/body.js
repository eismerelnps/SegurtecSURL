import React from "react";
import { Offers } from "../statics/offers"
import Slides from "../../helpers/Slides";
import { MyModalComponent } from "../modal/modal";

/*
 < ImageTextBlock 
       url={ Slides[5].image }
       title='SegurTec S.U.R.L'
       description='Suministro 🛒, Reparación 🚑, Mantenimientos, sistemas de seguridad 📹🚨, equipos de oficina 🖨️🖥️⌨️🖱️💻, redes de datos , entre otros 👍.'
       />
*/
export const Body = () => {

  console.log("Body again");

 // const img = 'src/connection.png'
 // const img2 = 'https://picsum.photos/1500/700'
  return (
    <div >
      <MyModalComponent />
      <div className="card1">
      
      </div>
      <div className="card">
        <h2>Articulo 2</h2>
        <h5>Titulo descripcion, ABR 21, 2023</h5>
        <img src={ Slides[5].image } alt={Slides[5].caption}/>
        
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
      <div className="card">
        < Offers />
      </div>
    </div>
  );
};
