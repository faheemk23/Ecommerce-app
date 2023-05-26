import { useContext } from "react";

import {
  handleBtnRemoveFromCart,
  handleQuantityChangeInCart,
} from "../../../utilites/cartUtilities";

import { DataContext } from "../../../contexts/DataContext";
import "./SearchProductCard.css";

import {
  handleBtnAddToWishlist,
  handleBtnRemoveFromWishlist,
  productInWishlist,
} from "../../../utilites/wishlistUtilities";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function SearchProductCard({ product, setSearchInput }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { loggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { wishlist } = dataState;

  const { _id, image, title, original_price, price, unit, rating, qty } =
    product;

  const discount = parseInt(
    ((Number(original_price, 0) - Number(price, 0)) /
      Number(original_price, 0)) *
      100
  );

  return (
    <div
      onClick={() => {
        navigate(`/productDetail/${_id}`);
        setSearchInput("");
      }}
      className="search-product-card "
    >
      <div className="search-product-card-info">
        <img src={image} alt="product" className="search-product-image" />
        <div className="search-product-info">
          <div className="product-title">{title}</div>
          <div className="search-product-quan">Qty: {unit}</div>
          <div className="product-prices-container">
            <strong className="search-product-price orange"> ₹{price}</strong>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
