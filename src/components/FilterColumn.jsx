import { Categories } from "./Filters/Categories";
import { Price } from "./Filters/Price";
import { Ratings } from "./Filters/Ratings";
import { Sort } from "./Filters/Sort";

export function FilterColumn(){
    return(<>
    <h2>Filters</h2>
    <button>clear</button>
    <Price/>
    <h2>Category</h2>
    <Categories/>
    <h2>Rating</h2>
    <Ratings/>
    <Sort/>
    
    </>)
}