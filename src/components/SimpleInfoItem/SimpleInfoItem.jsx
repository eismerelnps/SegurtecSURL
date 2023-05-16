import React from "react";

import './simpleInfoItem.css';

export const SimpleInfoItem = ({
  Items,
  ItemTitle,
  ItemDescription,
}) => {
  return (
    <>
      <div className="item-header-container container-fluid-xl stiky-top-0 h-5 rounded-xl-5">
        <section
          className=" item-header container-fluid p-4 bg-danger"
          key={"header"}
        >
          <div className="item-overlay">
            <h1 className="item-title text-light ">{ItemTitle}</h1>
          </div>

          <div className="item-content">
            <h2 className="item-subtitle text-light fs-1">{ItemDescription}</h2>
          </div>
        </section>
      </div>

      <div className="row bg-light justify-content-center">
        {Items.map(({ image, caption, description }) => (
          <section className="item-section text-center rounded col-10 col-xl-5 p-5 m-3 animate__bounce">
            <div className="item-item">
              <div className="item-item-link mb-4 justify-content-center">
                <i className={`${image} text-center`} aria-hidden="true"></i>
                <h1 className="text-danger h1">{caption}</h1>
                <p className="text-secondary h4">{description}</p>
              </div>
              <button className="btn btn-outline-danger services-btn">
                VER DETALLES
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
