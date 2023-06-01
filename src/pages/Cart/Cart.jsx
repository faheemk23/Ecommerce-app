import { useContext } from "react";

import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { DataContext } from "../../contexts/DataContext";
import { CartItemCard } from "../../components/cards/CartItemCard/CartItemCard";
import "./Cart.css";
import emptyResult from "../../assets/empty-result.jpg";

export function Cart() {
  const { dataState } = useContext(DataContext);
  const { cart } = dataState;

  if (cart.length === 0) {
    return (
      <div className="empty-result-container">
        <img
          className="image-center"
          src={emptyResult}
          height="292px"
          width="292px"
          alt="cute-dog"
        />
        <h1>Cart is empty. Please add some items.</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-products">
        {cart.map((product) => (
          <CartItemCard key={product._id} product={product} inCart />
        ))}
      </div>

      <div className="price-detail">
        <PriceDetailCard cart={cart} inCart />
      </div>
    </div>
  );
}
