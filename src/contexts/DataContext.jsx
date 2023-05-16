import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { getCartItems } from "../Utilites/cartUtilities";
import { getWishlistItems } from "../Utilites/wishlistUtilities";

const initialDataState = {
  cart: [],
  wishlist: [],
};

export const DataContext = createContext({ cart: [], wishlist: [] });

export default function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const encodedToken = localStorage.getItem("userToken");

  useEffect(() => {
    getCartItems(encodedToken, dataDispatch);
    getWishlistItems(encodedToken, dataDispatch);
  }, []);

  return (
    <>
      <DataContext.Provider value={{ dataState, dataDispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
