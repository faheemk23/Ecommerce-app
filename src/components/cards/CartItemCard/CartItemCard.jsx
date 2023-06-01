import { useContext } from "react";

import {
  handleBtnRemoveFromCart,
  handleQuantityChangeInCart,
} from "../../../utilites/cartUtilities";

import { DataContext } from "../../../contexts/DataContext";
import "./CartItemCard.css";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function CartItemCard({ product }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { wishlist } = dataState;

  const { _id, image, title, original_price, price, unit, qty } = product;

  return (
    <div className="cart-item-card ">
      <div className="position-relative">
        <img src={image} alt="product" className="cart-item-product-image" />
      </div>
      <div className="cart-item-info">
        <div className="product-title">{title}</div>

        <div className="product-quan">{unit}</div>
        <div className="product-prices-container">
          <strong className="product-price orange"> ₹{price}</strong>{" "}
          <span className="original-price">₹{original_price}</span>
        </div>
        {productInWishlist(wishlist, product) ? (
          <i
            className="fa-solid fa-heart cart-item-wishlist-icon"
            onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
          ></i>
        ) : (
          <i
            className="fa-regular fa-heart cart-item-wishlist-icon"
            onClick={() =>
              handleBtnAddToWishlist(product, dataDispatch, loggedIn, navigate)
            }
          ></i>
        )}
        <div>
          Quantity:{" "}
          <button
            className="btn btn-primary btn-quantity"
            onClick={() =>
              handleQuantityChangeInCart(qty, "decrement", _id, dataDispatch)
            }
          >
            -
          </button>{" "}
          <span className="cart-item-quantity">{qty}</span>
          <button
            className="btn btn-primary btn-quantity"
            onClick={() =>
              handleQuantityChangeInCart(qty, "increment", _id, dataDispatch)
            }
          >
            +
          </button>
        </div>
        <button
          className="btn btn-secondary btn-remove-from-cart"
          onClick={() => handleBtnRemoveFromCart(_id, dataDispatch)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
