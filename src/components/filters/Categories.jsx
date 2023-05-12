export function Categories() {
  const categoriesList = ["Men", "Women"];

  return (
    <div>
      {categoriesList.map((category) => (
        <div key={category}>
          <input type="checkbox" name="category-filter" id={category} />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
}
