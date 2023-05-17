import { Navigation } from "../../components/nav/Navigation";

import "./Home.css";
import { CategoryCard } from "../../components/cards/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { Hero } from "../../components/Hero/Hero";

export function Home() {
  const { categories } = useContext(ProductsListingContext);

  return (
    <div className="home">
      <Navigation showBtnLogin />
      <Hero />
      <div className="categories-list">
        {categories.map(({ id, categoryName }) => (
          <CategoryCard key={id} categoryName={categoryName} />
        ))}
      </div>

      <Link to="/productlisting">Products</Link>
    </div>
  );
}
