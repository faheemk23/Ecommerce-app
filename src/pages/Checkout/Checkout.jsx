import { useContext, useState } from "react";
import { Addresses } from "../../components/Addresses/Addresses";
import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { DataContext } from "../../contexts/DataContext";

import "./Checkout.css";
import { OrderSummary } from "../Pages";

export function Checkout() {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const { dataState } = useContext(DataContext);
  const { cart, addresses } = dataState;
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  if (cart.length === 0) {
    return (
      <>
        <h1>Cart is empty.</h1>
      </>
    );
  }
  return (
    <div>
      Checkout
      {showOrderSummary && <OrderSummary selectedAddress={selectedAddress} />}
      {!showOrderSummary && (
        <div className="checkout-body">
          <div>
            <Addresses
              checkout
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          </div>
          <div>
            <PriceDetailCard
              cart={cart}
              setShowOrderSummary={setShowOrderSummary}
              checkout
            />
          </div>
        </div>
      )}
    </div>
  );
}
