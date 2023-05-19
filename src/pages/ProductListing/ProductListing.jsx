import { useContext, useEffect, useState } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";
import { Test } from "../../components/cards/Test";

export function ProductListing() {
  const { products, filtersState } = useContext(ProductsListingContext);
  console.log(filtersState);
  return (
    <div className="listing">
      <Navigation showBtnLogin />
      <FilterColumn />
      <div className="products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
