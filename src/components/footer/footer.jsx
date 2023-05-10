import React from "react";

export const Footer = () => {

  console.log("Footer again");

  return (
    <div className="footer bg-light rounded-1 border-top border-danger p-4 ">
      <div className="row justify-content-center">
        <h2 className="m-3 text-danger p-4 text-center ">SegurTec S.U.R.L</h2>
      <h3 className="text-center text-dark-emphasis">2023 Todos los derechos resevados</h3>
      <p className="text-center text-text-primary-emphasis">elnps</p>
      <a href="https://www.facebook.com/profile.php?id=100089365910937" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter border"></a>
      <a href="#" className="fa fa-instagram"></a>
   
      </div>
       </div>
  );
};
