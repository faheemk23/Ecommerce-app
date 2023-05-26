import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProductsListingContext } from "../../contexts/ProductsListingContext";
import { useNavigate } from "react-router-dom";

import "./Account.css";
import { ProfileDetailCard } from "../../components/cards/ProfileDetailCard/ProfileDetailCard";
import { AddressCard } from "../../components/cards/AddressCard/AddressCard";
import { AddressInput } from "../../components/AddressesInput/AddressInput";

export function Account() {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [currentCard, setCurrentCard] = useState("profile");
  const { setLoggedIn } = useContext(AuthContext);
  const { dataDispatch, dataState } = useContext(DataContext);
  const { filtersDispatch } = useContext(ProductsListingContext);

  const navigate = useNavigate();

  const { addresses } = dataState;

  const handleBtnLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    dataDispatch({ type: "clear-all" });
    filtersDispatch({ type: "clear-all" });
    navigate("/");
  };
  return (
    <div className="account-outer-container">
      <h2 className="account-heading">Your Account</h2>
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
            Your Addresses
          </button>
        </div>
        <div className="account-info">
          {currentCard === "profile" && <ProfileDetailCard />}
          {currentCard === "addresses" && (
            <>
              {showAddressInput ? (
                <AddressInput setShowAddressInput={setShowAddressInput} />
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAddressInput(true)}
                >
                  Add new address
                </button>
              )}
              {addresses.map((address) => (
                <AddressCard address={address} />
              ))}
            </>
          )}
        </div>
      </div>
      <button
        className="btn btn-secondary btn-logout"
        onClick={handleBtnLogout}
      >
        Logout
      </button>
    </div>
  );
}
