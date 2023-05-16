import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export function Price() {
  const { products } = useContext(ProductsContext);

  const maxPrice = products.reduce(
    (acc, { price }) => (Number(price) > acc ? Number(price) : acc),
    0
  );

  return (
    <div>
      <label htmlFor="price-filter">
        <h2>Price</h2>
      </label>
      0
      <input
        type="range"
        name="price-range"
        id="price-filter"
        min="0"
        max={maxPrice}
        onChange={(e) => console.log(e.target.value)}
      />
      {maxPrice}
    </div>
  );
}
