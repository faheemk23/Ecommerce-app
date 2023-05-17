import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function Categories() {
  const { categories, filtersDispatch } = useContext(ProductsListingContext);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(({ _id, categoryName }) => (
        <div key={_id}>
          <input
            type="checkbox"
            name="category-filter"
            value={categoryName}
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
