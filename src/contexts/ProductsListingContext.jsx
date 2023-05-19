import { createContext, useEffect, useReducer, useState } from "react";
import { productsReducer } from "../reducers/productsReducer";
import { fetchCategories, fetchProducts } from "../utilites/productsUtilities";
import filtersReducer from "../reducers/filtersReducer";

export const ProductsListingContext = createContext({
  products: [],
  categories: [],
});

export const initialFiltersState = {
  price: 0,
  categories: [],
  rating: 2.5,
  sort: "",
};

const initialProductsState = { products: [], categories: [] };

export function ProductsListingProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProductsState
  );

  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    initialFiltersState
  );

  useEffect(() => {
    fetchProducts(productsDispatch);
    fetchCategories(productsDispatch);
  }, []);

  const { products, categories } = productsState;

  return (
    <ProductsListingContext.Provider
      value={{ products, categories, filtersState, filtersDispatch }}
    >
      {children}
    </ProductsListingContext.Provider>
  );
}
