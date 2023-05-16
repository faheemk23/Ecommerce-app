import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";

const initialDataState = {
  cart: [],
};

export const DataContext = createContext({ cart: [] });

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

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ dataState, dataDispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
