import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../../Utilites/cartUtilities";

import "./ProductCard.css";
import { DataContext } from "../../../contexts/DataContext";

export function ProductCard({ product, inCart }) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const { image, title, original_price, price } = product;

  const { cart } = dataState;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <img src={image} alt="product" height="200px" width="200px" />
      <div>{title}</div>
      <div>
        <strong>₹{price}</strong>{" "}
        <span className="original-price">₹{original_price}</span>
      </div>
      <div>{discount}% off</div>
      {productInCart(cart, product) ? (
        <button onClick={() => handleBtnGoToCart(navigate)}>Go to Cart</button>
      ) : (
        <button onClick={() => handleBtnAddToCart(product, dataDispatch)}>
          Add to Cart
        </button>
      )}

      {true ? (
        <button>Save to Wishlist</button>
      ) : (
        <button>Remove from Wishlist</button>
      )}
    </div>
  );
}
