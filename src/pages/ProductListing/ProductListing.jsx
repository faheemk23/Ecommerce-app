import { useContext, useEffect, useState } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";
import { Test } from "../../components/cards/Test";
import { filterProducts } from "../../utilites/productsUtilities";
import { ColorRing } from "react-loader-spinner";

export function ProductListing() {
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
      <FilterColumn />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
