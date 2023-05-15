import { handleBtnAddToCart } from "../../../Utilites/cartUtilities";
import "./ProductCard.css";

export function ProductCard({ product, cart }) {
  const { image, title, original_price, price } = product;
  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );
  console.log(product);
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <img src={image} alt="product" height="200px" width="200px" />
      <div>{title}</div>
      <div>
        <strong>₹{price}</strong>{" "}
        <span className="original-price">₹{original_price}</span>
      </div>
      <div>{discount}% off</div>
      {cart ? (
        <button>Remove from cart</button>
      ) : (
        <>
          {true ? (
            <button onClick={() => handleBtnAddToCart(product)}>
              Add to Cart
            </button>
          ) : (
            <button>Go to Cart</button>
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
