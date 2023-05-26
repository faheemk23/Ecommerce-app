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

  const { _id, image, title, original_price, price, unit, rating, qty } =
    product;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div className="cart-item-card ">
      <div className="cart-item-card-info">
        <div className="position-relative">
          <img src={image} alt="product" className="cart-item-product-image" />
          {/* <div className="product-card-rating">{rating}★</div> */}
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
                handleBtnAddToWishlist(
                  product,
                  dataDispatch,
                  loggedIn,
                  navigate
                )
              }
            ></i>
          )}
          <div>
            Quantity:{" "}
            <button
              className="btn btn-primary"
              onClick={() =>
                handleQuantityChangeInCart(qty, "decrement", _id, dataDispatch)
              }
            >
              -
            </button>{" "}
            <span className="cart-item-quantity">{qty}</span>
            <button
              className="btn btn-primary"
              onClick={() =>
                handleQuantityChangeInCart(qty, "increment", _id, dataDispatch)
              }
            >
              +
            </button>
          </div>
          <button
            className="btn btn-secondary "
            onClick={() => handleBtnRemoveFromCart(_id, dataDispatch)}
          >
            Remove from cart
          </button>
          {/* {productInWishlist(wishlist, product) ? (
            <button
              className="btn btn-secondary"
              onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() =>
                handleBtnAddToWishlist(
                  product,
                  dataDispatch,
                  loggedIn,
                  navigate
                )
              }
            >
              Save to Wishlist
            </button>
          )} */}
        </div>
        {/* <div className="product-discount">
          {discount}% <br />
          OFF
        </div> */}
      </div>
    </div>

    // <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
    //   <div className="image">
    //     {" "}
    //     <img src={image} alt="product" height="200px" width="200px" />
    //   </div>

    //   <div className="info">
    //     <div>{title}</div>
    //     <div>
    //       <strong>₹{price}</strong>{" "}
    //       <span className="original-price">₹{original_price}</span>
    //     </div>
    //     <div>{discount}% off</div>

    //     {productInWishlist(wishlist, product) ? (
    //       <button
    //         onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
    //       >
    //         Remove from Wishlist
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() =>
    //           handleBtnAddToWishlist(product, dataDispatch, loggedIn, navigate)
    //         }
    //       >
    //         Save to Wishlist
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
}
