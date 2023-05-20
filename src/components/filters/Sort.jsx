import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import {
  handleSortFilterChange,
  isCheckedSort,
} from "../../utilites/filtersUtilities";

export function Sort() {
  const { filtersDispatch, filtersState } = useContext(ProductsListingContext);

  const { sort } = filtersState;

  return (
    <div>
      <h2>Sort by</h2>
      <div>
        <input
          checked={isCheckedSort(sort, "lth")}
          className="accent-color-green"
          type="radio"
          name="sort"
          value="lth"
          key="lowToHigh"
          onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
        />
        <label htmlFor="lowToHigh">Price- Low to High</label>
      </div>
      <div>
        <input
          checked={isCheckedSort(sort, "htl")}
          className="accent-color-green"
          type="radio"
          name="sort"
          value="htl"
          key="highToLow"
          onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
        />
        <label htmlFor="highToLow">Price- High to Low</label>
      </div>
    </div>
  );
}
