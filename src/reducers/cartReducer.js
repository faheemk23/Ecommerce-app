export function cartReducer(state, action) {
  switch (action.type) {
    case "set-cart":
      return { ...state, cart: action.payload };
    case "increase-quantity":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product._id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "decrease-quantity":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product._id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
}
