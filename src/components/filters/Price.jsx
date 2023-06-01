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
      <fieldset className="filter-fieldset">
        <legend>
          {" "}
          <h2>Price</h2>
        </legend>
        <input
          className="accent-color-green full-width"
          value={price}
          type="range"
          name="price-range"
          id="price-filter"
          min="0"
          max={maxPrice(products)}
          onChange={(e) => handlePriceFilterChange(e, filtersDispatch)}
        />
      </fieldset>
      {/* <label htmlFor="price-filter">
        <h2>Price</h2>
      </label>
      <div>₹{price} & below</div>

      <input
        className="accent-color-green full-width"
        value={price}
        type="range"
        name="price-range"
        id="price-filter"
        min="0"
        max={maxPrice(products)}
        onChange={(e) => handlePriceFilterChange(e, filtersDispatch)}
      /> */}
      {/* {maxPrice(products)} */}
    </div>
  );
}
