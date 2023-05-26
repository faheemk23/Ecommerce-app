import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";
import { Test } from "../../components/cards/Test";
import { filterProducts } from "../../utilites/productsUtilities";
import { FiltersPopout } from "../../components/filters/FiltersPopout";
import emptyResult from "../../assets/empty-result.jpg";

export function ProductListing() {
  const [showFilters, setShowFilters] = useState(false);
  const { products, filtersState, loading } = useContext(
    ProductsListingContext
  );
  const { productsLoading, categoriesLoading } = loading;

  const filteredProducts = filterProducts(products, filtersState);

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
    <div className="listing">
      <button
        className="btn-filters-toggle btn btn-primary "
        onClick={() => setShowFilters((prev) => !prev)}
      >
        <i class="fa-solid fa-bars"></i> Filters
      </button>
      {showFilters && <FiltersPopout />}
      <FilterColumn />
      <div className="products">
        {filteredProducts.length === 0 ? (
          <div className="empty-result-container">
            <img
              className="image-center"
              src={emptyResult}
              height="292px"
              width="292px"
            />
            <h1>Sorry, no products to show with the given filters.</h1>
          </div>
        ) : (
          <>
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
