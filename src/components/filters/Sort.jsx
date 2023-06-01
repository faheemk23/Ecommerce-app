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
      <fieldset className="filter-fieldset">
        <legend>
          <h2>Sort by</h2>
        </legend>
        <div>
          <input
            checked={isCheckedSort(sort, "lth")}
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
            checked={isCheckedSort(sort, "htl")}
            className="accent-color-green"
            type="radio"
            name="sort"
            value="htl"
            id="highToLow"
            onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
          />
          <label htmlFor="highToLow">Price- High to Low</label>
        </div>
      </fieldset>
      {/* <h2>Sort by</h2>
      <div>
        <input
          checked={isCheckedSort(sort, "lth")}
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
          checked={isCheckedSort(sort, "htl")}
          className="accent-color-green"
          type="radio"
          name="sort"
          value="htl"
          id="highToLow"
          onChange={(e) => handleSortFilterChange(e, filtersDispatch)}
        />
        <label htmlFor="highToLow">Price- High to Low</label>
      </div> */}
    </div>
  );
}
