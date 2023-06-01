import { useContext, useEffect, useState } from "react";

import "./Checkout.css";
import { AddressInput } from "../../components/AddressesInput/AddressInput";
import { AddressCard } from "../../components/cards/AddressCard/AddressCard";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [showAddresses, setShowAddresses] = useState(true);
  const { dataState } = useContext(DataContext);

  const navigate = useNavigate();

  const { cart, addresses } = dataState;
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  });

  return (
    <div className="checkout-page">
      {showAddresses && !showOrderSummary && (
        <div className="checkout-addresses">
          <h2>Please select an address.</h2>
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
            <AddressCard
              key={address._id}
              address={address}
              checkout
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          ))}
        </div>
      )}
      <div className="price-detail">
        <PriceDetailCard
          cart={cart}
          setShowOrderSummary={setShowOrderSummary}
          showAddresses={showAddresses}
          setShowAddresses={setShowAddresses}
          showOrderSummary={showOrderSummary}
          selectedAddress={selectedAddress}
        />
      </div>
    </div>
  );
}
