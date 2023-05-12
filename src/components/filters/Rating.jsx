export function Rating() {
  const ratings = [4, 3, 2, 1];
  return (
    <div>
      <h2>Rating</h2>
      {ratings.map((rating) => (
        <div key={rating}>
          <input type="radio" name="rating" id={rating} />
          <label htmlFor={rating}>{rating} stars & above</label>
        </div>
      ))}
    </div>
  );
}
