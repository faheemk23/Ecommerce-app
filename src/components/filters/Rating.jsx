export function Rating() {
  return (
    <div>
      <label htmlFor="rating-filter">
        <h2>Rating</h2>
      </label>
      0
      <input
        type="range"
        name="rating-range"
        id="rating-filter"
        min="0"
        max="5"
        step="1"
        onChange={(e) => console.log(e.target.value)}
      />
      5
    </div>
  );
}
