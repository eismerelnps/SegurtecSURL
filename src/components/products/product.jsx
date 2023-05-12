import React from 'react'
import { FilterableProductTable } from './FilterableProductTable'

export const Product = () => {

  const PRODUCTS = [
    {category: "Security", price: "$1.00", stocked: true, name: "Camera"},
    {category: "Security", price: "$1.00", stocked: true, name: "Alarm"},
    {category: "Security", price: "$2.00", stocked: false, name: "CCTV"},
    {category: "Other", price: "$2.00", stocked: true, name: "Inflared"},
    {category: "Other", price: "$4.00", stocked: false, name: "IP Camera"},
    {category: "Other", price: "$1.00", stocked: true, name: "Fire alarm"}
  ];

  return (
    <div className='product-container bg-light p-2 '>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}
