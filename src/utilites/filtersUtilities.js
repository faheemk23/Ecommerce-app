// input changhe handlers

export const handlePriceFilterChange = (e, filtersDispatch) => {
  const priceFilterValue = e.target.value;
  filtersDispatch({ type: "price", payload: priceFilterValue });
};

export const handleRatingFilterChange = (e, filtersDispatch) => {
  const priceFilterValue = e.target.value;
  filtersDispatch({ type: "rating", payload: priceFilterValue });
};

export const handleSortFilterChange = (e, filtersDispatch) => {
  const sortType = e.target.value;
  filtersDispatch({ type: "sort", payload: sortType });
};

export const getCheckboxFilterArr = (state, filter, action) => {
  if (action.checked) {
    return {
      ...state,
      [filter]: [...state[filter], action.payload.toLowerCase()],
    };
  } else {
    const filteredArr = state[filter].filter(
      (filter) => filter.toLowerCase() !== action.payload.toLowerCase()
    );
    return {
      ...state,
      [filter]: filteredArr,
    };
  }
};

export const removeAllWhitespace = (str) => {
  return str.replaceAll(" ", "");
};

export const maxPrice = (products) =>
  products.reduce(
    (acc, { price }) => (Number(price) > acc ? Number(price) : acc),
    0
  );

export const isCheckedCategory = (categoryName, categoriesChecked) =>
  categoriesChecked.some(
    (category) => category === removeAllWhitespace(categoryName).toLowerCase()
  );

export const isCheckedSort = (sort) => (sort === "" ? false : null);
