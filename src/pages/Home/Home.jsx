import { Navigation } from "../../components/nav/Navigation";

import "./Home.css";
import { CategoryCard } from "../../components/cards/CategoryCard/CategoryCard";

import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { Hero } from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Test } from "../../components/cards/Test";

export function Home() {
  const { categories } = useContext(ProductsListingContext);

  return (
    <div className="home">
      <Navigation showBtnLogin />

      <Hero />
      <div className="home-info">
        <div className="home-categories-list">
          <h2>Categories</h2>
          <div className="categories-list">
            {categories.map(({ id, categoryName, icon }) => (
              <CategoryCard key={id} categoryName={categoryName} icon={icon} />
            ))}
          </div>
          <div className="home-popular-products">
            <h2>Popular Products</h2>
            <Link className="btn-see-all btn btn-primary" to="/productlisting">
              See All
            </Link>
          </div>
          <div className="home-bestselling-products">
            <h2>Best Selling Products</h2>
          </div>
        </div>
      </div>
      <Footer />
      {/* <Test /> */}
    </div>
  );
}
