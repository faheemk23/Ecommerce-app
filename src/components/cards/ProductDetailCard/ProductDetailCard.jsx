import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../../utilites/cartUtilities";
import organic from "../../../assets/organic.jpg";

import "./ProductDetailCard.css";
import "../../../App.css";
import { DataContext } from "../../../contexts/DataContext";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

export function ProductDetailCard({ product = {}, inWishlist }) {
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
    description,
    benefits,
    storageTips,
    is_organic,
  } = product;

  const { cart, wishlist } = dataState;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div className="product-detail-card position-relative">
      {/* <div className="product-detail-discount">
        {discount}% <br />
        OFF
      </div> */}
      {/* {is_organic && (
        <img
          className="product-detail-organic-stamp"
          src={organic}
          alt="organic"
          height="100px"
          width="100px"
        />
      )} */}
      <div className=" align-center position-relative">
        <img src={image} alt="product" className="product-detail-image" />
        <div className="product-detail-discount">
          {discount}% <br />
          OFF
        </div>
        {is_organic && (
          <img
            className="product-detail-organic-stamp"
            src={organic}
            alt="organic"
            height="100px"
            width="100px"
          />
        )}
      </div>

      <hr className="product-detail-hr" />
      <div className="product-detail-info position-relative">
        <div className="product-detail-title">{title}</div>
        <div className="product-detail-quan">{unit}</div>
        <div className="product-detail-prices-container">
          <strong className="product-detail-price orange"> ₹{price} </strong>
          <span className="original-price"> ₹{original_price}</span>
        </div>
        <div className="product-detail-card-rating">{rating}★</div>
        <hr className="product-detail-info-hr" />

        <div className="x-large bold product-detail-header">
          Product details
        </div>
        <div className="bold">Description</div>
        <div className="product-detail-content">{description}</div>
        <div className="bold">Nutrient Value & Benefits</div>
        <div className="product-detail-content">{benefits}</div>
        <div className="bold">Storage Tips</div>
        <div className="product-detail-content">{storageTips}</div>
        {productInCart(cart, product) ? (
          <button
            className="btn btn-secondary product-detail-btn-cart go"
            onClick={() => handleBtnGoToCart(navigate)}
          >
            Go to cart <i className="fa-solid fa-cart-shopping "></i>
          </button>
        ) : (
          <button
            className="btn btn-primary product-detail-btn-cart add "
            onClick={() =>
              handleBtnAddToCart(product, dataDispatch, loggedIn, navigate)
            }
          >
            Add to cart <i className="fa-solid fa-cart-plus "></i>
          </button>
        )}
        {productInWishlist(wishlist, product) ? (
          <button
            className="btn btn-primary "
            onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
          >
            Remove from wishlist
          </button>
        ) : (
          <button
            className="btn btn-secondary "
            onClick={() =>
              handleBtnAddToWishlist(product, dataDispatch, loggedIn, navigate)
            }
          >
            Add to wishlist
          </button>
        )}
      </div>
      {/* <div className="product-card-info">
        <div className="product-card-rating">{rating}★</div>

        <div className="product-detail-title">{title}</div>

        <div className="product-detail-quan">{unit}</div>
        <div className="product-detail-prices-container">
          <strong className="product-detail-price orange"> ₹{price}</strong>
          <span className="original-price">₹{original_price}</span>
        </div>
        <div className="product-discount">
          {discount}% <br />
          OFF
        </div>
        {inWishlist ? (
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
        )}

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
        )} */}
      {/* </div> */}
    </div>
  );
}
