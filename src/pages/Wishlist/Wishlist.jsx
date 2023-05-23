import { useContext } from "react";
import { WishlistItemCard } from "../../components/cards/WishlistItemCard/WishlistItemCard";
import { DataContext } from "../../contexts/DataContext";

import "./Wishlist.css";

export function Wishlist() {
  const { dataState } = useContext(DataContext);
  const { wishlist } = dataState;
  if (wishlist.length === 0) {
    return (
      <>
        <h1>wishlist is empty. Please add some items.</h1>
      </>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-items">
        {wishlist.map((product) => (
          <WishlistItemCard key={product._id} product={product} inCart />
        ))}
      </div>
    </div>
  );
}
