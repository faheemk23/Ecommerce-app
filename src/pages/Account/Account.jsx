import { useContext, useState } from "react";
import { Navigation } from "../../components/nav/Navigation";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { useNavigate } from "react-router-dom";

import "./Account.css";
import { ProfileDetailCard } from "../../components/cards/ProfileDetailCard/ProfileDetailCard";
import { Addresses } from "../../components/Addresses/Addresses";

export function Account() {
  const [currentCard, setCurrentCard] = useState("profile");
  const { setLoggedIn } = useContext(AuthContext);
  const { dataDispatch, dataState } = useContext(DataContext);
  const { filtersDispatch } = useContext(ProductsListingContext);

  const navigate = useNavigate();

  const handleBtnLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    dataDispatch({ type: "clear-all" });
    filtersDispatch({ type: "clear-all" });
    navigate("/");
  };
  return (
    <>
      <h2 className="account-heading">Account</h2>
      <div className="account-container">
        <div className="account-headers">
          <button
            className="account-header-profile"
            onClick={() => setCurrentCard("profile")}
          >
            Profile
          </button>
          <button
            className="account-header-address"
            onClick={() => setCurrentCard("addresses")}
          >
            Your Address
          </button>
        </div>
        <div className="account-info">
          {currentCard === "profile" && <ProfileDetailCard />}
          {currentCard === "addresses" && <Addresses />}
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleBtnLogout}>
        Logout
      </button>
    </>
  );
}
