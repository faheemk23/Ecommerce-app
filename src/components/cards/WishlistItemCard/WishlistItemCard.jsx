import "./WishlistItemCard.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../../utilites/cartUtilities";

import { DataContext } from "../../../contexts/DataContext";
import { handleBtnRemoveFromWishlist } from "../../../utilites/wishlistUtilities";

export function WishlistItemCard({ product }) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const { _id, image, title, price } = product;

  const { cart } = dataState;

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <img src={image} alt="product" height="200px" width="200px" />
      <div>{title}</div>
      <div>
        <strong>₹{price}</strong>{" "}
      </div>

      {productInCart(cart, product) ? (
        <button onClick={() => handleBtnGoToCart(navigate)}>Go to Cart</button>
      ) : (
        <button onClick={() => handleBtnAddToCart(product, dataDispatch)}>
          Add to Cart
        </button>
      )}
      <button onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}>
        Remove from Wishlist
      </button>
    </div>
  );
}
