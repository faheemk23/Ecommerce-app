import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: [] });

export default function CartProvider({ children }) {
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

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
