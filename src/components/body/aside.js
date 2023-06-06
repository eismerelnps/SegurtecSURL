import React from "react";
import Products from "../../helpers/Products";
import Slideshow from "../SlideShow/Slideshow";
import { FilterableProductTable } from "../products/FilterableProductTable";
import { useFetch } from "../../hooks/useFetch";

export const Aside = () => {
  console.log("Aside again");
  const url = "https://segurtec-backend-production.up.railway.app/api/v1/products/";

  const { loading, data, error } = useFetch({ method: "GET", url });

  console.log(error);

  const Product = {
    slides: Products,
    interval: 3000,
    transition: "opacity 1s ease-in-out",
    captionPosition: "bottom",
    width: "auto",
    height: "350px",
    alt: Products.caption,

    onError: () => {
      console.log("Error");
    },
  };

  return (
    <div>
      <div className="card card-offer mt-4">
        <h2 className="text-center text-danger">Ofertas</h2>
        <Slideshow {...Product} />
      </div>

      <div className="card"></div>

      <div className="card">
        <h3 className="text-center">Últimos productos</h3>
        {loading ? (
          <h4 className="alert alert-info text-center">Cargando productos</h4>
        ) : error ? (
          <h4 className="alert alert-danger text-center">Se ha producido un error al cargar los productos</h4>
        ) : data.length === 0 ? (
          <h4 className="alert alert-danger text-center">No hay productos disponibles</h4>
        ) : (
          <FilterableProductTable products={data} />
        )}
      </div>
      
      <div className="card">
        <h3>Síguenos</h3>
        <p>
          Suministro 🛒, Reparación 🚑, Mantenimientos, sistemas de seguridad
          📹🚨, equipos de oficina 🖨️🖥️⌨️🖱️💻, redes de datos, entre otros 👍.{" "}
        </p>
      </div>
    </div>
  );
};
