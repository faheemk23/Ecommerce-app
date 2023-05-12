import { Categories } from "./filters/Categories";
import { Price } from "./filters/Price";
import { Ratings } from "./filters/Ratings";
import { Sort } from "./filters/Sort";

export function FilterColumn(){
    return(<div>
    <h2>Filters</h2>
    <button>clear</button>
    <Price/>
    <h2>Category</h2>
    <Categories/>
    <h2>Rating</h2>
    <Ratings/>
    <Sort/>
    </div>)
}