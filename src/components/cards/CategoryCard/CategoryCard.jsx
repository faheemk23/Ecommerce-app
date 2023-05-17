import { v4 as uuid } from "uuid";

import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

export function CategoryCard({ categoryName, icon }) {
  const navigate = useNavigate();
  return (
    <div className="category-card" onClick={() => navigate("/productlisting")}>
      <img src={icon} alt={categoryName} />
      <div className="category-card-description">{categoryName}</div>
    </div>
  );
}
