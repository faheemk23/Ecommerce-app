import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import {
  isCheckedCategory,
  removeAllWhitespace,
} from "../../utilites/filtersUtilities";

export function Categories() {
  const { categories, filtersDispatch, filtersState } = useContext(
    ProductsListingContext
  );
  const { categories: categoriesChecked } = filtersState;

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(({ _id, categoryName }) => (
        <div key={_id}>
          <input
            checked={isCheckedCategory(categoryName, categoriesChecked)}
            type="checkbox"
            name="category-filter"
            value={removeAllWhitespace(categoryName)}
            id={categoryName}
            onChange={(e) =>
              filtersDispatch({
                type: "categories",
                checked: e.target.checked,
                payload: e.target.value,
              })
            }
          />
          <label htmlFor={categoryName}>{categoryName}</label>
        </div>
      ))}
    </div>
  );
}
