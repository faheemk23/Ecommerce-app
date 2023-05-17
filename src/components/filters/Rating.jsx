import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function Rating() {
  const { filtersDispatch } = useContext(ProductsListingContext);
  const handleRatingFilterChange = (e, filtersDispatch) => {
    const priceFilterValue = e.target.value;
    filtersDispatch({ type: "rating", payload: priceFilterValue });
  };
  return (
    <div>
      <label htmlFor="rating-filter">
        <h2>Rating</h2>
      </label>
      0
      <input
        type="range"
        name="rating-range"
        id="rating-filter"
        min="0"
        max="5"
        step="1"
        onChange={(e) => handleRatingFilterChange(e, filtersDispatch)}
      />
      5
    </div>
  );
}
