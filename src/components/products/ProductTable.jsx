import React from "react";
import { ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table className="w-100">
        <thead>
          <tr className="bg-light w-100">
            <th className="w-50 text-center text-danger">Producto</th>
            <th  className="w-5o text-center text-success">Precio</th>
          </tr>
        </thead>
        <tbody key={products.id}>{rows}</tbody>
      </table>
    );
  }
  