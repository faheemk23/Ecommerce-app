import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";

const initialDataState = {
  cart: [],
  wishlist: [],
};

export const DataContext = createContext({ cart: [], wishlist: [] });

export default function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const encodedToken = localStorage.getItem("userToken");

  const getCartItems = async () => {
    try {
      const res = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dataDispatch({ type: "set-cart", payload: res.data.cart });
    } catch (e) {
      console.log(e);
    }
  };

  const getWishlistItems = async () => {
    try {
      const res = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCartItems();
    getWishlistItems();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ dataState, dataDispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
