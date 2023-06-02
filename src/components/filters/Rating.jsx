import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { handleRatingFilterChange } from "../../utilites/filtersUtilities";

export function Rating() {
  const { filtersDispatch, filtersState } = useContext(ProductsListingContext);

  const { rating } = filtersState;

  return (
    <div>
      <fieldset className="filter-fieldset">
        <legend>
          <h2>Rating</h2>
        </legend>
        <div>{rating}★ & above</div>

        <input
          className="accent-color-green full-width"
          value={rating}
          type="range"
          name="rating-range"
          id="rating-filter"
          min="2.5"
          max="4.5"
          step=".5"
          onChange={(e) => handleRatingFilterChange(e, filtersDispatch)}
        />
      </fieldset>
      {/* <label htmlFor="rating-filter">
        <h2>Rating</h2>
        <div>{rating}★ & above</div>
      </label>
      <input
        className="accent-color-green full-width"
        value={rating}
        type="range"
        name="rating-range"
        id="rating-filter"
        min="2.5"
        max="4.5"
        step=".5"
        onChange={(e) => handleRatingFilterChange(e, filtersDispatch)}
      /> */}
    </div>
  );
}
