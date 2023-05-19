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
