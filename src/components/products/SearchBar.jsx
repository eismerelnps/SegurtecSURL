import React from 'react'

export const SearchBar = ({ 
    filterText, 
    inStockOnly,
    OnFilterTextChange,
    onInStockOnlyChange }) => {
    return (
        <form className='form justify-content-center '>
          <input 
          className='container-fluid rounded-5 border-danger text-center'
          type="text"
          value={ filterText } 
          placeholder="Search..." 
          onChange={(e) => OnFilterTextChange(e.target.value)}/>
          <label className='float-end text-secondary'>
            <input 
            className=''
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
