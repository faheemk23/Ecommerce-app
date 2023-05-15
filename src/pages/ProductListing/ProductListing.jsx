import { useContext } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import "./ProductListing.css";
import { FilterColumn } from "../../components/filters/FilterColumn";

export function ProductListing() {
  const { products } = useContext(ProductsContext);
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
