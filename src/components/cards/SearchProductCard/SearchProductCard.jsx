import { useNavigate } from "react-router-dom";

import "./SearchProductCard.css";

export function SearchProductCard({ product, setSearchInput }) {
  const navigate = useNavigate();

  const { _id, image, title, price, unit } = product;

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
