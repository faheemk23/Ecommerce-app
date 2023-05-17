import { useContext } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";

export function SearchBar() {
  const { products } = useContext(ProductsListingContext);
  const totalProductsNum = products.length;
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder={`Search ${totalProductsNum}+ products `}
      />
    </>
  );
}
