import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  handleQuantityChangeInCart,
  productInCart,
} from "../../../utilites/cartUtilities";
import organic from "../../../assets/organic.jpg";
import "./ProductCard.css";
import "../../../App.css";
import { DataContext } from "../../../contexts/DataContext";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

export function ProductCard({ product = {}, inWishlist, minified }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    _id,
    image,
    title,
    original_price,
    price,
    unit,
    rating,
    quantity,
    is_organic,
  } = product;

  const { cart, wishlist } = dataState;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  const handleBtnAddToCartWishlist = () => {
    productInCart(cart, product)
      ? handleQuantityChangeInCart(
          quantity,
          "increment",
          _id,
          dataDispatch,
          true // fromWishlist
        )
      : handleBtnAddToCart(product, dataDispatch, loggedIn, navigate);
  };

  return (
    <div className="product-card ">
      <div
        className="product-card-info"
        onClick={() => navigate(`/productDetail/${_id}`)}
      >
        <div className="position-relative">
          <img src={image} alt="product" className="product-image" />
          {!inWishlist && <div className="product-card-rating">{rating}★</div>}
        </div>

        <div className="product-title">{title}</div>

        <div className="product-quan">{unit}</div>
        {!minified && (
          <div className="product-prices-container">
            <strong className="product-price orange"> ₹{price}</strong>{" "}
            {!inWishlist && (
              <span className="original-price">₹{original_price}</span>
            )}
          </div>
        )}
        {!inWishlist && (
          <div className="product-discount">
            {discount}% <br />
            OFF
          </div>
        )}
        {is_organic && (
          <img
            className="organic-stamp"
            src={organic}
            alt="organic"
            height="55px"
            width="55px"
          />
        )}
      </div>
      {!minified &&
        (inWishlist ? (
          <button
            className="btn btn-primary product-btn-cart add "
            onClick={() =>
              handleBtnAddToCartWishlist(
                product,
                dataDispatch,
                loggedIn,
                navigate
              )
            }
          >
            Add <i className="fa-solid fa-cart-plus "></i>
          </button>
        ) : productInCart(cart, product) ? (
          <button
            className="btn btn-secondary product-btn-cart go"
            onClick={() => handleBtnGoToCart(navigate)}
          >
            Go <i className="fa-solid fa-cart-shopping "></i>
          </button>
        ) : (
          <button
            className="btn btn-primary product-btn-cart add "
            onClick={() =>
              handleBtnAddToCart(product, dataDispatch, loggedIn, navigate)
            }
          >
            Add <i className="fa-solid fa-cart-plus "></i>
          </button>
        ))}
      {productInWishlist(wishlist, product) ? (
        <i
          className="fa-solid fa-heart wishlist-icon"
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
