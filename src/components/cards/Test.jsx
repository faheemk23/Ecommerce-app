import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../Utilites/cartUtilities";

import "./Test.css";
import "../../App.css";
import { DataContext } from "../../contexts/DataContext";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../Utilites/wishlistUtilities";

export function Test({
  product = {
    _id: "eb98a70f-6c81-4922-b0df-16897dde0beb",
    image:
      "https://ik.imagekit.io/faheem/Ecommerce-Grocery/Products_Images/iceCreams/butterScotch?updatedAt=1684441132025",
    rating: "4.5",
    category: "IceCream",
    title: "Butterscotch Bliss Ice Cream Tub",
    trending: true,
    original_price: "225",
    price: "215",
    delivery_time: "3",
    reviews: "1.5k",
    in_stock: true,
    is_popular: false,
    is_best_selling: false,
    is_organic: false,
    unit: "1 L",
  },
  inCart,
  inWishlist,
}) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const { _id, image, title, original_price, price, unit } = product;

  const { cart, wishlist } = dataState;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div className="test-card ">
      <img src={image} alt="product" height="130px" width="130px" />
      <div className="test-title">{title}</div>
      <div className="test-quan">{unit}</div>
      <div>
        <strong className="test-price"> ₹{price}</strong>{" "}
        <span className="original-price">₹{original_price}</span>
      </div>
      <div className="test-discount">
        {discount}% <br />
        OFF
      </div>
      {productInCart(cart, product) ? (
        <button
          className="btn btn-secondary test-btn-cart"
          onClick={() => handleBtnGoToCart(navigate)}
        >
          GO <i class="fa-solid fa-cart-shopping "></i>
        </button>
      ) : (
        <button
          className="btn btn-primary test-btn-cart"
          onClick={() => handleBtnAddToCart(product, dataDispatch)}
        >
          ADD <i class="fa-solid fa-cart-plus"></i>
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
          onClick={() => handleBtnAddToWishlist(product, dataDispatch)}
        ></i>
      )}
    </div>
  );
}
