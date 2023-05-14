import React from "react";

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form className="d-flex flex-column">
      <input
        className="form form-control text-center rounded-5 bg-light"
        type="text"
        value={filterText}
        placeholder="Buscar..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <div className="d-flex align-item-center justify-content-end">
          <input
            className="me-2"
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          <p className="m-0 p-0">Mostrar solo productos en stock</p>
        </div>
      </label>
    </form>
  );
};
