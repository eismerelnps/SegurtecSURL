import React from 'react'

export const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr className='product-row '>
      <td className='product-row_name'>{name}</td>
      <td className='product-row_price texrt-success'>{ product.price }</td>
    </tr>
  );
}
