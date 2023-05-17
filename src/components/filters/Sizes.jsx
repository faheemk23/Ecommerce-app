import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function Sizes() {
  const { filtersDispatch } = useContext(ProductsListingContext);
  const sizes = ["S", "M", "L"];
  return (
    <div>
      <h2>Sizes</h2>
      {sizes.map((size) => (
        <div key={size}>
          <input
            type="checkbox"
            name="size-filter"
            value={size}
            id={size}
            onChange={(e) =>
              filtersDispatch({
                type: "sizes",
                checked: e.target.checked,
                payload: e.target.value,
              })
            }
          />
          <label htmlFor={size}>{size}</label>
        </div>
      ))}
    </div>
  );
}
