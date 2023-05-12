import { useContext } from "react";
import { Navigation } from "../components/nav/Navigation";
import { ProductsContext } from "../contexts/ProductsProvider";
import { ProductCard } from "../components/cards/ProductCard";
import "./ProductListing.css";
import { Price } from "../components/filters/Price";
import { FilterColumn } from "../components/filters/FilterColumn";

export function ProductListing() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="listing">
      <Navigation />
      <FilterColumn />
      <div className="products">
        {products.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
