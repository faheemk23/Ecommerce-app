import { v4 as uuid } from "uuid";
import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { getCartItems } from "../utilites/cartUtilities";
import { getWishlistItems } from "../utilites/wishlistUtilities";

export const initialAddresses = [
  {
    _id: "1",
    name: "Jordan Walke",
    addressLineOne: "23, Silicon City",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "123456",
    number: "0123456789",
  },
  {
    _id: "2",
    name: "Tim Berners Lee",
    addressLineOne: "7, Lok Kalyan Marg ",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "999999",
    number: "8888888888",
  },
];

const initialDataState = {
  cart: [],
  wishlist: [],
  addresses: [...initialAddresses],
};

export const DataContext = createContext({
  cart: [],
  wishlist: [],
  addresses: [],
});

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  // console.log(userInfo);

  const encodedToken = localStorage.getItem("userToken");

  // useEffect(() => {
  //   getCartItems(encodedToken, dataDispatch);
  //   getWishlistItems(encodedToken, dataDispatch);
  // }, []);

  return (
    <>
      <DataContext.Provider value={{ dataState, dataDispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
