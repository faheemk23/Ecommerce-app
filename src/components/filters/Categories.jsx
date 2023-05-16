import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export function Categories() {
  const { categories } = useContext(ProductsContext);

  return (
    <div>
      {categories.map(({ _id, categoryName }) => (
        <div key={_id}>
          <input type="checkbox" name="category-filter" id={categoryName} />
          <label htmlFor={categoryName}>{categoryName}</label>
        </div>
      ))}
    </div>
  );
}
