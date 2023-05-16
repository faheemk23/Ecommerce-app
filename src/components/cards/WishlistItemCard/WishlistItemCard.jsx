import "./WishlistItemCard.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  handleBtnAddToCart,
  handleBtnGoToCart,
  productInCart,
} from "../../../Utilites/cartUtilities";

import { CartContext } from "../../../contexts/CartContext";

export function WishlistItemCard({
  product = {
    _id: "1a11dd3c-a8a8-4d66-acff-9c5015673c2b",
    title: "KALINI",
    description: "Women Teal Yoke Design Kurta with Palazzos & With Dupatta",
    original_price: "3699",
    price: "887",
    rating: "3.8",
    size: "L",
    trending: true,
    delivery_time: "3",
    reviews: "229",
    in_stock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15385296/2021/11/16/c736d7bf-9b5d-48e9-be7d-36aecce835151637061559891-W-Women-Beige--Black-Ethnic-Motifs-Keyhole-Neck-Pastel-Kurta-1.jpg",
    category: "Women",
  },
  inCart,
}) {
  const { cartState, cartDispatch } = useContext(CartContext);

  const navigate = useNavigate();

  const { image, title, price } = product;

  const { cart } = cartState;

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "200px" }}>
      <img src={image} alt="product" height="200px" width="200px" />
      <div>{title}</div>
      <div>
        <strong>₹{price}</strong>{" "}
      </div>

      {productInCart(cart, product) ? (
        <button onClick={() => handleBtnGoToCart(navigate)}>Go to Cart</button>
      ) : (
        <button onClick={() => handleBtnAddToCart(product, cartDispatch)}>
          Add to Cart
        </button>
      )}
      <button>Remove from Wishlist</button>
    </div>
  );
}
