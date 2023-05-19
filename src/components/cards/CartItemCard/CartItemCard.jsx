import { useContext } from "react";

import {
  handleBtnRemoveFromCart,
  handleQuantityChangeInCart,
} from "../../../Utilites/cartUtilities";

import { DataContext } from "../../../contexts/DataContext";
import "./CartItemCard.css";
import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../Utilites/wishlistUtilities";

export function CartItemCard({ product }) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const { wishlist } = dataState;

  const { _id, image, title, original_price, price, qty } = product;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <div className="image">
        {" "}
        <img src={image} alt="product" height="200px" width="200px" />
      </div>

      <div className="info">
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
              handleQuantityChangeInCart(qty, "decrement", _id, dataDispatch)
            }
          >
            -
          </button>{" "}
          {qty}{" "}
          <button
            onClick={() =>
              handleQuantityChangeInCart(qty, "increment", _id, dataDispatch)
            }
          >
            +
          </button>
        </div>

        <button onClick={() => handleBtnRemoveFromCart(_id, dataDispatch)}>
          Remove from cart
        </button>

        {productInWishlist(wishlist, product) ? (
          <button
            onClick={() => handleBtnRemoveFromWishlist(_id, dataDispatch)}
          >
            Remove from Wishlist
          </button>
        ) : (
          <button onClick={() => handleBtnAddToWishlist(product, dataDispatch)}>
            Save to Wishlist
          </button>
        )}
      </div>
    </div>
  );
}
