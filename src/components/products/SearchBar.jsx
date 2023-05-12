import React from 'react'

export const SearchBar = ({ 
    filterText, 
    inStockOnly,
    OnFilterTextChange,
    onInStockOnlyChange }) => {
    return (
        <form>
          <input 
          type="text"
          value={ filterText } 
          placeholder="Search..." 
          onChange={(e) => OnFilterTextChange(e.target.value)}/>
          <label>
            <input 
            type="checkbox"
            checked={ inStockOnly } 
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />
            {' '}
            Only show products in stock
          </label>
        </form>
      );
}
