export function Sort(){
    return(<div>
        <h2>Sort by</h2>
        <div> 
            <input type="radio" name="sort" id="lowToHigh" />
            <label htmlFor="lowToHigh">Price- Low to High</label>
        </div>
        <div>
            <input type="radio" name="sort" id="highToLow" />
            <label htmlFor="highToLow">Price- High to Low</label>
        </div>
        <div> 
            <input type="radio" name="sort" id="aToZ" />
            <label htmlFor="aToZ">Product Name : A-Z</label>
        </div>
        <div>
            <input type="radio" name="sort" id="zToA" />
            <label htmlFor="zToA">Product Name : Z-A</label>
        </div>
    </div>)
}