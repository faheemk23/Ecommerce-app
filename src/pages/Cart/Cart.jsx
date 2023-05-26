import { PriceDetailCard } from "../../components/cards/PriceDetailCard/PriceDetailCard";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { CartItemCard } from "../../components/cards/CartItemCard/CartItemCard";
import "./Cart.css";
import { AddressCard } from "../../components/cards/AddressCard/AddressCard";
import { AddressInput } from "../../components/AddressesInput/AddressInput";
import emptyResult from "../../assets/empty-result.jpg";

export function Cart() {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const { dataState } = useContext(DataContext);
  const { cart, addresses } = dataState;
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  if (cart.length === 0) {
    return (
      <div className="empty-result-container">
        <img
          className="image-center"
          src={emptyResult}
          height="292px"
          width="292px"
        />
        <h1>Cart is empty. Please add some items.</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {!showAddresses && !showOrderSummary && (
        <div className="cart-products">
          {cart.map((product) => (
            <CartItemCard key={product._id} product={product} inCart />
          ))}
        </div>
      )}
      {showAddresses && !showOrderSummary && (
        <div className="cart-addresses">
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
