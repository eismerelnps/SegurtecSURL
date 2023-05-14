import React from 'react'

export const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
        
      <tr className='product-row border rounded-5 mt-1 '>
        <td className='product-name '>{name}</td>
        <td className='product-price d-flex w-100 justify-content-end text-success'>{product.price}</td>
      </tr>
    );
  }