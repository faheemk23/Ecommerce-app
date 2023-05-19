import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

import "./Filters.css";

export function Price() {
  const { products, filtersDispatch } = useContext(ProductsListingContext);

  const maxPrice = products.reduce(
    (acc, { price }) => (Number(price) > acc ? Number(price) : acc),
    0
  );

  const handlePriceFilterChange = (e, filtersDispatch) => {
    const priceFilterValue = e.target.value;
    filtersDispatch({ type: "price", payload: priceFilterValue });
  };

  return (
    <div>
      <label htmlFor="price-filter">
        <h2>Price</h2>
      </label>
      0
      <input
        className="accent-color-green"
        type="range"
        name="price-range"
        id="price-filter"
        min="0"
        max={maxPrice}
        onChange={(e) => handlePriceFilterChange(e, filtersDispatch)}
      />
      {maxPrice}
    </div>
  );
}
