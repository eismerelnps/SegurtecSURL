import React from "react";

import "./navbar.css";
import items from "../../../helpers/items";
import { ListItem } from "./ListItem";



export const Navbar = () => {
  console.log("TopNav again");



  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav d-flex">

          {items.map(({ linkTo, caption }) => (
            <ListItem  
            linkto={linkTo}
            caption={caption}
            />
          ))}

        </ul>
      </div>
    </nav>
  );
};
  // {services.map(({image, caption, description}) => (
  //         <section className="text-center rounded services-section col-10 col-xl-5 p-5 m-3 animate__bounce ">
  //           <div className="services-item ">
  //             <div className="services-item-link mb-4">
  //             <i class={`${image} `} aria-hidden="true"></i>
  //               <h1 className="text-danger h1">{caption}</h1>
  //               <p className="text-secondary h4">{description}</p>
  //             </div>
  //             <button className="btn btn-outline-danger services-btn">VER DETALLES</button>
  //           </div>
  //         </section>
  //       ))}
 