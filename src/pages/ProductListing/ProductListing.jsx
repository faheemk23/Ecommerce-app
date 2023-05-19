import { useContext, useEffect, useState } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";
import { Test } from "../../components/cards/Test";
import { filterProducts } from "../../utilites/productsUtilities";

export function ProductListing() {
  const { products, filtersState } = useContext(ProductsListingContext);

  const filteredProducts = filterProducts(products, filtersState);
  return (
    <div className="listing">
      <Navigation showBtnLogin />
      <FilterColumn />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
