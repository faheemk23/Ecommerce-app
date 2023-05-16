import { createContext, useEffect, useReducer, useState } from "react";
import { productsReducer } from "../reducers/productsReducer";
import { fetchCategories, fetchProducts } from "../Utilites/productsUtilities";

export const ProductsContext = createContext({ products: [], categories: [] });

const initialProductsState = { products: [], categories: [] };

export function ProductsProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProductsState
  );

  useEffect(() => {
    fetchProducts(productsDispatch);
    fetchCategories(productsDispatch);
  }, []);

  const { products, categories } = productsState;

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}
