import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import {
  Home,
  ProductListing,
  ProductDetail,
  Cart,
  Wishlist,
  SignUp,
  Login,
  Checkout,
  Error,
  MockmanTest,
  Account,
} from "./pages/Pages";
import { RequiresAuth } from "./components/RequiresAuth";
import { Navigation } from "./components/nav/Navigation";

// import { MockmanTest } from "./pages/MockmanTest";

function App() {
  return (
    <div>
      <Navigation showBtnLogin />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route
          path="/account"
          element={
            <RequiresAuth>
              <Account />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<MockmanTest />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
