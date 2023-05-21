import { useContext, useState } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { ProductCard } from "../cards/ProductCard/ProductCard";

export function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");
  const { products } = useContext(ProductsListingContext);

  const totalProductsNum = products.length;

  const doesSearchMatchAnyWordInTitle = (searchInput, title) => {
    const wordsInTitle = title.split(" ");
    let flag = false;
    for (let i = 0; i < wordsInTitle.length; i++) {
      if (wordsInTitle[i].toLowerCase().startsWith(searchInput.toLowerCase())) {
        flag = true;
      }
    }
    return flag;
  };

  const handleSearchFiltering = (searchInput, products) => {
    if (searchInput === "") {
      return products;
    }

    const filteredProducts = products.filter(({ title }) =>
      doesSearchMatchAnyWordInTitle(searchInput, title)
    );
    return filteredProducts;
  };

  let filteredProducts = [];

  if (searchInput !== "") {
    filteredProducts = handleSearchFiltering(searchInput, products);
  }

  console.log(searchInput);

  return (
    <div className="search-container">
      <div>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={`Search ${totalProductsNum}+ products `}
        />
      </div>

      {searchInput !== "" && (
        <div className="search-result">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
