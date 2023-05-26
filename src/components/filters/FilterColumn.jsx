import { Price } from "./Price";
import { Categories } from "./Categories";
import { Rating } from "./Rating";
import { Sort } from "./Sort";
import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function FilterColumn() {
  const { filtersDispatch } = useContext(ProductsListingContext);
  return (
    <div className="filters">
      <div className="filter-column">
        <div>
          <strong>Filters</strong>{" "}
          <button
            className="btn btn-primary bg-orange"
            onClick={() => filtersDispatch({ type: "clear-all" })}
          >
            Clear
          </button>
        </div>
        <Price />
        <Categories />
        <Rating />
        <Sort />
      </div>
    </div>
  );
}
