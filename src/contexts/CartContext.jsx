import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

const intialCartState = {
  cart: [],
};

export const CartContext = createContext({ cart: [] });

export default function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, intialCartState);
  const encodedToken = localStorage.getItem("userToken");

  const getCartItems = async () => {
    try {
      const res = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken,
        },
      });
      cartDispatch({ type: "set-cart", payload: res.data.cart });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
