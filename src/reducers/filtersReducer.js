export default function filtersReducer(state, action) {
  switch (action.type) {
    case "price":
      return { ...state, price: Number(action.payload) };
    default:
      return { ...state };
  }
}
