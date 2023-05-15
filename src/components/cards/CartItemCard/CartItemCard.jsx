import { useContext } from "react";

import {
  handleBtnRemoveFromCart,
  handleQuantityChangeInCart,
} from "../../../Utilites/cartUtilities";

import { CartContext } from "../../../contexts/CartContext";
import "./CartItemCard.css";

export function CartItemCard({ product }) {
  const { cartState, cartDispatch } = useContext(CartContext);

  const { _id, image, title, original_price, price, qty } = product;

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

      <div>
        Quantity:{" "}
        <button
          onClick={() =>
            handleQuantityChangeInCart(qty, "decrement", _id, cartDispatch)
          }
        >
          -
        </button>{" "}
        {qty}{" "}
        <button
          onClick={() =>
            handleQuantityChangeInCart(qty, "increment", _id, cartDispatch)
          }
        >
          +
        </button>
      </div>

      <button onClick={() => handleBtnRemoveFromCart(_id, cartDispatch)}>
        Remove from cart
      </button>

      {true ? (
        <button>Save to Wishlist</button>
      ) : (
        <button>Remove from Wishlist</button>
      )}
    </div>
  );
}
