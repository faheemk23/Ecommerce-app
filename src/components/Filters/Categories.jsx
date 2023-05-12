export function Categories() {
  const categories = ["Men", "Women"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <input type="checkbox" name="category-filter" id={category} />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
}
