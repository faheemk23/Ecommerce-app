import { useContext } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";

export function ProductListing() {
  const { products, filtersState } = useContext(ProductsListingContext);
  console.log(filtersState);
  return (
    <div className="listing">
      <Navigation />
      <FilterColumn />
      <div className="products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
