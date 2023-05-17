import { getCheckboxFilterArr } from "../Utilites/filtersUtilities";

export default function filtersReducer(state, action) {
  switch (action.type) {
    case "price":
      return { ...state, price: Number(action.payload) };
    case "categories":
      return getCheckboxFilterArr(state, "categories", action);
    case "sizes":
      return getCheckboxFilterArr(state, "sizes", action);
    case "rating":
      return { ...state, rating: Number(action.payload) };
    case "sort":
      return { ...state, sort: action.payload };
    default:
      return { ...state };
  }
}
