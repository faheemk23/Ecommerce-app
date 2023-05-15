import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { Navigation } from "../../components/nav/Navigation";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;
  if (cart.length === 0) {
    return (
      <>
        <Navigation />
        <h1>Cart is empty. Please add some items.</h1>
      </>
    );
  }

  return (
    <>
      <Navigation />
      Cart
      <div className="cart-body">
        <div className="cart-items">
          {cart.map((product) => (
            <ProductCard key={product.id} product={product} inCart />
          ))}
        </div>
        <PriceDetailCard cart={cart} />
      </div>
    </>
  );
}
