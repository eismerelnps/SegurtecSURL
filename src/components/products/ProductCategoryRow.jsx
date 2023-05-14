import React from "react";

export const ProductCategoryRow = ({ category }) => {
    return (
        
      <tr className="w-100 text-center text-primary">
        <th colSpan="2" className="">
          {category}
        </th>
      </tr>
    
    );
  }