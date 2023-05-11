import { Categories } from "./Categories";
import { Price } from "./Price";
import { Ratings } from "./Ratings";
import { Sort } from "./Sort";

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