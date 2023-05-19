import axios from "axios";

export const fetchCategories = async (productsDispatch) => {
  const res = await axios.get("/api/categories");
  productsDispatch({ type: "set-categories", payload: res.data.categories });
};

export const fetchProducts = async (productsDispatch) => {
  const res = await axios.get("/api/products");
  productsDispatch({ type: "set-products", payload: res.data.products });
};

const getPriceFiltered = (products, priceRangeValue) =>
  priceRangeValue === 0
    ? products
    : products.filter(({ price }) => price <= priceRangeValue);

const getCategoryFiltered = (products, categoriesSelected) => {
  if (categoriesSelected.length === 0) {
    return products;
  }
  let filteredProducts = [];
  for (let i = 0; i < categoriesSelected.length; i++) {
    const filteredWithCurrentCategory = products.filter(
      ({ category }) =>
        category.toLowerCase() === categoriesSelected[i].toLowerCase()
    );
    filteredProducts = [...filteredWithCurrentCategory, ...filteredProducts];
  }
  return filteredProducts;
};

const getRatingFiltered = (products, ratingRangeValue) =>
  ratingRangeValue === 2.5
    ? products
    : products.filter(({ rating }) => rating >= ratingRangeValue);

const getSortFiltered = (products, sortValue) => {
  if (sortValue === "") {
    return products;
  } else if (sortValue.toLowerCase() === "lth") {
    return products.sort((a, b) => a.price - b.price);
  } else {
    return products.sort((a, b) => b.price - a.price);
  }
};

export const filterProducts = (products, filterState) => {
  const { price, categories, rating, sort } = filterState;
  let filteredProducts = [...products];
  filteredProducts = getPriceFiltered(filteredProducts, price);
  filteredProducts = getCategoryFiltered(filteredProducts, categories);
  filteredProducts = getRatingFiltered(filteredProducts, rating);
  filteredProducts = getSortFiltered(filteredProducts, sort);
  return filteredProducts;
};
