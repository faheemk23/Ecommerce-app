import axios from "axios";

export const fetchCategories = async (productsDispatch) => {
  const res = await axios.get("/api/categories");
  productsDispatch({ type: "set-categories", payload: res.data.categories });
};

export const fetchProducts = async (productsDispatch) => {
  const res = await axios.get("/api/products");
  productsDispatch({ type: "set-products", payload: res.data.products });
};
