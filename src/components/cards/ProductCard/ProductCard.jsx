import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../../utilites/cartUtilities";

import "./ProductCard.css";
import "../../../App.css";
import { DataContext } from "../../../contexts/DataContext";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

export function ProductCard({ product = {} }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { _id, image, title, original_price, price, unit, rating, reviews } =
    product;

  const { cart, wishlist } = dataState;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div className="product-card ">
      <div
        className="product-card-info"
        onClick={() => navigate(`/productDetail/${_id}`)}
      >
        <img src={image} alt="product" height="130px" width="130px" />
        <div className="product-title">{title}</div>
        <div>
          {rating}★ ({reviews}k reviews)
        </div>
        <div className="product-quan">{unit}</div>
        <div>
          <strong className="orange"> ₹{price}</strong>{" "}
          <span className="original-price">₹{original_price}</span>
        </div>
        <div className="product-discount">
          {discount}% <br />
          OFF
        </div>
      </div>

      {productInCart(cart, product) ? (
        <button
          className="btn btn-secondary product-btn-cart go"
          onClick={() => handleBtnGoToCart(navigate)}
        >
          Go to Cart <i className="fa-solid fa-cart-shopping "></i>
        </button>
      ) : (
        <button
          className="btn btn-primary product-btn-cart add "
          onClick={() =>
            handleBtnAddToCart(product, dataDispatch, loggedIn, navigate)
          }
        >
          Add to Cart <i className="fa-solid fa-cart-plus "></i>
        </button>
      )}
      {productInWishlist(wishlist, product) ? (
        <i
          className="fa-solid fa-heart red wishlist-icon"
          onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart wishlist-icon"
          onClick={() =>
            handleBtnAddToWishlist(product, dataDispatch, loggedIn, navigate)
          }
        ></i>
      )}
    </div>
  );
}
