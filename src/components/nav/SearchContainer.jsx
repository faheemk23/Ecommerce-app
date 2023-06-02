import { useContext, useState } from "react";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { SearchProductCard } from "../cards/SearchProductCard/SearchProductCard";

import "./Navigation.css";

export function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");
  const { products } = useContext(ProductsListingContext);

  const totalProductsNum = products.length;

  const doesSearchMatchAnyWordInTitle = (searchInput, title) => {
    const wordsInTitle = title.split(" ");
    let flag = false;
    for (let i = 0; i < wordsInTitle.length; i++) {
      if (
        wordsInTitle[i]
          .toLowerCase()
          .replaceAll("(", "")
          .replaceAll(")", "")
          .startsWith(searchInput.toLowerCase())
      ) {
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

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          className="search-bar"
          value={searchInput}
          type="search"
          // autoComplete=""
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={`Search ${totalProductsNum}+ products`}
        />
      </div>

      {searchInput !== "" && (
        <div className="search-result">
          {filteredProducts.length === 0 ? (
            <h2 className="empty-search-result">
              Sorry, no products to display.
            </h2>
          ) : (
            <>
              {" "}
              {filteredProducts.map((product) => (
                <SearchProductCard
                  key={product._id}
                  product={product}
                  setSearchInput={setSearchInput}
                />
              ))}{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
}
