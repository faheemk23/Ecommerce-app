import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { Navigation } from "../../components/nav/Navigation";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import axios from "axios";
import { useState } from "react";

export function Cart() {
  const [cart, setCart] = useState([]);
  const encodedToken = localStorage.getItem("token");
  const getCartItems = async () => {
    try {
      const res = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setCart(res.data.cart);
    } catch (e) {
      console.log(e);
    }
  };
  getCartItems();
  return (
    <>
      <Navigation />
      Cart
      <div className="cart-body">
        <div className="cart-items">
          {cart.map((item) => (
            <ProductCard key={item.id} />
          ))}
        </div>
        <PriceDetailCard />
      </div>
    </>
  );
}
