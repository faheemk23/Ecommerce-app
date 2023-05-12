import { useContext } from "react";
import { Navigation } from "../components/nav/Navigation";
import { ProductsContext } from "../contexts/ProductsProvider";
import { ProductCard } from "../components/cards/ProductCard";
import "./ProductListing.css";
import { Price } from "../components/filters/Price";

export function ProductListing() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="listing">
      <Navigation />
      <div className="filters">
        <div>
          <strong>Filters</strong> <button>Clear</button>
        </div>
        <Price />
      </div>
      <div className="products">
        {products.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
