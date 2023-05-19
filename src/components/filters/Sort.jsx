import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function Sort() {
  const { filtersDispatch } = useContext(ProductsListingContext);
  const handleSortFilterChange = (e, filtersDispatch) => {
    const sortType = e.target.value;
    filtersDispatch({ type: "sort", payload: sortType });
  };
  return (
    <div>
      <h2>Sort by</h2>
      <div>
        <input
          className="accent-color-green"
          type="radio"
          name="sort"
          value="lth"
          id="lowToHigh"
          onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
        />
        <label htmlFor="lowToHigh">Price- Low to High</label>
      </div>
      <div>
        <input
          className="accent-color-green"
          type="radio"
          name="sort"
          value="htl"
          id="highToLow"
          onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
        />
        <label htmlFor="highToLow">Price- High to Low</label>
      </div>
    </div>
  );
}
