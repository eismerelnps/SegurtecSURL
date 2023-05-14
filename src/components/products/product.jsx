import React from 'react'
import { FilterableProductTable } from './FilterableProductTable'

import './products.css';

export const Product = () => {

  const PRODUCTS = [
    {category: "Seguridad", price: "$49.99", stocked: true, name: "Camara"},
    {category: "Seguridad", price: "$24.99", stocked: true, name: "Alarma"},
    {category: "Seguridad", price: "$500.00", stocked: false, name: "CCTV"},
    {category: "Otros", price: "$45.00", stocked: true, name: "Inflarrojo"},
    {category: "Otros", price: "$75.00", stocked: false, name: "IP Cámara"},
    {category: "Otros", price: "$67.00", stocked: true, name: "Alarma contra Incendios"},
    {category: "Oficina", price: "$0.50", stocked: true, name: "Lapiz"},
    {category: "Oficina", price: "$3.50", stocked: false, name: "Sacapunta"},
    {category: "Oficina", price: "$1.00", stocked: true, name: "Goma"}
  
  ];

  return (
    <div className='product-container bg-light p-2 '>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}
