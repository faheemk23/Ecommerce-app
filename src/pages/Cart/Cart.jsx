import { Navigation } from "../../components/nav/Navigation";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { CartItemCard } from "../../components/cards/CartItemCard/CartItemCard";
import "./Cart.css";

export function Cart() {
  const { dataState } = useContext(DataContext);
  const { cart } = dataState;
  if (cart.length === 0) {
    return (
      <>
        <Navigation />
        <h1>Cart is empty. Please add some items.</h1>
      </>
    );
  }

  return (
    <div className="cart-page">
      <Navigation />
      {/* Cart
      <h2>Free delivery for orders 5000 and above </h2> */}
      <div className="cart-items">
        {cart.map((product) => (
          <CartItemCard key={product._id} product={product} inCart />
        ))}
      </div>
      <div className="price-detail">
        <PriceDetailCard cart={cart} />
      </div>
    </div>
  );
}
