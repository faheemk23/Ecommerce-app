import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext";
import "./Wishlist.css";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import emptyResult from "../../assets/empty-result.jpg";

export function Wishlist() {
  const { dataState } = useContext(DataContext);
  const { wishlist } = dataState;

  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="empty-result-container">
        <img
          className="image-center"
          src={emptyResult}
          height="292px"
          width="292px"
          alt="cute-dog"
        />
        <h1>wishlist is empty. Please add some items.</h1>
        <div>
          <button
            onClick={() => navigate("/productlisting")}
            className="btn btn-secondary btn-secondary-hover"
          >
            Show me some products!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-items">
        {wishlist.map((product) => (
          <ProductCard product={product} inWishlist />
        ))}
      </div>
    </div>
  );
}
