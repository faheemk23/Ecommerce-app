import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

import "./Filters.css";
import {
  handlePriceFilterChange,
  maxPrice,
} from "../../utilites/filtersUtilities";

export function Price() {
  const { products, filtersDispatch, filtersState } = useContext(
    ProductsListingContext
  );

  const { price } = filtersState;

  return (
    <div>
      <label htmlFor="price-filter">
        <h2>Price</h2>
      </label>
      <div>₹{price} & below</div>
      0
      <input
        className="accent-color-green"
        value={price}
        type="range"
        name="price-range"
        id="price-filter"
        min="0"
        max={maxPrice(products)}
        onChange={(e) => handlePriceFilterChange(e, filtersDispatch)}
      />
      {maxPrice(products)}
    </div>
  );
}
