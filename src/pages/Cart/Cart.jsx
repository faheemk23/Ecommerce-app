import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { Navigation } from "../../components/nav/Navigation";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);

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
        <PriceDetailCard />
      </div>
    </>
  );
}
