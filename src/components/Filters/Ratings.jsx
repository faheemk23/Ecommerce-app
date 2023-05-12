export function Ratings() {
  const ratings = [4, 3, 2, 1];
  return (
    <div>
      {ratings.map((rating) => (
        <div key={rating}>
          <input type="radio" name="rating" id={rating} />
          <label htmlFor={rating}>{rating} stars & above</label>
        </div>
      ))}
    </div>
  );
}
