export function dataReducer(state, action) {
  switch (action.type) {
    case "set-cart":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}
