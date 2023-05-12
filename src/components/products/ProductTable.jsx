import React from "react";
import { ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !products.stoked) {
      return;
    }
    if (products.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="product-table border ">
      <thead className="d-flex flex-row flex-fill">
        <tr className="bg-danger text-light">  
          <th className=" col-6 text-center">Name</th>
          <th className="bg-primary col-6 text-center">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
