export function dataReducer(state, action) {
  switch (action.type) {
    case "set-cart":
      return { ...state, cart: action.payload };
    case "set-wishlist":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
}
