import { useContext } from "react";
import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  handleBtnRemoveFromCart,
  productInCart,
} from "../../../Utilites/cartUtilities";
import "./ProductCard.css";
import { CartContext } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product, inCart }) {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { _id, image, title, original_price, price, quantity } = product;
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
      {inCart && (
        <div>
          Quantity: <button>-</button> {quantity} <button>+</button>
        </div>
      )}
      {inCart ? (
        <button onClick={() => handleBtnRemoveFromCart(_id, setCart)}>
          Remove from cart
        </button>
      ) : (
        <>
          {productInCart(cart, product) ? (
            <button onClick={() => handleBtnGoToCart(navigate)}>
              Go to Cart
            </button>
          ) : (
            <button onClick={() => handleBtnAddToCart(product, setCart)}>
              Add to Cart
            </button>
          )}
        </>
      )}

      {true ? (
        <button>Save to Wishlist</button>
      ) : (
        <button>Remove from Wishlist</button>
      )}
    </div>
  );
}
