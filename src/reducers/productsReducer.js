export function productsReducer(state, action) {
  switch (action.type) {
    case "set-products":
      return { ...state, products: action.payload };
    case "set-categories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
