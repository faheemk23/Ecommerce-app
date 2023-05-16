export function Sort() {
  return (
    <div>
      <h2>Sort by</h2>
      <div>
        <input type="radio" name="sort" id="lowToHigh" />
        <label htmlFor="lowToHigh">Price- Low to High</label>
      </div>
      <div>
        <input type="radio" name="sort" id="highToLow" />
        <label htmlFor="highToLow">Price- High to Low</label>
      </div>
    </div>
  );
}
