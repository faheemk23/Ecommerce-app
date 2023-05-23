import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import "./Home.css";
import { CategoryCard } from "../../components/cards/CategoryCard/CategoryCard";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";
import { Test } from "../../components/cards/Test";

export function Home() {
  const { categories, loading } = useContext(ProductsListingContext);

  const { productsLoading, categoriesLoading } = loading;

  if (productsLoading || categoriesLoading) {
    return (
      <div className="center-of-page">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <div className="home">
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
      {/* <Test /> */}
      <Footer />
    </div>
  );
}
