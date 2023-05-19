import { getCheckboxFilterArr } from "../Utilites/filtersUtilities";
import { initialFiltersState } from "../contexts/ProductsListingContext";

export default function filtersReducer(state, action) {
  switch (action.type) {
    case "price":
      return { ...state, price: Number(action.payload) };
    case "categories":
      return getCheckboxFilterArr(state, "categories", action);
    case "rating":
      return { ...state, rating: Number(action.payload) };
    case "sort":
      return { ...state, sort: action.payload };
    case "clear-all":
      return initialFiltersState;
    default:
      return { ...state };
  }
}
