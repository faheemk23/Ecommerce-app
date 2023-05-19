import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { handleRatingFilterChange } from "../../Utilites/filtersUtilities";

export function Rating() {
  const { filtersDispatch, filtersState } = useContext(ProductsListingContext);

  const { rating } = filtersState;

  return (
    <div>
      <label htmlFor="rating-filter">
        <h2>Rating</h2>
        <div>{rating}★ & above</div>
      </label>
      2.5
      <input
        className="accent-color-green"
        value={rating}
        type="range"
        name="rating-range"
        id="rating-filter"
        min="2.5"
        max="4.5"
        step=".5"
        onChange={(e) => handleRatingFilterChange(e, filtersDispatch)}
      />
      4.5
    </div>
  );
}
