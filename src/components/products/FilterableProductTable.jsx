import React, { useState } from 'react'
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div className='main'>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }