import { Price } from "./Price";
import { Categories } from "./Categories";
import { Rating } from "./Rating";
import { Sort } from "./Sort";
import { Sizes } from "./Sizes";

export function FilterColumn() {
  return (
    <div className="filters">
      <div>
        <strong>Filters</strong> <button>Clear</button>
      </div>
      <Price />
      <Categories />
      <Sizes />
      <Rating />
      <Sort />
    </div>
  );
}
