import React from 'react'
import { FilterableProductTable } from './FilterableProductTable'

import './products.css';

export const Product = () => {

  const PRODUCTS = [
    {id:'01', category: "Seguridad", price: "$49.99", stocked: true, name: "Camara"},
    {id:'02', category: "Seguridad", price: "$24.99", stocked: true, name: "Alarma"},
    {id:'03', category: "Seguridad", price: "$500.00", stocked: false, name: "CCTV"},
    {id:'04', category: "Otros", price: "$45.00", stocked: true, name: "Inflarrojo"},
    {id:'05', category: "Otros", price: "$75.00", stocked: false, name: "IP Cámara"},
    {id:'06', category: "Otros", price: "$67.00", stocked: true, name: "Alarma contra Incendios"},
    {id:'07', category: "Oficina", price: "$0.50", stocked: true, name: "Lapiz"},
    {id:'08', category: "Oficina", price: "$3.50", stocked: false, name: "Sacapunta"},
    {id:'09', category: "Oficina", price: "$1.00", stocked: true, name: "Goma"}
  
  ];

  return (
    <div className='product-container bg-light p-2 '>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}
