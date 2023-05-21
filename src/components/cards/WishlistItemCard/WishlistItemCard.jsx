import "./WishlistItemCard.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleQuantityChangeInCart,
  productInCart,
} from "../../../utilites/cartUtilities";

import { DataContext } from "../../../contexts/DataContext";
import { handleBtnRemoveFromWishlist } from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

export function WishlistItemCard({ product }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { _id, image, title, price, quantity } = product;

  const { cart } = dataState;

  const handleBtnAddToCartWishlist = () => {
    productInCart(cart, product)
      ? handleQuantityChangeInCart(quantity, "increment", _id, dataDispatch)
      : handleBtnAddToCart(product, dataDispatch, loggedIn, navigate);
  };

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <img src={image} alt="product" height="200px" width="200px" />
      <div>{title}</div>
      <div>
        <strong>₹{price}</strong>{" "}
      </div>

      <button
        onClick={() =>
          handleBtnAddToCartWishlist(product, dataDispatch, loggedIn, navigate)
        }
      >
        Add to Cart
      </button>

      <button onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}>
        Remove from Wishlist
      </button>
    </div>
  );
}
