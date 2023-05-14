import "./CategoryCard.css";

export function CategoryCard({ categoryName }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        maxWidth: "200px",
        position: "relative",
      }}
    >
      <img src="https://picsum.photos/200/200" alt="category" />
      <div className="category-name">{categoryName}</div>
    </div>
  );
}
