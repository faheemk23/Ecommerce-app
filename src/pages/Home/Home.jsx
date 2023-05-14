import { Navigation } from "../../components/nav/Navigation";

import "./Home.css";
import { CategoryCard } from "../../components/cards/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsProvider";

export function Home() {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="home">
      <Navigation showBtnLogin />
      <div className="categories-list">
        {categories.map(({ id, categoryName }) => (
          <CategoryCard key={id} categoryName={categoryName} />
        ))}
      </div>

      <Link to="/productlisting">Products</Link>
    </div>
  );
}
