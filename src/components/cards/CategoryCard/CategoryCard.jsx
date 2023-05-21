import { v4 as uuid } from "uuid";

import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
import { removeAllWhitespace } from "../../../utilites/filtersUtilities";
import { useContext } from "react";
import { ProductsListingContext } from "../../../contexts/ProductsListingContext";

export function CategoryCard({ categoryName, icon }) {
  const { filtersDispatch } = useContext(ProductsListingContext);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    filtersDispatch({ type: "clear-all-categories" });
    filtersDispatch({
      type: "categories",
      checked: true,
      payload: removeAllWhitespace(categoryName),
    });
    navigate("/productlisting");
  };
  return (
    <div
      className="category-card"
      onClick={() => handleCategoryClick(categoryName)}
    >
      <img src={icon} alt={categoryName} />
      <div className="category-card-description">{categoryName}</div>
    </div>
  );
}
