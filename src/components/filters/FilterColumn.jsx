import { Price } from "./Price";
import { Categories } from "./Categories";

export function FilterColumn() {
  return (
    <div className="filters">
      <div>
        <strong>Filters</strong> <button>Clear</button>
      </div>
      <Price />
      <Categories />
    </div>
  );
}
