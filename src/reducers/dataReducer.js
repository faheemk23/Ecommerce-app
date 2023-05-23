import { addressAlreadyPresent } from "../utilites/addressUtilities";
import { giveToast } from "../utilites/miscUtilities";

export function dataReducer(state, action) {
  switch (action.type) {
    case "set-cart":
      return { ...state, cart: action.payload };
    case "set-wishlist":
      return { ...state, wishlist: action.payload };
    case "clear-cart":
      return { ...state, cart: [] };
    case "clear-all":
      return { ...state, cart: [], wishlist: [] };
    case "add-address":
      if (addressAlreadyPresent(state.addresses, action.payload)) {
        giveToast("Address is already present", "warning");
        return state;
      } else {
        return { ...state, addresses: [...state.addresses, action.payload] };
      }

    case "update-address":
      if (
        addressAlreadyPresent(state.addresses, action.payload.updatedAddress)
      ) {
        giveToast("Address is already present", "warning");
        return state;
      } else {
        return {
          ...state,
          addresses: state.addresses.map((address) =>
            address._id === action.payload.addressId
              ? action.payload.updatedAddress
              : address
          ),
        };
      }

    case "delete-address":
      return {
        ...state,
        addresses: state.addresses.filter(({ _id }) => _id !== action.payload),
      };

    default:
      return state;
  }
}
